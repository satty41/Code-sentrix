import { bottomLinks } from '../data/siteData';

export default function BottomNav({ activeSection, onNavigate, onOpenMenu }) {
  return (
    <nav className="bottom-nav" id="bottomNav">
      <div className="bnav-inner">
        {bottomLinks.map((link) => (
          <a
            key={link.id}
            href={link.id === 'home' ? '#' : `#${link.id}`}
            className={`bnav-btn ${
              (link.id === 'home' && !activeSection) || activeSection === link.id ? 'active' : ''
            }`}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(link.id);
            }}
          >
            <span className="bi">{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}

        <button type="button" className="bnav-btn" onClick={onOpenMenu}>
          <span className="bi">☰</span>
          <span>Menu</span>
        </button>
      </div>
    </nav>
  );
}
