import { useEffect, useRef, useState } from 'react';
import Container from '../common/Container.jsx';
import AppLink from '../common/AppLink.jsx';
import Icon from '../common/Icon.jsx';
import Logo from './Logo.jsx';
import { navigationItems, utilityLinks, languageLink } from '../../data/navigation.js';
import { MOBILE_MENU_ID } from '../../utils/constants.js';

// Full-screen menu with one expandable section per mega-menu item. It stays in
// the DOM so aria-controls always has a target; CSS hides it (visibility) when
// closed, which also removes it from the tab order.
export default function MobileMenu({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  const toggleSection = (id) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <div id={MOBILE_MENU_ID} className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`.trim()}>
      <Container className="mobile-menu__top">
        <Logo onClick={onClose} />
        <button
          ref={closeButtonRef}
          type="button"
          className="icon-button"
          aria-label="Close menu"
          onClick={onClose}
        >
          <Icon name="close" />
        </button>
      </Container>

      <nav className="mobile-menu__nav" aria-label="Mobile navigation">
        <Container>
          <ul className="mobile-menu__list">
            {navigationItems.map((item) => {
              if (!item.links) {
                return (
                  <li key={item.id}>
                    <AppLink href={item.href} className="mobile-menu__item" onClick={onClose}>
                      {item.label}
                    </AppLink>
                  </li>
                );
              }

              const isExpanded = expandedId === item.id;
              const subId = `mobile-sub-${item.id}`;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className="mobile-menu__item"
                    aria-expanded={isExpanded}
                    aria-controls={subId}
                    onClick={() => toggleSection(item.id)}
                  >
                    {item.label}
                    <span className="mobile-menu__chevron" aria-hidden="true">
                      <Icon name="chevron" size={20} />
                    </span>
                  </button>

                  <ul id={subId} className="mobile-menu__sub" hidden={!isExpanded}>
                    {item.links.map((link) => (
                      <li key={link.label}>
                        {link.children ? (
                          <>
                            <p className="mobile-menu__group">{link.label}</p>
                            <ul className="mobile-menu__nested">
                              {link.children.map((child) => (
                                <li key={child.label}>
                                  <AppLink href={child.href} className="mobile-menu__sublink" onClick={onClose}>
                                    {child.label}
                                  </AppLink>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <AppLink href={link.href} className="mobile-menu__sublink" onClick={onClose}>
                            {link.label}
                          </AppLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>

          <ul className="mobile-menu__utility" aria-label="Utility links">
            {[...utilityLinks, languageLink].map((link) => (
              <li key={link.label}>
                <AppLink href={link.href} className="mobile-menu__utility-link" onClick={onClose}>
                  <Icon name={link.icon} size={20} />
                  {link.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </div>
  );
}
