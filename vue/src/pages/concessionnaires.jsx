import { useState, useEffect, useRef } from 'react';
import {
  CONCESS_WHATSAPP_URL,
  CONCESS_HERO,
  CONCESS_TIERS,
  CONCESS_PRODUITS,
  CONCESS_STAT_COUNT,
  CONCESS_STATS,
  CONCESS_TEMOIGNAGES,
  CONCESS_VISION,
  CONCESS_AVENIR,
  CONCESS_FAQ,
  CONCESS_FINAL,
} from '../services/concessionnaires.js';
import { formatPrixFCFA } from '../services/catalogueProduits.js';
import { useCountUp } from '../utils/useCountUp.js';
import TierComparison from '../components/tierComparison.jsx';
import '../assets/styles/pages/concessionnaires.css';

function Concessionnaires() {
  const heroBgRef = useRef(null);
  const visionRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [villesCount, villesRef] = useCountUp(CONCESS_STAT_COUNT.value);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    function onScroll() {
      if (!heroBgRef.current) return;
      heroBgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      document.querySelectorAll('.concessVision-animate').forEach((el) =>
        el.classList.add('concessVision-animate--visible')
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('concessVision-animate--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = visionRef.current
      ? visionRef.current.querySelectorAll('.concessVision-animate')
      : [];
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  function toggleFaq(i) {
    setOpenFaq((prev) => (prev === i ? null : i));
  }

  return (
    <main className="concess-root">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="concessHero-root" aria-labelledby="concess-hero-title">
        <div
          className="concessHero-bg"
          ref={heroBgRef}
          style={{ backgroundImage: `url(${CONCESS_HERO.image.src})` }}
          aria-hidden="true"
        />
        <div className="concessHero-overlay" aria-hidden="true" />
        <div className="concessHero-shell shell">
          <div className="concessHero-copy">
            <p className="concessHero-eyebrow">{CONCESS_HERO.eyebrow}</p>
            <h1 className="concessHero-title" id="concess-hero-title">
              {CONCESS_HERO.title}
            </h1>
            <p className="concessHero-description">{CONCESS_HERO.description}</p>
            <div className="concessHero-ctaWrap">
              <a
                className="concessCta concessCta--primary"
                href={CONCESS_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Devenir concessionnaire Ndjoka via WhatsApp"
              >
                Devenir concessionnaire
              </a>
              <a className="concessCta concessCta--ghost" href={CONCESS_HERO.ctaSecondary.anchor}>
                {CONCESS_HERO.ctaSecondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Paliers (Essai / Distributeur / Concessionnaire) ─────── */}
      <TierComparison data={CONCESS_TIERS} />

      {/* ── Produits ──────────────────────────────────────────── */}
      <section
        className="concessProduits-root section-padding"
        aria-labelledby="concess-produits-title"
      >
        <div className="concessProduits-shell shell">
          <header className="concessSection-heading">
            <p className="concessSection-eyebrow">Produits</p>
            <h2 className="concessSection-title" id="concess-produits-title">
              Des produits que les clients aiment déjà acheter
            </h2>
            <p className="concessSection-description">
              Des snacks africains propres, bien emballés et pensés pour être consommés
              régulièrement.
            </p>
          </header>
          <div className="concessProduits-grid">
            {CONCESS_PRODUITS.map((prod) => (
              <article
                className="concessProduit-card"
                key={prod.name}
              >
                <figure className="concessProduit-visual">
                  <img
                    className="concessProduit-image"
                    src={prod.image}
                    alt={prod.alt}
                    loading="lazy"
                    width={300}
                    height={300}
                  />
                </figure>
                <div className="concessProduit-copy">
                  {prod.badge && (
                    <span className="concessProduit-badge">{prod.badge}</span>
                  )}
                  <h3 className="concessProduit-name">{prod.name}</h3>
                  <p className="concessProduit-description">{prod.description}</p>
                  <div className="concessProduit-formats">
                    {prod.formats.map((f) => (
                      <span className="concessProduit-format" key={f.poids ?? 'unique'}>
                        {f.poids ? `${f.poids} · ` : ''}
                        {formatPrixFCFA(f.prix)}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="concessProduits-cta">
            <a
              className="concessCta concessCta--primary"
              href={CONCESS_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Devenir concessionnaire Ndjoka via WhatsApp"
            >
              Devenir concessionnaire
            </a>
          </div>
        </div>
      </section>

      {/* ── Réseau / Stats ────────────────────────────────────── */}
      <section
        className="concessReseau-root section-padding"
        aria-labelledby="concess-reseau-title"
      >
        <div className="concessReseau-shell shell">
          <header className="concessSection-heading">
            <p className="concessSection-eyebrow concessSection-eyebrow--light">Notre réseau</p>
            <h2
              className="concessSection-title concessSection-title--light"
              id="concess-reseau-title"
            >
              Une marque déjà présente sur plusieurs marchés
            </h2>
            <p className="concessSection-description concessSection-description--light">
              Ndjoka développe progressivement son réseau de distribution au Cameroun, en Afrique
              et dans la diaspora.
            </p>
          </header>

          <div className="concessReseau-stats">
            <div className="concessReseau-stat concessReseau-stat--count" ref={villesRef}>
              <span className="concessReseau-statVal">+{villesCount}</span>
              <span className="concessReseau-statLabel">{CONCESS_STAT_COUNT.label}</span>
            </div>
            {CONCESS_STATS.map((s) => (
              <div className="concessReseau-stat" key={s.label}>
                <span className="concessReseau-statIcon" aria-hidden="true">
                  <span className="material-symbols-outlined">{s.icon}</span>
                </span>
                <span className="concessReseau-statLabel">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="concessReseau-temoignages">
            {CONCESS_TEMOIGNAGES.map((t) => (
              <blockquote className="concessReseau-temoignage" key={t.text}>
                <span className="concessReseau-quoteChar" aria-hidden="true">"</span>
                <p className="concessReseau-temoignageText">{t.text}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision Ndjoka ─────────────────────────────────────── */}
      <section
        className="concessVision-root section-padding"
        aria-labelledby="concess-vision-title"
        ref={visionRef}
      >
        <div className="concessVision-shell shell">

          {/* En-tête vision */}
          <div className="concessVision-header">
            <span className="concessVision-badge concessVision-animate concessVision-animate--title">
              {CONCESS_VISION.badge}
            </span>
            <h2
              className="concessVision-title concessVision-animate concessVision-animate--title"
              id="concess-vision-title"
            >
              {CONCESS_VISION.title}
            </h2>
            <div className="concessVision-paragraphes concessVision-animate concessVision-animate--text">
              {CONCESS_VISION.paragraphes.map((p, i) => (
                <p className="concessVision-para" key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Blocs croissance */}
          <div className="concessVision-blocs" aria-label="Axes de développement Ndjoka">
            {CONCESS_VISION.blocs.map((bloc, i) => (
              <div
                className="concessVision-bloc concessVision-animate concessVision-animate--bloc"
                key={bloc.title}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="concessVision-blocIcon" aria-hidden="true">
                  <span className="material-symbols-outlined">{bloc.icon}</span>
                </span>
                <div className="concessVision-blocCopy">
                  <h3 className="concessVision-blocTitle">{bloc.title}</h3>
                  <p className="concessVision-blocText">{bloc.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Produits à venir */}
          <div className="concessAvenir-root concessVision-animate concessVision-animate--text">
            <header className="concessAvenir-header">
              <h3 className="concessAvenir-title">{CONCESS_AVENIR.title}</h3>
              <p className="concessAvenir-text">{CONCESS_AVENIR.text}</p>
              <p className="concessAvenir-subtitle">{CONCESS_AVENIR.subtitle}</p>
            </header>

            <div className="concessAvenir-grid">
              {CONCESS_AVENIR.produits.map((prod) => (
                <article className="concessAvenir-item" key={prod.name}>
                  <figure className="concessAvenir-visual">
                    {prod.image ? (
                      <img
                        className="concessAvenir-image"
                        src={prod.image}
                        alt={prod.alt}
                        loading="lazy"
                        width={300}
                        height={300}
                      />
                    ) : (
                      <span className="concessAvenir-placeholder" aria-hidden="true">
                        <span className="material-symbols-outlined">{prod.icon || 'inventory_2'}</span>
                      </span>
                    )}
                  </figure>
                  <div className="concessAvenir-copy">
                    <span className="concessAvenir-badge">{prod.badge}</span>
                    <h4 className="concessAvenir-name">{prod.name}</h4>
                    <p className="concessAvenir-description">{prod.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="concessFaq-root section-padding" aria-labelledby="concess-faq-title">
        <div className="concessFaq-shell shell">
          <header className="concessSection-heading">
            <p className="concessSection-eyebrow">FAQ</p>
            <h2 className="concessSection-title" id="concess-faq-title">
              Questions fréquentes
            </h2>
            <p className="concessSection-description">
              Tout ce qu'il faut savoir avant de rejoindre le réseau Ndjoka.
            </p>
          </header>
          <div className="concessFaq-list">
            {CONCESS_FAQ.map((item, i) => (
              <div
                className={`concessFaq-item${openFaq === i ? ' concessFaq-item--open' : ''}`}
                key={item.question}
              >
                <button
                  className="concessFaq-question"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`concess-faq-answer-${i}`}
                >
                  <span>{item.question}</span>
                  <span className="concessFaq-icon" aria-hidden="true">
                    <span className="material-symbols-outlined">
                      {openFaq === i ? 'remove' : 'add'}
                    </span>
                  </span>
                </button>
                <div
                  className="concessFaq-answer"
                  id={`concess-faq-answer-${i}`}
                >
                  <div className="concessFaq-answerInner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section
        className="concessFinal-root section-padding"
        aria-labelledby="concess-final-title"
      >
        <div className="concessFinal-shell shell">
          <div className="concessFinal-panel">
            <h2 className="concessFinal-title" id="concess-final-title">
              {CONCESS_FINAL.title}
            </h2>
            <p className="concessFinal-description">{CONCESS_FINAL.description}</p>
            <a
              className="concessCta concessCta--primary concessCta--lg"
              href={CONCESS_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Devenir concessionnaire Ndjoka via WhatsApp"
            >
              Devenir concessionnaire
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Concessionnaires;
