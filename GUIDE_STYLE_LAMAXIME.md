# Guide De Code de Lamaxime

Ce document formalise les conventions observées dans `vue/` et `backend/`, complétées par les intentions explicites du projet. L'objectif est simple : permettre à n'importe quel développeur de produire du code qui ressemble au tien, dans la structure, dans le fond, dans le niveau d'exigence SEO, et dans la manière de découper les responsabilités.

## 1. Philosophie générale

- Chaque fichier doit avoir une responsabilité claire.
- Le code doit rester lisible sans effort : noms explicites, structure prévisible, imports propres, composants courts quand c'est possible.
- Le frontend ne doit pas seulement "fonctionner" : il doit vendre, rassurer, respirer, et servir le branding.
- Le backend ne doit pas exposer brutalement les données : il les valide, les sécurise, les transforme et les renvoie dans un format propre à consommer.
- Le projet privilégie la modularité, le mobile-first, l'accessibilité utile, le SEO fort, et un copywriting aligné avec le positionnement.

## 2. Arborescence attendue

### Frontend `vue/src`

- Les pages React sont dans `vue/src/pages`.
- Les composants réutilisables ou sections de pages sont dans `vue/src/components`.
- Les styles sont tous centralisés dans `vue/src/assets/styles`.
- Les images et assets médias sont dans `vue/src/assets/images` ou dans un sous-dossier dédié.
- Les données, constantes, helpers métier, textes, routes et appels d'API sont regroupés dans `vue/src/services`.

### Backend `backend/app`

- Les contrôleurs API sont dans `backend/app/Http/Controllers/Api`.
- Les middlewares sont dans `backend/app/Http/Middleware`.
- Les modèles sont dans `backend/app/Models`.
- Les helpers techniques transverses sont dans `backend/app/Support`.
- Les routes API sont centralisées dans `backend/routes/api.php`.

## 3. Règles de nommage des fichiers

- Un composant React correspond à un fichier `.jsx`.
- Une page React correspond à un fichier `.jsx`.
- Chaque page `.jsx` possède son fichier CSS dédié dans `vue/src/assets/styles/pages`.
- Chaque composant `.jsx` possède son fichier CSS dédié dans `vue/src/assets/styles/components/...`.
- Le nom du fichier CSS doit exactement le nom du fichier JSX autant que possible.
- Les fichiers de logique métier sont en `.js`, pas dans les `.jsx`.

### Important

- Dans l'état actuel du projet, la logique réutilisable vit surtout dans `vue/src/services/`.
- Si une logique est pure, réutilisable, métier, SEO, navigation, session, appel API, mapping ou génération de lien, elle doit aller dans `services/`.
- Le JSX doit rester orienté rendu, orchestration d'état local, et branchement UI.

## 4. Organisation interne d'un fichier JSX

L'ordre implicite qui ressort du projet est le suivant :

1. Imports React et librairies.
2. Imports des composants enfants.
3. Imports des services, constantes, routes ou helpers.
4. Import du fichier CSS.
5. Déclaration du composant.
6. Export `default`.

Exemples observés :

- Les pages importent d'abord leurs sections, puis leur CSS.
- Les composants importent leur contenu métier depuis `services/` puis leur CSS dédié.
- Le CSS est toujours importé directement dans le composant ou la page qui l'utilise.

## 5. Règles JSX et HTML

- Toute page doit avoir une racine claire, souvent un `<main>`.
- Toute section importante doit être structurée avec des balises sémantiques : `main`, `section`, `article`, `aside`, `header`, `nav`, `footer`.
- Chaque élément important doit recevoir un `className`.
- En pratique, tu cherches à rendre stylable chaque bloc significatif du DOM.
- Même les wrappers intermédiaires reçoivent souvent une classe dédiée.
- Les classes servent autant à designer qu'à documenter la structure visuelle.
- Les éléments d'interface doivent rester explicites : CTA, shells, grids, cards, headings, copy, meta, actions.

### Règle forte sur les `className`

- Ne laisse pas un élément HTML structurel sans `className` si ce n'est pas volontaire.
- Si un élément peut nécessiter un style aujourd'hui ou demain, donne-lui une classe.
- Les noms de classes doivent refléter le composant parent.
- On évite les classes trop génériques du type `box`, `wrapper`, `item` seules.
- On préfère des classes contextualisées comme `aboutHero-title`, `serviceDomains-card`, `blogArticle-meta`.

