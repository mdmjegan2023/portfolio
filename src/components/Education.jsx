const eduItems = [
  { icon: '🎓', degree: 'B.E. Computer Science Engineering', school: '2022 – 2026', score: '8.4', scoreLabel: 'CGPA' },
  { icon: '📘', degree: 'Higher Secondary Certificate (HSC)', school: 'Tamil Nadu State Board', score: '82%', scoreLabel: 'Score' },
  { icon: '📗', degree: 'Secondary School (SSLC)', school: 'Tamil Nadu State Board', score: '80%', scoreLabel: 'Score' },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title">Academic Journey</h2>
        <div className="edu-grid">
          {eduItems.map((e) => (
            <div key={e.degree} className="edu-card fade-up">
              <div className="edu-icon">{e.icon}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-score">{e.score}</div>
              <div className="edu-score-label">{e.scoreLabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
