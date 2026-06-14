import { useEffect, lazy, Suspense } from 'react';
import NavBar from '../components/navBar.jsx';
import Footer from '../components/footer.jsx';
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

const Accueil = lazy(() => import('./accueil.jsx'));
const Produits = lazy(() => import('./produits.jsx'));
const Concessionnaires = lazy(() => import('./concessionnaires.jsx'));
const Investisseurs = lazy(() => import('./investisseurs.jsx'));
const APropos = lazy(() => import('./apropos.jsx'));
const PointDistributions = lazy(() => import('./pointDistributions.jsx'));

function PageContent({ onglet }) {
    if (onglet === HOME) return <Accueil />;
    if (onglet === PRODUITS) return <Produits />;
    if (onglet === CONCESSIONNAIRES) return <Concessionnaires />;
    if (onglet === INVESTISSEURS) return <Investisseurs />;
    if (onglet === CONTACT) return <APropos />;
    if (onglet === ACTUALITES) return (
        <PointDistributions />
    );
    return null;
}

function Principale({ onglet }) {
    useEffect(() => {
        applySeo(onglet);
    }, [onglet]);

    return (
        <div className="principale-root">
            <NavBar onglet={onglet} />
            <Suspense fallback={null}>
                <PageContent onglet={onglet} />
            </Suspense>
            <Footer onglet={onglet} />
        </div>
    );
}

export default Principale;
export {HOME, PRODUITS, CONCESSIONNAIRES, INVESTISSEURS, ACTUALITES, CONTACT};