### Convention de nommage CSS

- La classe racine reprend le nom du composant et se termine souvent par `-root`.
- Les sous-parties suivent un nommage hiérarchique lisible `nomDuComposant-sousElement`.
- Les variantes utilisent souvent le suffixe `--modifier`.
- Les sous-éléments très liés utilisent parfois `__element`.

Exemples déjà présents :

- `aboutHero-root`
- `blogArticle-ctaCard__eyebrow`
- `navBar-panel--open`
- `app-button--primary`

## 6. CSS : manière de structurer le design

- Les styles globaux sont centralisés dans `index.css` et `App.css`.
- Les variables de design sont définies dans `:root`.
- Les couleurs, rayons, espacements, largeurs de shell, ombres et typographies passent par des variables CSS.
- Les composants consomment ces variables au lieu de dupliquer des valeurs arbitraires.
- Le CSS doit rester modulaire : un fichier CSS par page ou composant.
- Les styles partagés réels peuvent être consolidés dans `App.css` quand ils sont transverses.

### Mobile-first

- Les styles de base sont écrits pour mobile.
- Les adaptations desktop arrivent ensuite avec des `@media (min-width: ...)`.
- Pour le responsive, tu vas mettre les media-queries pour toutes les tailles
    - Mobiles & Smartwatches: @media (max-width: 480px)
    - Tablettes: @media (min-width: 769px) and (max-width: 1024px)
    - Ordinateurs portables: @media (min-width: 1025px) and (max-width: 1200px)
    - Desktops, Écrans plats & Téléviseurs: @media (min-width: 1201px)
- Les largeurs sont fluides, souvent avec `width: min(...)`.
- La typographie utilise `clamp(...)` pour rester souple.

## 7. SEO : niveau d'exigence attendu

Le SEO est une discipline de base du projet, pas un ajout secondaire.

- Les métadonnées de base sont présentes dès `vue/index.html`.
- Le SEO dynamique est centralisé dans `vue/src/services/seo.js`.
- Les routes ont une définition SEO dédiée.
- Les pages publiques importantes doivent être indexables si c'est pertinent.
- Les pages sensibles comme l'admin sont en `noindex,nofollow`.
- Les pages d'article ont une gestion spécifique.
- Le canonical est défini.
- Les métadonnées Open Graph sont définies.
- Les métadonnées Twitter sont définies.
- Les données structurées JSON-LD sont générées.
- Les FAQ peuvent être injectées dans le schéma si la page en possède.
- Le sitemap s'appuie sur les routes SEO et les articles.

### Conséquences pratiques

- Toute nouvelle page doit avoir son titre, sa description, ses règles robots, son URL canonique et, si pertinent, son schéma.
- Toute nouvelle page stratégique doit être pensée SEO avant d'être pensée visuellement.
- Les contenus, `alt`, headings, liens internes et wording doivent servir le référencement.
- Les accents et caractères spéciaux doivent être utilisés dans le contenu visible pour respecter la langue française, même si certaines chaînes SEO techniques existantes sont encore sans accents.

## 8. Gestion du contenu et du copywriting

- Le texte métier n'est pas dispersé au hasard dans l'UI quand il peut être centralisé.
- Beaucoup de contenus éditoriaux sont stockés dans des fichiers `services/*.js`.
- Les composants lisent des objets, tableaux ou helpers qui contiennent le contenu.
- Cette séparation permet de réécrire le fond sans casser le rendu.

## 9. Gestion des routes et de la navigation

- On évite d'écrire les chemins en dur partout dans les composants.
- Les items de navigation et de footer sont pilotés par des constantes.
- La navigation React utilise `react-router-dom`.
- Les comportements globaux liés à la route, comme scroll top et SEO, sont gérés au niveau de `App.jsx`.

## 10. Emplacement de la logique JavaScript

- La logique réutilisable ne doit pas être enfouie dans les composants.
- Les composants ne doivent pas devenir des fourre-tout métier.
- Les helpers de liens, de session, de SEO, de transformation de données, de draft admin ou d'appel API vont dans des `.js` dédiés.
- Le `.jsx` orchestre l'affichage et les interactions d'écran.
- La logique métier commune vit dans `services/`.
- La logique technique backend commune vit dans `backend/app/Support`.

