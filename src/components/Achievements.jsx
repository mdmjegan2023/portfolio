const achievements = [
  {
    icon: '🥈',
    title: '2nd Place — Code Debugging',
    detail: 'LEE TECHALON 2K24 — Competed and ranked 2nd in a technical code debugging competition against peers from multiple institutions.',
  },
  {
    icon: '📈',
    title: 'Workshop — Data Analytics',
    detail: '2024 — Participated in a professional Data Analytics workshop, expanding knowledge in data-driven decision making and analytical tools.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <p className="section-label">Achievements</p>
        <h2 className="section-title">Highlights</h2>
        <div className="achieve-grid">
          {achievements.map((a) => (
            <div key={a.title} className="achieve-item fade-up">
              <div className="achieve-icon">{a.icon}</div>
              <div>
                <div className="achieve-title">{a.title}</div>
                <div className="achieve-detail">{a.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
