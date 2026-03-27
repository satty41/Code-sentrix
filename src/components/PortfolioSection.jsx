import { portfolioCards, sectionMeta } from '../data/siteData';
import { HtmlSnippet } from './HtmlSnippet';

export default function PortfolioSection() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-label">{sectionMeta.portfolio.label}</div>
          <h2>{sectionMeta.portfolio.title}</h2>
          <p>{sectionMeta.portfolio.description}</p>
        </div>

        <div className="port-grid">
          {portfolioCards.map((card) => (
            <div className={`port-card ${card.palette} fade-up`} key={card.title}>
              <div className="port-type">{card.type}</div>
              <h3>{card.title}</h3>
              <div className="port-desc">{card.description}</div>
              <HtmlSnippet html={card.resultHtml} className="port-result" />
              <div className="port-chips">
                {card.chips.map((chip) => (
                  <span className="chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