## 11. Appels API

- Les appels API ne se font pas directement partout dans les composants.
- Ils sont encapsulés dans des services dédiés.
- Une couche d'abstraction unique gère `fetch`, les headers, le token, les erreurs et le parsing.
- Les réponses sont normalisées avant usage.
- Les erreurs remontent avec un message exploitable.
- Le token admin est injecté automatiquement si disponible.
- Le `401` déclenche un nettoyage de session côté front.
- Les uploads ont une voie dédiée avec gestion `FormData`.

### Règle de style

- Toute nouvelle famille d'appels backend doit avoir son fichier de service.
- On sépare l'appel réseau brut de la logique d'interface.
- On préfère des fonctions nommées clairement : `getBlog`, `getBlogs`, `loginAdmin`, `uploadAdminImage`.

## 12. Gestion des états côté frontend

- L'état local de page reste dans la page ou dans le composant orchestrateur.
- Les composants enfants reçoivent des données et callbacks explicites.
- Les effets globaux sont centralisés et ciblés.
- Les flux sensibles, comme l'admin, sont défensifs : restauration de session, verrouillage, notices, états de chargement, erreurs utilisateur.
- Les formulaires suivent des handlers dédiés et des retours utilisateur clairs.

## 13. Accessibilité et qualité HTML

- Les images ont un `alt`.
- Les boutons ont un `type`.
- Les zones de navigation ont un `aria-label` si nécessaire.
- Les toggles exposent `aria-expanded` et `aria-controls`.
- Les contenus purement visuels peuvent recevoir `aria-hidden`.
- La classe utilitaire `sr-only` existe pour le texte accessible non visible.

## 14. Règles backend

- Les routes API sont déclarées explicitement dans `backend/routes/api.php`.
- Les endpoints publics sont séparés des endpoints protégés.
- Les middlewares protègent les zones sensibles.
- Les validations de requête sont faites côté contrôleur.
- Les réponses JSON restent explicites.
- Les erreurs attendues renvoient des codes HTTP cohérents.
- Les données dates/heures sont normalisées en UTC via `UtcDateTime`.
- Les réponses publiques sont transformées avant exposition.
- Les modèles définissent leurs relations et leurs champs modifiables.

### Style backend attendu

- Ne pas exposer directement des structures brutes si une transformation métier est nécessaire.
- Vérifier les droits avant modification ou suppression.
- Regrouper les utilitaires transverses dans `Support`.
- Séparer la logique publique de la logique admin/protégée.
- Renvoyer des messages compréhensibles côté client.

## 15. Modularité

La modularité est une règle cardinale.

- Une page assemble des sections.
- Une section peut devenir un composant.
- Un composant ne doit pas absorber des responsabilités voisines si elles peuvent être séparées proprement.
- Un CSS ne doit pas piloter plusieurs composants sans raison claire.
- Une logique réutilisable doit sortir du JSX.
- Une source de vérité unique doit exister pour les routes, SEO, contenus structurés et helpers communs.

## 16. Règles de contenu et de langue

- Respecter la langue avec ses accents et caractères spéciaux dans les textes affichés à l'utilisateur.

## 17. Icônes, emojis et éléments visuels

- La préférence cible est de ne pas utiliser d'emojis dans l'interface.
- Quand un pictogramme est utile, mieux vaut utiliser un système d'icônes cohérent, par exemple Font Awesome.

## 18. Imports

- Les imports doivent rester groupés par rôle.
- On évite le désordre dans les imports.
- On importe les routes et helpers depuis leur source centrale plutôt que de recopier les valeurs.
- Le CSS dédié du composant est importé directement dans le composant.
- Les assets sont importés explicitement avec des noms lisibles.

## 19. Workflow recommandé pour ajouter une nouvelle page

1. Créer la page dans `vue/src/pages`.
2. Créer son CSS dédié dans `vue/src/assets/styles/pages`.
3. Déclarer ou réutiliser les composants de section dans `vue/src/components/<famille>`.
4. Créer le CSS de chaque section dans `vue/src/assets/styles/components/<famille>`.
5. Centraliser le contenu, les constantes et helpers dans `vue/src/services`.
6. Ajouter les règles SEO dans `services/seo.js`.
7. Vérifier mobile-first, accessibilité, `alt`, `aria`, maillage interne et CTA.

