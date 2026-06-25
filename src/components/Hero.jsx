export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="dot-grid" />
      <div className="hero-content">
        <p className="hero-eyebrow">Full-Stack Java Developer · Tamil Nadu, India</p>
        <h1 className="hero-name">
          <span className="first">Jegannathan</span>
          <span className="last">Dhakshinamoorthy</span>
        </h1>
        <p className="hero-title">
          Building <strong>scalable full-stack applications</strong> with React, Spring Boot &amp; MongoDB.
          Computer Science student graduating in <strong>2026</strong>.
        </p>
        <div className="hero-stack">
          {['React.js', 'Spring Boot', 'Java', 'MongoDB', 'MySQL', 'C / C++', 'JavaScript'].map(tag => (
            <span key={tag} className="stack-tag">{tag}</span>
          ))}
        </div>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Projects ↓</a>
          <a href="https://github.com/mdmjegan2023" target="_blank" rel="noreferrer" className="btn-github">⌥ GitHub</a>
          <a href="mailto:mdmjegan2023@gmail.com" className="btn-secondary">Get In Touch →</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line" />
      </div>
    </section>
  );
}
