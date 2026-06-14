import heroImage from '../assets/images/concessionnaires/hero.webp';
import pointDeVentesImage from '../assets/images/concessionnaires/point_de_ventes.webp';
import natureImage from '../assets/images/accueil/produits/ndjoka_nature.webp';
import sucreeImage from '../assets/images/accueil/produits/ndjoka_sucre.webp';
import epiceeImage from '../assets/images/accueil/produits/ndjoka_pimente.webp';
import kilichiImage from '../assets/images/produits/kilichi.webp';
import chinChinPlaceholder from '../assets/images/produits/chins_chins.webp';
import oseillePlaceholder from '../assets/images/produits/canette_oseille.webp';

const WHATSAPP_URL =
  'https://wa.me/237683184360?text=' +
  encodeURIComponent(
    "Bonjour, je souhaite devenir concessionnaire Ndjoka. Pouvez-vous me contacter pour plus d'informations ?"
  );

export { WHATSAPP_URL as CONCESS_WHATSAPP_URL };

export const CONCESS_HERO = {
  eyebrow: 'Réseau Ndjoka',
  title: 'Devenez concessionnaire Ndjoka',
  description:
    "Rejoignez un réseau de distribution qui commercialise déjà des produits appréciés dans plusieurs villes et pays. Développez votre activité avec une marque agroalimentaire africaine en pleine croissance.",
  image: {
    src: heroImage,
    alt: 'Concessionnaire Ndjoka présentant les produits dans un point de vente',
  },
};

export const CONCESS_AVANTAGES = [
  {
    icon: 'local_offer',
    title: 'Stock à prix réduit',
    text: 'Commencez avec des produits accessibles et adaptés à votre capacité de départ.',
  },
  {
    icon: 'campaign',
    title: 'Visibilité pour votre point de vente',
    text: 'Ndjoka communique régulièrement sur ses plateformes pour aider à faire connaître vos produits.',
  },
  {
    icon: 'school',
    title: 'Formation gratuite',
    text: "Profitez d'un accompagnement régulier pour mieux vendre et mieux présenter les produits Ndjoka.",
  },
  {
    icon: 'support_agent',
    title: 'Support commercial',
    text: 'Nos équipes vous accompagnent dans vos préoccupations liées aux produits, aux clients et au marché.',
  },
  {
    icon: 'style',
    title: 'Branding offert',
    text: 'Recevez des supports visuels pour améliorer la visibilité de votre point de vente.',
  },
  {
    icon: 'hub',
    title: 'Un réseau déjà actif',
    text: "Rejoignez une marque déjà présente dans plusieurs villes du Cameroun et à l'international.",
  },
];

export const CONCESS_PRODUITS = [
  {
    name: 'Chips Plantain Mûres',
    description:
      'Croustillantes et légères, parfaites pour les petites faims, les voyages, les soirées et les apéritifs.',
    format: 'Format 250g',
    image: natureImage,
    alt: 'Sachet de chips plantain mûres Ndjoka',
  },
  {
    name: 'Chips Plantain Non Mûres',
    description: 'Une saveur douce et croustillante qui plaît immédiatement aux consommateurs.',
    format: 'Format 250g',
    image: sucreeImage,
    alt: 'Sachet de chips plantain non mûres Ndjoka',
  },
  {
    name: 'Chips Plantain Épicées',
    description: 'Une saveur plus relevée pour les consommateurs qui aiment les snacks plus intenses.',
    format: 'Format 250g',
    image: epiceeImage,
    alt: 'Sachet de chips plantain épicées Ndjoka',
  },
  {
    name: 'Kilichi Ndjoka',
    description:
      'Préparé à partir de viande soigneusement sélectionnée et assaisonnée avec un mélange d\'épices inspiré des traditions sahéliennes.',
    format: 'Nouveau produit',
    badge: 'Nouveau produit',
    image: kilichiImage,
    alt: 'Kilichi Ndjoka — viande séchée épicée aux saveurs sahéliennes',
  },
];

export const CONCESS_STAT_COUNT = {
  value: 15,
  label: 'villes couvertes au Cameroun',
};

export const CONCESS_STATS = [
  { icon: 'public', label: 'Présence dans plusieurs pays africains' },
  { icon: 'flight_takeoff', label: 'Distribution déjà active dans la diaspora' },
  { icon: 'hub', label: 'Un réseau de concessionnaires en expansion' },
  {
    icon: 'storefront',
    label: 'Des produits déjà présents dans des supermarchés et points de vente',
  },
];

export const CONCESS_TEMOIGNAGES = [
  { text: 'Les produits attirent facilement les clients grâce au packaging.' },
  { text: 'Les consommateurs reviennent souvent après le premier achat.' },
  { text: "L'accompagnement Ndjoka aide vraiment à mieux vendre." },
];

