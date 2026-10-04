import Container from '../common/Container.jsx';
import AppLink from '../common/AppLink.jsx';
import Icon from '../common/Icon.jsx';
import { utilityLinks, languageLink } from '../../data/navigation.js';

// Thin strip above the main bar: RFP, login and language. Hidden on mobile
// (those links live at the bottom of the mobile menu instead).
export default function UtilityBar() {
  return (
    <div className="utility-bar">
      <Container className="utility-bar__inner">
        <ul className="utility-bar__list" aria-label="Utility links">
          {[...utilityLinks, languageLink].map((link) => (
            <li key={link.label}>
              <AppLink href={link.href} className="utility-bar__link">
                <Icon name={link.icon} size={18} />
                {link.label}
              </AppLink>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
