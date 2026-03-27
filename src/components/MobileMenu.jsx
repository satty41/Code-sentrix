import { company, mobileLinks } from '../data/siteData';

export default function MobileMenu({ open, onClose, onNavigate }) {
  return (
    <>
      <div
        className={`menu-backdrop ${open ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="mmenu-header">
          <span className="mmenu-logo">
            {company.brandLeft}
            <span style={{ color: 'var(--lime)' }}>{company.brandAccent}</span>
          </span>
          <button type="button" className="mmenu-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <nav className="mmenu-links">
          {mobileLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(link.id);
                onClose();
              }}
            >
              <span className="micon">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mmenu-footer">
          <a
            href="#contact"
            className="mf-primary"
            onClick={(event) => {
              event.preventDefault();
              onNavigate('contact');
              onClose();
            }}
          >
            🔍 Get Free Security Scan
          </a>
          <a
            href={company.whatsappProjectUrl}
            className="mf-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Us Now
          </a>
        </div>
      </div>
    </>
  );
}
