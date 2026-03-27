import { stats } from '../data/siteData';

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      {stats.map((item) => (
        <div className="stat-item" key={`${item.num}-${item.label}`}>
          <div className="stat-num">{item.num}</div>
          <div className="stat-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
