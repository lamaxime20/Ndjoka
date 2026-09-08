# Graph Report - Ndjoka  (2026-09-08)

## Corpus Check
- 23 files · ~16,094 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 111 nodes · 183 edges · 10 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e2686e91`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]

## God Nodes (most connected - your core abstractions)
1. `applySeo()` - 7 edges
2. `useCountUp()` - 7 edges
3. `PointDistributions()` - 3 edges
4. `Principale()` - 3 edges
5. `NAV_ITEMS` - 3 edges
6. `searchDistributeurs()` - 3 edges
7. `buildCommandeWhatsAppUrl()` - 3 edges
8. `setJsonLd()` - 3 edges
9. `applySchemaPage()` - 3 edges
10. `App()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Concessionnaires()` --calls--> `useCountUp()`  [EXTRACTED]
  vue/src/pages/concessionnaires.jsx → vue/src/utils/useCountUp.js
- `Investisseurs()` --calls--> `useCountUp()`  [EXTRACTED]
  vue/src/pages/investisseurs.jsx → vue/src/utils/useCountUp.js
- `PointDistributions()` --calls--> `useCountUp()`  [EXTRACTED]
  vue/src/pages/pointDistributions.jsx → vue/src/utils/useCountUp.js
- `PointDistributions()` --calls--> `searchDistributeurs()`  [EXTRACTED]
  vue/src/pages/pointDistributions.jsx → vue/src/services/pointDistributions.js
- `Principale()` --calls--> `applySeo()`  [EXTRACTED]
  vue/src/pages/principale.jsx → vue/src/services/seo.js

## Import Cycles
- None detected.

## Communities (10 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.17
Nodes (12): Footer(), NavBar(), Accueil, APropos, Concessionnaires, Investisseurs, PointDistributions, Produits (+4 more)

### Community 1 - "Community 1"
Cohesion: 0.17
Nodes (14): DISTRIBUTORS, NdjokaExpansionMap(), STATS, PointDistributions(), MAP_CONTINENTS, PD_AVANTAGES, PD_FINAL, PD_HERO (+6 more)

### Community 2 - "Community 2"
Cohesion: 0.25
Nodes (11): Concessionnaires(), Investisseurs(), INVEST_FAQ, INVEST_FINAL, INVEST_HERO, INVEST_OPPORTUNITE, INVEST_PROCESS, INVEST_PRODUITS (+3 more)

### Community 3 - "Community 3"
Cohesion: 0.29
Nodes (11): CONCESS_AVANTAGES, CONCESS_AVENIR, CONCESS_FAQ, CONCESS_FINAL, CONCESS_HERO, CONCESS_INVEST, CONCESS_PRODUITS, CONCESS_STAT_COUNT (+3 more)

### Community 4 - "Community 4"
Cohesion: 0.30
Nodes (9): ABOUT_CONTENT, BENEFITS_CONTENT, FAQ_CONTENT, FINAL_CTA_CONTENT, HERO_CONTENT, INVESTOR_CONTENT, PRESENCE_CONTENT, PRODUCT_INTRO (+1 more)

### Community 5 - "Community 5"
Cohesion: 0.26
Nodes (8): Principale(), applySchemaPage(), applySeo(), SEO_CONFIG, setCanonical(), setJsonLd(), setMeta(), App()

### Community 6 - "Community 6"
Cohesion: 0.33
Nodes (9): FORM_INITIAL, Produits(), buildCommandeWhatsAppUrl(), PRODUITS_COMMANDE, PRODUITS_FINAL, PRODUITS_HERO, PRODUITS_ITEMS, PRODUITS_QUALITE (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.36
Nodes (7): APROPOS_CONTACT, APROPOS_DEFINITION, APROPOS_EQUIPE, APROPOS_EVOLUTION, APROPOS_HERO, APROPOS_NOM, APROPOS_PRESENCE

## Knowledge Gaps
- **13 isolated node(s):** `DISTRIBUTORS`, `STATS`, `Accueil`, `Produits`, `Concessionnaires` (+8 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useCountUp()` connect `Community 2` to `Community 1`, `Community 3`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `applySeo()` connect `Community 5` to `Community 0`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `DISTRIBUTORS`, `STATS`, `Accueil` to the rest of the system?**
  _13 weakly-connected nodes found - possible documentation gaps or missing edges._