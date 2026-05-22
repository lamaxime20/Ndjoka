import NavBar from '../components/navBar.jsx';
import Footer from '../components/footer.jsx';
import Accueil from './accueil.jsx';
import Produits from './produits.jsx';
import {
  HOME,
  PRODUITS,
  CONCESSIONNAIRES,
  INVESTISSEURS,
  ACTUALITES,
  CONTACT,
} from '../services/navigation.js';
import '../assets/styles/pages/principale.css';

function Principale({onglet}) {
    if (onglet === HOME) {
        return (
            <div className="principale-root">
                <NavBar onglet={onglet} />
                <Accueil />
                <Footer onglet={onglet} />
            </div>
        )
    }

    if (onglet === PRODUITS) {
        return (
            <div className="principale-root">
                <NavBar onglet={onglet} />
                <Produits />
                <Footer onglet={onglet} />
            </div>
        )
    }

    return (
        <div className="principale-root">
            <NavBar onglet={onglet} />
            <main className="principale-main">
                {onglet === CONCESSIONNAIRES && <h1>Concessionnaires</h1>}
                {onglet === INVESTISSEURS && <h1>Investisseurs</h1>}
                {onglet === ACTUALITES && <h1>Actualités</h1>}
                {onglet === CONTACT && <h1>Contact</h1>}
            </main>
            <Footer onglet={onglet} />
        </div>
    )
}

export default Principale;
export {HOME, PRODUITS, CONCESSIONNAIRES, INVESTISSEURS, ACTUALITES, CONTACT};
