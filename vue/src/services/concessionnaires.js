import heroImage from '../assets/images/concessionnaires/hero.webp';
import pointDeVentesImage from '../assets/images/concessionnaires/point_de_ventes.webp';
import natureImage from '../assets/images/accueil/produits/ndjoka_nature.webp';
import sucreeImage from '../assets/images/accueil/produits/ndjoka_sucre.webp';
import epiceeImage from '../assets/images/accueil/produits/ndjoka_pimente.webp';
import chinChinImage from '../assets/images/Produits/chins_chins.webp';

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
    name: 'Chips Plantain Nature',
    description:
      'Croustillantes et légères, parfaites pour les petites faims, les voyages, les soirées et les apéritifs.',
    format: 'Format 250g',
    image: natureImage,
    alt: 'Sachet de chips plantain nature Ndjoka',
  },
  {
    name: 'Chips Plantain Sucrées',
    description: 'Une saveur douce et croustillante qui plaît immédiatement aux consommateurs.',
    format: 'Format 250g',
    image: sucreeImage,
    alt: 'Sachet de chips plantain sucrées Ndjoka',
  },
  {
    name: 'Chips Plantain Épicées',
    description: 'Une saveur plus relevée pour les consommateurs qui aiment les snacks plus intenses.',
    format: 'Format 250g',
    image: epiceeImage,
    alt: 'Sachet de chips plantain épicées Ndjoka',
  },
  {
    name: 'Croquettes Chin Chin',
    description: 'Des croquettes sucrées, légères et très croustillantes à découvrir bientôt.',
    format: 'Bientôt disponible',
    badge: 'Bientôt disponible',
    image: chinChinImage,
    alt: 'Croquettes Chin Chin Ndjoka',
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
