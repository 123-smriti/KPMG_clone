import { useState, useEffect, useRef } from 'react';
import UtilityBar from './UtilityBar.jsx';
import Navbar from './Navbar.jsx';
import MegaMenu from './MegaMenu.jsx';
import SearchPanel from './SearchPanel.jsx';
import MobileMenu from './MobileMenu.jsx';
import { useMobileMenu } from '../../hooks/useMobileMenu.js';
import { useHideOnScroll } from '../../hooks/useHideOnScroll.js';
import { navigationItems } from '../../data/navigation.js';
import { MAIN_ID } from '../../utils/constants.js';
import './Header.css';

// Site-wide header. Owns the open/closed state of the mobile menu,
// the search panel and the desktop mega menu (only one is open at a time).
// It slides out of view while scrolling down and comes back as soon as the visitor scrolls up.
export default function Header() {
  const menu = useMobileMenu();
  const headerRef = useRef(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openPanelId, setOpenPanelId] = useState(null);
  const [hasFocus, setHasFocus] = useState(false); // keyboard focus inside the header
  const isScrolledAway = useHideOnScroll();

  const toggleMenu = () => {
    setIsSearchOpen(false);
    setOpenPanelId(null);
    menu.toggle();
  };

  const toggleSearch = () => {
    menu.close();
    setOpenPanelId(null);
    setIsSearchOpen((prev) => !prev);
  };

  const togglePanel = (id) => {
    setIsSearchOpen(false);
    setOpenPanelId((prev) => (prev === id ? null : id));
  };

  const closeAll = () => {
    menu.close();
    setIsSearchOpen(false);
    setOpenPanelId(null);
  };

  // While the search panel or a mega menu is open: Escape closes it,
  // and so does a click anywhere outside the header.
  const isPanelOpen = isSearchOpen || openPanelId !== null;
  useEffect(() => {
    if (!isPanelOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
        setOpenPanelId(null);
      }
    };
    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setOpenPanelId(null);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [isPanelOpen]);

  // Never hide the header while something inside it is open or keyboard-focused.
  // Only :focus-visible counts, so a mouse click on a button doesn't pin the header open.
  const isHidden = isScrolledAway && !isPanelOpen && !menu.isOpen && !hasFocus;
  const handleFocus = (event) => {
    if (event.target.matches(':focus-visible')) setHasFocus(true);
  };
  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
  };

  const activeItem = navigationItems.find((item) => item.id === openPanelId);

  return (
    <>
      <a className="skip-link" href={`#${MAIN_ID}`}>Skip to main content</a>
      <header
        className={`header ${isHidden ? 'header--hidden' : ''}`.trim()}
        ref={headerRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <UtilityBar />
        <Navbar
          isMenuOpen={menu.isOpen}
          isSearchOpen={isSearchOpen}
          openPanelId={openPanelId}
          onMenuToggle={toggleMenu}
          onSearchToggle={toggleSearch}
          onPanelToggle={togglePanel}
          onNavigate={closeAll}
        />
        <MegaMenu item={activeItem} onNavigate={closeAll} />
        <SearchPanel isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <MobileMenu isOpen={menu.isOpen} onClose={menu.close} />
      </header>
    </>
  );
}
