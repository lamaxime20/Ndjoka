const BASE_URL = 'https://ndjoka.vercel.app';
const OG_IMAGE = `${BASE_URL}/Logo_Ndjoka_avec_background.png`;

export const SEO_CONFIG = {
  home: {
    title: 'Ndjoka | Marque agroalimentaire africaine — Chips de plantain & Distribution',
    description:
      'Des produits agroalimentaires africains déjà appréciés du marché. Rejoignez un réseau de distribution en pleine croissance et développez votre activité avec une marque présente dans plus de 15 villes.',
    url: `${BASE_URL}/`,
    image: OG_IMAGE,
    robots: 'index,follow',
  },
  produits: {
    title: 'Produits Ndjoka | Chips de plantain, Chin Chin — Snacks africains',
    description:
      'Découvrez les chips de plantain nature, sucrées, épicées et les croquettes Chin Chin de Ndjoka. Des produits africains propres, bien emballés et pensés pour être revendus.',
    url: `${BASE_URL}/produits`,
    image: OG_IMAGE,
    robots: 'index,follow',
  },
  concessionnaires: {
    title: 'Devenir concessionnaire Ndjoka | Distribution agroalimentaire au Cameroun',
    description:
      'Rejoignez le réseau de distribution Ndjoka à partir de 25 000 FCFA. Stock à prix réduit, formation gratuite, visibilité et accompagnement commercial pour développer votre activité.',
    url: `${BASE_URL}/concessionnaires`,
    image: OG_IMAGE,
    robots: 'index,follow',
  },
  investisseurs: {
    title: 'Investir dans Ndjoka | Marque agroalimentaire africaine en expansion',
    description:
      'Participez à la croissance d\'une marque agroalimentaire africaine déjà présente dans plus de 15 villes au Cameroun. Ndjoka développe son réseau, ses produits et sa vision internationale.',
    url: `${BASE_URL}/investisseurs`,
    image: OG_IMAGE,
    robots: 'index,follow',
  },
  actualites: {
    title: 'Actualités Ndjoka | Marque agroalimentaire africaine',
    description:
      'Suivez les dernières actualités de Ndjoka : nouveaux produits, expansion du réseau de distribution, événements et ambitions de la marque agroalimentaire africaine.',
    url: `${BASE_URL}/actualites`,
    image: OG_IMAGE,
    robots: 'index,follow',
  },
  contact: {
    title: 'À propos de Ndjoka | Marque agroalimentaire africaine camerounaise',
    description:
      'Découvrez l\'histoire et la vision de Ndjoka, marque agroalimentaire africaine en expansion. Valorisation des produits africains, réseau de distribution et ambition industrielle.',
    url: `${BASE_URL}/contact`,
    image: OG_IMAGE,
    robots: 'index,follow',
  },
};

function setMeta(attr, attrVal, content) {
  let el = document.querySelector(`meta[${attr}="${attrVal}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

export function applySeo(key) {
  const config = SEO_CONFIG[key] ?? SEO_CONFIG.home;

  document.title = config.title;

  setMeta('name', 'description', config.description);
  setMeta('name', 'robots', config.robots);

  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:url', config.url);
  setMeta('property', 'og:title', config.title);
  setMeta('property', 'og:description', config.description);
  setMeta('property', 'og:image', config.image);

  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', config.title);
  setMeta('name', 'twitter:description', config.description);
  setMeta('name', 'twitter:image', config.image);

  setCanonical(config.url);
}
