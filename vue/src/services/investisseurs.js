import heroImage from '../assets/images/investisseurs/hero.webp';
import natureImage from '../assets/images/accueil/produits/ndjoka_nature.webp';
import sucreeImage from '../assets/images/accueil/produits/ndjoka_sucre.webp';
import epiceeImage from '../assets/images/accueil/produits/ndjoka_pimente.webp';
import chinChinImage from '../assets/images/Produits/chins_chins.webp';

export const INVEST_WHATSAPP_URL =
  'https://wa.me/237683184360?text=' +
  encodeURIComponent(
    "Bonjour, je souhaite en savoir plus sur les opportunités d'investissement chez Ndjoka. Pouvez-vous me contacter ?"
  );

export const INVEST_HERO = {
  title: "Investissez dans l'expansion de Ndjoka",
  description:
    "Participez à la croissance d'une marque agroalimentaire africaine déjà présente dans plusieurs villes et pays. Ndjoka développe un réseau de distribution, de nouveaux produits et une vision de croissance à long terme.",
  cta: 'Devenir investisseur',
  image: {
    src: heroImage,
    alt: 'Ndjoka — marque agroalimentaire africaine en expansion',
  },
};

export const INVEST_OPPORTUNITE = {
  title: 'Une marque africaine construite pour grandir',
  description:
    "Ndjoka développe progressivement un écosystème agroalimentaire pensé pour la distribution à grande échelle en Afrique et dans la diaspora.",
  blocs: [
    {
      title: 'Croissance du réseau',
      text: "Les produits Ndjoka sont déjà distribués dans plusieurs villes du Cameroun et à l'international.",
    },
    {
      title: 'Expansion de la gamme',
      text: "Ndjoka prépare progressivement de nouveaux produits pour élargir sa présence sur le marché agroalimentaire.",
    },
    {
      title: 'Distribution en développement',
      text: "La marque continue d'étendre son réseau de concessionnaires, partenaires et points de vente.",
    },
    {
      title: 'Vision industrielle',
      text: "L'objectif est de structurer une entreprise agroalimentaire africaine capable de produire et distribuer à grande échelle.",
    },
    {
      title: 'Marché africain en forte demande',
      text: "Les produits alimentaires africains connaissent une demande croissante au Cameroun, en Afrique et dans la diaspora.",
    },
    {
      title: 'Présence internationale',
      text: "Ndjoka possède déjà des points de distribution dans plusieurs pays africains et dans la diaspora.",
    },
  ],
};

export const INVEST_PROCESS = {
  title: "Comment fonctionne l'investissement chez Ndjoka ?",
  description:
    "Ndjoka accompagne les investisseurs qui souhaitent participer à la croissance de la marque et au développement de ses activités.",
  steps: [
    {
      num: '01',
      title: 'Prise de contact',
      text: "Vous échangez avec l'équipe Ndjoka pour découvrir la vision, les projets et les opportunités de développement.",
    },
    {
      num: '02',
      title: 'Présentation du projet',
      text: "Les objectifs de croissance, d'expansion et les besoins de développement vous sont présentés de manière claire.",
    },
    {
      num: '03',
      title: 'Participation à la croissance',
      text: "Vous contribuez au développement d'une marque agroalimentaire africaine en pleine expansion.",
    },
    {
      num: '04',
      title: 'Suivi et évolution',
      text: "Vous suivez l'évolution du réseau, des produits et des projets futurs de Ndjoka.",
    },
  ],
};

