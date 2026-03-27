import { company, hero } from '../data/siteData';
import { HtmlSnippet } from './HtmlSnippet';

export default function Hero2({ onNavigate }) {
  return (
    <section className="hero2" id="hero2">
      <div className="hero2-video-wrap" aria-hidden="true">
        <video
          className="hero2-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero2-video-overlay" />
      </div>

      <div className="hero2-orb hero2-orb-1" />
      <div className="hero2-orb hero2-orb-2" />
      <div className="hero2-orb hero2-orb-3" />

      <div className="hero2-inner">
        <div className="hero2-tag">
          <span className="hero2-tag-dot" />
          {hero.tag}
        </div>

        <HtmlSnippet html={hero.titleHtml} as="h1" />

        <p className="hero2-sub">{hero.subtitle}</p>

        <div className="hero2-btns">
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

          {/* <a
            href={company.whatsappConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            {hero.secondaryCta}
          </a> */}
        </div>
      </div>
    </section>
  );
}
