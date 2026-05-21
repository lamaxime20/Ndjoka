import NavBar from '../components/navBar.jsx';
import Footer from '../components/footer.jsx';

const HOME = 'home';
const PRODUITS = 'produits';
const CONCESSIONNAIRES = 'concessionnaires';
const INVESTISSEURS = 'investisseurs';
const ACTUALITES = 'actualites';
const CONTACT = 'contact';

function Principale({onglet}) {
    return (
        <div className="principale-root">
            <NavBar onglet={onglet} />
            <main>
                {onglet === HOME && <h1>Home</h1>}
                {onglet === PRODUITS && <h1>Produits</h1>}
                {onglet === CONCESSIONNAIRES && <h1>Concessionnaires</h1>}
                {onglet === INVESTISSEURS && <h1>Investisseurs</h1>}
                {onglet === ACTUALITES && <h1>Actualites</h1>}
                {onglet === CONTACT && <h1>Contact</h1>}
            </main>
            <Footer onglet={onglet} />
        </div>
    )
}

export default Principale;
export {HOME, PRODUITS, CONCESSIONNAIRES, INVESTISSEURS, ACTUALITES, CONTACT};