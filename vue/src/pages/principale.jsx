import { useEffect } from 'react';
import NavBar from '../components/navBar.jsx';
import Footer from '../components/footer.jsx';
import Accueil from './accueil.jsx';
import Produits from './produits.jsx';
import Concessionnaires from './concessionnaires.jsx';
import Investisseurs from './investisseurs.jsx';
import APropos from './apropos.jsx';
import {
  HOME,
  PRODUITS,
  CONCESSIONNAIRES,
  INVESTISSEURS,
  ACTUALITES,
  CONTACT,
} from '../services/navigation.js';
import { applySeo } from '../services/seo.js';
import '../assets/styles/pages/principale.css';

function Principale({onglet}) {
    useEffect(() => {
        applySeo(onglet);
    }, [onglet]);
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

    if (onglet === CONCESSIONNAIRES) {
        return (
            <div className="principale-root">
                <NavBar onglet={onglet} />
                <Concessionnaires />
                <Footer onglet={onglet} />
            </div>
        )
    }

    if (onglet === INVESTISSEURS) {
        return (
            <div className="principale-root">
                <NavBar onglet={onglet} />
                <Investisseurs />
                <Footer onglet={onglet} />
            </div>
        )
    }

    if (onglet === CONTACT) {
        return (
            <div className="principale-root">
                <NavBar onglet={onglet} />
                <APropos />
                <Footer onglet={onglet} />
            </div>
        )
    }

    return (
        <div className="principale-root">
            <NavBar onglet={onglet} />
            <main className="principale-main">
                {onglet === ACTUALITES && <h1>Actualités</h1>}
            </main>
            <Footer onglet={onglet} />
        </div>
    )
}

export default Principale;
export {HOME, PRODUITS, CONCESSIONNAIRES, INVESTISSEURS, ACTUALITES, CONTACT};
