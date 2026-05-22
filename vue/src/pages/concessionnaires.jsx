import { useState, useEffect, useRef } from 'react';
import {
  CONCESS_WHATSAPP_URL,
  CONCESS_HERO,
  CONCESS_AVANTAGES,
  CONCESS_PRODUITS,
  CONCESS_STAT_COUNT,
  CONCESS_STATS,
  CONCESS_TEMOIGNAGES,
  CONCESS_INVEST,
  CONCESS_FAQ,
  CONCESS_FINAL,
} from '../services/concessionnaires.js';
import { useCountUp } from '../utils/useCountUp.js';
import '../assets/styles/pages/concessionnaires.css';

function Concessionnaires() {
  const heroBgRef = useRef(null);
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
            <a
              className="concessCta concessCta--primary"
              href={CONCESS_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Devenir concessionnaire
            </a>
          </div>
        </div>
      </section>

      {/* ── Pourquoi ──────────────────────────────────────────── */}
      <section
        className="concessPourquoi-root section-padding"
        aria-labelledby="concess-pourquoi-title"
      >
        <div className="concessPourquoi-shell shell">
          <header className="concessSection-heading">
            <p className="concessSection-eyebrow">Pourquoi nous rejoindre</p>
            <h2 className="concessSection-title" id="concess-pourquoi-title">
              Pourquoi rejoindre le réseau Ndjoka ?
            </h2>
            <p className="concessSection-description">
              Ndjoka accompagne ses concessionnaires pour leur permettre de vendre plus facilement
              et développer leur activité avec sérénité.
            </p>
          </header>
          <div className="concessPourquoi-grid">
            {CONCESS_AVANTAGES.map((av) => (
              <article className="concessPourquoi-card" key={av.title}>
                <span className="concessPourquoi-icon" aria-hidden="true">
                  <span className="material-symbols-outlined">{av.icon}</span>
                </span>
                <h3 className="concessPourquoi-cardTitle">{av.title}</h3>
                <p className="concessPourquoi-cardText">{av.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
                className={`concessProduit-card${prod.badge ? ' concessProduit-card--soon' : ''}`}
                key={prod.name}
              >
                <figure className="concessProduit-visual">
                  <img className="concessProduit-image" src={prod.image} alt={prod.alt} />
                </figure>
                <div className="concessProduit-copy">
                  {prod.badge && (
                    <span className="concessProduit-badge">{prod.badge}</span>
                  )}
                  <h3 className="concessProduit-name">{prod.name}</h3>
                  <p className="concessProduit-description">{prod.description}</p>
                  <span className="concessProduit-format">{prod.format}</span>
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

      {/* ── Investissement ────────────────────────────────────── */}
      <section
        className="concessInvest-root section-padding"
        aria-labelledby="concess-invest-title"
      >
        <div className="concessInvest-shell shell">
          <div className="concessInvest-layout">
            <div className="concessInvest-copy">
              <p className="concessSection-eyebrow">Investissement</p>
              <h2 className="concessSection-title" id="concess-invest-title">
                {CONCESS_INVEST.title}
              </h2>
              <p className="concessSection-description">{CONCESS_INVEST.description}</p>
              <div className="concessInvest-blocs">
                {CONCESS_INVEST.inclus.map((b) => (
                  <div className="concessInvest-bloc" key={b.title}>
                    <span className="concessInvest-blocIcon" aria-hidden="true">
                      <span className="material-symbols-outlined">{b.icon}</span>
                    </span>
                    <div className="concessInvest-blocCopy">
                      <h3 className="concessInvest-blocTitle">{b.title}</h3>
                      <p className="concessInvest-blocText">{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                className="concessCta concessCta--primary"
                href={CONCESS_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Devenir concessionnaire
              </a>
            </div>
            <figure className="concessInvest-visual">
              <img
                className="concessInvest-image"
                src={CONCESS_INVEST.image.src}
                alt={CONCESS_INVEST.image.alt}
              />
            </figure>
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
                >
                  <span>{item.question}</span>
                  <span className="concessFaq-icon" aria-hidden="true">
                    <span className="material-symbols-outlined">
                      {openFaq === i ? 'remove' : 'add'}
                    </span>
                  </span>
                </button>
                <div className="concessFaq-answer">
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
