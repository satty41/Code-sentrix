import { sectionMeta, whyPoints, whyTerminalLines } from '../data/siteData';
import { HtmlSnippet } from './HtmlSnippet';

export default function WhySection() {
  return (
    <section id="why">
      <div className="container">
        <div className="why-grid">
          <div className="why-terminal fade-up">
            <div className="term-bar">
              <div className="term-dot r" />
              <div className="term-dot y" />
              <div className="term-dot g" />
              <span className="term-title">codesentrix-scan.py</span>
            </div>

            <div className="term-body">
              {whyTerminalLines.map((line, index) =>
                line.type === 'muted' ? (
                  <div className="t-m" key={`${line.text}-${index}`}>
                    {line.text}
                  </div>
                ) : (
                  <HtmlSnippet key={index} html={line.html} />
                ),
              )}
            </div>
          </div>

          <div className="why-text fade-up">
            <div className="section-label">{sectionMeta.why.label}</div>
            <HtmlSnippet html={sectionMeta.why.titleHtml} as="h2" />

            <div className="why-points">
              {whyPoints.map((point) => (
                <div className="why-pt" key={point.num}>
                  <span className="why-num">{point.num}</span>
                  <div>
                    <h4>{point.title}</h4>
                    <p>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
