const stats = [
  { number: '8.4', label: 'CGPA — B.E. CSE' },
  { number: '3',   label: 'GitHub Repositories' },
  { number: '4',   label: 'Certifications earned' },
  { number: '🥈',  label: 'Code Debugging — LEE TECHALON 2K24' },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">Who I Am</h2>
        <div className="about-grid">
          <div className="about-text fade-up">
            <p>
              I'm <strong>Jegannathan Dhakshinamoorthy</strong>, a Computer Science Engineering student
              from Tamil Nadu, India, graduating in 2026 with a CGPA of <strong>8.4</strong>. I'm
              passionate about crafting web applications that solve real-world problems.
            </p>
            <p>
              My experience spans the full stack — designing responsive UIs with <strong>React.js</strong>,
              engineering robust backend APIs with <strong>Spring Boot</strong>, and architecting efficient
              databases on <strong>MongoDB</strong>, <strong>Oracle</strong>, and <strong>MySQL</strong>.
            </p>
            <p>
              I've put these skills to work through an internship at <strong>FIIT Formacion Pvt Ltd</strong>,
              building a live Fund Tracker project, and shipping real apps hosted on <strong>Vercel</strong>{' '}
              and <strong>GitHub</strong>. Always looking for the next challenge.
            </p>
          </div>
          <div className="about-stats fade-up">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
