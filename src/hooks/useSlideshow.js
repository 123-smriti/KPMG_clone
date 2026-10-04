import { useState, useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

// True when the visitor asked their system to reduce motion.
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const query = window.matchMedia(QUERY);
    const onChange = (event) => setReduced(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

// Gentle auto-advancing slideshow state.
// - advances after `interval` ms (one timer per slide, so choosing a slide restarts the wait).
//   `interval` is a number, or an array with one duration per slide (e.g. to let a video play fully)
// - does nothing while `paused` (hover/focus) or when reduced motion is requested
// Returns the active index, a setter for manual selection and whether it is auto-playing.
export function useSlideshow(count, { interval = 5500, paused = false } = {}) {
  const [index, setIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  const isAutoPlaying = count > 1 && !reducedMotion;

  const wait = Array.isArray(interval) ? interval[index] ?? 5500 : interval;

  useEffect(() => {
    if (!isAutoPlaying || paused) return undefined;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % count), wait);
    return () => window.clearTimeout(timer);
  }, [count, index, wait, isAutoPlaying, paused]);

  return { index, setIndex, isAutoPlaying };
}
