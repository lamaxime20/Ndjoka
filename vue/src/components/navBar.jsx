import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo_Ndjoka.svg';
import {
  NAV_ITEMS,
  NAVBAR_CTA,
} from '../services/navigation.js';
import '../assets/styles/components/navBar.css';

function NavBar({ onglet }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navBar-root">
      <div className="navBar-shell">
        <nav className="navBar-panel" aria-label="Navigation principale">
          <Link className="navBar-brand" to="/" aria-label="Ndjoka, retour à l'accueil">
            <img
              className="navBar-brandMark"
              src={logo}
              alt="Logo Ndjoka"
              width="1682"
              height="1048"
            />
          </Link>

          <button
            className="navBar-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="navBar-menu"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setIsMenuOpen((previousState) => !previousState)}
          >
            <span className="navBar-toggleLine" aria-hidden="true" />
          </button>

          <div
            id="navBar-menu"
            className={`navBar-menu ${isMenuOpen ? 'navBar-menu--open' : ''}`}
          >
            <div className="navBar-nav">
              <ul className="navBar-links">
                {NAV_ITEMS.map((item) => {
                  const isActive = onglet === item.key;

                  return (
                    <li className="navBar-linkItem" key={item.key}>
                      <Link
                        className={`navBar-link ${isActive ? 'navBar-link--active' : ''}`}
                        to={item.path}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="navBar-actions">
              <a
                className="navBar-cta"
                href={NAVBAR_CTA.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                {NAVBAR_CTA.label}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
