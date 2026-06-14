import { useState, useEffect, useRef, useMemo } from 'react';
import { useCountUp } from '../utils/useCountUp.js';
import {
  PD_WHATSAPP_URL,
  PD_CONTACT_URL,
  PD_HERO,
  PD_RESEAU,
  PD_MAP_DATA,
  MAP_CONTINENTS,
  PD_PAYS,
  PD_SEARCH,
  PD_AVANTAGES,
  PD_VISION,
  PD_FINAL,
  searchDistributeurs,
} from '../services/pointDistributions.js';
import '../assets/styles/pages/pointDistributions.css';

function PointDistributions() {
  // ── Refs ──────────────────────────────────────────────────────
  const heroImageRef = useRef(null);
  const mapSectionRef = useRef(null);
  const avantagesRef = useRef(null);
  const visionRef = useRef(null);

  // ── Stats counters ─────────────────────────────────────────────
  const [villes, villesRef] = useCountUp(15, 1200);
  const [pays, paysRef] = useCountUp(10, 1400);

  // ── Map state ─────────────────────────────────────────────────
  const [mapVisible, setMapVisible] = useState(false);
  const [activeCountry, setActiveCountry] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 50, y: 50, flipLeft: false });
  const mapContainerRef = useRef(null);

  // ── Search ────────────────────────────────────────────────────
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  const searchResults = useMemo(
    () => searchDistributeurs(searchQuery),
    [searchQuery]
  );

  // ── Global scroll animation observer ─────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      document.querySelectorAll('.pdAnimate').forEach((el) =>
        el.classList.add('pdAnimate--in')
      );
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pdAnimate--in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.pdAnimate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ── Map reveal observer ───────────────────────────────────────
  useEffect(() => {
    const el = mapSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ── Hero parallax (desktop) ───────────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    function onScroll() {
      if (!heroImageRef.current) return;
      const y = window.scrollY;
      heroImageRef.current.style.transform = `scale(1.08) translateY(${y * 0.12}px)`;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Close map tooltip when clicking outside ───────────────────
  useEffect(() => {
    function onClickOutside(e) {
      if (!mapContainerRef.current) return;
      if (!mapContainerRef.current.contains(e.target)) {
        setActiveCountry(null);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  // ── Map interactions ──────────────────────────────────────────
  function handleDotClick(country, e) {
    e.stopPropagation();
    if (activeCountry?.id === country.id) {
      setActiveCountry(null);
      return;
    }
    if (mapContainerRef.current) {
      const rect = mapContainerRef.current.getBoundingClientRect();
      const dotRect = e.currentTarget.getBoundingClientRect();
      const xPct = ((dotRect.left + dotRect.width / 2 - rect.left) / rect.width) * 100;
      const yPct = ((dotRect.top - rect.top) / rect.height) * 100;
      setTooltipPos({ x: xPct, y: yPct, flipLeft: xPct > 65 });
    }
    setActiveCountry(country);
  }

  function handleDotKeyDown(country, e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDotClick(country, e);
    }
  }

  return (
    <main className="pd-root">

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="pdHero-root" aria-labelledby="pd-hero-title">
        {/* Image (mobile: full BG / desktop: right panel) */}
        <figure className="pdHero-mediaBg" aria-hidden="true">
          <img
            ref={heroImageRef}
            className="pdHero-image"
            src={PD_HERO.image.src}
            alt={PD_HERO.image.alt}
            width={900}
            height={1100}
            fetchpriority="high"
          />
        </figure>

        {/* Mobile overlay gradient */}
        <div className="pdHero-overlay" aria-hidden="true" />

        {/* Copy */}
        <div className="pdHero-layout">
          <div className="pdHero-leftPanel">
            <div className="pdHero-content">
              <span className="pdHero-badge">{PD_HERO.badge}</span>
              <h1 className="pdHero-title" id="pd-hero-title">
                {PD_HERO.title.split(' ').map((word, i) => (
                  <span
                    key={i}
                    className="pdHero-word"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="pdHero-desc">{PD_HERO.description}</p>
              <div className="pdHero-ctas">
                <a
                  className="pdCta pdCta--gold"
                  href={PD_HERO.ctaPrimary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rejoindre le réseau Ndjoka via WhatsApp"
                >
                  {PD_HERO.ctaPrimary.label}
                </a>
                <a
                  className="pdCta pdCta--ghost"
                  href={PD_HERO.ctaSecondary.anchor}
                  aria-label="Trouver un distributeur Ndjoka"
                >
                  {PD_HERO.ctaSecondary.label}
                </a>
              </div>
            </div>
          </div>
          {/* Desktop spacer — image fills behind */}
          <div className="pdHero-rightPanel" aria-hidden="true" />
        </div>

        {/* Scroll hint */}
        <div className="pdHero-scroll" aria-hidden="true">
          <span className="pdHero-scrollLine" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — FORCE DU RÉSEAU
      ═══════════════════════════════════════════════════════ */}
      <section className="pdReseau-root" aria-labelledby="pd-reseau-title">
        <div className="pdReseau-shell shell">
          <div className="pdReseau-header pdAnimate">
            <span className="pdReseau-badge">{PD_RESEAU.badge}</span>
            <h2 className="pdReseau-title" id="pd-reseau-title">{PD_RESEAU.title}</h2>
            <p className="pdReseau-desc">{PD_RESEAU.description}</p>
          </div>

          <div className="pdReseau-stats">
            {/* Stat 1 — villes */}
            <div className="pdReseau-stat pdAnimate" style={{ '--delay': '0ms' }} ref={villesRef}>
              <span className="pdReseau-statVal">
                {villes}<span className="pdReseau-statSuffix">{PD_RESEAU.stats[0].suffix}</span>
              </span>
              <span className="pdReseau-statLabel">{PD_RESEAU.stats[0].label}</span>
            </div>

            {/* Stat 2 — pays */}
            <div className="pdReseau-stat pdAnimate" style={{ '--delay': '120ms' }} ref={paysRef}>
              <span className="pdReseau-statVal">
                {pays}<span className="pdReseau-statSuffix">{PD_RESEAU.stats[1].suffix}</span>
              </span>
              <span className="pdReseau-statLabel">{PD_RESEAU.stats[1].label}</span>
            </div>

            {/* Stat 3 — concessionnaires */}
            <div className="pdReseau-stat pdAnimate" style={{ '--delay': '240ms' }}>
              <span className="pdReseau-statVal pdReseau-statVal--text">
                {PD_RESEAU.stats[2].display}
              </span>
              <span className="pdReseau-statLabel">{PD_RESEAU.stats[2].label}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — CARTE D'EXPANSION
      ═══════════════════════════════════════════════════════ */}
      <section
        className="pdMap-root"
        aria-labelledby="pd-map-title"
        ref={mapSectionRef}
      >
        <div className="pdMap-shell shell">
          <div className="pdMap-header pdAnimate">
            <span className="pdMap-badge">{PD_MAP_DATA.badge}</span>
            <h2 className="pdMap-title" id="pd-map-title">{PD_MAP_DATA.title}</h2>
            <p className="pdMap-desc">{PD_MAP_DATA.description}</p>
            <p className="pdMap-subtext">{PD_MAP_DATA.subtext}</p>
          </div>

          <div className="pdMap-container" ref={mapContainerRef}>
            {/* SVG World Map */}
            <svg
              className={`pdMap-svg${mapVisible ? ' pdMap-svg--visible' : ''}`}
              viewBox="0 0 1000 500"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Carte mondiale de présence Ndjoka"
              role="img"
            >
              {/* Continent fills */}
              <g className="pdMap-continents">
                {MAP_CONTINENTS.map((c, i) => (
                  <path
                    key={c.id}
                    className="pdMap-continent"
                    d={c.d}
                    style={{ animationDelay: `${i * 80}ms` }}
                  />
                ))}
              </g>

              {/* Country dots */}
              {PD_PAYS.map((country, i) => (
                <g
                  key={country.id}
                  className={`pdMap-dotGroup${activeCountry?.id === country.id ? ' pdMap-dotGroup--active' : ''}${mapVisible ? ' pdMap-dotGroup--visible' : ''}`}
                  style={{ '--dot-delay': `${900 + i * 100}ms` }}
                  onClick={(e) => handleDotClick(country, e)}
                  onKeyDown={(e) => handleDotKeyDown(country, e)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${country.pays} — ${country.distributeurs.length} distributeur(s)`}
                  aria-pressed={activeCountry?.id === country.id}
                >
                  {/* Pulse ring */}
                  <circle
                    className="pdMap-dotPulse"
                    cx={country.cx}
                    cy={country.cy}
                    r={10}
                    fill="none"
                    stroke="rgba(242,178,51,0.4)"
                    strokeWidth={1.5}
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                  {/* Main dot */}
                  <circle
                    className="pdMap-dot"
                    cx={country.cx}
                    cy={country.cy}
                    r={5}
                    fill="#F2B233"
                  />
                  {/* Country label (desktop) */}
                  <text
                    className="pdMap-dotLabel"
                    x={country.cx}
                    y={country.cy - 12}
                    textAnchor="middle"
                  >
                    {country.pays}
                  </text>
                </g>
              ))}
            </svg>

            {/* Desktop floating tooltip */}
            {activeCountry && (
              <div
                className={`pdMap-tooltip${tooltipPos.flipLeft ? ' pdMap-tooltip--left' : ''}`}
                style={{
                  left: `${tooltipPos.x}%`,
                  top: `${tooltipPos.y}%`,
                }}
                role="region"
                aria-label={`Distributeurs au ${activeCountry.pays}`}
              >
                <p className="pdMap-tooltipPays">{activeCountry.pays}</p>
                <p className="pdMap-tooltipContinent">{activeCountry.continent}</p>
                <ul className="pdMap-tooltipList">
                  {activeCountry.distributeurs.map((d, i) => (
                    <li key={i} className="pdMap-tooltipItem">
                      <span className="pdMap-tooltipNom">{d.nom}</span>
                      <span className="pdMap-tooltipVille">{d.ville}</span>
                      <a
                        href={`tel:${d.tel.replace(/\s/g, '')}`}
                        className="pdMap-tooltipTel"
                        aria-label={`Appeler ${d.nom}`}
                      >
                        {d.tel}
                      </a>
                    </li>
                  ))}
                </ul>
                <button
                  className="pdMap-tooltipClose"
                  onClick={() => setActiveCountry(null)}
                  aria-label="Fermer"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">close</span>
                </button>
              </div>
            )}

            {/* Mobile bottom sheet overlay */}
            {activeCountry && (
              <div
                className="pdMap-sheetOverlay"
                onClick={() => setActiveCountry(null)}
                aria-hidden="true"
              />
            )}

            {/* Mobile bottom sheet */}
            {activeCountry && (
              <div
                className="pdMap-sheet"
                role="dialog"
                aria-modal="true"
                aria-label={`Distributeurs au ${activeCountry.pays}`}
              >
                <div className="pdMap-sheetHandle" aria-hidden="true" />
                <button
                  className="pdMap-sheetClose"
                  onClick={() => setActiveCountry(null)}
                  aria-label="Fermer"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">close</span>
                </button>
                <p className="pdMap-sheetPays">{activeCountry.pays}</p>
                <p className="pdMap-sheetContinent">{activeCountry.continent}</p>
                <div className="pdMap-sheetItems">
                  {activeCountry.distributeurs.map((d, i) => (
                    <div key={i} className="pdMap-sheetItem">
                      <p className="pdMap-sheetNom">{d.nom}</p>
                      <p className="pdMap-sheetVille">{d.ville}</p>
                      <p className="pdMap-sheetAdresse">{d.adresse}</p>
                      <a
                        href={`tel:${d.tel.replace(/\s/g, '')}`}
                        className="pdMap-sheetTel"
                        aria-label={`Appeler ${d.nom}`}
                      >
                        {d.tel}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — TROUVER UN DISTRIBUTEUR
      ═══════════════════════════════════════════════════════ */}
      <section
        id="distributeur"
        className="pdSearch-root"
        aria-labelledby="pd-search-title"
      >
        <div className="pdSearch-shell shell">
          <div className="pdSearch-header pdAnimate">
            <span className="pdSearch-badge">{PD_SEARCH.badge}</span>
            <h2 className="pdSearch-title" id="pd-search-title">{PD_SEARCH.title}</h2>
            <p className="pdSearch-desc">{PD_SEARCH.description}</p>
          </div>

          {/* Search input */}
          <div className="pdSearch-inputWrap pdAnimate" style={{ '--delay': '100ms' }}>
            <span className="pdSearch-inputIcon material-symbols-outlined" aria-hidden="true">
              search
            </span>
            <input
              ref={searchInputRef}
              className="pdSearch-input"
              type="search"
              placeholder={PD_SEARCH.placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Rechercher un distributeur par ville ou pays"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
            />
            {searchQuery && (
              <button
                className="pdSearch-clear"
                onClick={() => {
                  setSearchQuery('');
                  searchInputRef.current?.focus();
                }}
                aria-label="Effacer la recherche"
                type="button"
              >
                <span className="material-symbols-outlined" aria-hidden="true">close</span>
              </button>
            )}
          </div>

          {/* Results */}
          {searchQuery.trim() && (
            <div
              className="pdSearch-results"
              role="region"
              aria-live="polite"
              aria-label="Résultats de recherche"
            >
              {searchResults.length === 0 ? (
                <div className="pdSearch-empty">
                  <p className="pdSearch-emptyLabel">{PD_SEARCH.emptyLabel}</p>
                  <p className="pdSearch-emptyHint">{PD_SEARCH.emptyHint}</p>
                </div>
              ) : (
                <>
                  <p className="pdSearch-count" aria-live="polite">
                    {searchResults.length} distributeur{searchResults.length > 1 ? 's' : ''} trouvé{searchResults.length > 1 ? 's' : ''}
                  </p>
                  <ul className="pdSearch-list">
                    {searchResults.map((result, i) => (
                      <li key={i} className="pdSearch-result">
                        <div className="pdSearch-resultHeader">
                          <span className="pdSearch-resultNom">{result.nom}</span>
                          <span className="pdSearch-resultPays">{result.pays}</span>
                        </div>
                        <p className="pdSearch-resultVille">{result.ville}</p>
                        <p className="pdSearch-resultAdresse">{result.adresse}</p>
                        <a
                          href={`tel:${result.tel.replace(/\s/g, '')}`}
                          className="pdSearch-resultTel"
                          aria-label={`Appeler ${result.nom}`}
                        >
                          <span className="material-symbols-outlined" aria-hidden="true">call</span>
                          {result.tel}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 — POURQUOI REJOINDRE LE RÉSEAU
      ═══════════════════════════════════════════════════════ */}
      <section
        className="pdAvantages-root"
        aria-labelledby="pd-avantages-title"
        ref={avantagesRef}
      >
        <div className="pdAvantages-shell shell">
          <div className="pdAvantages-layout">
            {/* LEFT — sticky on desktop */}
            <div className="pdAvantages-left">
              <span className="pdAvantages-badge">{PD_AVANTAGES.badge}</span>
              <h2 className="pdAvantages-title" id="pd-avantages-title">
                {PD_AVANTAGES.title}
              </h2>
              <p className="pdAvantages-desc">{PD_AVANTAGES.description}</p>
              <figure className="pdAvantages-visual">
                <img
                  className="pdAvantages-image"
                  src={PD_AVANTAGES.image.src}
                  alt={PD_AVANTAGES.image.alt}
                  loading="lazy"
                  width={560}
                  height={560}
                />
              </figure>
              <a
                className="pdCta pdCta--gold pdAvantages-cta"
                href={PD_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rejoindre le réseau Ndjoka via WhatsApp"
              >
                Rejoindre le réseau
              </a>
            </div>

            {/* RIGHT — avantages qui défilent */}
            <div className="pdAvantages-right">
              {PD_AVANTAGES.items.map((item, i) => (
                <article
                  key={i}
                  className="pdAvantage-item pdAnimate"
                  style={{ '--delay': `${i * 120}ms` }}
                >
                  <div className="pdAvantage-iconWrap" aria-hidden="true">
                    <span className="material-symbols-outlined pdAvantage-icon">{item.icon}</span>
                  </div>
                  <h3 className="pdAvantage-titre">{item.titre}</h3>
                  <p className="pdAvantage-texte">{item.texte}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6 — LA VISION
      ═══════════════════════════════════════════════════════ */}
      <section
        className="pdVision-root"
        aria-labelledby="pd-vision-title"
        ref={visionRef}
      >
        <div className="pdVision-shell shell">
          <div className="pdVision-header pdAnimate">
            <span className="pdVision-badge">{PD_VISION.badge}</span>
            <h2 className="pdVision-title" id="pd-vision-title">{PD_VISION.title}</h2>
          </div>

          {/* Timeline */}
          <div className="pdVision-timeline" role="list">
            <div className="pdVision-line" aria-hidden="true" />
            {PD_VISION.piliers.map((pilier, i) => (
              <div
                key={i}
                className={`pdVision-pilier pdVision-pilier--${i % 2 === 0 ? 'left' : 'right'} pdAnimate`}
                style={{ '--delay': `${i * 150}ms` }}
                role="listitem"
              >
                <div className="pdVision-pilierDot" aria-hidden="true">
                  <span className="pdVision-pilierDotInner" />
                </div>
                <div className="pdVision-pilierCopy">
                  <h3 className="pdVision-pilierTitre">{pilier.titre}</h3>
                  <p className="pdVision-pilierTexte">{pilier.texte}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Produits à venir */}
          <div className="pdVision-avenir pdAnimate" style={{ '--delay': '200ms' }}>
            <header className="pdVision-avenirHeader">
              <h3 className="pdVision-avenirTitle">{PD_VISION.avenir.title}</h3>
              <p className="pdVision-avenirText">{PD_VISION.avenir.text}</p>
              <p className="pdVision-avenirSubtitle">{PD_VISION.avenir.subtitle}</p>
            </header>
            <div className="pdVision-avenirGrid">
              {PD_VISION.avenir.produits.map((prod) => (
                <article key={prod.nom} className="pdVision-avenirItem">
                  <figure className="pdVision-avenirVisual">
                    <img
                      className="pdVision-avenirImage"
                      src={prod.image}
                      alt={prod.alt}
                      loading="lazy"
                      width={300}
                      height={300}
                    />
                  </figure>
                  <div className="pdVision-avenirCopy">
                    <span className="pdVision-avenirBadge">{prod.badge}</span>
                    <h4 className="pdVision-avenirNom">{prod.nom}</h4>
                    <p className="pdVision-avenirDesc">{prod.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7 — CTA FINAL
      ═══════════════════════════════════════════════════════ */}
      <section className="pdFinal-root" aria-labelledby="pd-final-title">
        <div className="pdFinal-radial" aria-hidden="true" />
        <div className="pdFinal-shell shell">
          <div className="pdFinal-content pdAnimate">
            <h2 className="pdFinal-title" id="pd-final-title">{PD_FINAL.title}</h2>
            <p className="pdFinal-desc">{PD_FINAL.description}</p>
            <div className="pdFinal-ctas">
              <a
                className="pdCta pdCta--gold pdCta--lg pdFinal-ctaGlow"
                href={PD_FINAL.ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Devenir concessionnaire Ndjoka via WhatsApp"
              >
                {PD_FINAL.ctaPrimary.label}
              </a>
              <a
                className="pdCta pdCta--ghost"
                href={PD_FINAL.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter l'équipe Ndjoka via WhatsApp"
              >
                {PD_FINAL.ctaSecondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default PointDistributions;
