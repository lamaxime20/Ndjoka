import heroGroupImage from '../assets/images/Produits/Produits_Ndjoka.webp';
import { CONCESSIONNAIRES, CONTACT } from './navigation.js';
import { PRODUITS_DISPONIBLES, PRODUITS_EN_DEVELOPPEMENT } from './catalogueProduits.js';

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

export const PRODUITS_ITEMS = PRODUITS_DISPONIBLES.map((p) => ({
  id: p.id,
  saveur: p.saveur,
  name: p.nom,
  description: p.description,
  formats: p.formats,
  benefice: p.benefice,
  badge: p.badge,
  image: p.image,
  alt: p.alt,
  cta:
    p.id === 'kilichi'
      ? { label: 'Découvrir le produit', path: '#commande' }
      : { label: 'Devenir concessionnaire', path: `/${CONCESSIONNAIRES}` },
  glow: p.glow,
}));

export const PRODUITS_AVENIR = {
  eyebrow: 'À venir',
  title: "Les prochaines étapes de l'univers Ndjoka",
  description:
    "L'innovation fait partie de la croissance de Ndjoka. Plusieurs produits sont actuellement en développement afin d'accompagner l'expansion de la marque.",
  produits: PRODUITS_EN_DEVELOPPEMENT.map((p) => ({
    name: p.nom,
    description: p.description,
    badge: p.badge,
    image: p.image,
    alt: p.alt,
    icon: p.icon,
  })),
};

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
  produitsOptions: [...PRODUITS_DISPONIBLES.map((p) => p.nom), 'Mix — plusieurs produits'],
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
  return `https://wa.me/237656188416?text=${encodeURIComponent(lines.join('\n'))}`;
}
