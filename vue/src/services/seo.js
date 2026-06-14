const BASE_URL = 'https://ndjoka.vercel.app';
const OG_IMAGE = `${BASE_URL}/Logo_Ndjoka_avec_background.png`;
const SITE_NAME = 'Ndjoka';

export const SEO_CONFIG = {
  home: {
    title: 'Ndjoka | Produits agroalimentaires africains et réseau de distribution',
    description:
      "Découvrez Ndjoka, une marque agroalimentaire africaine qui développe des produits appréciés et un réseau de distribution en pleine expansion.",
    url: `${BASE_URL}/`,
    image: OG_IMAGE,
    robots: 'index,follow',
  },
  produits: {
    title: 'Produits Ndjoka | Chips de plantain et Kilichi',
    description:
      "Découvrez les produits Ndjoka : chips de plantain et Kilichi, conçus pour offrir une expérience authentique et gourmande.",
    url: `${BASE_URL}/produits`,
    image: OG_IMAGE,
    robots: 'index,follow',
  },
  concessionnaires: {
    title: "Devenir concessionnaire Ndjoka | Opportunité de distribution agroalimentaire",
    description:
      "Rejoignez le réseau Ndjoka et développez votre activité avec une marque agroalimentaire africaine en croissance.",
    url: `${BASE_URL}/concessionnaires`,
    image: OG_IMAGE,
    robots: 'index,follow',
  },
  investisseurs: {
    title: "Investir dans Ndjoka | Marque agroalimentaire africaine en croissance",
    description:
      "Participez à l'expansion de Ndjoka et accompagnez la croissance d'une marque africaine ambitieuse.",
    url: `${BASE_URL}/investisseurs`,
    image: OG_IMAGE,
    robots: 'index,follow',
  },
  'nos-points-de-vente': {
    title: 'Nos points de vente Ndjoka | Réseau de distribution et distributeurs',
    description:
      "Découvrez les points de vente Ndjoka présents dans plus de 10 pays. Trouvez un distributeur près de chez vous et rejoignez une marque agroalimentaire africaine en pleine expansion.",
    url: `${BASE_URL}/nos-points-de-vente`,
    image: OG_IMAGE,
    robots: 'index,follow',
  },
  contact: {
    title: "À propos de Ndjoka | Histoire, vision et développement",
    description:
      "Découvrez l'histoire, la mission et la vision qui guident le développement de Ndjoka.",
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

function setJsonLd(id, data) {
  let el = document.querySelector(`script[data-schema="${id}"]`);
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-schema', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function applySeo(key) {
  const config = SEO_CONFIG[key] ?? SEO_CONFIG.home;

  document.title = config.title;

  setMeta('name', 'description', config.description);
  setMeta('name', 'robots', config.robots);

  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:site_name', SITE_NAME);
  setMeta('property', 'og:url', config.url);
  setMeta('property', 'og:title', config.title);
  setMeta('property', 'og:description', config.description);
  setMeta('property', 'og:image', config.image);

  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', config.title);
  setMeta('name', 'twitter:description', config.description);
  setMeta('name', 'twitter:image', config.image);

  setCanonical(config.url);

  applySchemaPage(key, config);
}

function applySchemaPage(key, config) {
  setJsonLd('webpage', {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.title,
    description: config.description,
    url: config.url,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: BASE_URL },
  });

  if (key === 'produits') {
    setJsonLd('products', {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Produits Ndjoka',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'Chips Plantain Mûres Ndjoka',
            description: "Chips de plantain mûres, croustillantes et légères. Parfaites pour les petites faims, voyages et apéritifs.",
            brand: { '@type': 'Brand', name: 'Ndjoka' },
            offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'XAF', price: '1500' },
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'Chips Plantain Non Mûres Ndjoka',
            description: "Chips de plantain non mûres, saveur douce et croustillante appréciée des consommateurs.",
            brand: { '@type': 'Brand', name: 'Ndjoka' },
            offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'XAF', price: '1500' },
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            name: 'Chips Plantain Épicées Ndjoka',
            description: "Chips de plantain épicées, saveur intense pour les amateurs de snacks relevés.",
            brand: { '@type': 'Brand', name: 'Ndjoka' },
            offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'XAF', price: '2000' },
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Product',
            name: 'Kilichi Ndjoka',
            description: "Préparé à partir de viande soigneusement sélectionnée et assaisonnée avec un mélange d'épices inspiré des traditions sahéliennes, le Kilichi Ndjoka offre une expérience riche en goût, intense et authentique.",
            brand: { '@type': 'Brand', name: 'Ndjoka' },
            offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
          },
        },
      ],
    });
  }

  if (key === 'concessionnaires') {
    setJsonLd('faq-concess', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment devenir concessionnaire Ndjoka ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Il suffit de nous contacter via WhatsApp pour être pris en charge par notre équipe.' },
        },
        {
          '@type': 'Question',
          name: 'Quel est le montant pour commencer ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Vous pouvez rejoindre le réseau Ndjoka à partir de 25.000 FCFA.' },
        },
        {
          '@type': 'Question',
          name: 'Faut-il déjà avoir une boutique ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Non. Ndjoka accompagne aussi les personnes qui souhaitent démarrer progressivement.' },
        },
        {
          '@type': 'Question',
          name: 'Les produits se vendent-ils réellement ?',
          acceptedAnswer: { '@type': 'Answer', text: "Ndjoka est déjà présent dans plusieurs villes, supermarchés et points de distribution au Cameroun et à l'international." },
        },
        {
          '@type': 'Question',
          name: 'Quels avantages reçoit un concessionnaire ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Stock à prix réduit, visibilité, formation, branding et accompagnement commercial.' },
        },
        {
          '@type': 'Question',
          name: 'Ndjoka livre-t-il dans plusieurs villes ?',
          acceptedAnswer: { '@type': 'Answer', text: "Oui. Le réseau Ndjoka couvre déjà plusieurs villes du Cameroun et d'autres pays." },
        },
      ],
    });
  }

  if (key === 'investisseurs') {
    setJsonLd('faq-invest', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment puis-je investir dans Ndjoka ?',
          acceptedAnswer: { '@type': 'Answer', text: "Il vous suffit de nous contacter via WhatsApp pour démarrer une conversation avec l'équipe Ndjoka." },
        },
        {
          '@type': 'Question',
          name: 'Ndjoka est-elle déjà présente sur le marché ?',
          acceptedAnswer: { '@type': 'Answer', text: "Oui. Les produits Ndjoka sont déjà distribués dans plusieurs villes du Cameroun, dans plusieurs pays africains et dans la diaspora." },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la vision de croissance de Ndjoka ?',
          acceptedAnswer: { '@type': 'Answer', text: "Ndjoka vise à structurer une capacité de production industrielle, étendre son réseau de distribution et développer de nouvelles gammes de produits agroalimentaires africains." },
        },
        {
          '@type': 'Question',
          name: 'Pourquoi investir dans Ndjoka maintenant ?',
          acceptedAnswer: { '@type': 'Answer', text: "Ndjoka est en phase de croissance active avec un réseau de distribution existant, des produits appréciés et une vision claire d'expansion au Cameroun, en Afrique et dans la diaspora." },
        },
      ],
    });
  }

  if (key === 'home') {
    setJsonLd('faq-home', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment devenir concessionnaire Ndjoka ?',
          acceptedAnswer: { '@type': 'Answer', text: "Il suffit de remplir le formulaire de candidature pour être contacté par notre équipe." },
        },
        {
          '@type': 'Question',
          name: "Pourquoi investir dans Ndjoka ?",
          acceptedAnswer: { '@type': 'Answer', text: "Parce que Ndjoka construit une marque agroalimentaire africaine avec une vision de croissance et de distribution internationale." },
        },
      ],
    });
  }
}
