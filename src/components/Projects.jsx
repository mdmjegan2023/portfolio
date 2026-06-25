const projects = [
  {
    featured: true,
    badge: '⚡ Full-Stack Project',
    badgeClass: '',
    name: 'Fund Tracker — Accounting Management System',
    desc: 'A comprehensive full-stack accounting management system to track funds and financial records efficiently. Built with a React.js frontend, Spring Boot backend, and MongoDB database. Designed the full database schema, built RESTful API endpoints, and connected the entire application layer from UI to data persistence.',
    tech: ['React.js', 'Spring Boot', 'MongoDB', 'REST API', 'Java'],
    links: [{ label: '⌥ GitHub', href: 'https://github.com/mdmjegan2023/My-Projects', cls: '' }],
  },
  {
    featured: false,
    badge: '🟢 Live on Vercel',
    badgeClass: 'live',
    name: 'SBRM — React Web Application',
    desc: 'A live React web application deployed on Vercel. Demonstrates front-end development skills using React.js with a full production deployment pipeline. Accessible live on the web.',
    tech: ['React.js', 'JavaScript', 'Vercel'],
    links: [{ label: '↗ Live Demo', href: 'https://sbrm-six.vercel.app/', cls: 'demo' }],
  },
  {
    featured: false,
    badge: '💻 Assignment Task',
    badgeClass: '',
    name: 'Full-Stack Assignment — Backend + Frontend',
    desc: 'A full-stack assignment project integrating a Java backend with a JavaScript frontend. Showcases end-to-end application development skills with backend logic and UI integration.',
    tech: ['Java', 'JavaScript', 'Full-Stack'],
    links: [{ label: '⌥ GitHub', href: 'https://github.com/mdmjegan2023/Assignment-task---backend-with-frontend', cls: '' }],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Work I've Built</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.name} className={`project-card fade-up${p.featured ? ' featured' : ''}`}>
              <span className={`project-badge ${p.badgeClass}`}>{p.badge}</span>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-footer">
                <div className="project-tech">
                  {p.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
                </div>
                <div className="project-links">
                  {p.links.map(l => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={`project-link ${l.cls}`}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
