import { trustChips } from '../data/siteData';

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <span className="trust-label">Trusted Stack &amp; Credentials</span>
      <div className="trust-chips">
        {trustChips.map((chip) => (
          <div className="trust-chip" key={`${chip.text}-${chip.sub}`}>
            <span className="tc-icon">{chip.icon}</span>
            <span>
              {chip.text}
              <span className="tc-sub">{chip.sub}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
