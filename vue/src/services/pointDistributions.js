import heroImage from '../assets/images/points_distributions/hero.webp';
import concessImage from '../assets/images/points_distributions/concessionnaire_ndjoka.webp';
import chinChinPlaceholder from '../assets/images/accueil/produits/ndjoka_pimente.webp';
import oseillePlaceholder from '../assets/images/accueil/produits/ndjoka_sucre.webp';

export const PD_WHATSAPP_URL =
  'https://wa.me/237683184360?text=' +
  encodeURIComponent(
    'Bonjour, je souhaite rejoindre le réseau Ndjoka en tant que concessionnaire. Pouvez-vous me contacter ?'
  );

export const PD_CONTACT_URL =
  'https://wa.me/237683184360?text=' +
  encodeURIComponent(
    "Bonjour, je souhaite contacter l'équipe Ndjoka. Pouvez-vous me répondre ?"
  );

export const PD_HERO = {
  badge: 'Le réseau Ndjoka',
  title: 'Un réseau qui rapproche Ndjoka des consommateurs partout où ils se trouvent',
  description:
    "Déjà présent dans plusieurs villes et pays, le réseau Ndjoka continue de grandir pour rendre ses produits accessibles à toujours plus de consommateurs.",
  ctaPrimary: { label: 'Rejoindre le réseau Ndjoka', href: PD_WHATSAPP_URL },
  ctaSecondary: { label: 'Trouver un distributeur', anchor: '#distributeur' },
  image: {
    src: heroImage,
    alt: 'Réseau de distribution Ndjoka — concessionnaire et produits',
  },
};

export const PD_RESEAU = {
  badge: 'Réseau en expansion',
  title: 'Une présence qui grandit chaque année',
  description:
    "Ndjoka développe progressivement son réseau de distribution afin de rapprocher ses produits des consommateurs et de créer de nouvelles opportunités commerciales.",
  stats: [
    { value: 15, suffix: '+', label: 'Villes couvertes', numeric: true },
    { value: 10, suffix: '+', label: 'Pays représentés', numeric: true },
    { value: null, display: 'Plusieurs', suffix: '', label: 'Concessionnaires et partenaires', numeric: false },
  ],
};

export const PD_MAP_DATA = {
  badge: 'Présence internationale',
  title: 'Une marque présente au Cameroun et au-delà',
  description:
    "Chaque nouveau point de distribution renforce la proximité entre Ndjoka et ses consommateurs.",
  subtext: 'Explorez les pays où le réseau est déjà représenté.',
};

// Continent SVG paths — viewBox="0 0 1000 500"
export const MAP_CONTINENTS = [
  {
    id: 'north-america',
    d: 'M88,88 C115,68 160,60 210,58 C260,56 302,68 326,84 C344,96 346,115 338,132 C330,150 313,165 290,177 C266,189 238,190 212,183 C186,175 162,162 140,144 C118,126 100,108 88,88 Z',
  },
  {
    id: 'greenland',
    d: 'M220,40 C242,32 268,34 283,48 C296,60 294,74 278,82 C262,90 242,90 225,82 C208,74 200,58 220,40 Z',
  },
  {
    id: 'south-america',
    d: 'M218,252 C240,244 268,244 290,257 C310,270 320,292 322,317 C325,344 318,372 305,396 C292,420 272,434 250,432 C228,430 210,418 200,396 C190,374 188,346 190,320 C192,294 200,270 218,252 Z',
  },
  {
    id: 'europe',
    d: 'M448,118 C462,108 480,104 500,104 C520,104 540,108 552,120 C560,130 557,146 546,155 C532,165 512,167 492,165 C472,163 454,154 446,142 Z',
  },
  {
    id: 'scandinavia',
    d: 'M490,88 C502,80 516,78 528,84 C540,90 540,102 530,110 C520,118 504,120 492,114 C480,108 478,96 490,88 Z',
  },
  {
    id: 'africa',
    d: 'M472,148 C489,143 506,143 521,152 C535,162 536,180 535,200 C534,222 528,246 525,272 C522,297 514,320 503,338 C491,356 474,362 457,354 C440,346 428,330 421,310 C413,288 414,262 419,237 C424,212 433,190 446,174 C456,162 460,153 472,148 Z',
  },
  {
    id: 'arabia',
    d: 'M552,186 C566,180 585,183 598,196 C610,208 610,226 600,238 C590,250 575,254 560,248 C544,242 536,228 536,213 C536,198 540,192 552,186 Z',
  },
  {
    id: 'india',
    d: 'M590,190 C605,184 622,188 634,202 C645,215 645,232 636,246 C627,259 612,265 597,259 C581,253 571,239 569,223 C567,207 574,196 590,190 Z',
  },
  {
    id: 'asia',
    d: 'M548,92 C608,75 678,68 750,72 C820,76 868,94 872,116 C876,136 860,155 836,165 C810,175 778,181 746,179 C714,177 684,185 654,192 C622,200 596,192 574,177 C552,162 540,146 540,128 C540,112 540,100 548,92 Z',
  },
  {
    id: 'se-asia',
    d: 'M728,178 C752,172 770,180 778,196 C786,212 776,228 758,234 C740,240 720,234 712,220 C704,206 704,184 728,178 Z',
  },
  {
    id: 'japan',
    d: 'M824,130 C840,124 857,130 862,144 C866,158 856,170 840,174 C824,178 810,170 806,156 C802,142 808,136 824,130 Z',
  },
  {
    id: 'australia',
    d: 'M750,304 C778,296 812,302 838,319 C863,336 865,358 850,376 C835,394 808,403 780,398 C752,393 732,379 722,358 C712,336 722,312 750,304 Z',
  },
];

