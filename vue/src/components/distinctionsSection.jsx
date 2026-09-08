import { DISTINCTIONS } from '../services/distinctions.js';
import '../assets/styles/components/distinctionsSection.css';

function DistinctionsSection({ eyebrow, title, description, variant = 'full', id = 'distinctions' }) {
  const isCompact = variant === 'compact';

  return (
    <section
      className={`distinctions-root distinctions-root--${variant} section-padding`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="distinctions-shell shell">
        <header className="distinctions-heading">
          <p className="distinctions-eyebrow">{eyebrow}</p>
          <h2 className="distinctions-title" id={`${id}-title`}>
            {title}
          </h2>
          {description && <p className="distinctions-description">{description}</p>}
        </header>

        <div className={`distinctions-grid${isCompact ? ' distinctions-grid--compact' : ''}`}>
          {DISTINCTIONS.map((d) => (
            <article className="distinctionCard-root surface-card" key={d.id}>
              <span className="distinctionCard-icon" aria-hidden="true">
                <span className="material-symbols-outlined">{d.icon}</span>
              </span>
              <div className="distinctionCard-meta">
                <span className="distinctionCard-organisme">{d.organisme}</span>
                {d.annee && <span className="distinctionCard-annee">{d.annee}</span>}
              </div>
              <h3 className="distinctionCard-titre">{d.titre}</h3>
              {!isCompact && <p className="distinctionCard-description">{d.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DistinctionsSection;
