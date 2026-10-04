import { useState, useEffect, useCallback } from 'react';
import { MOBILE_BREAKPOINT } from '../utils/constants.js';

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  // While the menu is open: Escape closes it, the page behind can't scroll,
  // and it closes itself if the window grows to a width that doesn't use it.
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };
    const widthQuery = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    const onWidthChange = (event) => {
      if (event.matches) close();
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener('keydown', onKeyDown);
    widthQuery.addEventListener('change', onWidthChange);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      widthQuery.removeEventListener('change', onWidthChange);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  return { isOpen, open, close, toggle };
}
