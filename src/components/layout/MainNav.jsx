import { NavLink } from 'react-router-dom';
import Icon from '../common/Icon.jsx';
import { navigationItems } from '../../data/navigation.js';
import { MEGA_PANEL_ID } from '../../utils/constants.js';

// Desktop links. Items with `links` are buttons that open the mega menu;
// the others are plain links.
export default function MainNav({ openId, onToggle, onNavigate }) {
  return (
    <ul className="main-nav">
      {navigationItems.map((item) => {
        if (!item.links) {
          return (
            <li key={item.id}>
              {item.href.startsWith('/') ? (
                <NavLink to={item.href} className="main-nav__link" onClick={onNavigate}>
                  {item.label}
                </NavLink>
              ) : (
                <a
                  href={item.href}
                  className="main-nav__link"
                  onClick={(event) => {
                    if (item.href === '#') event.preventDefault(); // placeholder link
                    onNavigate();
                  }}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        }

        const isOpen = openId === item.id;
        return (
          <li key={item.id}>
            <button
              type="button"
              className="main-nav__link"
              aria-expanded={isOpen}
              aria-controls={isOpen ? MEGA_PANEL_ID : undefined}
              onClick={() => onToggle(item.id)}
            >
              {item.label}
              <span className="main-nav__chevron" aria-hidden="true">
                <Icon name="chevron" size={16} />
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
