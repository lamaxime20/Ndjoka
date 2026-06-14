import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PRODUITS_HERO,
  PRODUITS_ITEMS,
  PRODUITS_QUALITE,
  PRODUITS_RESEAU,
  PRODUITS_COMMANDE,
  PRODUITS_FINAL,
  buildCommandeWhatsAppUrl,
} from '../services/produits.js';
import '../assets/styles/pages/produits.css';

const FORM_INITIAL = {
  nom: '',
  telephone: '',
  ville: '',
  produits: '',
  quantite: '',
  message: '',
};

function Produits() {
  const [form, setForm] = useState(FORM_INITIAL);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.open(buildCommandeWhatsAppUrl(form), '_blank', 'noopener,noreferrer');
  }

  return (
    <main className="produits-root">
      <section className="produitsHero-root" aria-labelledby="produits-hero-title">
        <div className="produitsHero-shell shell">
          <div className="produitsHero-copy">
            <p className="produitsHero-eyebrow">{PRODUITS_HERO.eyebrow}</p>
            <h1 className="produitsHero-title" id="produits-hero-title">
              {PRODUITS_HERO.title}
            </h1>
            <p className="produitsHero-description">{PRODUITS_HERO.description}</p>
            <div className="produitsHero-actions">
              <Link
                className="produitsHero-cta produitsHero-cta--primary"
                to={PRODUITS_HERO.primaryCta.path}
              >
                {PRODUITS_HERO.primaryCta.label}
              </Link>
              <Link
                className="produitsHero-cta produitsHero-cta--secondary"
                to={PRODUITS_HERO.secondaryCta.path}
              >
                {PRODUITS_HERO.secondaryCta.label}
              </Link>
            </div>
          </div>

          <figure className="produitsHero-visual">
            <img
              className="produitsHero-image"
              src={PRODUITS_HERO.image.src}
              alt={PRODUITS_HERO.image.alt}
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="produitsList-root section-padding" aria-labelledby="produits-list-title">
        <div className="produitsList-shell shell">
          <header className="produitsList-heading">
            <p className="produitsSection-eyebrow">Produits</p>
            <h2 className="produitsSection-title" id="produits-list-title">
              Des produits qui donnent envie dès le premier regard
            </h2>
            <p className="produitsSection-description">
              Des saveurs appréciées du marché, un packaging professionnel et des produits faciles à revendre.
            </p>
          </header>

          <div className="produitsList-grid">
            {PRODUITS_ITEMS.map((item, index) => (
              <article
                className={`produitsItem-root${item.glow ? ' produitsItem-root--glow' : ''}${item.warm ? ' produitsItem-root--warm' : ''}`}
                key={item.id}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <figure className="produitsItem-visual">
                  <img
                    className="produitsItem-image"
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                  />
                </figure>
                <div className="produitsItem-copy">
                  <div className="produitsItem-badges">
                    <span className="produitsItem-saveur">{item.saveur}</span>
                    {item.badge && (
                      <span className="produitsItem-badge">{item.badge}</span>
                    )}
                  </div>
                  <h3 className="produitsItem-name">{item.name}</h3>
                  <p className="produitsItem-description">{item.description}</p>
                  <div className="produitsItem-meta">
                    <span className="produitsItem-format">{item.format}</span>
                    {item.prix && (
                      <span className="produitsItem-prix">{item.prix}</span>
                    )}
                  </div>
                  <p className="produitsItem-benefice">{item.benefice}</p>
                  <Link className="produitsItem-cta" to={item.cta.path}>
                    {item.cta.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="produitsQualite-root section-padding"
        aria-labelledby="produits-qualite-title"
      >
        <div className="produitsQualite-shell shell">
          <div className="produitsQualite-copy">
            <p className="produitsSection-eyebrow">{PRODUITS_QUALITE.eyebrow}</p>
            <h2 className="produitsSection-title" id="produits-qualite-title">
              {PRODUITS_QUALITE.title}
            </h2>
            <p className="produitsSection-description">{PRODUITS_QUALITE.description}</p>
            <div className="produitsQualite-blocs">
              {PRODUITS_QUALITE.blocs.map((bloc) => (
                <div className="produitsQualite-bloc" key={bloc.title}>
                  <span className="produitsQualite-icon" aria-hidden="true">
                    <span className="material-symbols-outlined">{bloc.icon}</span>
                  </span>
                  <div className="produitsQualite-blocCopy">
                    <h3 className="produitsQualite-blocTitle">{bloc.title}</h3>
                    <p className="produitsQualite-blocText">{bloc.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <figure className="produitsQualite-visual" aria-hidden="true">
            <div className="produitsQualite-images">
              <img
                className="produitsQualite-img produitsQualite-img--back"
                src={PRODUITS_ITEMS[0].image}
                alt=""
                width={PRODUITS_ITEMS[0].width}
                height={PRODUITS_ITEMS[0].height}
                loading="lazy"
              />
              <img
                className="produitsQualite-img produitsQualite-img--mid"
                src={PRODUITS_ITEMS[2].image}
                alt=""
                width={PRODUITS_ITEMS[2].width}
                height={PRODUITS_ITEMS[2].height}
                loading="lazy"
              />
              <img
                className="produitsQualite-img produitsQualite-img--front"
                src={PRODUITS_ITEMS[1].image}
                alt=""
                width={PRODUITS_ITEMS[1].width}
                height={PRODUITS_ITEMS[1].height}
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </section>

      <section
        className="produitsReseau-root section-padding"
        aria-labelledby="produits-reseau-title"
      >
        <div className="produitsReseau-shell shell">
          <header className="produitsReseau-heading">
            <p className="produitsSection-eyebrow">{PRODUITS_RESEAU.eyebrow}</p>
            <h2 className="produitsSection-title" id="produits-reseau-title">
              {PRODUITS_RESEAU.title}
            </h2>
            <p className="produitsSection-description">{PRODUITS_RESEAU.description}</p>
          </header>

          <div className="produitsReseau-grid">
            {PRODUITS_RESEAU.avantages.map((av) => (
              <article className="produitsReseau-item" key={av.title}>
                <span className="produitsReseau-icon" aria-hidden="true">
                  <span className="material-symbols-outlined">{av.icon}</span>
                </span>
                <div className="produitsReseau-itemCopy">
                  <h3 className="produitsReseau-itemTitle">{av.title}</h3>
                  <p className="produitsReseau-itemText">{av.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="produitsReseau-cta">
            <Link className="produitsCta produitsCta--primary" to={PRODUITS_RESEAU.cta.path}>
              {PRODUITS_RESEAU.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section
        className="produitsCommande-root section-padding"
        id="commande"
        aria-labelledby="produits-commande-title"
      >
        <div className="produitsCommande-shell shell">
          <header className="produitsCommande-heading">
            <p className="produitsSection-eyebrow">{PRODUITS_COMMANDE.eyebrow}</p>
            <h2 className="produitsSection-title" id="produits-commande-title">
              {PRODUITS_COMMANDE.title}
            </h2>
            <p className="produitsSection-description">{PRODUITS_COMMANDE.description}</p>
          </header>

          <form className="produitsCommande-form" onSubmit={handleSubmit} noValidate>
            <div className="produitsCommande-fields">
              <div className="produitsCommande-field">
                <label className="produitsCommande-label" htmlFor="cmd-nom">
                  Nom complet
                </label>
                <input
                  className="produitsCommande-input"
                  id="cmd-nom"
                  name="nom"
                  type="text"
                  value={form.nom}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="produitsCommande-field">
                <label className="produitsCommande-label" htmlFor="cmd-telephone">
                  Téléphone
                </label>
                <input
                  className="produitsCommande-input"
                  id="cmd-telephone"
                  name="telephone"
                  type="tel"
                  value={form.telephone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                />
              </div>

              <div className="produitsCommande-field">
                <label className="produitsCommande-label" htmlFor="cmd-ville">
                  Ville
                </label>
                <input
                  className="produitsCommande-input"
                  id="cmd-ville"
                  name="ville"
                  type="text"
                  value={form.ville}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="produitsCommande-field">
                <label className="produitsCommande-label" htmlFor="cmd-produits">
                  Produits souhaités
                </label>
                <select
                  className="produitsCommande-input produitsCommande-select"
                  id="cmd-produits"
                  name="produits"
                  value={form.produits}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisir un produit</option>
                  {PRODUITS_COMMANDE.produitsOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="produitsCommande-field">
                <label className="produitsCommande-label" htmlFor="cmd-quantite">
                  Quantité
                </label>
                <input
                  className="produitsCommande-input"
                  id="cmd-quantite"
                  name="quantite"
                  type="text"
                  value={form.quantite}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="produitsCommande-field produitsCommande-field--full">
                <label className="produitsCommande-label" htmlFor="cmd-message">
                  Message
                </label>
                <textarea
                  className="produitsCommande-textarea"
                  id="cmd-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
            </div>

            <button className="produitsCommande-cta" type="submit">
              {PRODUITS_COMMANDE.cta}
            </button>
            <p className="produitsCommande-notice">{PRODUITS_COMMANDE.notice}</p>
          </form>
        </div>
      </section>

      <section
        className="produitsFinal-root section-padding"
        aria-labelledby="produits-final-title"
      >
        <div className="produitsFinal-shell shell">
          <div className="produitsFinal-panel">
            <h2 className="produitsFinal-title" id="produits-final-title">
              {PRODUITS_FINAL.title}
            </h2>
            <p className="produitsFinal-description">{PRODUITS_FINAL.description}</p>
            <div className="produitsFinal-actions">
              <Link className="produitsCta produitsCta--primary" to={PRODUITS_FINAL.primaryCta.path}>
                {PRODUITS_FINAL.primaryCta.label}
              </Link>
              <Link className="produitsCta produitsCta--secondary" to={PRODUITS_FINAL.secondaryCta.path}>
                {PRODUITS_FINAL.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Produits;
