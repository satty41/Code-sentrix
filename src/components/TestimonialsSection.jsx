import { sectionMeta, testimonials } from '../data/siteData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-label">{sectionMeta.testimonials.label}</div>
          <h2>{sectionMeta.testimonials.title}</h2>
          <p>{sectionMeta.testimonials.description}</p>
        </div>

        <div className="testi-grid">
          {testimonials.map((testimonial) => (
            <div className="testi-card fade-up" key={`${testimonial.name}-${testimonial.avatar}`}>
              <div className="testi-q">&quot;</div>
              <p className="testi-text">{testimonial.quote}</p>
              <div className="testi-author">
                <div className="testi-av">{testimonial.avatar}</div>
                <div>
                  <div className="testi-name">{testimonial.name}</div>
                  <div className="testi-role">{testimonial.role}</div>
                  <div className="testi-stars">{testimonial.stars}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
