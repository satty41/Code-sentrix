import { sectionMeta, visionCards } from '../data/siteData';
import { SvgSnippet } from './HtmlSnippet';

export default function VisionSection() {
  return (
    <section id="cv">
      <div className="container">
        <div className="cv-header-row fade-up">
          <div>
            <div className="section-label">{sectionMeta.vision.label}</div>
            <h2>{sectionMeta.vision.title}</h2>
          </div>
          <p style={{ color: 'var(--muted2)', fontSize: '0.9rem', maxWidth: '360px', lineHeight: 1.7 }}>
            {sectionMeta.vision.description}
          </p>
        </div>

        <div className="cv-grid">
          {visionCards.map((card) => (
            <div className="cv-card fade-up" key={card.title}>
              <div className="cv-img">
                <SvgSnippet svg={card.svg} />
              </div>
              <div className="cv-body">
                <span className="cv-acc">{card.accent}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
