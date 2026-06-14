import natureImage from '../assets/images/accueil/produits/ndjoka_nature.webp';
import sucreeImage from '../assets/images/accueil/produits/ndjoka_sucre.webp';
import epiceeImage from '../assets/images/accueil/produits/ndjoka_pimente.webp';
import kilichiImage from '../assets/images/produits/kilichi.webp';
import heroGroupImage from '../assets/images/Produits/Produits_Ndjoka.webp';
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
    name: 'Chips Plantain Mûres',
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
    saveur: 'Non mûres',
    name: 'Chips Plantain Non Mûres',
    description:
      'Une texture légère et croustillante avec une saveur douce qui plaît immédiatement.',
    format: '250g',
    prix: '1 500 FCFA',
    benefice: 'Une saveur réconfortante qui attire facilement les consommateurs.',
    image: sucreeImage,
    alt: 'Sachet de chips plantain non mûres Ndjoka',
    cta: { label: 'Devenir concessionnaire', path: `/${CONCESSIONNAIRES}` },
  },
  {
    id: 'epicee',
    saveur: 'Épicées',
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
    id: 'kilichi',
    saveur: 'Viande séchée',
    name: 'Kilichi Ndjoka',
    description:
      'Préparé à partir de viande soigneusement sélectionnée et assaisonnée avec un mélange d\'épices inspiré des traditions sahéliennes, le Kilichi Ndjoka offre une expérience riche en goût, intense et authentique.',
    format: 'Nouveau produit',
    prix: null,
    benefice: 'La puissance des saveurs africaines dans un format pratique et gourmand.',
    badge: 'Nouveau produit',
    image: kilichiImage,
    alt: 'Kilichi Ndjoka — viande séchée épicée aux saveurs sahéliennes',
    cta: { label: 'Découvrir le produit', path: '#commande' },
  },
];

export const PRODUITS_QUALITE = {
  eyebrow: 'Qualité',
  title: "La qualité et l'hygiène au centre de notre production",
  description:
    "Chez Ndjoka, les produits sont soigneusement emballés et conditionnés pour garantir une consommation propre et rassurante.",
  blocs: [
    {
      icon: 'workspace_premium',
      title: 'Conditionnement professionnel',
      text: 'Des emballages propres et bien présentés pour inspirer confiance dès le premier regard.',
    },
    {
      icon: 'verified_user',
      title: 'Production soignée',
      text: "Chaque produit est préparé avec une attention particulière portée à la qualité et à l'hygiène.",
    },
    {
      icon: 'inventory_2',
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
      icon: 'payments',
      title: 'Stock accessible',
      text: 'Commencez avec un stock adapté à votre budget.',
    },
    {
      icon: 'campaign',
      title: 'Visibilité pour votre point de vente',
      text: 'Ndjoka communique sur ses plateformes pour aider à écouler votre stock.',
    },
    {
      icon: 'school',
      title: 'Formation gratuite',
      text: 'Recevez des conseils réguliers pour mieux vendre les produits Ndjoka.',
    },
    {
      icon: 'support_agent',
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
    'Chips Plantain Mûres',
    'Chips Plantain Non Mûres',
    'Chips Plantain Épicées',
    'Kilichi Ndjoka',
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
