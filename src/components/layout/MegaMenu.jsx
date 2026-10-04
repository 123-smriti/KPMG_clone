import Container from '../common/Container.jsx';
import AppLink from '../common/AppLink.jsx';
import Icon from '../common/Icon.jsx';
import { MEGA_PANEL_ID } from '../../utils/constants.js';

// Desktop dropdown for one navigation item: links on the left, featured stories on the right.
export default function MegaMenu({ item, onNavigate }) {
  if (!item) return null;

  return (
    <div id={MEGA_PANEL_ID} className="megamenu" role="region" aria-label={`${item.label} menu`}>
      <Container className="megamenu__inner">
        <div className="megamenu__links-area">
          <div className="megamenu__head">
            <h2 className="megamenu__title">{item.label}</h2>
            {item.viewAllHref && (
              <AppLink href={item.viewAllHref} className="megamenu__view-all" onClick={onNavigate}>
                View all
              </AppLink>
            )}
          </div>

          <ul className="megamenu__links">
            {item.links.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <>
                    <p className="megamenu__group">{link.label}</p>
                    <ul className="megamenu__sublist">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <AppLink href={child.href} className="megamenu__sublink" onClick={onNavigate}>
                            {child.label}
                          </AppLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <AppLink href={link.href} className="megamenu__link" onClick={onNavigate}>
                    {link.label}
                  </AppLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {item.featured && (
          <div className="megamenu__featured">
            <p className="megamenu__featured-label">Featured</p>
            <ul>
              {item.featured.map((story) => (
                <li key={story.title}>
                  <AppLink href={story.href} className="megamenu__story" onClick={onNavigate}>
                    <span className="megamenu__story-title">{story.title}</span>
                    <span className="megamenu__story-text">{story.text}</span>
                    <span className="megamenu__story-cta">
                      {story.cta}
                      <Icon name="arrow" size={18} />
                    </span>
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
}
