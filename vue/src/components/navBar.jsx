import logo from '../assets/images/Logo_Ndjoka.svg';
import { HOME, PRODUITS } from '../pages/principale.jsx';
import { CONCESSIONNAIRES, INVESTISSEURS } from '../pages/principale.jsx';
import { ACTUALITES, CONTACT } from '../pages/principale.jsx';

function NavBar({onglet}) {
    return (
        <nav className="navBar-root">
            <img
                className="navBar-logo"
                src={logo}
                alt="logo_ndjoka"
            />
            <ul className="navBar-onglets">
                <li 
                    className={`navbBar-onglet ${onglet === HOME ? 'navBar-onglet-selected' : ''}`}
                >
                    <a
                        href='/'
                    >
                        Home
                    </a>
                </li>
                <li 
                    className={`navbBar-onglet ${onglet === PRODUITS ? 'navBar-onglet-selected' : ''}`}
                >
                    <a
                        href='/produits'
                    >
                        Produits
                    </a>
                </li>
                <li 
                    className={`navbBar-onglet ${onglet === CONCESSIONNAIRES ? 'navBar-onglet-selected' : ''}`}
                >
                    <a
                        href='/concessionnaires'
                    >
                        Concessionnaires
                    </a>
                </li>
                <li 
                    className={`navbBar-onglet ${onglet === INVESTISSEURS ? 'navBar-onglet-selected' : ''}`}
                >
                    <a
                        href='/investisseurs'
                    >
                        Investisseurs
                    </a>
                </li>
                <li 
                    className={`navbBar-onglet ${onglet === ACTUALITES ? 'navBar-onglet-selected' : ''}`}
                >
                    <a
                        href='/actualites'
                    >
                        Actualites
                    </a>
                </li>
                <li 
                    className={`navbBar-onglet ${onglet === CONTACT ? 'navBar-onglet-selected' : ''}`}
                >
                    <a
                        href='/contact'
                    >
                        Contact
                    </a>
                </li>
            </ul>
            <a
                className="navBar-button"
                href='https://wa.me/237683184360'
                target="_blank"
                rel="noopener noreferrer"
            >
                Nous contacter
            </a>
        </nav>
    )
}

export default NavBar;