export const CONCESS_VISION = {
  badge: 'Notre vision',
  title: "Construire l'une des références agroalimentaires africaines de demain",
  paragraphes: [
    'Ndjoka poursuit une ambition claire : valoriser les produits africains à travers une distribution moderne, accessible et durable.',
    "Aujourd'hui, la marque est déjà présente dans plusieurs villes et pays grâce à son réseau de distributeurs, concessionnaires et partenaires.",
    "Demain, cette dynamique se poursuivra avec l'élargissement de la gamme de produits, le renforcement du réseau de distribution et l'ouverture de nouvelles opportunités commerciales à travers l'Afrique et au-delà.",
  ],
  blocs: [
    {
      icon: 'hub',
      title: 'Développement du réseau',
      text: 'Renforcer la présence de Ndjoka dans de nouvelles villes et de nouveaux territoires.',
    },
    {
      icon: 'inventory_2',
      title: 'Diversification des produits',
      text: 'Proposer progressivement de nouvelles références adaptées aux habitudes de consommation africaines.',
    },
    {
      icon: 'flight_takeoff',
      title: 'Expansion internationale',
      text: 'Accompagner la croissance du réseau dans plusieurs pays déjà représentés et ouvrir de nouveaux marchés.',
    },
    {
      icon: 'trending_up',
      title: 'Opportunités économiques',
      text: "Créer davantage d'opportunités pour les concessionnaires, distributeurs et partenaires.",
    },
  ],
};

export const CONCESS_AVENIR = {
  title: "Les prochaines étapes de l'univers Ndjoka",
  text: "L'innovation fait partie de la croissance de Ndjoka. Plusieurs produits sont actuellement en développement afin de répondre à de nouveaux besoins et d'accompagner l'expansion de la marque.",
  subtitle: 'Produits en développement',
  produits: [
    {
      name: 'Chin Chin Ndjoka',
      description:
        'Une gamme de croquettes sucrées et croustillantes actuellement en développement pour enrichir la gamme.',
      badge: 'Prochainement',
      image: chinChinPlaceholder,
      alt: 'Chin Chin Ndjoka — produit en développement',
    },
    {
      name: "Jus d'oseille Ndjoka",
      description:
        'Une boisson africaine naturelle et rafraîchissante en cours de développement pour accompagner nos snacks.',
      badge: 'Prochainement',
      image: oseillePlaceholder,
      alt: "Jus d'oseille Ndjoka — produit en développement",
    },
  ],
};

export const CONCESS_INVEST = {
  title: 'Commencez votre activité avec Ndjoka à partir de 25.000 FCFA',
  description:
    'Rejoignez le réseau Ndjoka avec un investissement accessible et démarrez progressivement votre activité avec des produits déjà appréciés du marché.',
  image: {
    src: pointDeVentesImage,
    alt: 'Point de vente Ndjoka avec branding visible et produits bien rangés',
  },
  inclus: [
    {
      icon: 'inventory',
      title: 'Produits à prix concessionnaire',
      text: 'Accédez à un stock pensé pour faciliter votre démarrage.',
    },
    {
      icon: 'handshake',
      title: 'Accompagnement continu',
      text: "Bénéficiez d'un suivi régulier pour mieux évoluer avec la marque.",
    },
    {
      icon: 'volume_up',
      title: 'Communication et visibilité',
      text: 'Ndjoka aide à mettre en avant votre point de vente et vos produits.',
    },
  ],
};

export const CONCESS_FAQ = [
  {
    question: 'Comment devenir concessionnaire Ndjoka ?',
    answer: 'Il suffit de nous contacter via WhatsApp pour être pris en charge par notre équipe.',
  },
  {
    question: 'Quel est le montant pour commencer ?',
    answer: 'Vous pouvez rejoindre le réseau Ndjoka à partir de 25.000 FCFA.',
  },
  {
    question: 'Faut-il déjà avoir une boutique ?',
    answer: 'Non. Ndjoka accompagne aussi les personnes qui souhaitent démarrer progressivement.',
  },
  {
    question: 'Les produits se vendent-ils réellement ?',
    answer:
      "Ndjoka est déjà présent dans plusieurs villes, supermarchés et points de distribution au Cameroun et à l'international.",
  },
  {
    question: 'Quels avantages reçoit un concessionnaire ?',
    answer: 'Stock à prix réduit, visibilité, formation, branding et accompagnement commercial.',
  },
  {
    question: 'Ndjoka livre-t-il dans plusieurs villes ?',
    answer: "Oui. Le réseau Ndjoka couvre déjà plusieurs villes du Cameroun et d'autres pays.",
  },
];

export const CONCESS_FINAL = {
  title: 'Rejoignez un réseau qui distribue déjà les produits Ndjoka',
  description:
    'Développez votre activité avec des produits déjà appréciés du marché et un accompagnement pensé pour votre réussite.',
};