## 20. Workflow recommandé pour ajouter une nouvelle logique métier

1. Si la logique est réutilisable, créer un `.js` dédié dans `vue/src/services`.
2. Nommer la fonction selon son intention métier.
3. Garder le composant JSX centré sur le rendu.
4. Ajouter le CSS dédié uniquement si la logique s'accompagne d'une nouvelle UI.
5. Si la logique touche au SEO, l'intégrer dans `services/seo.js` ou dans une structure cohérente avec lui.

## 21. Workflow recommandé pour une nouvelle API backend

1. Déclarer la route dans `backend/routes/api.php`.
2. Créer ou compléter le contrôleur API dédié.
3. Ajouter la validation des entrées.
4. Vérifier les droits d'accès si l'endpoint est protégé.
5. Normaliser la réponse JSON.
6. Gérer les dates en UTC si concerné.
7. Créer ensuite le service frontend qui encapsule l'appel.

## 22. Checklist avant de considérer un écran comme terminé

- Le fichier est au bon endroit.
- Le CSS dédié existe au bon endroit.
- Les classes sont suffisamment nombreuses pour styler proprement chaque élément.
- La structure HTML est sémantique.
- La page est responsive en mobile-first.
- Le contenu est correct dans la langue concernée.
- Les `alt`, `aria`, boutons et liens sont propres.
- Les routes ne sont pas dupliquées en dur.
- Le SEO est traité.
- La logique réutilisable n'est pas enfouie dans le JSX.
- Les appels API sont encapsulés.
- Le code reste modulaire.
- Chaque `<img>` possède `width` et `height`.
- L'image LCP (hero principal) porte `fetchPriority="high"`.
- Les images hors viewport portent `loading="lazy"`.
- Aucune police n'est chargée via `@import url()` dans le CSS.
- Les pages sont chargées via `React.lazy()` + `Suspense`.
- Le `<Suspense>` n'a pas `fallback={null}` : un placeholder avec `min-height` est fourni.

---

## 23. Performances — CLS (Cumulative Layout Shift)

Le CLS doit rester sous 0.1. Il est causé par des éléments qui changent de taille ou de position après le premier rendu.

### Images

Toute balise `<img>` doit posséder `width` et `height` correspondant aux dimensions intrinsèques de l'image.

```jsx
<img src={image} alt="..." width={768} height={911} />
```

Ces valeurs permettent au navigateur de réserver l'espace avant que l'image soit chargée. Sans elles, le contenu se déplace au chargement.

Les données `width` et `height` doivent être stockées dans le fichier de service correspondant (exemple : `accueil.js`), pas codées en dur dans le JSX.

---

### Suspense fallback

Ne jamais mettre `fallback={null}` dans un `<Suspense>` qui encapsule une page entière.

Mauvais :
```jsx
<Suspense fallback={null}>
  <PageContent onglet={onglet} />
</Suspense>
```

Bon :
```jsx
<Suspense fallback={<div className="principale-suspenseFallback" />}>
  <PageContent onglet={onglet} />
</Suspense>
```

Le placeholder doit avoir une `min-height` équivalente à la hauteur de l'écran :

```css
.principale-suspenseFallback {
  min-height: 100svh;
}
```

Sans cela, le footer remonte puis redescend au chargement de la page, provoquant un CLS massif.

---

### Animations

Ne jamais utiliser `filter: blur()` dans une animation d'entrée. Ce filtre déclenche un recalcul de layout à chaque frame et provoque du CLS.

Mauvais :
```css
@keyframes revealSoft {
  from { opacity: 0; filter: blur(12px); }
  to   { opacity: 1; filter: blur(0); }
}
```

Bon :
```css
@keyframes revealSoft {
  from { opacity: 0; transform: translateY(24px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
```

`transform` et `opacity` sont composités par le GPU et ne modifient pas le flux du document.

Ajouter `will-change: transform, opacity` sur les éléments qui portent ces animations d'entrée.

---

## 24. Performances — Polices

### Ne jamais charger les polices via @import dans le CSS

Le `@import url()` dans un fichier CSS est découvert tardivement par le navigateur et bloque le rendu.

