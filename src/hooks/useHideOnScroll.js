import { useState, useEffect } from 'react';

// Tells whether a bar should be hidden because the visitor is scrolling down.
// - scrolling down (past `offset` px from the top) -> hidden
// - scrolling up by any amount                     -> visible again
// - near the top of the page                       -> always visible
// `tolerance` ignores tiny scroll jitters (trackpads, momentum scrolling).
export function useHideOnScroll({ offset = 80, tolerance = 6 } = {}) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = null;

    const update = () => {
      frame = null;
      const y = Math.max(window.scrollY, 0); // iOS rubber-banding can report negative values
      const delta = y - lastY;

      if (y <= offset) {
        setIsHidden(false);
      } else if (delta > tolerance) {
        setIsHidden(true);
      } else if (delta < -tolerance) {
        setIsHidden(false);
      } else {
        return; // too small to count: keep lastY so slow scrolling still adds up
      }
      lastY = y;
    };

    // One state update per animation frame, however many scroll events fire
    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [offset, tolerance]);

  return isHidden;
}
