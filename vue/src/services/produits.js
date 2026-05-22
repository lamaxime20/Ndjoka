import natureImage from '../assets/images/accueil/produits/ndjoka_nature.jpg';
import sucreeImage from '../assets/images/accueil/produits/ndjoka_sucre.jpg';
import epiceeImage from '../assets/images/accueil/produits/ndjoka_pimente.jpg';
import chinChinImage from '../assets/images/Produits/chins_chins.jpg';
import heroGroupImage from '../assets/images/Produits/Produits_Ndjoka.jpg';
import { CONCESSIONNAIRES, CONTACT } from './navigation.js';

export const PRODUITS_HERO = {
  eyebrow: 'Gamme Ndjoka',
  title: 'Nos Produits',
  description:
    "Des produits africains pensés pour être consommés… et revendus. Ndjoka développe des snacks propres, bien emballés et déjà appréciés dans plusieurs villes et pays.",
  primaryCta: { label: 'Devenir concessionnaire', path: `/${CONCESSIONNAIRES}` },
  secondaryCta: { label: 'Commander les produits', path: '#commande' },
  image: {
    src: heroGroupImage,
    alt: 'Gamme complète des produits Ndjoka présentée sur fond lumineux',
  },
};

export const PRODUITS_ITEMS = [
  {
    id: 'nature',
    saveur: 'Nature',
    name: 'Chips Plantain Nature',
    description:
      'Croustillantes et légères, parfaites pour les petites faims, les voyages, les soirées et les apéritifs.',
    format: '250g',
    prix: '1 500 FCFA',
    benefice: 'Le snack simple et efficace que les clients rachètent facilement.',
    image: natureImage,
    alt: 'Sachet de chips plantain nature Ndjoka',
    cta: { label: 'Devenir concessionnaire', path: `/${CONCESSIONNAIRES}` },
  },
  {
    id: 'sucree',
    saveur: 'Sucrée',
    name: 'Chips Plantain Sucrées',
    description:
      'Une texture légère et croustillante avec une saveur douce qui plaît immédiatement.',
    format: '250g',
    prix: '1 500 FCFA',
    benefice: 'Une saveur réconfortante qui attire facilement les consommateurs.',
    image: sucreeImage,
    alt: 'Sachet de chips plantain sucrées Ndjoka',
    cta: { label: 'Devenir concessionnaire', path: `/${CONCESSIONNAIRES}` },
  },
  {
    id: 'epicee',
    saveur: 'Épicée',
    name: 'Chips Plantain Épicées',
    description:
      'Une saveur plus intense pour les amateurs de snacks relevés et savoureux.',
    format: '250g',
    prix: '2 000 FCFA',
    benefice: 'Le produit qui attire les consommateurs à la recherche de sensations plus fortes.',
    image: epiceeImage,
    alt: 'Sachet de chips plantain épicées Ndjoka',
    cta: { label: 'Devenir concessionnaire', path: `/${CONCESSIONNAIRES}` },
    glow: true,
  },
  {
    id: 'chinChin',
    saveur: 'Sucrée',
    name: 'Croquettes Chin Chin',
    description:
      'Des croquettes rondes, croustillantes et gourmandes pensées pour les petites faims et les moments de partage.',
    format: '75g',
    prix: '500 FCFA',
    benefice: "Un produit gourmand qui donne envie d'en reprendre encore.",
    badge: 'Bientôt disponible',
    image: chinChinImage,
    alt: 'Croquettes Chin Chin Ndjoka',
    cta: { label: 'Devenir concessionnaire', path: `/${CONCESSIONNAIRES}` },
    warm: true,
  },
];

export const PRODUITS_QUALITE = {
  eyebrow: 'Qualité',
  title: "La qualité et l'hygiène au centre de notre production",
  description:
    "Chez Ndjoka, les produits sont soigneusement emballés et conditionnés pour garantir une consommation propre et rassurante.",
  blocs: [
    {
      icon: 'fa-solid fa-award',
      title: 'Conditionnement professionnel',
      text: 'Des emballages propres et bien présentés pour inspirer confiance dès le premier regard.',
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Production soignée',
      text: "Chaque produit est préparé avec une attention particulière portée à la qualité et à l'hygiène.",
    },
    {
      icon: 'fa-solid fa-boxes-stacked',
      title: 'Produits prêts à être distribués',
      text: 'Des formats pratiques et adaptés à la vente, aux points de distribution et aux supermarchés.',
    },
  ],
};

export const PRODUITS_RESEAU = {
  eyebrow: 'Concessionnaires',
  title: 'Revendez les produits Ndjoka et développez votre activité',
  description:
    'Ndjoka accompagne ses concessionnaires avec des produits déjà appréciés du marché et un support concret pour mieux vendre.',
  avantages: [
    {
      icon: 'fa-solid fa-coins',
      title: 'Stock accessible',
      text: 'Commencez avec un stock adapté à votre budget.',
    },
    {
      icon: 'fa-solid fa-bullhorn',
      title: 'Visibilité pour votre point de vente',
      text: 'Ndjoka communique sur ses plateformes pour aider à écouler votre stock.',
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'Formation gratuite',
      text: 'Recevez des conseils réguliers pour mieux vendre les produits Ndjoka.',
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'Accompagnement commercial',
      text: 'Nos équipes vous accompagnent dans vos préoccupations du quotidien.',
    },
  ],
  cta: { label: 'Devenir concessionnaire', path: `/${CONCESSIONNAIRES}` },
};

export const PRODUITS_COMMANDE = {
  eyebrow: 'Commande particulier',
  title: 'Commander les produits Ndjoka',
  description:
    "Vous souhaitez consommer les produits Ndjoka pour vous-même ou pour un événement ? Passez votre commande directement auprès de notre équipe.",
  cta: 'Commander maintenant',
  notice: 'Notre équipe vous recontacte rapidement pour confirmer votre commande.',
  produitsOptions: [
    'Chips Plantain Nature',
    'Chips Plantain Sucrées',
    'Chips Plantain Épicées',
    'Croquettes Chin Chin',
    'Mix — plusieurs produits',
  ],
};

export const PRODUITS_FINAL = {
  title: 'Faites grandir votre activité avec les produits Ndjoka',
  description:
    'Rejoignez un réseau de distribution en pleine croissance avec des produits déjà appréciés du marché.',
  primaryCta: { label: 'Devenir concessionnaire', path: `/${CONCESSIONNAIRES}` },
  secondaryCta: { label: 'Contacter Ndjoka', path: `/${CONTACT}` },
};

export function buildCommandeWhatsAppUrl(data) {
  const lines = [
    'Commande Ndjoka',
    `Nom : ${data.nom}`,
    `Téléphone : ${data.telephone}`,
    `Ville : ${data.ville}`,
    `Produits : ${data.produits}`,
    `Quantité : ${data.quantite}`,
    data.message ? `Message : ${data.message}` : '',
  ].filter(Boolean);
  return `https://wa.me/237683184360?text=${encodeURIComponent(lines.join('\n'))}`;
}
