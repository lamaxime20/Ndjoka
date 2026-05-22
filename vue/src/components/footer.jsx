import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo_Ndjoka.svg';
import {
  FOOTER_CONTACTS,
  FOOTER_DESCRIPTION,
  FOOTER_SOCIALS,
  NAV_ITEMS,
} from '../services/navigation.js';
import '../assets/styles/components/footer.css';

function SocialIcon({ label }) {
  if (label === 'Instagram') {
    return (
      <svg className="footer-socialIcon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17.2" cy="6.9" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (label === 'LinkedIn') {
    return (
      <svg className="footer-socialIcon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8.1 10v6.2M8.1 7.8a1 1 0 1 0 0 .01M11.6 10v6.2m0-3.5c0-1.8 1-2.9 2.6-2.9 1.5 0 2.3 1 2.3 2.9v3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className="footer-socialIcon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.6 20v-6h2l.4-2.5h-2.4V9.9c0-.8.3-1.4 1.5-1.4h1.1V6.3c-.2 0-.9-.1-1.8-.1-2.2 0-3.6 1.3-3.6 3.7v1.6H8.9V14h1.9v6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function Footer({ onglet }) {
  return (
    <footer className="footer-root">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" aria-label="Ndjoka, retour à l'accueil">
              <img
                className="footer-logo"
                src={logo}
                alt="Logo Ndjoka"
              />
            </Link>
            <p className="footer-description">{FOOTER_DESCRIPTION}</p>
          </div>

          <div className="footer-group">
            <p className="footer-heading">Navigation</p>
            <ul className="footer-links">
              {NAV_ITEMS.map((item) => {
                const isActive = onglet === item.key;

                return (
                  <li key={item.key}>
                    <Link
                      className={`footer-link ${isActive ? 'footer-link--active' : ''}`}
                      to={item.path}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="footer-group">
            <p className="footer-heading">Contact</p>
            <ul className="footer-contactList">
              {FOOTER_CONTACTS.map((contact) => (
                <li key={contact.label}>
                  <a
                    className="footer-contactLink"
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="footer-contactLabel">{contact.label}</span>
                    <span>{contact.value}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="footer-group">
              <p className="footer-heading">Suivre Ndjoka</p>
              <ul className="footer-socialList">
                {FOOTER_SOCIALS.map((social) => (
                  <li key={social.label}>
                    <a
                      className="footer-socialLink"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <SocialIcon label={social.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Ndjoka — Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
