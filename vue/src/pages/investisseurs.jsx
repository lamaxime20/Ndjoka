import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  INVEST_WHATSAPP_URL,
  INVEST_HERO,
  INVEST_OPPORTUNITE,
  INVEST_PROCESS,
  INVEST_PRODUITS,
  INVEST_STATS,
  INVEST_VISION,
  INVEST_FAQ,
  INVEST_FINAL,
} from '../services/investisseurs.js';
import { useCountUp } from '../utils/useCountUp.js';
import '../assets/styles/pages/investisseurs.css';

function Investisseurs() {
  const heroBgRef = useRef(null);
  const timelineRef = useRef(null);
  const faqListRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [faqVisible, setFaqVisible] = useState(false);
  const [villesCount, villesRef] = useCountUp(INVEST_STATS.count.value, 2000);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    function onScroll() {
      if (!heroBgRef.current) return;
      heroBgRef.current.style.transform = `scale(1.08) translateY(${window.scrollY * 0.15}px)`;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      document.querySelectorAll('.invest-animate').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.invest-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-active');
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = faqListRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFaqVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function toggleFaq(i) {
    setOpenFaq((prev) => (prev === i ? null : i));
  }

  return (
    <main className="invest-root">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="investHero-root" aria-labelledby="invest-hero-title">
        <div
          className="investHero-bg"
          ref={heroBgRef}
          style={{ backgroundImage: `url(${INVEST_HERO.image.src})` }}
          aria-hidden="true"
        />
        <div className="investHero-overlay" aria-hidden="true" />
        <div className="investHero-shell shell">
          <div className="investHero-copy">
            <p className="investHero-eyebrow">Investisseurs</p>
            <h1 className="investHero-title" id="invest-hero-title">
              {INVEST_HERO.title}
            </h1>
            <p className="investHero-desc">{INVEST_HERO.description}</p>
            <div className="investHero-ctaWrap">
              <a
                className="investCta investCta--primary"
                href={INVEST_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {INVEST_HERO.cta}
              </a>
            </div>
          </div>
        </div>
        <div className="investHero-fade" aria-hidden="true" />
      </section>

      {/* ── Opportunité ───────────────────────────────────────── */}
      <section className="investOpportunite-root" aria-labelledby="invest-opport-title">
        <div className="investOpportunite-shell shell">
          <header className="investSection-heading invest-animate">
            <p className="investSection-eyebrow">Opportunité d'investissement</p>
            <h2 className="investSection-title" id="invest-opport-title">
              {INVEST_OPPORTUNITE.title}
            </h2>
            <p className="investSection-desc">{INVEST_OPPORTUNITE.description}</p>
          </header>
          <div className="investOpportunite-grid">
            {INVEST_OPPORTUNITE.blocs.map((bloc, i) => (
              <article
                className={`investOpportunite-bloc invest-animate invest-animate--d${(i % 3) + 1}`}
                key={bloc.title}
              >
                <span className="investOpportunite-dot" aria-hidden="true" />
                <div className="investOpportunite-content">
                  <h3 className="investOpportunite-title">{bloc.title}</h3>
                  <p className="investOpportunite-text">{bloc.text}</p>
                </div>
                <span className="investOpportunite-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────── */}
      <section className="investProcess-root" aria-labelledby="invest-process-title">
        <div className="investProcess-shell shell">
          <header className="investSection-heading invest-animate">
            <h2 className="investSection-title" id="invest-process-title">
              {INVEST_PROCESS.title}
            </h2>
            <p className="investSection-desc">{INVEST_PROCESS.description}</p>
          </header>
          <div className="investProcess-timeline" ref={timelineRef}>
            <div className="investProcess-line" aria-hidden="true" />
            {INVEST_PROCESS.steps.map((step, i) => (
              <article
                className={`investProcess-step invest-animate invest-animate--d${i + 1}`}
                key={step.num}
              >
                <span className="investProcess-num" aria-hidden="true">{step.num}</span>
                <h3 className="investProcess-stepTitle">{step.title}</h3>
                <p className="investProcess-stepText">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Produits ──────────────────────────────────────────── */}
      <section className="investProduits-root" aria-labelledby="invest-produits-title">
        <div className="investProduits-shell shell">
          <header className="investSection-heading invest-animate">
            <p className="investSection-eyebrow">Produits Ndjoka</p>
            <h2 className="investSection-title" id="invest-produits-title">
              {INVEST_PRODUITS.title}
            </h2>
            <p className="investSection-desc">{INVEST_PRODUITS.description}</p>
          </header>
          <div className="investProduits-grid">
            {INVEST_PRODUITS.items.map((prod, i) => (
              <article
                className={`investProduit-item invest-animate invest-animate--d${i + 1}`}
                key={prod.name}
              >
                <figure className="investProduit-visual">
                  <img
                    className="investProduit-img"
                    src={prod.image}
                    alt={prod.alt}
                    loading="lazy"
                    width={300}
                    height={300}
                  />
                </figure>
                {prod.badge && (
                  <span className="investProduit-badge">{prod.badge}</span>
                )}
                <h3 className="investProduit-name">{prod.name}</h3>
                <p className="investProduit-desc">{prod.description}</p>
              </article>
            ))}
          </div>
          <div className="investProduits-cta invest-animate">
            <Link className="investCta investCta--ghost" to="/produits">
              Découvrir les produits
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="investStats-root" aria-labelledby="invest-stats-title">
        <div className="investStats-shell shell">
          <header className="investSection-heading invest-animate">
            <h2 className="investSection-title investSection-title--light" id="invest-stats-title">
              {INVEST_STATS.title}
            </h2>
            <p className="investSection-desc investSection-desc--light">
              {INVEST_STATS.description}
            </p>
          </header>
          <div className="investStats-grid">
            <div className="investStat-item investStat-item--count invest-animate" ref={villesRef}>
              <span className="investStat-val">+{villesCount}</span>
              <span className="investStat-label">{INVEST_STATS.count.label}</span>
            </div>
            {INVEST_STATS.items.map((item, i) => (
              <div
                className={`investStat-item invest-animate invest-animate--d${(i % 3) + 1}`}
                key={item.label}
              >
                <span className="investStat-dot" aria-hidden="true" />
                <span className="investStat-label">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="investStats-temoignages">
            {INVEST_STATS.temoignages.map((t, i) => (
              <blockquote
                className={`investStats-temoignage invest-animate invest-animate--d${i + 1}`}
                key={t}
              >
                <p className="investStats-quote">{t}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision ────────────────────────────────────────────── */}
      <section className="investVision-root" aria-labelledby="invest-vision-title">
        <div className="investVision-shell shell">
          <header className="investSection-heading invest-animate">
            <p className="investSection-eyebrow">Vision future</p>
            <h2 className="investSection-title" id="invest-vision-title">
              {INVEST_VISION.title}
            </h2>
            <p className="investSection-desc">{INVEST_VISION.description}</p>
          </header>
          <div className="investVision-grid">
            {INVEST_VISION.items.map((item, i) => (
              <article
                className={`investVision-item invest-animate invest-animate--d${i + 1}`}
                key={item.title}
              >
                <span className="investVision-accent" aria-hidden="true" />
                <h3 className="investVision-itemTitle">{item.title}</h3>
                <p className="investVision-itemText">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="investFaq-root" aria-labelledby="invest-faq-title">
        <div className="investFaq-shell">
          <header className="investSection-heading invest-animate">
            <p className="investSection-eyebrow">FAQ</p>
            <h2 className="investSection-title" id="invest-faq-title">
              Tout ce qu'il faut savoir
            </h2>
          </header>
          <div className={`investFaq-list${faqVisible ? ' investFaq-list--visible' : ''}`} ref={faqListRef}>
            {INVEST_FAQ.map((item, i) => (
              <div
                className={`investFaq-item investFaq-item--idx${i}${openFaq === i ? ' investFaq-item--open' : ''}`}
                key={item.question}
              >
                <button
                  className="investFaq-btn"
                  type="button"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{item.question}</span>
                  <span className="investFaq-icon" aria-hidden="true">
                    <span className="material-symbols-outlined">
                      {openFaq === i ? 'remove' : 'add'}
                    </span>
                  </span>
                </button>
                <div className="investFaq-answer">
                  <div className="investFaq-answerInner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ─────────────────────────────────────────── */}
      <section className="investFinal-root" aria-labelledby="invest-final-title">
        <div className="investFinal-shell shell">
          <div className="investFinal-content invest-animate">
            <h2 className="investFinal-title" id="invest-final-title">
              {INVEST_FINAL.title}
            </h2>
            <p className="investFinal-desc">{INVEST_FINAL.description}</p>
            <a
              className="investCta investCta--gold"
              href={INVEST_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {INVEST_FINAL.cta}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Investisseurs;
