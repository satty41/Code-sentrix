import { useState } from 'react';
import { faqItems, sectionMeta } from '../data/siteData';

export default function FaqSection() {
  const defaultIndex = faqItems.findIndex((item) => item.defaultOpen);
  const [openIndex, setOpenIndex] = useState(defaultIndex === -1 ? 0 : defaultIndex);

  return (
    <section id="faq">
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-label">{sectionMeta.faq.label}</div>
          <h2>{sectionMeta.faq.title}</h2>
          <p>{sectionMeta.faq.description}</p>
        </div>

        <div className="faq-wrap">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item fade-up ${isOpen ? 'open' : ''}`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-q w-full text-left bg-transparent border-0"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">+</span>
                </button>

                {isOpen ? <div className="faq-divider" /> : null}
                <div className="faq-a">{item.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
