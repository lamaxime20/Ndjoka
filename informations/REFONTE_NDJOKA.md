# Refonte ciblée du site Ndjoka

Document de travail pour le développeur — analyse du site existant, écarts avec les nouvelles informations, plan d'implémentation. Refonte **ciblée** : on modifie ce qui doit changer, on conserve le reste.

**Mise à jour** : les 6 pages du sitemap ont maintenant pu être auditées en HTML complet (`/produits` et `/concessionnaires` étaient inaccessibles lors de la première passe — c'est corrigé). La quasi-totalité des informations à confirmer de la version précédente est désormais tranchée par le client. Un seul point reste réellement ouvert : le maintien ou non des 25 000 FCFA comme palier d'entrée (section 22).

---

## 1. Résumé exécutif

Le site actuel (`ndjoka.vercel.app`) est une SPA React (React Router, bundles Vite par route). Les 6 pages ont désormais été auditées en HTML complet. Le catalogue produits est confirmé (prix, formats, kilichi), la liste des 5 produits en développement est confirmée, la structure Distributeur (500 paquets) / Concessionnaire (1000 paquets) avec ses avantages est confirmée, les 5 distinctions/récompenses sont confirmées, et la coordonnée de contact canonique est tranchée : **contact@ndjoka237.com / +237 656 18 84 16**, à appliquer partout où l'ancienne coordonnée (`contact@ndjoka.com` / `+237 683 18 43 60`) apparaît encore.

Reste un seul point réellement bloquant : la question du palier d'entrée à 25 000 FCFA n'a pas de réponse dans les informations transmises — elle doit encore être tranchée avant de finaliser la FAQ et le contenu de la page Concessionnaires.

La page `/concessionnaires` reste la plus grosse reconstruction du projet : elle est aujourd'hui à un seul niveau (offre unique « à partir de 25 000 FCFA ») et doit devenir une comparaison à deux niveaux. La page `/produits` est plus proche de la cible : il lui manque les formats 100g, les nouveaux prix, le prix du Kilichi, et une section « produits en développement » qui n'existe pas encore dessus.

## 2. Objectifs de la refonte

- Intégrer les distinctions et récompenses Ndjoka pour renforcer la crédibilité (surtout côté investisseurs).
- Mettre à jour le catalogue produits disponibles avec les formats et prix confirmés, et ajouter partout une section produits en développement.
- Refaire complètement la page Concessionnaires pour distinguer Distributeur (500 paquets) et Concessionnaire (1000 paquets).
- Unifier la coordonnée de contact sur l'ensemble du site.
- Corriger les incohérences détectées sans réécrire ce qui fonctionne.

## 3. Principes à respecter

- Ne pas tout refaire : conserver la structure de sections, les classes CSS existantes, la palette et la typographie déjà en place.
- Ne jamais présenter un produit en développement comme disponible, ni afficher de prix pour eux.
- Ne pas publier de réponse FAQ sur le montant d'entrée tant que le point des 25 000 FCFA n'est pas tranché.
- Mobile-first (rappel explicite du rapport client : l'essentiel du trafic vient de WhatsApp/réseaux sociaux).

## 4. Analyse globale du site actuel

**Stack observée** : React + React Router, build Vite, code-splitting par route (`accueil-*`, `investisseurs-*`, `pointDistributions-*`, `apropos-*`, `produits-*`, `concessionnaires-*`). Schema.org injecté par page (`Organization`, `Brand`, `WebSite`, `WebPage`, `FAQPage`, et sur `/produits`/`/concessionnaires` un schema `ItemList`/`Product` partagé).

**Découverte technique utile** : `/produits` et `/concessionnaires` chargent tous les deux le même bundle `produits-*.js`/`produits-*.css` et le même schema `data-schema="products"` — la fiche produit est donc déjà factorisée côté build entre ces deux pages. C'est une bonne base pour centraliser complètement les données produits (section 19).

**Anomalie SEO détectée** : `/produits` et `/concessionnaires` embarquent tous les deux un bloc `<script data-schema="faq-home">` reprenant les 2 questions FAQ de la page d'accueil (« Comment devenir concessionnaire », « Pourquoi investir »), alors qu'aucune de ces deux questions n'apparaît réellement dans le contenu visible de ces deux pages. Sur `/concessionnaires`, ce bloc coexiste avec le vrai schema `faq-concess` (6 questions, celui qui correspond au contenu affiché) — le `faq-home` y est donc un doublon parasite. Sur `/produits`, la page n'a même pas de section FAQ visible : le schema `faq-home` y est entièrement orphelin, sans contenu correspondant. C'est le genre de structured data que Google peut pénaliser (FAQPage sans contenu visible correspondant). À supprimer sur les deux pages. Voir section 18.

## 5. Analyse page par page

### 5.1 Accueil (`/`)

Hero → Vision → Produits (4 cartes) → Bénéfices (6) → Présence (+15 villes / Afrique / Actif / Expansion) → panneau Investisseurs → FAQ (2 groupes) → CTA final.

| Élément | État | Modification | Niveau |
|---|---|---|---|
| Hero, Vision, Bénéfices, FAQ, CTA final | Fonctionnels | Aucun (sauf mise à jour des liens de contact) | 🟢 |
| Section Produits (4 cartes) | Affiche mûres/non mûres/épicées/kilichi | Garder léger — pas besoin d'afficher tous les formats/prix ici | 🟢 |
| Bandeau crédibilité | Absent | Ajouter un bandeau compact de distinctions entre Vision et Produits | 🔴 |
| Lien WhatsApp nav CTA (« Nous contacter ») | `wa.me/237683184360` | Remplacer par `wa.me/237656188416` | 🔴 |
| Chiffres de présence (+15 villes) | Diffère des chiffres de `/nos-points-de-vente` (36 points, 10 pays) | Aligner ou clarifier que ce sont deux mesures différentes | 🟡 |

### 5.2 Produits (`/produits`)

**HTML complet désormais disponible.** Structure réelle : Hero (« Nos Produits », image `Produits_Ndjoka-B7zrMh5o.webp`) → grille de 4 produits (Mûres, Non Mûres, Épicées — toutes en 250g uniquement, prix 1500/1500/2000 FCFA — et Kilichi, sans prix ni format affiché, juste le badge « Nouveau produit ») → section Qualité & Hygiène (3 blocs) → section Concessionnaires (4 avantages génériques) → formulaire Commande Particulier (nom, téléphone, ville, sélecteur produit, quantité, message) → CTA final.

| Élément | État actuel (live) | Modification | Niveau |
|---|---|---|---|
| Hero, section Qualité & Hygiène, section Avantages, formulaire Commande, CTA final | Fonctionnels | Mettre à jour les liens de contact uniquement | 🟢 |
| Formats des 3 chips | 250g uniquement | Ajouter le format 100g pour chacune (Mûres, Non Mûres, Épicées) | 🔴 |
| Prix des 3 chips (250g) | 1 500 / 1 500 / 2 000 FCFA | Mettre à jour : 2 500 / 2 500 / 3 000 FCFA (confirmé) | 🔴 |
| Prix des 3 chips (100g, nouveau) | — | 500 FCFA chacune (confirmé) | 🔴 |
| Kilichi | Affiché sans prix ni format (« Nouveau produit » en guise de méta) | Ajouter le prix confirmé : 1 000 FCFA. Le **format/poids du sachet n'est pas précisé** dans les informations transmises — à demander pour l'affichage (détail mineur, non bloquant) | 🔴 |
| Section « Produits en développement » | **Absente de cette page** | Ajouter une section dédiée avec les 5 produits confirmés (Chips de patate, Caramels, Jus d'oseille, Biscuits, Chin chin), badge « Bientôt disponible », sans prix, jamais mélangée à la grille des produits disponibles | 🔴 |
| Schema `data-schema="products"` (JSON-LD) | Prix hardcodés à 1500/1500/2000, Kilichi sans `price` | Mettre à jour les prix ; ajouter `price: "1000"` pour le Kilichi | 🔴 |
| Schema `data-schema="faq-home"` | Orphelin, sans contenu correspondant sur la page | Supprimer (voir section 18) | 🟠 |
| Sélecteur « Produits souhaités » du formulaire | Liste les 4 produits disponibles actuels | Étendre si de nouveaux produits disponibles sont ajoutés au catalogue | 🟡 |
| Liens de contact | Aucun `wa.me` direct sur cette page (CTA internes vers `/concessionnaires` et `#commande`) ; le schema Organization en `<head>` référence `+237683184360` | Mettre à jour le schema `<head>` | 🟠 |

### 5.3 Concessionnaires (`/concessionnaires`)

**HTML complet désormais disponible.** Structure réelle : Hero (CTA WhatsApp unique « Devenir concessionnaire ») → « Pourquoi rejoindre le réseau Ndjoka » (6 avantages génériques : Stock à prix réduit, Visibilité, Formation gratuite, Support commercial, Branding offert, Réseau déjà actif) → grille Produits (4 cartes, sans prix) → Réseau (stats + 3 témoignages) → Vision (3 paragraphes + 4 blocs + sous-section « Produits en développement » avec seulement 2 items : Chin Chin, Jus d'oseille) → section Investissement « à partir de 25 000 FCFA » (3 avantages génériques) → FAQ (6 questions, dont la réponse « à partir de 25.000 FCFA ») → CTA final.

C'est bien la plus grosse reconstruction du projet, confirmée par l'audit live.

| Élément | État actuel (live) | Modification | Niveau |
|---|---|---|---|
| Hero | CTA WhatsApp unique, pas de distinction d'offre | Adapter en deux CTA (Devenir distributeur / Devenir concessionnaire) ou un CTA qui mène à la comparaison | 🔴 |
| Section « Pourquoi rejoindre » (6 avantages génériques) | Un seul niveau, non lié aux paliers | Remplacer par la comparaison à deux niveaux (section 11) : 5 avantages Distributeur, 5 avantages Concessionnaire (qui inclut ceux du distributeur) | 🔴 |
| Section Investissement « à partir de 25 000 FCFA » | Palier unique en FCFA | Reconstruire autour des seuils confirmés en paquets (500 / 1000) — **mais ne pas publier avant d'avoir tranché le sort des 25 000 FCFA**, voir section 22 | 🔴 / ⚠️ |
| FAQ — « Quel est le montant pour commencer ? » → « à partir de 25.000 FCFA » | Réponse actuelle obsolète face aux nouveaux seuils | Ne pas publier de nouvelle réponse tant que le point n'est pas tranché ; en attendant, ne pas laisser la réponse actuelle telle quelle si elle contredit le nouveau discours | 🟠 |
| Schema `faq-concess` (6 Q) | Correct et correspond au contenu affiché | Mettre à jour la question/réponse sur le montant une fois tranchée | 🟡 |
| Schema `faq-home` (2 Q, dupliqué) | Orphelin, doublon avec `faq-concess` | Supprimer (voir section 18) | 🟠 |
| Section « Produits en développement » (dans Vision) | 2 items seulement (Chin Chin, Jus d'oseille) | Ajouter les 3 manquants (Chips de patate, Caramels, Biscuits) pour atteindre les 5 confirmés | 🔴 |
| Grille Produits (4 cartes, sans prix) | Cohérente avec le reste du site | Optionnel : ajouter les prix maintenant confirmés, ou laisser tel quel puisque `/produits` les affiche déjà | 🟢 / 🟡 |
| Réseau (stats + témoignages) | Fonctionnel, cohérent avec les autres pages | Aucun | 🟢 |
| Tous les liens `wa.me/237683184360` (Hero, grille produits, section Investissement, FAQ, CTA final) | Ancien numéro | Remplacer par `wa.me/237656188416` sur chaque occurrence | 🔴 |
| Compteur `concessReseau-statVal` affichant « +0 » | Probable artefact d'animation JS (`useCountUp`) | Vérifier l'injection de la valeur cible | 🟡 |

### 5.4 Investisseurs (`/investisseurs`)

Inchangé par rapport à l'analyse précédente. Emplacement principal recommandé pour la nouvelle section Distinctions (juste après « Opportunité d'investissement », avant les Produits). Tous les liens `wa.me/237683184360` de cette page (Hero, section Process implicite, FAQ, CTA final) à mettre à jour vers `wa.me/237656188416`.

### 5.5 Points de vente (`/nos-points-de-vente`)

Inchangé dans sa structure. La section « Produits en développement » n'y liste que 2 items (Chin Chin, Jus d'oseille) — à compléter avec les 3 manquants, comme sur `/concessionnaires`. Tous les liens `wa.me/237683184360` à mettre à jour.

### 5.6 Contact / À propos (`/contact`)

**Cette page est déjà alignée sur la coordonnée de contact canonique** : son bloc de contact dédié et ses CTA WhatsApp utilisent déjà `+237 656 18 84 16` et `contact@ndjoka237.com`. C'est la seule page du site déjà correcte sur ce point — aucune modification de contact nécessaire ici. Le reste de la page (Définition, Nom, Évolution, Équipe, Présence) reste inchangé.

## 6. Header et navigation

| Élément | État | Modification | Niveau |
|---|---|---|---|
| Structure générale, logo, menu mobile | Fonctionnels | Aucun | 🟢 |
| Libellé « Home » | Anglais | Remplacer par « Accueil » | 🟡 |
| CTA WhatsApp nav (« Nous contacter ») — présent sur **les 6 pages** | `wa.me/237683184360` | Remplacer par `wa.me/237656188416` partout | 🔴 |

## 7. Footer

Présent à l'identique sur les 6 pages auditées.

| Élément | État | Modification | Niveau |
|---|---|---|---|
| Structure, réseaux sociaux, crédit | Fonctionnels | Aucun | 🟢 |
| Contact footer | `contact@ndjoka.com` / `+237 683 18 43 60` sur les 6 pages | Remplacer par `contact@ndjoka237.com` / `+237 656 18 84 16` partout | 🔴 |
| Schema Organization `<head>` (`contactPoint.telephone`) — présent sur les 6 pages | `+237683184360` | Remplacer par `+237656188416` partout | 🔴 |

## 8. Nouvelle gestion des produits

Statuts stricts, jamais mélangés dans une même grille : **Disponible** (nom, formats + prix par format, image, description) et **En développement** (nom, statut, description courte, badge, jamais de prix). Recommandation d'architecture inchangée (section 19) : centraliser cette liste dans une seule source de données, réutilisée par `/`, `/produits`, `/concessionnaires`, `/investisseurs`, `/nos-points-de-vente` — le fait que `/produits` et `/concessionnaires` partagent déjà le même bundle et le même schema `products` (section 4) montre que cette centralisation est déjà à moitié entamée côté build.

## 9. Produits disponibles (confirmé)

| Produit | Format | Prix |
|---|---|---|
| Chips de Plantain Mûres | 100g | 500 FCFA |
| Chips de Plantain Mûres | 250g | 2 500 FCFA |
| Chips de Plantain Non Mûres | 100g | 500 FCFA |
| Chips de Plantain Non Mûres | 250g | 2 500 FCFA |
| Chips de Plantain Épicées | 100g | 500 FCFA |
| Chips de Plantain Épicées | 250g | 3 000 FCFA |
| Kilichi Ndjoka | Format non précisé | 1 000 FCFA |

À implémenter sur `/produits` (grille principale), `/concessionnaires` (grille secondaire, prix optionnels), `/` et `/investisseurs` (aperçu, sans forcément détailler tous les formats/prix).

## 10. Produits en développement (confirmé)

Liste complète confirmée (5 produits) :

- Chips de patate
- Caramels
- Jus d'oseille
- Biscuits
- Chin chin

État d'implémentation actuel par page :

| Page | Présents aujourd'hui | À ajouter |
|---|---|---|
| `/produits` | Aucun (section absente) | Créer la section avec les 5 |
| `/concessionnaires` | Chin Chin, Jus d'oseille (2/5) | Chips de patate, Caramels, Biscuits |
| `/nos-points-de-vente` | Chin Chin, Jus d'oseille (2/5) | Chips de patate, Caramels, Biscuits |

Jamais de prix affiché pour ces 5 produits ; badge « Bientôt disponible » ou « En développement » systématique.

## 11. Nouvelle structure Distributeur / Concessionnaire (confirmé)

| | Distributeur | Concessionnaire |
|---|---|---|
| Minimum d'achat | 500 paquets | 1 000 paquets |
| Avantages | Prix réduits, Communication et visibilité, Accompagnement, Branding, Formations | Exclusivité sur une ville, Prix usine plus avantageux, Meilleure rentabilité, **tous les avantages du distributeur**, Gestion du réseau de distributeurs de la ville |
| Positionnement | Entrée dans le réseau | Palier supérieur, présenté comme une évolution du distributeur |

Design recommandé (inchangé) : deux cartes côte à côte en desktop, empilées en mobile, la carte Concessionnaire visuellement mise en avant (bordure/accent doré) pour montrer la hiérarchie sans dévaloriser le premier niveau.

**Seul point encore ouvert** : le sort du palier historique « à partir de 25 000 FCFA » (actuellement affiché en FCFA sur `/concessionnaires` et dans sa FAQ). Aucune réponse n'a été transmise à ce sujet — voir section 22. Ne pas construire la section Investissement finale de `/concessionnaires` tant que ce point n'est pas tranché : soit ce montant disparaît complètement au profit des seuils en paquets, soit il coexiste comme un palier d'entrée encore plus bas (« essai »/« starter ») en dessous du Distributeur — les deux lectures changent radicalement le contenu à afficher.

## 12. Nouvelle section Distinctions et récompenses (confirmé)

**Emplacement** : section complète sur `/investisseurs` (après « Opportunité d'investissement », avant le carrousel Produits) ; bandeau compact sur `/` (entre Vision et Produits).

**Contenu confirmé** (5 distinctions) :

1. **Prix « Meilleure Marque Régionale » — OAPI — 2023.** Décerné lors des Awards de la marque organisés par l'Organisation Africaine de la Propriété Intellectuelle (OAPI) à Lomé, au Togo. Récompense le rayonnement, le positionnement stratégique et la protection de la marque dans la région.
2. **Prix de l'Innovation « Made in Cameroon » — 2023.** Attribué en reconnaissance de la capacité de Ndjoka à transformer et valoriser les produits du terroir local, notamment la transformation semi-industrielle du plantain en chips et le développement de boissons énergisantes/rafraîchissantes.
3. **Certification ANOR** (Agence des Normes et de la Qualité du Cameroun). Conformité aux normes de qualité et d'hygiène pour les processus de fabrication et la sécurité des denrées alimentaires.
4. **Enregistrement et protection OAPI.** Reconnaissance officielle du dépôt de marque et du modèle agroalimentaire auprès de l'Organisation Africaine de la Propriété Intellectuelle.
5. **Lauréat du programme d'accompagnement de l'AFD** (Agence Française de Développement). Sélection pour un programme de formation et de renforcement des compétences en management de projets et en agroalimentaire, incluant une tournée de promotion économique en Europe.

**Gestion visuelle (aucun logo fourni à ce stade)** : 5 cartes de taille égale (grille 3+2 desktop, empilées en mobile), pattern icône + organisme + année + nom de la distinction + une phrase de contexte, cohérent avec les cartes déjà existantes (`pdAvantage-item`, `investOpportunite-bloc`). Tant que les logos officiels (OAPI, ANOR, AFD) ne sont pas fournis, rester sur une carte typographique sobre plutôt que de recréer un logo approximatif.

## 13. Gestion des images

Inchangé — le rapport client (juin 2026) reste la référence : remplacer les visuels flous par des photos HD fidèles aux packagings réels, ne jamais recréer un packaging ou déformer le logo. Nouveaux besoins identifiés par cette passe :

| Page | Section | Besoin |
|---|---|---|
| Produits, Concessionnaires, Points de vente | Produits en développement | Visuels pour Chips de patate, Caramels, Biscuits — aucun disponible dans les sources fournies, à demander au client (ne pas inventer) |
| Produits | Grille produits | Photo dédiée au format 100g si le rendu visuel doit différer du 250g |
| Investisseurs, Accueil | Section Distinctions | Logos officiels OAPI/ANOR/AFD à demander (section 12) |

## 14. Design et direction visuelle

Inchangé. Palette (`#1F5E3B` vert profond, `#F4E7C8` beige, `#F2B233` doré accent, `#1A1A1A` noir, `#FAF8F3` blanc cassé) et typographie (Poppins + Inter) à conserver pour toutes les nouvelles sections. Le doré convient bien pour distinguer visuellement le palier Concessionnaire dans la comparaison à deux niveaux.

## 15. Responsive design

Inchangé — mobile-first, cartes empilées en mobile pour les nouvelles sections (Distinctions, Distributeur/Concessionnaire), grille 2 colonnes en tablette, 3+2 ou côte à côte en desktop.

## 16. Animations et interactions

Inchangé — réutiliser le système de classes déjà en place (`ap-animate`, `pdAnimate`, `invest-animate`, et maintenant confirmé aussi `concessVision-animate` sur `/concessionnaires`) pour toutes les nouvelles sections plutôt que d'introduire un nouveau mécanisme.

## 17. Accessibilité

Inchangé. Bon niveau déjà en place (`aria-label`, `aria-expanded`/`aria-controls` sur les FAQ, `alt` renseigné). Point de vigilance confirmé : texte sur fond doré (`#F2B233`) — prévoir un texte foncé dessus pour le contraste, notamment sur la carte Concessionnaire mise en avant.

## 18. SEO

- **Action nouvelle et concrète** : supprimer le schema `data-schema="faq-home"` dupliqué/orphelin sur `/produits` et `/concessionnaires` (section 4). Sur `/concessionnaires`, le schema `faq-concess` déjà présent suffit. Sur `/produits`, aucun remplacement n'est nécessaire tant qu'il n'y a pas de section FAQ visible sur la page.
- Mettre à jour le schema `Product` (`data-schema="products"`, partagé par `/produits` et `/concessionnaires`) avec les nouveaux prix et le prix du Kilichi.
- Mettre à jour le `contactPoint.telephone` du schema `Organization` sur les 6 pages une fois le numéro unifié.
- Nouvelle section Distinctions → envisager un bloc `schema.org` `Award`/`awards` sur l'`Organization` existante.
- Le reste de l'architecture SEO (title/description uniques, canonical, Open Graph, Twitter Card) est déjà solide sur les 6 pages — ne pas y toucher au-delà de ces ajustements ciblés.

## 19. Architecture technique et composants

Confirmé par l'audit live : `/produits` et `/concessionnaires` partagent déjà le bundle `produits-*.js`/`.css` et le schema `products` — la centralisation des données produits est donc déjà amorcée côté build, il reste à l'étendre pour couvrir aussi `/`, `/investisseurs` et `/nos-points-de-vente` (qui ont chacune leur propre grille de produits recopiée indépendamment).

**Composants à créer** :
- `DistinctionsSection` (variante compacte pour l'accueil, complète pour investisseurs).
- `TierComparison` (Distributeur vs Concessionnaire) pour `/concessionnaires`.
- `UpcomingProductsSection` (produits en développement) — à réutiliser sur `/produits` (nouveau), `/concessionnaires` et `/nos-points-de-vente` (à compléter).

**Donnée à centraliser en une seule source de vérité, consommée par le footer, la nav et la page Contact** : les coordonnées de contact — plus aucune raison de les dupliquer maintenant que la valeur canonique est tranchée.

## 20. Données et contenu

Structure de données produit (avec statut et formats multiples) :

```text
Produit
├── nom
├── catégorie
├── statut (disponible | en_developpement)
├── formats [ { poids, prix } ]   // uniquement si statut = disponible
├── image
├── description
└── badge                         // uniquement si statut = en_developpement
```

Exemple concret pour un produit disponible :

```text
{
  nom: "Chips de Plantain Mûres",
  statut: "disponible",
  formats: [ { poids: "100g", prix: 500 }, { poids: "250g", prix: 2500 } ]
}
```

Structure pour les paliers réseau (confirmée) :

```text
Palier
├── nom (distributeur | concessionnaire)
├── minimum_achat_paquets (500 | 1000)
├── avantages [ ... ]
└── niveau (1 | 2)
```

## 21. Tableau global des modifications

| Page | Élément | État actuel | Modification | Priorité | Niveau |
|---|---|---|---|---|---|
| Toutes (6 pages) | Contact (footer, nav, schema, liens WhatsApp) | `contact@ndjoka.com` / `683 18 43 60` | Remplacer par `contact@ndjoka237.com` / `656 18 84 16` | P0 | 🔴 |
| Produits | Formats 100g + nouveaux prix + prix Kilichi | 250g uniquement, anciens prix, Kilichi sans prix | Mettre à jour avec les valeurs confirmées | P0 | 🔴 |
| Produits | Section Produits en développement | Absente | Créer avec les 5 produits confirmés | P0 | 🔴 |
| Concessionnaires | Comparaison Distributeur/Concessionnaire | Offre unique à 25 000 FCFA | Reconstruire — **bloqué par le point 25 000 FCFA (section 22)** | P0 | 🔴 / ⚠️ |
| Concessionnaires, Points de vente | 3 produits en développement manquants | 2/5 affichés | Ajouter Chips de patate, Caramels, Biscuits | P1 | 🔴 |
| Investisseurs, Accueil | Section Distinctions | Absente | Ajouter (confirmé, en attente des logos) | P0 / P1 | 🔴 |
| Produits, Concessionnaires | Schema `faq-home` dupliqué/orphelin | Présent | Supprimer | P2 | 🟠 |
| Nav | Libellé « Home » | Anglais | Remplacer par « Accueil » | P3 | 🟡 |
| Investisseurs, Concessionnaires, Points de vente | Compteurs à « 0 » dans le HTML statique | À vérifier côté composant | Confirmer le bon fonctionnement de l'animation | P2 | 🟡 |
| Toutes les pages produits | Images | Netteté non vérifiée visuellement | Contrôle visuel + remplacement si nécessaire | P1 | 🟡 |

## 22. Informations à confirmer

Tous les points de la version précédente sont désormais tranchés, à l'exception d'un seul.

| Information | Statut | Détail |
|---|---|---|
| Prix des 3 chips (100g et 250g) | ✅ Confirmé | Voir section 9 |
| Prix du Kilichi | ✅ Confirmé (1 000 FCFA) | Format/poids du sachet non précisé — détail mineur à demander pour l'affichage, non bloquant |
| Liste des 5 produits en développement | ✅ Confirmé | Voir section 10 |
| Seuils Distributeur (500 paquets) / Concessionnaire (1000 paquets) | ✅ Confirmé | Voir section 11 |
| Avantages Distributeur et Concessionnaire | ✅ Confirmé | Voir section 11 |
| Les 5 distinctions et récompenses | ✅ Confirmé | Voir section 12 — logos/justificatifs visuels toujours à fournir séparément |
| Coordonnée de contact canonique | ✅ Confirmé | `contact@ndjoka237.com` / `+237 656 18 84 16`, à appliquer partout (section 6-7, 21) |
| **Palier historique « à partir de 25 000 FCFA »** | ⚠️ **Toujours ouvert** | Aucune réponse transmise. Deux lectures possibles : (a) ce montant disparaît complètement, remplacé par les seuils en paquets ; (b) il subsiste comme palier d'entrée distinct, en dessous du Distributeur. Les deux changent le contenu de la page Concessionnaires et sa FAQ — ne pas trancher sans confirmation |

## 23. Ordre recommandé d'implémentation

1. Obtenir la réponse sur le palier des 25 000 FCFA — c'est le seul point encore bloquant pour finaliser `/concessionnaires`.
2. Remplacer la coordonnée de contact partout (footer, nav, schema Organization sur les 6 pages, tous les liens `wa.me/237683184360`) — c'est indépendant du reste et peut être fait immédiatement.
3. Centraliser les données produits (disponible/en développement) dans une source unique.
4. Mettre à jour `/produits` : formats 100g, nouveaux prix, prix Kilichi, section produits en développement.
5. Reconstruire `/concessionnaires` (comparaison Distributeur/Concessionnaire) une fois le point 1 tranché.
6. Compléter les sections « produits en développement » de `/concessionnaires` et `/nos-points-de-vente` (3 produits manquants).
7. Ajouter la section Distinctions (Investisseurs en priorité, puis Accueil) — demander les logos en parallèle.
8. Nettoyer les schemas `faq-home` dupliqués sur `/produits` et `/concessionnaires`.
9. Contrôle visuel des images et remplacement des visuels non HD.
10. Vérification responsive (mobile en premier), puis desktop/tablette.
11. Tests finaux (liens, CTA WhatsApp avec le nouveau numéro, compteurs animés, formulaires, schema Product mis à jour).

## 24. Checklist finale

**Contenu**
- [ ] Tous les produits disponibles confirmés sont présents avec les bons formats et prix (section 9)
- [ ] Les 5 produits en développement sont présents sur `/produits`, `/concessionnaires` et `/nos-points-de-vente`, sans prix
- [ ] Les 5 distinctions sont présentes (logos en attente, mention typographique en fallback)
- [ ] Le point des 25 000 FCFA est tranché avant publication de `/concessionnaires`

**Distribution**
- [ ] Distributeur clairement identifié (500 paquets min., 5 avantages)
- [ ] Concessionnaire clairement identifié (1000 paquets min., 5 avantages incluant ceux du distributeur, présenté comme palier supérieur)
- [ ] FAQ de `/concessionnaires` mise à jour en conséquence, schema `faq-concess` synchronisé

**Design**
- [ ] Palette et typographie existantes conservées, aucune couleur nouvelle introduite
- [ ] Nouvelles cartes (distinctions, paliers) cohérentes avec les composants de carte déjà en place
- [ ] Images HD confirmées visuellement, aucune image floue conservée
- [ ] Responsive vérifié mobile → tablette → desktop

**Technique**
- [ ] Coordonnées de contact unifiées sur les 6 pages : footer, nav, schema Organization, tous les liens WhatsApp
- [ ] Données produits/distinctions/paliers centralisées, pas dupliquées par page
- [ ] Schema `faq-home` dupliqué supprimé sur `/produits` et `/concessionnaires`
- [ ] Schema `Product` mis à jour avec les nouveaux prix
- [ ] Compteurs animés (`useCountUp`) vérifiés fonctionnels
- [ ] Accessibilité (contraste sur fond doré, `alt`, `aria-*`) vérifiée sur les nouvelles sections
