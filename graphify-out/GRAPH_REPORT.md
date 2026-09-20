# Graph Report - Ndjoka  (2026-09-19)

## Corpus Check
- 27 files · ~16,930 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 126 nodes · 220 edges · 10 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `67a6237f`
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
3. `formatPrixFCFA()` - 5 edges
4. `PRODUITS_EN_DEVELOPPEMENT` - 4 edges
5. `DistinctionsSection()` - 3 edges
6. `Concessionnaires()` - 3 edges
7. `PointDistributions()` - 3 edges
8. `Principale()` - 3 edges
9. `Produits()` - 3 edges
10. `PRODUITS_DISPONIBLES` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Concessionnaires()` --calls--> `formatPrixFCFA()`  [EXTRACTED]
  vue/src/pages/concessionnaires.jsx → vue/src/services/catalogueProduits.js
- `Investisseurs()` --calls--> `useCountUp()`  [EXTRACTED]
  vue/src/pages/investisseurs.jsx → vue/src/utils/useCountUp.js
- `Principale()` --calls--> `applySeo()`  [EXTRACTED]
  vue/src/pages/principale.jsx → vue/src/services/seo.js
- `Concessionnaires()` --calls--> `useCountUp()`  [EXTRACTED]
  vue/src/pages/concessionnaires.jsx → vue/src/utils/useCountUp.js
- `PointDistributions()` --calls--> `searchDistributeurs()`  [EXTRACTED]
  vue/src/pages/pointDistributions.jsx → vue/src/services/pointDistributions.js

## Import Cycles
- None detected.

## Communities (10 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (14): Footer(), NavBar(), Accueil, APropos, Concessionnaires, Investisseurs, PointDistributions, Principale() (+6 more)

### Community 1 - "Community 1"
Cohesion: 0.14
Nodes (17): DISTRIBUTORS, NdjokaExpansionMap(), STATS, Concessionnaires(), Investisseurs(), PointDistributions(), MAP_CONTINENTS, PD_AVANTAGES (+9 more)

### Community 2 - "Community 2"
Cohesion: 0.23
Nodes (12): DistinctionsSection(), DISTINCTIONS, DISTINCTIONS_COMPACT, DISTINCTIONS_FULL, INVEST_FAQ, INVEST_FINAL, INVEST_HERO, INVEST_OPPORTUNITE (+4 more)

### Community 3 - "Community 3"
Cohesion: 0.24
Nodes (11): TierComparison(), CONCESS_AVENIR, CONCESS_FAQ, CONCESS_FINAL, CONCESS_HERO, CONCESS_PRODUITS, CONCESS_STAT_COUNT, CONCESS_STATS (+3 more)

### Community 4 - "Community 4"
Cohesion: 0.30
Nodes (9): ABOUT_CONTENT, BENEFITS_CONTENT, FAQ_CONTENT, FINAL_CTA_CONTENT, HERO_CONTENT, INVESTOR_CONTENT, PRESENCE_CONTENT, PRODUCT_INTRO (+1 more)

### Community 5 - "Community 5"
Cohesion: 0.36
Nodes (7): applySchemaPage(), applySeo(), PAGE_SPECIFIC_SCHEMA_IDS, SEO_CONFIG, setCanonical(), setJsonLd(), setMeta()

### Community 6 - "Community 6"
Cohesion: 0.24
Nodes (13): FORM_INITIAL, Produits(), formatPrixFCFA(), PRODUITS_DISPONIBLES, PRODUITS_EN_DEVELOPPEMENT, buildCommandeWhatsAppUrl(), PRODUITS_AVENIR, PRODUITS_COMMANDE (+5 more)

### Community 7 - "Community 7"
Cohesion: 0.36
Nodes (7): APROPOS_CONTACT, APROPOS_DEFINITION, APROPOS_EVOLUTION, APROPOS_HERO, APROPOS_NOM, APROPOS_ORIGINES, APROPOS_PRESENCE

## Knowledge Gaps
- **14 isolated node(s):** `DISTRIBUTORS`, `STATS`, `Accueil`, `Produits`, `Concessionnaires` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useCountUp()` connect `Community 1` to `Community 2`, `Community 3`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Why does `PRODUITS_EN_DEVELOPPEMENT` connect `Community 6` to `Community 1`, `Community 3`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Why does `DistinctionsSection()` connect `Community 2` to `Community 4`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **What connects `DISTRIBUTORS`, `STATS`, `Accueil` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.13438735177865613 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.13852813852813853 - nodes in this community are weakly interconnected._