// Positions des pays dans le SVG (cx, cy en coordonnées 1000×500)
export const PD_PAYS = [
  {
    id: 'cameroun',
    pays: 'Cameroun',
    continent: 'Afrique',
    cx: 467,
    cy: 242,
    distributeurs: [
      { nom: 'Ndjoka Yaoundé', ville: 'Yaoundé', tel: '+237 683 18 43 60', adresse: 'Centre-ville, Yaoundé, Cameroun' },
      { nom: 'Ndjoka Douala', ville: 'Douala', tel: '+237 683 18 43 60', adresse: 'Bonanjo, Douala, Cameroun' },
      { nom: 'Ndjoka Bafoussam', ville: 'Bafoussam', tel: '+237 683 18 43 60', adresse: 'Marché central, Bafoussam, Cameroun' },
    ],
  },
  {
    id: 'togo',
    pays: 'Togo',
    continent: 'Afrique',
    cx: 447,
    cy: 234,
    distributeurs: [
      { nom: 'Ndjoka Lomé', ville: 'Lomé', tel: '+237 683 18 43 60', adresse: 'Lomé, Togo' },
    ],
  },
  {
    id: 'gabon',
    pays: 'Gabon',
    continent: 'Afrique',
    cx: 465,
    cy: 262,
    distributeurs: [
      { nom: 'Ndjoka Libreville', ville: 'Libreville', tel: '+237 683 18 43 60', adresse: 'Libreville, Gabon' },
    ],
  },
  {
    id: 'cote_divoire',
    pays: "Côte d'Ivoire",
    continent: 'Afrique',
    cx: 436,
    cy: 237,
    distributeurs: [
      { nom: "Ndjoka Abidjan", ville: 'Abidjan', tel: '+237 683 18 43 60', adresse: "Abidjan, Côte d'Ivoire" },
    ],
  },
  {
    id: 'tchad',
    pays: 'Tchad',
    continent: 'Afrique',
    cx: 473,
    cy: 213,
    distributeurs: [
      { nom: "Ndjoka N'Djaména", ville: "N'Djaména", tel: '+237 683 18 43 60', adresse: "N'Djaména, Tchad" },
    ],
  },
  {
    id: 'allemagne',
    pays: 'Allemagne',
    continent: 'Europe',
    cx: 494,
    cy: 141,
    distributeurs: [
      { nom: 'Ndjoka Deutschland', ville: 'Berlin', tel: '+237 683 18 43 60', adresse: 'Berlin, Allemagne' },
    ],
  },
  {
    id: 'belgique',
    pays: 'Belgique',
    continent: 'Europe',
    cx: 475,
    cy: 136,
    distributeurs: [
      { nom: 'Ndjoka Belgique', ville: 'Bruxelles', tel: '+237 683 18 43 60', adresse: 'Bruxelles, Belgique' },
    ],
  },
  {
    id: 'canada',
    pays: 'Canada',
    continent: 'Amérique du Nord',
    cx: 292,
    cy: 132,
    distributeurs: [
      { nom: 'Ndjoka Canada', ville: 'Montréal', tel: '+237 683 18 43 60', adresse: 'Montréal, Québec, Canada' },
    ],
  },
  {
    id: 'russie',
    pays: 'Russie',
    continent: 'Europe / Asie',
    cx: 580,
    cy: 108,
    distributeurs: [
      { nom: 'Ndjoka Russie', ville: 'Moscou', tel: '+237 683 18 43 60', adresse: 'Moscou, Russie' },
    ],
  },
  {
    id: 'emirates',
    pays: 'Émirats Arabes Unis',
    continent: 'Asie',
    cx: 582,
    cy: 210,
    distributeurs: [
      { nom: 'Ndjoka UAE', ville: 'Dubaï', tel: '+237 683 18 43 60', adresse: 'Dubaï, Émirats Arabes Unis' },
    ],
  },
];

