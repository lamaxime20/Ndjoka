import chipsHeroImage from '../assets/images/accueil/hero/chips.webp';
import epiceeHeroImage from '../assets/images/accueil/produits/ndjoka_pimente.webp';
import kilichiHeroImage from '../assets/images/Produits/kilichi.webp';
import aboutImage from '../assets/images/accueil/about/equipe_ndjoka.webp';
import natureImage from '../assets/images/accueil/produits/ndjoka_nature.webp';
import sucreeImage from '../assets/images/accueil/produits/ndjoka_sucre.webp';
import epiceeImage from '../assets/images/accueil/produits/ndjoka_pimente.webp';
import kilichiImage from '../assets/images/Produits/kilichi.webp';
import {
  CONCESSIONNAIRES,
  INVESTISSEURS,
  PRODUITS,
} from './navigation.js';

export const HERO_CONTENT = {
  title: 'Ndjoka',
  description:
    "Des produits agroalimentaires africains déjà appréciés du marché. Rejoignez un réseau de distribution en pleine croissance et développez votre activité avec une marque déjà présente dans plusieurs villes et pays.",
  primaryCta: {
    label: 'Devenir concessionnaire',
    path: `/${CONCESSIONNAIRES}`,
  },
  secondaryCta: {
    label: 'Devenir investisseur',
    path: `/${INVESTISSEURS}`,
  },
  media: [
    {
      key: 'chips',
      src: chipsHeroImage,
      alt: 'Sachet de chips de plantain Ndjoka',
      className: 'accueilHero-media accueilHero-media--chips',
      width: 780,
      height: 780,
    },
    {
      key: 'epicee',
      src: epiceeHeroImage,
      alt: 'Chips plantain épicées Ndjoka',
      className: 'accueilHero-media accueilHero-media--drink',
      width: 768,
      height: 911,
      priority: true,
    },
    {
      key: 'kilichi',
      src: kilichiHeroImage,
      alt: 'Kilichi Ndjoka — viande séchée épicée',
      className: 'accueilHero-media accueilHero-media--chinChin',
      width: 768,
      height: 911,
    },
  ],
};

export const ABOUT_CONTENT = {
  title: 'Une marque agroalimentaire africaine en pleine expansion',
  description:
    "Ndjoka transforme et distribue des produits africains pensés pour le marché d'aujourd'hui. Au-delà des chips de plantain, nous développons un véritable réseau de distribution avec une vision de croissance locale et internationale.",
  cta: {
    label: 'Découvrir Ndjoka',
    path: '/contact',
  },
  image: {
    src: aboutImage,
    alt: "Équipe Ndjoka au travail autour de la distribution et du développement de la marque",
  },
};

export const PRODUCT_INTRO = {
  title: 'Des produits pensés pour séduire et se vendre facilement',
  description:
    'Des produits propres, bien emballés et déjà appréciés par de nombreux consommateurs.',
  primaryCta: {
    label: 'Devenir concessionnaire',
    path: `/${CONCESSIONNAIRES}`,
  },
  secondaryCta: {
    label: 'Voir tous les produits',
    path: `/${PRODUITS}`,
  },
};

export const PRODUCT_ITEMS = [
  {
    name: 'Chips Plantain Mûres',
    description:
      'Croustillantes et légères, parfaites pour les petites faims, les voyages, les soirées et les apéritifs.',
    badge: 'Format 250g',
    image: natureImage,
    alt: 'Sachet Ndjoka de chips plantain mûres',
    tone: 'nature',
    width: 768,
    height: 911,
  },
  {
    name: 'Chips Plantain Non Mûres',
    description:
      'Une texture croustillante avec une saveur douce qui plaît immédiatement aux consommateurs.',
    badge: 'Format 250g',
    image: sucreeImage,
    alt: 'Sachet Ndjoka de chips plantain non mûres',
    tone: 'sucree',
    width: 768,
    height: 911,
  },
  {
    name: 'Chips Plantain Épicées',
    description:
      'Une saveur relevée pour les amateurs de snacks plus intenses et savoureux.',
    badge: 'Format 250g',
    image: epiceeImage,
    alt: 'Sachet Ndjoka de chips plantain épicées',
    tone: 'epicee',
    width: 768,
    height: 911,
  },
  {
    name: 'Kilichi Ndjoka',
    description:
      'Préparé à partir de viande soigneusement sélectionnée et assaisonnée avec un mélange d\'épices inspiré des traditions sahéliennes.',
    badge: 'Nouveau produit',
    image: kilichiImage,
    alt: 'Kilichi Ndjoka — viande séchée épicée aux saveurs sahéliennes',
    tone: 'chinChin',
    width: 768,
    height: 911,
  },
];

