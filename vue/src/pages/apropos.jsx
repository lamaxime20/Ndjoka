import { useEffect, useRef } from 'react';
import {
  APROPOS_WHATSAPP_URL,
  APROPOS_HERO,
  APROPOS_DEFINITION,
  APROPOS_NOM,
  APROPOS_EVOLUTION,
  APROPOS_EQUIPE,
  APROPOS_PRESENCE,
  APROPOS_CONTACT,
} from '../services/apropos.js';
import '../assets/styles/pages/apropos.css';

function APropos() {
  const heroBgRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    function onScroll() {
      if (!heroBgRef.current) return;
      heroBgRef.current.style.transform = `scale(1.08) translateY(${window.scrollY * 0.12}px)`;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      document.querySelectorAll('.ap-animate').forEach((el) => el.classList.add('is-visible'));
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
      { threshold: 0.1 }
    );
    document.querySelectorAll('.ap-animate').forEach((el) => observer.observe(el));
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="ap-root">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="apHero-root" aria-labelledby="ap-hero-title">
        <div
          className="apHero-bg"
          ref={heroBgRef}
          style={{ backgroundImage: `url(${APROPOS_HERO.image})` }}
          aria-hidden="true"
        />
        <div className="apHero-overlay" aria-hidden="true" />
        <div className="apHero-shell">
          <div className="apHero-copy">
            <p className="apHero-eyebrow">{APROPOS_HERO.eyebrow}</p>
            <h1 className="apHero-title" id="ap-hero-title">
              {APROPOS_HERO.title}
            </h1>
            {APROPOS_HERO.paragraphs.map((p, i) => (
              <p className="apHero-para" key={i}>{p}</p>
            ))}
            <div className="apHero-ctaWrap">
              <a
                className="apCta apCta--primary"
                href={APROPOS_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {APROPOS_HERO.cta}
              </a>
            </div>
          </div>
        </div>
        <div className="apHero-fade" aria-hidden="true" />
      </section>

      {/* ── Définition ────────────────────────────────────────── */}
      <section className="apDef-root" aria-labelledby="ap-def-title">
        <div className="apDef-shell shell">
          <header className="apSection-heading ap-animate">
            <p className="apSection-eyebrow">{APROPOS_DEFINITION.eyebrow}</p>
            <h2 className="apSection-title" id="ap-def-title">
              {APROPOS_DEFINITION.title}
            </h2>
            {APROPOS_DEFINITION.paragraphs.map((p, i) => (
              <p className="apSection-desc" key={i}>{p}</p>
            ))}
          </header>
          <div className="apDef-split">
            <div className="apDef-text">
              <div className="apDef-blocs">
                {APROPOS_DEFINITION.blocs.map((bloc, i) => (
                  <article
                    className={`apDef-bloc ap-animate ap-animate--d${(i % 2) + 1}`}
                    key={bloc.title}
                  >
                    <span className="apDef-blocLine" aria-hidden="true" />
                    <div className="apDef-blocContent">
                      <h3 className="apDef-blocTitle">{bloc.title}</h3>
                      <p className="apDef-blocText">{bloc.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="apDef-visual ap-animate ap-animate--d2">
              <img
                className="apDef-img"
                src={APROPOS_DEFINITION.image}
                alt={APROPOS_DEFINITION.imageAlt}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Signification du nom ──────────────────────────────── */}
      <section className="apNom-root" aria-labelledby="ap-nom-title">
        <div className="apNom-shell">
          <header className="apSection-heading ap-animate">
            <p className="apSection-eyebrow">{APROPOS_NOM.eyebrow}</p>
            <h2 className="apSection-title" id="ap-nom-title">
              {APROPOS_NOM.title}
            </h2>
            <p className="apSection-desc">{APROPOS_NOM.description}</p>
          </header>
          <div className="apNom-body ap-animate ap-animate--d1">
            <p className="apNom-intro">{APROPOS_NOM.intro}</p>
            <p className="apNom-listIntro">{APROPOS_NOM.listIntro}</p>
            <ul className="apNom-list">
              {APROPOS_NOM.highlights.map((item, i) => (
                <li className="apNom-item" key={i}>
                  <span className="apNom-highlight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Évolution ─────────────────────────────────────────── */}
      <section className="apEvo-root" aria-labelledby="ap-evo-title">
        <div className="apEvo-shell shell">
          <header className="apSection-heading ap-animate">
            <p className="apSection-eyebrow">{APROPOS_EVOLUTION.eyebrow}</p>
            <h2 className="apSection-title" id="ap-evo-title">
              {APROPOS_EVOLUTION.title}
            </h2>
            <p className="apSection-desc">{APROPOS_EVOLUTION.description}</p>
          </header>
          <div className="apEvo-timeline" ref={timelineRef}>
            <div className="apEvo-line" aria-hidden="true" />
            {APROPOS_EVOLUTION.steps.map((step, i) => (
              <article
                className={`apEvo-step apEvo-step--${i % 2 === 0 ? 'left' : 'right'} ap-animate ap-animate--d${(i % 3) + 1}`}
                key={step.num}
                data-num={step.num}
              >
                <span className="apEvo-num" aria-hidden="true">{step.num}</span>
                <div className="apEvo-stepContent">
                  <span className="apEvo-dot" aria-hidden="true" />
                  <h3 className="apEvo-stepTitle">{step.title}</h3>
                  <p className="apEvo-stepText">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Équipe ────────────────────────────────────────────── */}
      <section className="apEquipe-root" aria-labelledby="ap-equipe-title">
        <div className="apEquipe-shell shell">
          <header className="apSection-heading ap-animate">
            <p className="apSection-eyebrow">{APROPOS_EQUIPE.eyebrow}</p>
            <h2 className="apSection-title" id="ap-equipe-title">
              {APROPOS_EQUIPE.title}
            </h2>
            <p className="apSection-desc">{APROPOS_EQUIPE.description}</p>
          </header>
          <div className="apEquipe-grid">
            {APROPOS_EQUIPE.members.map((member, i) => (
              <article
                className={`apMember ap-animate ap-animate--d${(i % 3) + 1}`}
                key={member.name}
              >
                <div className="apMember-visual">
                  <img
                    className="apMember-img"
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                  />
                  <div className="apMember-overlay" aria-hidden="true" />
                </div>
                <div className="apMember-info">
                  <h3 className="apMember-name">{member.name}</h3>
                  <p className="apMember-role">{member.role}</p>
                  <p className="apMember-desc">{member.description}</p>
                  <a
                    className="apMember-fb"
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Page Facebook de ${member.name}`}
                  >
                    Facebook
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Présence & Réseau ─────────────────────────────────── */}
      <section className="apPresence-root" aria-labelledby="ap-presence-title">
        <div className="apPresence-shell shell">
          <header className="apSection-heading ap-animate">
            <p className="apSection-eyebrow">{APROPOS_PRESENCE.eyebrow}</p>
            <h2 className="apSection-title" id="ap-presence-title">
              {APROPOS_PRESENCE.title}
            </h2>
            <p className="apSection-desc">{APROPOS_PRESENCE.description}</p>
          </header>
          <div className="apPresence-grid">
            {APROPOS_PRESENCE.blocs.map((bloc, i) => (
              <div
                className={`apPresence-bloc ap-animate ap-animate--d${(i % 3) + 1}`}
                key={bloc.text}
              >
                <span className="apPresence-idx" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="apPresence-text">{bloc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <section className="apContact-root" aria-labelledby="ap-contact-title">
        <div className="apContact-shell shell">
          <div className="apContact-split">
            <div className="apContact-left ap-animate">
              <p className="apSection-eyebrow">{APROPOS_CONTACT.eyebrow}</p>
              <h2 className="apContact-title" id="ap-contact-title">
                {APROPOS_CONTACT.title}
              </h2>
              {APROPOS_CONTACT.paragraphs.map((p, i) => (
                <p className="apContact-desc" key={i}>{p}</p>
              ))}
              <div className="apContact-ctaWrap">
                <a
                  className="apCta apCta--whatsapp"
                  href={APROPOS_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {APROPOS_CONTACT.cta}
                </a>
              </div>
            </div>
            <div className="apContact-right ap-animate ap-animate--d2">
              <ul className="apContact-list">
                {APROPOS_CONTACT.items.map((item) => (
                  <li className="apContact-item" key={item.label}>
                    <span
                      className="apContact-icon material-symbols-outlined"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <div className="apContact-itemContent">
                      <span className="apContact-label">{item.label}</span>
                      {item.href ? (
                        <a
                          className="apContact-value apContact-value--link"
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="apContact-value">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default APropos;
