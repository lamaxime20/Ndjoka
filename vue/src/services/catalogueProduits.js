import natureImage from '../assets/images/accueil/produits/ndjoka_nature.webp';
import sucreeImage from '../assets/images/accueil/produits/ndjoka_sucre.webp';
import epiceeImage from '../assets/images/accueil/produits/ndjoka_pimente.webp';
import kilichiImage from '../assets/images/Produits/kilichi.webp';
import chinChinImage from '../assets/images/Produits/chins_chins.webp';
import oseilleImage from '../assets/images/Produits/canette_oseille.webp';

// ─────────────────────────────────────────────────────────────
// Source de vérité unique pour le catalogue produits Ndjoka.
// Consommée par accueil, produits, concessionnaires, investisseurs
// et nos-points-de-vente pour éviter toute duplication de données.
// ─────────────────────────────────────────────────────────────

export function formatPrixFCFA(prix) {
  return `${prix.toLocaleString('fr-FR')} FCFA`;
}

// ── Produits disponibles ───────────────────────────────────────
export const PRODUITS_DISPONIBLES = [
  {
    id: 'nature',
    nom: 'Chips de Plantain Mûres',
    saveur: 'Nature',
    description:
      'Croustillantes et légères, parfaites pour les petites faims, les voyages, les soirées et les apéritifs.',
    benefice: 'Le snack simple et efficace que les clients rachètent facilement.',
    image: natureImage,
    alt: 'Sachet de chips plantain mûres Ndjoka',
    formats: [
      { poids: '100g', prix: 500 },
      { poids: '250g', prix: 2500 },
    ],
  },
  {
    id: 'non-mures',
    nom: 'Chips de Plantain Non Mûres',
    saveur: 'Non mûres',
    description: 'Une texture légère et croustillante avec une saveur douce qui plaît immédiatement.',
    benefice: 'Une saveur réconfortante qui attire facilement les consommateurs.',
    image: sucreeImage,
    alt: 'Sachet de chips plantain non mûres Ndjoka',
    formats: [
      { poids: '100g', prix: 500 },
      { poids: '250g', prix: 2500 },
    ],
  },
  {
    id: 'epicee',
    nom: 'Chips de Plantain Épicées',
    saveur: 'Épicées',
    description: 'Une saveur plus intense pour les amateurs de snacks relevés et savoureux.',
    benefice: 'Le produit qui attire les consommateurs à la recherche de sensations plus fortes.',
    image: epiceeImage,
    alt: 'Sachet de chips plantain épicées Ndjoka',
    formats: [
      { poids: '100g', prix: 500 },
      { poids: '250g', prix: 3000 },
    ],
    glow: true,
  },
  {
    id: 'kilichi',
    nom: 'Kilichi Ndjoka',
    saveur: 'Viande séchée',
    description:
      "Préparé à partir de viande soigneusement sélectionnée et assaisonnée avec un mélange d'épices inspiré des traditions sahéliennes, le Kilichi Ndjoka offre une expérience riche en goût, intense et authentique.",
    benefice: 'La puissance des saveurs africaines dans un format pratique et gourmand.',
    badge: 'Nouveau produit',
    image: kilichiImage,
    alt: 'Kilichi Ndjoka — viande séchée épicée aux saveurs sahéliennes',
    // Format/poids du sachet non précisé par le client — à confirmer.
    formats: [{ poids: null, prix: 1000 }],
  },
];

// ── Produits en développement (jamais de prix, toujours un badge) ──
export const PRODUITS_EN_DEVELOPPEMENT = [
  {
    id: 'chips-patate',
    nom: 'Chips de patate',
    description: 'Une nouvelle référence actuellement en développement pour enrichir la gamme Ndjoka.',
    badge: 'Bientôt disponible',
    image: null,
    icon: 'nutrition',
  },
  {
    id: 'caramels',
    nom: 'Caramels',
    description: 'Une gamme sucrée actuellement en développement pour accompagner l’expansion de Ndjoka.',
    badge: 'Bientôt disponible',
    image: null,
    icon: 'cookie',
  },
  {
    id: 'jus-oseille',
    nom: "Jus d'oseille Ndjoka",
    description:
      'Une boisson africaine naturelle et rafraîchissante en cours de développement pour accompagner nos snacks.',
    badge: 'Bientôt disponible',
    image: oseilleImage,
    alt: "Jus d'oseille Ndjoka — produit en développement",
  },
  {
    id: 'biscuits',
    nom: 'Biscuits',
    description: 'Une nouvelle gamme actuellement en développement pour enrichir la gamme Ndjoka.',
    badge: 'Bientôt disponible',
    image: null,
    icon: 'bakery_dining',
  },
  {
    id: 'chin-chin',
    nom: 'Chin Chin Ndjoka',
    description:
      'Une gamme de croquettes sucrées et croustillantes actuellement en développement pour enrichir la gamme.',
    badge: 'Bientôt disponible',
    image: chinChinImage,
    alt: 'Chin Chin Ndjoka — produit en développement',
  },
];
