import { company } from '../data/siteData';

export default function Brand({ className = '', showSolutions = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label={company.name}
    >
      <span className="nav-logo-dot" />
      {company.brandLeft}
      <span style={{ color: 'var(--lime)' }}>{company.brandAccent}</span>
      {showSolutions ? ' Solutions' : ''}
    </button>
  );
}
