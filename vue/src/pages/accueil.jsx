import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ABOUT_CONTENT,
  BENEFITS_CONTENT,
  FAQ_CONTENT,
  FINAL_CTA_CONTENT,
  HERO_CONTENT,
  INVESTOR_CONTENT,
  PRESENCE_CONTENT,
  PRODUCT_INTRO,
  PRODUCT_ITEMS,
} from '../services/accueil.js';
import DistinctionsSection from '../components/distinctionsSection.jsx';
import { DISTINCTIONS_COMPACT } from '../services/distinctions.js';
import '../assets/styles/pages/accueil.css';

function Accueil() {
  const [openFaqItem, setOpenFaqItem] = useState('faq-0-0');

  return (
    <div className="accueil-root">
      <section className="accueilHero-root">
        <div className="accueilHero-shell">
          <div className="accueilHero-stage">
            <div className="accueilHero-backdrop" aria-hidden="true" />
            <div className="accueilHero-glow accueilHero-glow--primary" aria-hidden="true" />
            <div className="accueilHero-glow accueilHero-glow--secondary" aria-hidden="true" />

            <div className="accueilHero-visual" aria-hidden="true">
              {HERO_CONTENT.media.map((media) => (
                <figure className={media.className} key={media.key}>
                  <img
                    className="accueilHero-mediaImage"
                    src={media.src}
                    alt=""
                    width={media.width}
                    height={media.height}
                    fetchPriority={media.priority ? 'high' : 'auto'}
                  />
                </figure>
              ))}
            </div>

            <div className="accueilHero-overlay" aria-hidden="true" />

            <div className="accueilHero-content">
              <h1 className="accueilHero-title">{HERO_CONTENT.title}</h1>
              <p className="accueilHero-description">{HERO_CONTENT.description}</p>

              <div className="accueilHero-actions">
                <Link className="accueilButton accueilButton--primary" to={HERO_CONTENT.primaryCta.path}>
                  {HERO_CONTENT.primaryCta.label}
                </Link>
                <Link className="accueilButton accueilButton--secondary" to={HERO_CONTENT.secondaryCta.path}>
                  {HERO_CONTENT.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="accueilAbout-root section-padding" aria-labelledby="accueil-about-title">
        <div className="accueilAbout-shell shell">
          <div className="accueilAbout-copy">
            <p className="accueilSection-eyebrow">Vision</p>
            <h2 className="accueilSection-title" id="accueil-about-title">
              {ABOUT_CONTENT.title}
            </h2>
            <p className="accueilSection-description">{ABOUT_CONTENT.description}</p>
            <Link className="accueilButton accueilButton--secondary" to={ABOUT_CONTENT.cta.path}>
              {ABOUT_CONTENT.cta.label}
            </Link>
          </div>

          <figure className="accueilAbout-media">
            <img
              className="accueilAbout-image"
              src={ABOUT_CONTENT.image.src}
              alt={ABOUT_CONTENT.image.alt}
              width={903}
              height={700}
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <DistinctionsSection
        eyebrow={DISTINCTIONS_COMPACT.eyebrow}
        title={DISTINCTIONS_COMPACT.title}
        description={DISTINCTIONS_COMPACT.description}
        variant="compact"
        id="accueil-distinctions"
      />

      <section className="accueilProducts-root section-padding" aria-labelledby="accueil-products-title">
        <div className="accueilProducts-shell shell">
          <div className="accueilProducts-heading">
            <div className="accueilProducts-headingCopy">
              <h2 className="accueilSection-title" id="accueil-products-title">
                {PRODUCT_INTRO.title}
              </h2>
              <p className="accueilSection-description">{PRODUCT_INTRO.description}</p>
            </div>

            <div className="accueilProducts-actions">
              <Link className="accueilButton accueilButton--secondary" to={PRODUCT_INTRO.secondaryCta.path}>
                {PRODUCT_INTRO.secondaryCta.label}
              </Link>
              <Link className="accueilButton accueilButton--primary" to={PRODUCT_INTRO.primaryCta.path}>
                {PRODUCT_INTRO.primaryCta.label}
              </Link>
            </div>
          </div>

          <div className="accueilProducts-showcase">
            {PRODUCT_ITEMS.map((product, index) => (
              <article
                className={`accueilProducts-item accueilProducts-item--${product.tone} ${index % 2 === 0 ? 'accueilProducts-item--wide' : ''}`}
                key={product.name}
              >
                <figure className="accueilProducts-media">
                  <img
                    className="accueilProducts-image"
                    src={product.image}
                    alt={product.alt}
                    width={product.width}
                    height={product.height}
                    loading="lazy"
                  />
                </figure>
                <div className="accueilProducts-copy">
                  <p className="accueilProducts-badge">{product.badge}</p>
                  <h3 className="accueilProducts-title">{product.name}</h3>
                  <p className="accueilProducts-description">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="accueilBenefits-root section-padding" aria-labelledby="accueil-benefits-title">
        <div className="accueilBenefits-shell shell">
          <div className="accueilBenefits-heading">
            <p className="accueilSection-eyebrow">Concessionnaires</p>
            <h2 className="accueilSection-title" id="accueil-benefits-title">
              {BENEFITS_CONTENT.title}
            </h2>
            <p className="accueilSection-description">{BENEFITS_CONTENT.description}</p>
          </div>

          <div className="accueilBenefits-list">
            {BENEFITS_CONTENT.items.map((benefit, index) => (
              <article className="accueilBenefits-item" key={benefit.title}>
                <p className="accueilBenefits-index">{`0${index + 1}`}</p>
                <div className="accueilBenefits-copy">
                  <h3 className="accueilBenefits-title">{benefit.title}</h3>
                  <p className="accueilBenefits-description">{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="accueilPresence-root section-padding" aria-labelledby="accueil-presence-title">
        <div className="accueilPresence-shell shell">
          <div className="accueilPresence-heading">
            <p className="accueilSection-eyebrow">Présence</p>
            <h2 className="accueilSection-title" id="accueil-presence-title">
              {PRESENCE_CONTENT.title}
            </h2>
            <p className="accueilSection-description">{PRESENCE_CONTENT.description}</p>
          </div>

          <div className="accueilPresence-stats">
            {PRESENCE_CONTENT.stats.map((stat) => (
              <article className="accueilPresence-stat" key={stat.label}>
                <p className="accueilPresence-value">{stat.value}</p>
                <p className="accueilPresence-label">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="accueilInvestors-root section-padding" aria-labelledby="accueil-investors-title">
        <div className="accueilInvestors-shell shell">
          <div className="accueilInvestors-panel">
            <p className="accueilSection-eyebrow accueilSection-eyebrow--light">Investisseurs</p>
            <h2 className="accueilSection-title accueilSection-title--light" id="accueil-investors-title">
              {INVESTOR_CONTENT.title}
            </h2>
            <p className="accueilSection-description accueilSection-description--light">
              {INVESTOR_CONTENT.description}
            </p>
            <Link className="accueilButton accueilButton--primary" to={INVESTOR_CONTENT.cta.path}>
              {INVESTOR_CONTENT.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="accueilFaq-root section-padding" aria-labelledby="accueil-faq-title">
        <div className="accueilFaq-shell shell">
          <div className="accueilFaq-heading">
            <p className="accueilSection-eyebrow">Clarté</p>
            <h2 className="accueilSection-title" id="accueil-faq-title">
              {FAQ_CONTENT.title}
            </h2>
            <p className="accueilSection-description">{FAQ_CONTENT.description}</p>
          </div>

          <div className="accueilFaq-groups">
            {FAQ_CONTENT.groups.map((group, groupIndex) => (
              <section className="accueilFaq-group" key={group.title} aria-labelledby={`faq-group-${groupIndex}`}>
                <div className="accueilFaq-list">
                  {group.items.map((item, itemIndex) => {
                    const itemId = `faq-${groupIndex}-${itemIndex}`;
                    const isOpen = openFaqItem === itemId;

                    return (
                      <article
                        className={`accueilFaq-item ${isOpen ? 'accueilFaq-item--open' : ''}`}
                        key={item.question}
                      >
                        <button
                          className="accueilFaq-trigger"
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`${itemId}-content`}
                          onClick={() => setOpenFaqItem(isOpen ? '' : itemId)}
                        >
                          <span className="accueilFaq-question">{item.question}</span>
                          <span className="accueilFaq-icon" aria-hidden="true">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        <div className="accueilFaq-answerWrap" id={`${itemId}-content`}>
                          <p className="accueilFaq-answer">{item.answer}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="accueilFinal-root section-padding" aria-labelledby="accueil-final-title">
        <div className="accueilFinal-shell shell">
          <div className="accueilFinal-panel">
            <p className="accueilSection-eyebrow">Décision</p>
            <h2 className="accueilSection-title" id="accueil-final-title">
              {FINAL_CTA_CONTENT.title}
            </h2>
            <p className="accueilSection-description">{FINAL_CTA_CONTENT.description}</p>
            <Link className="accueilButton accueilButton--primary" to={FINAL_CTA_CONTENT.cta.path}>
              {FINAL_CTA_CONTENT.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Accueil;
