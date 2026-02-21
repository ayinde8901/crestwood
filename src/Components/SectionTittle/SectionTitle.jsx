import "./SectionTitle.css";

const SectionTitle = ({ title, subtitle, center = true }) => {
  return (
    <div className={`section-title ${center ? "center" : ""}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
