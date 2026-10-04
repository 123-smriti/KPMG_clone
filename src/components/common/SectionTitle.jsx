// label = small uppercase line above the heading; subtitle = supporting text below it.
export default function SectionTitle({ label, title, subtitle, id }) {
  return (
    <div className="section-title">
      {label && <p className="section-title__label">{label}</p>}
      <h2 id={id}>{title}</h2>
      {subtitle && <p className="section-title__text">{subtitle}</p>}
    </div>
  );
}
