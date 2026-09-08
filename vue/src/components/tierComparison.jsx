import '../assets/styles/components/tierComparison.css';

function TierCard({ tier, highlight }) {
  return (
    <article className={`tierCard-root${highlight ? ' tierCard-root--highlight' : ''}`}>
      {highlight && <span className="tierCard-ribbon">Palier supérieur</span>}
      <div className="tierCard-heading">
        <p className="tierCard-label">{tier.label}</p>
        <p className="tierCard-montant">{tier.montant}</p>
        <p className="tierCard-sousTitre">{tier.sousTitre}</p>
      </div>
      <ul className="tierCard-avantages">
        {tier.avantages.map((avantage) => (
          <li className="tierCard-avantage" key={avantage}>
            <span className="material-symbols-outlined tierCard-check" aria-hidden="true">
              check_circle
            </span>
            <span>{avantage}</span>
          </li>
        ))}
      </ul>
      <a
        className="tierCard-cta"
        href={tier.cta.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${tier.cta.label} Ndjoka via WhatsApp`}
      >
        {tier.cta.label}
      </a>
    </article>
  );
}

function TierComparison({ data }) {
  const { starter, distributeur, concessionnaire } = data;

  return (
    <section className="tierComparison-root section-padding" id="paliers" aria-labelledby="tier-comparison-title">
      <div className="tierComparison-shell shell">
        <header className="concessSection-heading">
          <p className="concessSection-eyebrow">{data.eyebrow}</p>
          <h2 className="concessSection-title" id="tier-comparison-title">
            {data.title}
          </h2>
          <p className="concessSection-description">{data.description}</p>
        </header>

        <div className="tierComparison-starter">
          <TierCard tier={starter} />
        </div>

        <div className="tierComparison-grid">
          <TierCard tier={distributeur} />
          <TierCard tier={concessionnaire} highlight />
        </div>
      </div>
    </section>
  );
}

export default TierComparison;
