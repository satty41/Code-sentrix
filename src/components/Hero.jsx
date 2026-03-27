import { company, hero } from '../data/siteData';
import { HtmlSnippet } from './HtmlSnippet';

export default function Hero({ onNavigate }) {
  return (
    <section className="hero" id="home">
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-inner">
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          {hero.tag}
        </div>

        <HtmlSnippet html={hero.titleHtml} as="h1" />

        <p className="hero-sub">{hero.subtitle}</p>

        <div className="hero-btns">
          <a
            href="#contact"
            className="btn-primary"
            onClick={(event) => {
              event.preventDefault();
              onNavigate('contact');
            }}
          >
            {hero.primaryCta}
          </a>

          <a
            href={company.whatsappConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
