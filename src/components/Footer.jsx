import { company } from '../data/siteData';

const links = [
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Work' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer({ onNavigate }) {
  return (
    <footer>
      <div className="footer-logo">
        {company.brandLeft}
        <span>{company.brandAccent}</span> Solutions
      </div>

      <p>© 2025 CodeSentrix Solutions. All rights reserved. Delhi NCR, India.</p>

      <div className="footer-links">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(link.id);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
