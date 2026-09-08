import heroImage from '../assets/images/concessionnaires/hero.webp';
import pointDeVentesImage from '../assets/images/concessionnaires/point_de_ventes.webp';
import { PRODUITS_DISPONIBLES, PRODUITS_EN_DEVELOPPEMENT } from './catalogueProduits.js';

const WHATSAPP_URL =
  'https://wa.me/237656188416?text=' +
  encodeURIComponent(
    "Bonjour, je souhaite devenir concessionnaire Ndjoka. Pouvez-vous me contacter pour plus d'informations ?"
  );

const DISTRIBUTEUR_WHATSAPP_URL =
  'https://wa.me/237656188416?text=' +
  encodeURIComponent(
    "Bonjour, je souhaite devenir distributeur Ndjoka. Pouvez-vous me contacter pour plus d'informations ?"
  );

const STARTER_WHATSAPP_URL =
  'https://wa.me/237656188416?text=' +
  encodeURIComponent(
    "Bonjour, je souhaite démarrer avec le palier d'essai Ndjoka à 25 000 FCFA. Pouvez-vous me contacter ?"
  );

export { WHATSAPP_URL as CONCESS_WHATSAPP_URL };
export { DISTRIBUTEUR_WHATSAPP_URL };
export { STARTER_WHATSAPP_URL };

export const CONCESS_HERO = {
  eyebrow: 'Réseau Ndjoka',
  title: 'Devenez concessionnaire Ndjoka',
  description:
    "Rejoignez un réseau de distribution qui commercialise déjà des produits appréciés dans plusieurs villes et pays. Développez votre activité avec une marque agroalimentaire africaine en pleine croissance.",
  image: {
    src: heroImage,
    alt: 'Concessionnaire Ndjoka présentant les produits dans un point de vente',
  },
  ctaSecondary: { label: 'Découvrir les paliers', anchor: '#paliers' },
};

// ── Comparaison des paliers du réseau Ndjoka ───────────────────
// Un palier d'essai accessible, puis deux niveaux de partenariat.
export const CONCESS_TIERS = {
  eyebrow: 'Nos paliers',
  title: 'Trois façons de rejoindre le réseau Ndjoka',
  description:
    "Commencez à votre rythme : un palier d'essai accessible, puis deux niveaux de partenariat pensés pour accompagner votre croissance.",
  starter: {
    key: 'starter',
    label: "Palier d'essai",
    montant: 'À partir de 25 000 FCFA',
    sousTitre: 'Pour démarrer progressivement',
    avantages: [
      'Produits à prix concessionnaire',
      'Accompagnement continu',
      'Communication et visibilité',
    ],
    cta: { label: "Démarrer avec ce palier", href: STARTER_WHATSAPP_URL },
    image: { src: pointDeVentesImage, alt: 'Point de vente Ndjoka avec branding visible et produits bien rangés' },
  },
  distributeur: {
    key: 'distributeur',
    label: 'Distributeur',
    montant: '500 paquets minimum',
    sousTitre: "L'entrée dans le réseau",
    avantages: ['Prix réduits', 'Communication et visibilité', 'Accompagnement', 'Branding', 'Formations'],
    cta: { label: 'Devenir distributeur', href: DISTRIBUTEUR_WHATSAPP_URL },
  },
  concessionnaire: {
    key: 'concessionnaire',
    label: 'Concessionnaire',
    montant: '1 000 paquets minimum',
    sousTitre: 'Le palier supérieur',
    highlight: true,
    avantages: [
      'Exclusivité sur une ville',
      'Prix usine plus avantageux',
      'Meilleure rentabilité',
      'Tous les avantages du distributeur',
      'Gestion du réseau de distributeurs de la ville',
    ],
    cta: { label: 'Devenir concessionnaire', href: WHATSAPP_URL },
  },
};

// ── Produits disponibles (réutilise le catalogue central) ──────
export const CONCESS_PRODUITS = PRODUITS_DISPONIBLES.map((p) => ({
  name: p.nom,
  description: p.description,
  formats: p.formats,
  badge: p.badge,
  image: p.image,
  alt: p.alt,
}));

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

// ── Produits en développement (réutilise le catalogue central) ──
export const CONCESS_AVENIR = {
  title: "Les prochaines étapes de l'univers Ndjoka",
  text: "L'innovation fait partie de la croissance de Ndjoka. Plusieurs produits sont actuellement en développement afin de répondre à de nouveaux besoins et d'accompagner l'expansion de la marque.",
  subtitle: 'Produits en développement',
  produits: PRODUITS_EN_DEVELOPPEMENT.map((p) => ({
    name: p.nom,
    description: p.description,
    badge: p.badge,
    image: p.image,
    alt: p.alt,
    icon: p.icon,
  })),
};

export const CONCESS_FAQ = [
  {
    question: 'Comment devenir concessionnaire Ndjoka ?',
    answer: 'Il suffit de nous contacter via WhatsApp pour être pris en charge par notre équipe.',
  },
  {
    question: 'Quel est le montant pour commencer ?',
    answer:
      "Vous pouvez démarrer dès 25 000 FCFA avec notre palier d'essai, rejoindre le réseau comme distributeur à partir de 500 paquets, ou devenir concessionnaire à partir de 1 000 paquets.",
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
    question: 'Quelle est la différence entre distributeur et concessionnaire ?',
    answer:
      "Le distributeur est le premier niveau du réseau (500 paquets minimum). Le concessionnaire est le palier supérieur (1 000 paquets minimum) : il bénéficie de tous les avantages du distributeur, plus l'exclusivité sur une ville, un prix usine plus avantageux et la gestion du réseau de distributeurs de sa ville.",
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
