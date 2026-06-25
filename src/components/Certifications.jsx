const certs = [
  { icon: '🏆', name: 'Oracle Certification' },
  { icon: '🎨', name: 'Web Design Diploma' },
  { icon: '📊', name: 'MS Office' },
  { icon: '💻', name: 'C, C++ & Java Programming' },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <p className="section-label">Certifications</p>
        <h2 className="section-title">Credentials</h2>
        <div className="cert-grid">
          {certs.map((c) => (
            <div key={c.name} className="cert-item fade-up">
              <div className="cert-icon">{c.icon}</div>
              <div className="cert-name">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
