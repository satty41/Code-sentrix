import { company } from '../data/siteData';

export default function FloatingActions({ showBackTop, onBackTop }) {
  const emailLink = `mailto:${company.email}?subject=${encodeURIComponent(
    'Project Inquiry'
  )}&body=${encodeURIComponent(
    'Hi, I want to discuss a project with you.'
  )}`;

  return (
    <>
      <a
        href={emailLink}
        className="wa-float"
        aria-label="Email Us"
        title="Email Us"
      >
        <span>📧</span>
        <span className="wa-tip">Email Us</span>
      </a>

      <button
        type="button"
        className={`back-top ${showBackTop ? 'visible' : ''}`}
        onClick={onBackTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}