export const INVEST_PRODUITS = {
  title: 'Des produits déjà présents sur le marché',
  description: "Une entreprise réelle, des produits réels et un réseau déjà actif.",
  items: [
    {
      name: 'Chips Plantain Nature',
      description:
        "Des chips croustillantes et légères déjà appréciées pour les voyages, apéritifs et petites faims.",
      image: natureImage,
      alt: 'Chips Plantain Nature Ndjoka',
    },
    {
      name: 'Chips Plantain Sucrées',
      description: "Une saveur douce et croustillante pensée pour une consommation régulière.",
      image: sucreeImage,
      alt: 'Chips Plantain Sucrées Ndjoka',
    },
    {
      name: 'Chips Plantain Épicées',
      description:
        "Une version plus relevée destinée aux consommateurs qui aiment les saveurs plus intenses.",
      image: epiceeImage,
      alt: 'Chips Plantain Épicées Ndjoka',
    },
    {
      name: 'Croquettes Chin Chin',
      description:
        "Une nouvelle gamme prévue pour accompagner l'expansion future des produits Ndjoka.",
      image: chinChinImage,
      alt: 'Croquettes Chin Chin Ndjoka',
    },
  ],
};

export const INVEST_STATS = {
  title: 'Une marque déjà présente dans plusieurs marchés',
  description:
    "Ndjoka développe progressivement sa présence au Cameroun, en Afrique et dans la diaspora.",
  count: { value: 15, label: 'villes couvertes au Cameroun' },
  items: [
    { label: 'Présence dans plusieurs pays africains' },
    { label: 'Distribution active dans la diaspora' },
    { label: 'Une gamme de produits déjà commercialisée' },
    { label: 'Un réseau de distribution en expansion' },
    { label: 'Des produits déjà présents dans des supermarchés et points de vente' },
  ],
  temoignages: [
    "Ndjoka possède déjà une vraie présence terrain et une vision de croissance claire.",
    "La marque montre un potentiel intéressant pour le marché agroalimentaire africain.",
    "Le réseau de distribution déjà existant renforce la crédibilité du projet.",
  ],
};

export const INVEST_VISION = {
  title: 'La vision Ndjoka pour les prochaines années',
  description:
    "Ndjoka veut construire une marque agroalimentaire africaine capable de produire, distribuer et exporter plusieurs gammes de produits à grande échelle.",
  items: [
    {
      title: 'Développer la production',
      text: "Structurer progressivement une capacité de production plus importante pour répondre à la demande.",
    },
    {
      title: 'Étendre la distribution',
      text: "Renforcer la présence Ndjoka dans davantage de villes, pays africains et marchés internationaux.",
    },
    {
      title: 'Créer de nouvelles gammes',
      text: "Développer de nouveaux produits agroalimentaires africains adaptés au marché moderne.",
    },
    {
      title: 'Construire une marque forte',
      text: "Faire de Ndjoka une référence agroalimentaire africaine reconnue pour ses produits et son réseau.",
    },
  ],
};

export const INVEST_FAQ = [
  {
    question: "Comment puis-je investir dans Ndjoka ?",
    answer:
      "Il vous suffit de nous contacter via WhatsApp pour démarrer une conversation avec l'équipe Ndjoka et découvrir les opportunités disponibles.",
  },
  {
    question: "Ndjoka est-elle déjà présente sur le marché ?",
    answer:
      "Oui. Les produits Ndjoka sont déjà distribués dans plusieurs villes du Cameroun, dans plusieurs pays africains et dans la diaspora.",
  },
  {
    question: "Quelle est la vision de croissance de Ndjoka ?",
    answer:
      "Ndjoka vise à structurer une capacité de production industrielle, étendre son réseau de distribution et développer de nouvelles gammes de produits agroalimentaires africains.",
  },
  {
    question: "Pourquoi investir dans Ndjoka maintenant ?",
    answer:
      "Ndjoka est en phase de croissance active avec un réseau de distribution existant, des produits appréciés et une vision claire d'expansion au Cameroun, en Afrique et dans la diaspora.",
  },
  {
    question: "Comment se déroule le suivi après l'investissement ?",
    answer:
      "Les investisseurs suivent l'évolution du réseau, des produits et des projets futurs de Ndjoka à travers des échanges réguliers avec l'équipe.",
  },
];

export const INVEST_FINAL = {
  title: 'Participez à la croissance de Ndjoka dès maintenant',
  description:
    "Rejoignez une marque agroalimentaire africaine ambitieuse qui développe progressivement son réseau, ses produits et sa présence internationale.",
  cta: 'Devenir investisseur',
};
