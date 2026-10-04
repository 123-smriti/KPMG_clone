import Container from '../common/Container.jsx';
import Icon from '../common/Icon.jsx';
import Logo from './Logo.jsx';
import MainNav from './MainNav.jsx';
import { MOBILE_MENU_ID, SEARCH_PANEL_ID } from '../../utils/constants.js';

// The header bar: [menu button (mobile)] [logo] [desktop links] [search]
export default function Navbar({
  isMenuOpen,
  isSearchOpen,
  openPanelId,
  onMenuToggle,
  onSearchToggle,
  onPanelToggle,
  onNavigate,
}) {
  return (
    <Container className="navbar__inner">
      <button
        type="button"
        className="icon-button navbar__menu-button"
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        aria-controls={MOBILE_MENU_ID}
        onClick={onMenuToggle}
      >
        <Icon name="menu" />
      </button>

      <Logo onClick={onNavigate} />

      <nav className="navbar__nav" aria-label="Main navigation">
        <MainNav openId={openPanelId} onToggle={onPanelToggle} onNavigate={onNavigate} />
      </nav>

      <button
        type="button"
        className="icon-button navbar__search-button"
        aria-label="Search"
        aria-expanded={isSearchOpen}
        aria-controls={SEARCH_PANEL_ID}
        onClick={onSearchToggle}
      >
        <Icon name="search" size={22} />
        <span className="navbar__search-label" aria-hidden="true">Search</span>
      </button>
    </Container>
  );
}
