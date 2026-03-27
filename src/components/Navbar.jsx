import Brand from './Brand';
import { navLinks } from '../data/siteData';

export default function Navbar({ onNavigate, onOpenMenu, menuOpen }) {
  return (
    <nav className="topnav" id="topnav">
      <Brand
        className="nav-logo bg-transparent border-0 cursor-pointer p-0 appearance-none"
        onClick={() => onNavigate('home')}
      />

      <ul className="nav-links-desktop">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(link.id);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-pill">
        <a
          href="#contact"
          className="btn-nav"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('contact');
          }}
        >
          Free Audit →
        </a>
      </div>

      <button
        type="button"
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={onOpenMenu}
        aria-label="Open menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
