import heroImage from '../assets/images/contacts/hero.webp';
import supermarcheImage from '../assets/images/contacts/produits_ndjoka_supermarche.webp';
import groupeImage from '../assets/images/accueil/about/equipe_ndjoka.webp';

export const APROPOS_WHATSAPP_URL =
  'https://wa.me/237672529478?text=Bonjour%2C%20je%20souhaite%20contacter%20l%27%C3%A9quipe%20Ndjoka.';

export const APROPOS_HERO = {
  eyebrow: 'À propos de Ndjoka',
  title: "L'histoire humaine derrière Ndjoka",
  paragraphs: [
    "Ndjoka est une marque agroalimentaire africaine construite autour d'une vision simple : valoriser les produits africains à travers une distribution moderne, accessible et ambitieuse.",
    "Aujourd'hui, la marque continue de grandir avec ses produits, son réseau et son équipe.",
  ],
  cta: "Contacter l'équipe",
  image: heroImage,
};

export const APROPOS_DEFINITION = {
  eyebrow: 'Qui est Ndjoka',
  title: "Ce qu'est réellement Ndjoka",
  paragraphs: [
    "Ndjoka n'est pas seulement une marque de chips.",
    "C'est une entreprise agroalimentaire camerounaise qui développe des produits africains, construit un réseau de distribution et crée des opportunités pour concessionnaires et investisseurs.",
  ],
  image: supermarcheImage,
  imageAlt: 'Produits Ndjoka en supermarché',
  blocs: [
    {
      title: 'Une marque agroalimentaire africaine',
      text: 'Ndjoka développe progressivement des produits alimentaires africains pensés pour le marché moderne.',
    },
    {
      title: 'Un réseau de distribution actif',
      text: "Les produits Ndjoka sont déjà présents dans plusieurs villes du Cameroun, dans plusieurs pays africains et dans la diaspora.",
    },
    {
      title: 'Une vision de croissance',
      text: "La marque continue d'étendre ses produits, sa distribution et ses opportunités de développement.",
    },
    {
      title: 'Une entreprise construite sur le terrain',
      text: "Ndjoka avance progressivement grâce à une vraie présence terrain, des partenaires et une communauté qui grandit.",
    },
  ],
};

export const APROPOS_NOM = {
  eyebrow: 'Le nom',
  title: 'Pourquoi le nom "Ndjoka" ?',
  description:
    "Le nom Ndjoka représente une identité, une histoire et une volonté de valoriser les produits africains à travers une marque moderne et ambitieuse.",
  intro:
    "Ndjoka a été pensé comme une marque proche des consommateurs, enracinée dans la culture africaine mais tournée vers l'avenir.",
  listIntro: "Aujourd'hui, ce nom représente progressivement :",
  highlights: [
    'la qualité,',
    'la distribution,',
    'la proximité,',
    "et l'ambition de construire une marque africaine forte.",
  ],
};

export const APROPOS_EVOLUTION = {
  eyebrow: 'Notre parcours',
  title: 'Une évolution construite étape par étape',
  description:
    "Depuis ses débuts, Ndjoka développe progressivement ses produits, son réseau et sa présence dans plusieurs marchés.",
  steps: [
    {
      num: '01',
      title: 'Les premiers produits',
      text: "Ndjoka démarre avec les chips de plantain pour proposer des snacks africains modernes et accessibles.",
    },
    {
      num: '02',
      title: 'Développement du réseau',
      text: "La marque étend progressivement ses points de distribution dans plusieurs villes du Cameroun.",
    },
    {
      num: '03',
      title: 'Expansion internationale',
      text: "Les produits Ndjoka commencent à être distribués dans plusieurs pays africains et dans la diaspora.",
    },
    {
      num: '04',
      title: 'Nouveaux produits',
      text: "Ndjoka prépare progressivement de nouvelles gammes pour accompagner sa croissance agroalimentaire.",
    },
    {
      num: '05',
      title: 'Vision long terme',
      text: "L'objectif est de construire une marque agroalimentaire africaine forte, moderne et durable.",
    },
  ],
};

export const APROPOS_ORIGINES = {
  eyebrow: 'Nos origines',
  title: 'Une histoire portée par une communauté',
  subtitle:
    "Ndjoka n'est pas né dans un bureau. C'est un projet porté par une communauté, une tontine, et la volonté de plusieurs personnes de faire grandir ensemble une marque africaine.",
  text:
    "À l'origine de Ndjoka, il y a une conviction simple : les produits africains méritent une distribution moderne et accessible. Le Docteur Claudel a réuni autour de cette idée une communauté entière, une tontine prête à y croire et à la porter. C'est cette énergie collective qui fait encore avancer Ndjoka aujourd'hui, produit après produit, ville après ville.",
  quote: 'Un projet porté par une tontine, une communauté.',
  image: groupeImage,
  imageAlt: 'Groupe de personnes réunies autour des produits Ndjoka',
  imageWidth: 1000,
  imageHeight: 700,
};

export const APROPOS_PRESENCE = {
  eyebrow: 'Notre réseau',
  title: 'Une marque déjà présente dans plusieurs marchés',
  description:
    "Ndjoka continue de développer sa présence au Cameroun, en Afrique et dans la diaspora.",
  blocs: [
    { text: 'Présence dans plusieurs villes du Cameroun' },
    { text: 'Distribution dans plusieurs pays africains' },
    { text: 'Présence dans la diaspora' },
    { text: 'Réseau de distributeurs en expansion' },
    { text: 'Produits déjà commercialisés sur le marché' },
    { text: 'Développement progressif de nouveaux produits' },
  ],
};

export const APROPOS_CONTACT = {
  eyebrow: 'Contact',
  title: "Contactez l'équipe Ndjoka",
  paragraphs: [
    "Une question, un partenariat, un projet de distribution ou d'investissement ?",
    "L'équipe Ndjoka reste disponible pour échanger avec vous.",
  ],
  items: [
    {
      icon: 'chat',
      label: 'WhatsApp',
      value: '+237 6 72 52 94 78',
      href: APROPOS_WHATSAPP_URL,
    },
    {
      icon: 'mail',
      label: 'Email',
      value: 'info@claudel-noubissie.com',
      href: 'mailto:info@claudel-noubissie.com',
    },
    {
      icon: 'groups',
      label: 'Facebook',
      value: 'Page Facebook Ndjoka',
      href: 'https://www.facebook.com/share/19EXzED1ww/',
    },
    {
      icon: 'work',
      label: 'LinkedIn',
      value: 'Page LinkedIn Ndjoka',
      href: 'https://www.linkedin.com/company/ndjokasarl/',
    },
    {
      icon: 'location_on',
      label: 'Localisation',
      value: 'Yaoundé, Cameroun',
      href: null,
    },
  ],
  cta: 'Écrire sur WhatsApp',
};
