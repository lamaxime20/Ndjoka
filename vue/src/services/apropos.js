import heroImage from '../assets/images/contacts/hero.webp';
import supermarcheImage from '../assets/images/contacts/produits_ndjoka_supermarche.webp';
import dgImage from '../assets/images/contacts/equipe_ndjoka/Directeur_general.webp';
import dgaImage from '../assets/images/contacts/equipe_ndjoka/Directeur_General_Adjoint.webp';
import productionImage from '../assets/images/contacts/equipe_ndjoka/Directeur_de_production.webp';
import financierImage from '../assets/images/contacts/equipe_ndjoka/Directeur_Financier.webp';
import marketingImage from '../assets/images/contacts/equipe_ndjoka/Directrice_Marketing_et_Com.webp';
import juridiqueImage from '../assets/images/contacts/equipe_ndjoka/Directeur_Juridique_et_Fiscale.webp';
import ventesImage from '../assets/images/contacts/equipe_ndjoka/Responsable_des_ventes.webp';
import financieresImage from '../assets/images/contacts/equipe_ndjoka/Directrice_des_affaires_financieres.webp';
import assistanteImage from '../assets/images/contacts/equipe_ndjoka/Assistante_de_direction.webp';

export const APROPOS_WHATSAPP_URL =
  'https://wa.me/237656188416?text=' +
  encodeURIComponent("Bonjour, je souhaite contacter l'équipe Ndjoka.");

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

export const APROPOS_EQUIPE = {
  eyebrow: "L'équipe",
  title: 'Les personnes derrière Ndjoka',
  description: 'Une équipe réelle, proche du terrain et engagée dans le développement de la marque.',
  members: [
    {
      name: 'Daryl Kandeu',
      role: 'Directeur Général',
      description:
        "Pilote la vision globale de Ndjoka, le développement stratégique de la marque et son expansion progressive.",
      image: dgImage,
      facebook: 'https://www.facebook.com/daril.kandeu.3',
    },
    {
      name: 'Ruther Ford TSIMENE',
      role: 'Directeur Général Adjoint',
      description:
        "Accompagne le développement opérationnel de Ndjoka et la coordination des activités de croissance.",
      image: dgaImage,
      facebook: 'https://www.facebook.com/rutherfordtsimene77',
    },
    {
      name: 'Gamaliel FEHANG',
      role: 'Directeur de Production',
      description: "Supervise la production et veille à la qualité des produits Ndjoka.",
      image: productionImage,
      facebook: 'https://www.facebook.com/gamaliel.fehang',
    },
    {
      name: 'Roger LONLA',
      role: 'Directeur Financier',
      description:
        "Assure le suivi financier et accompagne la structuration du développement de l'entreprise.",
      image: financierImage,
      facebook: 'https://www.facebook.com/Rogerlonla237',
    },
    {
      name: 'Saurelle NYOMA',
      role: 'Directrice Marketing et Communication',
      description:
        "Développe l'image de marque, la communication et la visibilité de Ndjoka.",
      image: marketingImage,
      facebook: 'https://www.facebook.com/saurellenyoma',
    },
    {
      name: 'William KEMETIA',
      role: 'Directeur Juridique et Fiscal',
      description:
        "Supervise les aspects juridiques, administratifs et fiscaux liés au développement de Ndjoka.",
      image: juridiqueImage,
      facebook: 'https://www.facebook.com/william.weston.904',
    },
    {
      name: 'Christian BILO',
      role: 'Responsable des Ventes',
      description:
        "Accompagne le réseau de distribution et le développement commercial des produits Ndjoka.",
      image: ventesImage,
      facebook: 'https://www.facebook.com/daubege.bilo',
    },
    {
      name: 'Anne Marie AKUDA',
      role: 'Directrice des Affaires Financières',
      description:
        "Participe à la gestion financière et au suivi administratif des activités de la marque.",
      image: financieresImage,
      facebook: 'https://www.facebook.com/annemarie.akuda',
    },
    {
      name: 'Emilie MBARGA',
      role: 'Assistante de Direction',
      description:
        "Assure le suivi organisationnel et la coordination administrative des activités Ndjoka.",
      image: assistanteImage,
      facebook: 'https://www.facebook.com/emilie.mbarga.98',
    },
  ],
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
      value: '(+237) 6 56 18 84 16',
      href: APROPOS_WHATSAPP_URL,
    },
    {
      icon: 'mail',
      label: 'Email',
      value: 'contact@ndjoka237.com',
      href: 'mailto:contact@ndjoka237.com',
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
