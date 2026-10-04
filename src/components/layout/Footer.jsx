import Container from '../common/Container.jsx';
import AppLink from '../common/AppLink.jsx';
import SocialIcon from '../common/SocialIcon.jsx';
import Logo from './Logo.jsx';
import {
  footerColumns,
  socialLinks,
  legalLinks,
  copyrightText,
  footerNotes,
} from '../../data/footer.js';
import './Footer.css';

const NEW_TAB = { target: '_blank', rel: 'noopener noreferrer' };

// Site-wide footer. Content comes from data/footer.js.
// Order: logo, link columns, social icons, legal links, copyright + notices.
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__brand">
          <Logo variant="light" />
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {footerColumns.map((column) => (
            <div key={column.title} className="footer__column">
              <h2 className="footer__title">{column.title}</h2>
              <ul className="footer__list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <AppLink href={link.href} className="footer__link">
                      {link.label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <ul className="footer__social" aria-label="Social media">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                className="footer__social-link"
                href={link.href}
                aria-label={`${link.label} (opens in a new tab)`}
                {...NEW_TAB}
              >
                <SocialIcon name={link.icon} />
              </a>
            </li>
          ))}
        </ul>

        <nav className="footer__legal-nav" aria-label="Legal">
          <ul className="footer__legal">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <AppLink href={link.href} className="footer__link" {...NEW_TAB}>
                  {link.label}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </AppLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__notes">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} {copyrightText}
          </p>
          {footerNotes.map((parts, index) => (
            <p key={index} className="footer__note">
              {parts.map((part, i) =>
                typeof part === 'string' ? (
                  part
                ) : (
                  <a key={i} className="footer__inline-link" href={part.href} {...NEW_TAB}>
                    {part.label}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                )
              )}
            </p>
          ))}
        </div>
      </Container>
    </footer>
  );
}
