import { sectionMeta, services } from '../data/siteData';
import { SvgSnippet } from './HtmlSnippet';

export default function ServicesSection({ onNavigate }) {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-label">{sectionMeta.services.label}</div>
          <h2>{sectionMeta.services.title}</h2>
          <p>{sectionMeta.services.description}</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card fade-up" key={service.title}>
              <div className="svc-img">
                <SvgSnippet svg={service.svg} />
                <span className={`svc-img-tag ${service.tagVariant}`}>{service.tag}</span>
              </div>

              <div className="svc-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="svc-tags">
                  {service.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="svc-cta"
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate('contact');
                  }}
                >
                  Get Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