Mauvais (dans `index.css`) :
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins...');
```

### Ne pas dépendre de Google Fonts en production

Les requêtes vers `fonts.googleapis.com` et `fonts.gstatic.com` ajoutent de la latence réseau et peuvent bloquer le rendu.

Utiliser les packages npm `@fontsource` à la place :

```bash
npm install @fontsource/poppins @fontsource/inter
```

Importer uniquement les graisses réellement utilisées dans `main.jsx` :

```js
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
```

Ces imports sont bundlés par Vite et servis depuis le même domaine sans requête externe.

---

### Police de secours calibrée pour éviter le CLS

Le navigateur affiche d'abord la police système, puis la remplace par la police finale. Si les métriques diffèrent, le texte se redimensionne et provoque un CLS.

Déclarer une police de secours avec des métriques calquées sur la police cible :

```css
@font-face {
  font-family: 'Poppins-Fallback';
  src: local('Arial'), local('Helvetica Neue');
  ascent-override: 93%;
  descent-override: 22%;
  line-gap-override: 0%;
  size-adjust: 112%;
}

@font-face {
  font-family: 'Inter-Fallback';
  src: local('Arial'), local('Helvetica Neue');
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
  size-adjust: 107%;
}
```

Puis référencer cette police de secours dans les variables CSS :

```css
--font-heading: 'Poppins', 'Poppins-Fallback', sans-serif;
--font-body: 'Inter', 'Inter-Fallback', sans-serif;
```

---

### Material Symbols : axes fixes obligatoires

Material Symbols avec des axes variables charge jusqu'à 3.8 MB.

Mauvais :
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```

Bon (axes fixes = environ 200 KB) :
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block" />
```

Ou via le package npm `material-symbols` pour éliminer la dépendance externe :

```bash
npm install material-symbols
```

```js
import 'material-symbols/outlined.css';
```

---

## 25. Performances — JavaScript et bundle

### Lazy loading des pages avec React.lazy

Toutes les pages du site doivent être chargées avec `React.lazy()`. Cela découpe le bundle et évite de charger toutes les pages au premier rendu.

Mauvais :
```js
import Accueil from './accueil.jsx';
import Produits from './produits.jsx';
```

Bon :
```js
const Accueil = lazy(() => import('./accueil.jsx'));
const Produits = lazy(() => import('./produits.jsx'));
```

Encapsuler le rendu conditionnel dans un composant dédié (`PageContent`) et l'entourer d'un `<Suspense>` avec un placeholder dimensionné.

---

### Découpage du bundle Vite avec manualChunks

Les bibliothèques lourdes doivent être isolées dans des chunks dédiés pour ne pas bloquer le chargement de React.

Dans `vite.config.js` :

```js
build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          if (id.includes('/d3/') || id.includes('d3-') || id.includes('topojson-client')) {
            return 'd3-vendor';
          }
          if (id.includes('react-dom') || id.includes('/react/')) {
            return 'react-vendor';
          }
          if (id.includes('react-router-dom') || id.includes('react-router/')) {
            return 'router';
          }
          return 'vendor';
        }
      },
    },
  },
}
```

---

### Priorité de chargement des images

L'image principale de chaque page (candidate LCP) doit être marquée avec `fetchPriority="high"` pour que le navigateur la charge en priorité.

```jsx
<img
  src={hero.src}
  alt={hero.alt}
  width={hero.width}
  height={hero.height}
  fetchPriority="high"
/>
```

Toutes les images situées hors du viewport initial doivent recevoir `loading="lazy"` :

```jsx
<img
  src={item.image}
  alt={item.alt}
  width={item.width}
  height={item.height}
  loading="lazy"
/>
```

Ne pas mettre `loading="lazy"` sur une image LCP : cela retarderait son chargement.

---

## 26. Workflow recommandé pour une nouvelle image dans le projet

1. Connaître les dimensions intrinsèques de l'image (largeur × hauteur en pixels).
2. Stocker ces dimensions dans le fichier de service correspondant (`width`, `height`).
3. Passer `width` et `height` à chaque balise `<img>` via les données du service.
4. Ajouter `fetchPriority="high"` si l'image est la principale du viewport initial (LCP).
5. Ajouter `loading="lazy"` si l'image est hors viewport au premier rendu.
6. Ne jamais laisser une `<img>` sans `width` et `height`.