export const BENEFITS_CONTENT = {
  title: 'Pourquoi rejoindre le réseau Ndjoka ?',
  description:
    'Nous aidons nos concessionnaires à vendre plus facilement avec un accompagnement concret.',
  items: [
    {
      title: 'Stock à prix réduit',
      description: 'Commencez avec des produits accessibles et adaptés à votre budget.',
    },
    {
      title: 'Visibilité pour votre point de vente',
      description: 'Ndjoka communique sur ses plateformes pour aider à écouler votre stock.',
    },
    {
      title: 'Formation gratuite',
      description: "Profitez d'un accompagnement régulier pour mieux vendre les produits Ndjoka.",
    },
    {
      title: 'Support commercial',
      description: 'Nos équipes vous accompagnent dans vos préoccupations du quotidien.',
    },
    {
      title: 'Branding offert',
      description: 'Recevez des supports pour améliorer la visibilité de votre point de vente.',
    },
    {
      title: 'Une vraie opportunité business',
      description: 'Rejoignez une marque déjà présente sur plusieurs marchés.',
    },
  ],
};

export const PRESENCE_CONTENT = {
  title: 'Une marque déjà présente sur plusieurs marchés',
  description:
    'Ndjoka est déjà distribué dans plusieurs villes du Cameroun et dans différents pays.',
  stats: [
    {
      value: '+15',
      label: 'villes couvertes',
    },
    {
      value: 'Afrique',
      label: 'présence au Cameroun et dans la diaspora',
    },
    {
      value: 'Actif',
      label: 'des points de distribution déjà en mouvement',
    },
    {
      value: 'Expansion',
      label: 'un réseau commercial qui continue de grandir',
    },
  ],
  testimonials: [
    'Les produits se vendent facilement et les clients reviennent souvent.',
    'Le packaging inspire confiance dès le premier regard.',
    "L'accompagnement Ndjoka nous aide réellement à évoluer.",
  ],
};

export const INVESTOR_CONTENT = {
  title: 'Investissez dans une marque agroalimentaire africaine ambitieuse',
  description:
    'Ndjoka développe son réseau de distribution, élargit sa gamme de produits et prépare son expansion. Rejoignez une entreprise qui valorise les produits africains avec une vision de croissance durable.',
  cta: {
    label: 'Devenir investisseur Ndjoka',
    path: `/${INVESTISSEURS}`,
  },
};

export const FAQ_CONTENT = {
  title: 'Questions fréquentes',
  description: "Tout ce qu'il faut savoir avant de rejoindre Ndjoka.",
  groups: [
    {
      title: 'FAQ Concessionnaires',
      items: [
        {
          question: 'Comment devenir concessionnaire Ndjoka ?',
          answer:
            'Il suffit de remplir le formulaire de candidature pour être contacté par notre équipe.',
        },
        {
          question: 'Faut-il déjà avoir une boutique ?',
          answer:
            'Non. Ndjoka accompagne aussi les personnes qui souhaitent démarrer progressivement.',
        },
        {
          question: 'Quels sont les avantages pour les concessionnaires ?',
          answer:
            'Stock à prix réduit, visibilité, accompagnement, formation et support commercial.',
        },
      ],
    },
    {
      title: 'FAQ Investisseurs',
      items: [
        {
          question: 'Pourquoi investir dans Ndjoka ?',
          answer:
            'Parce que Ndjoka construit une marque agroalimentaire africaine avec une vision de croissance et de distribution internationale.',
        },
        {
          question: 'Comment être contacté pour un investissement ?',
          answer:
            'Vous pouvez soumettre votre demande via le formulaire investisseur du site.',
        },
      ],
    },
  ],
};

export const FINAL_CTA_CONTENT = {
  title: "Rejoignez dès aujourd'hui le réseau Ndjoka",
  description:
    'Développez votre activité avec des produits déjà appréciés du marché et un accompagnement pensé pour votre réussite.',
  cta: {
    label: 'Devenir concessionnaire',
    path: `/${CONCESSIONNAIRES}`,
  },
};