export const PD_SEARCH = {
  badge: 'Points de distribution',
  title: 'Trouvez un distributeur proche de chez vous',
  description:
    "Recherchez une ville ou un pays pour consulter les points de distribution disponibles et leurs coordonnées.",
  placeholder: 'Ville ou pays...',
  emptyLabel: 'Aucun distributeur trouvé pour cette recherche.',
  emptyHint: 'Essayez avec "Cameroun", "Douala" ou "Belgique".',
};

export const PD_AVANTAGES = {
  badge: 'Opportunité',
  title: 'Pourquoi des entrepreneurs rejoignent Ndjoka',
  description:
    "Rejoindre Ndjoka, c'est participer au développement d'une marque africaine ambitieuse tout en construisant une activité locale durable.",
  items: [
    {
      titre: 'Une marque en croissance',
      texte:
        "Profitez de la visibilité d'une marque qui continue d'étendre sa présence dans de nouvelles villes et de nouveaux pays.",
      icon: 'trending_up',
    },
    {
      titre: 'Des produits appréciés',
      texte:
        "Distribuez des produits déjà présents dans plusieurs villes et marchés, appréciés pour leur qualité et leur packaging.",
      icon: 'thumb_up',
    },
    {
      titre: 'Un réseau structuré',
      texte:
        "Évoluez aux côtés d'autres concessionnaires et partenaires dans un réseau qui continue de se renforcer.",
      icon: 'hub',
    },
    {
      titre: 'Une opportunité de développement',
      texte:
        "Grandissez avec une marque qui prépare déjà ses prochaines étapes : nouveaux produits, nouveaux marchés, nouvelle dynamique.",
      icon: 'rocket_launch',
    },
  ],
  image: {
    src: concessImage,
    alt: 'Concessionnaire partenaire Ndjoka avec les produits',
  },
};

export const PD_VISION = {
  badge: 'Notre vision',
  title: "Construire l'une des références agroalimentaires africaines de demain",
  piliers: [
    {
      titre: 'Valoriser les produits africains',
      texte:
        "Ndjoka poursuit une ambition claire : valoriser les produits africains à travers une distribution moderne, accessible et durable.",
    },
    {
      titre: 'Une présence déjà établie',
      texte:
        "Aujourd'hui, la marque est déjà présente dans plusieurs villes et pays grâce à son réseau de distributeurs, concessionnaires et partenaires.",
    },
    {
      titre: 'Une croissance en marche',
      texte:
        "Demain, cette dynamique se poursuivra avec l'élargissement de la gamme de produits, le renforcement du réseau de distribution et l'ouverture de nouvelles opportunités commerciales à travers l'Afrique et au-delà.",
    },
  ],
  avenir: {
    title: "Les prochaines étapes de l'univers Ndjoka",
    text:
      "L'innovation fait partie de la croissance de Ndjoka. Plusieurs produits sont actuellement en développement afin d'accompagner l'expansion de la marque.",
    subtitle: 'Produits en développement',
    produits: [
      {
        nom: 'Chin Chin Ndjoka',
        badge: 'Prochainement',
        image: chinChinPlaceholder,
        alt: 'Chin Chin Ndjoka — produit en développement',
        description: 'Une gamme de croquantes sucrées et croustillantes actuellement en développement.',
      },
      {
        nom: "Jus d'oseille Ndjoka",
        badge: 'Prochainement',
        image: oseillePlaceholder,
        alt: "Jus d'oseille Ndjoka — produit en développement",
        description: 'Une boisson africaine naturelle et rafraîchissante en cours de développement.',
      },
    ],
  },
};

export const PD_FINAL = {
  title: 'Rejoignez une marque qui continue de grandir',
  description:
    "Chaque nouveau concessionnaire contribue à rapprocher les produits Ndjoka des consommateurs et participe à la construction d'un réseau africain en pleine expansion.",
  ctaPrimary: { label: 'Devenir concessionnaire Ndjoka', href: PD_WHATSAPP_URL },
  ctaSecondary: { label: "Contacter l'équipe", href: PD_CONTACT_URL },
};

export function searchDistributeurs(query) {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const results = [];
  PD_PAYS.forEach((pays) => {
    const payMatch =
      pays.pays.toLowerCase().includes(q) || pays.continent.toLowerCase().includes(q);
    pays.distributeurs.forEach((d) => {
      const dMatch =
        d.nom.toLowerCase().includes(q) ||
        d.ville.toLowerCase().includes(q) ||
        d.adresse.toLowerCase().includes(q);
      if (payMatch || dMatch) {
        results.push({ ...d, pays: pays.pays, payId: pays.id });
      }
    });
  });
  return results;
}
