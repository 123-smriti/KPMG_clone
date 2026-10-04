import { useEffect, useMemo, useRef, useState } from 'react';
import Container from '../common/Container.jsx';
import Button from '../common/Button.jsx';
import { heroSlides, HERO_SLIDE_INTERVAL } from '../../data/heroSlides.js';
import { useSlideshow, usePrefersReducedMotion } from '../../hooks/useSlideshow.js';
import { getImage } from '../../utils/images.js';
import { getVideo } from '../../utils/videos.js';
import './Hero.css';

// Small dot navigation. Needed so people with reduced motion (no autoplay) and keyboard
// users can still reach every slide. Rendered only when there is more than one slide.
function HeroDots({ slides, activeIndex, onSelect }) {
  return (
    <div className="hero__dots" role="group" aria-label="Choose hero slide">
      {slides.map((slide, i) => (
        <button
          key={slide.id}
          type="button"
          className={`hero__dot ${i === activeIndex ? 'hero__dot--active' : ''}`.trim()}
          aria-label={`Show slide ${i + 1} of ${slides.length}: ${slide.title}`}
          aria-current={i === activeIndex ? 'true' : undefined}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}

// Muted looping background video. It only plays while its slide is on screen; a hidden slide
// keeps its last frame while it fades out, and a slide that comes back starts again from the
// beginning. If the browser blocks autoplay, the poster stays.
function HeroVideo({ src, poster, isActive }) {
  const videoRef = useRef(null);
  const wasActive = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      if (!wasActive.current) video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
    wasActive.current = isActive;
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}

// Full-width hero. The blue panel stays fixed; only the photo (right) and the text crossfade,
// and a still photo drifts very slowly (CSS animation in Hero.css). A slide can have a looping
// video instead of a photo (see data/heroSlides.js).
// Layout and fade are CSS (Hero.css); timing lives in useSlideshow; copy lives in data/heroSlides.js.
export default function Hero({ slides = heroSlides }) {
  const [isPaused, setIsPaused] = useState(false); // hover / keyboard focus
  const reducedMotion = usePrefersReducedMotion();

  // Time on screen per slide; a video slide stays long enough to play through once
  const durations = useMemo(() => slides.map((slide) => slide.duration ?? HERO_SLIDE_INTERVAL), [slides]);
  const { index, setIndex, isAutoPlaying } = useSlideshow(slides.length, {
    interval: durations,
    paused: isPaused,
  });

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);
  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) resume();
  };

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Featured stories"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={handleBlur}
    >
      <div className="hero__media">
        {slides.map((slide, i) => {
          const src = getImage(slide.image);
          const videoSrc = reducedMotion ? undefined : getVideo(slide.video);
          const isActive = i === index;
          return (
            <div
              key={slide.id}
              className={`hero__layer ${isActive ? 'hero__layer--active' : ''}`.trim()}
              aria-hidden={!isActive}
            >
              {/* The wrapper clips the slowly moving photo so it never spills over the blue panel */}
              <div className="hero-image-wrapper">
                {videoSrc ? (
                  <HeroVideo src={videoSrc} poster={src} isActive={isActive} />
                ) : src ? (
                  <img className="hero-image" src={src} alt={isActive ? slide.imageAlt : ''} />
                ) : (
                  <div className="hero__placeholder" aria-hidden="true" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <Container className="hero__inner">
        {/* All slides share one grid cell, so the hero height never jumps between slides */}
        <div className="hero__slides" aria-live={isAutoPlaying && !isPaused ? 'off' : 'polite'}>
          {slides.map((slide, i) => {
            const isActive = i === index;
            return (
              <div
                key={slide.id}
                className={`hero__content ${isActive ? 'hero__content--active' : ''}`.trim()}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
                aria-hidden={!isActive}
                inert={!isActive ? '' : undefined}
              >
                {i === 0 ? (
                  <h1 className="hero__title">{slide.title}</h1>
                ) : (
                  <p className="hero__title" role="heading" aria-level={2}>{slide.title}</p>
                )}
                <p className="hero__description">{slide.description}</p>
                <Button href={slide.href} variant="light">{slide.buttonText}</Button>
              </div>
            );
          })}
        </div>

        {slides.length > 1 && <HeroDots slides={slides} activeIndex={index} onSelect={setIndex} />}
      </Container>
    </section>
  );
}
