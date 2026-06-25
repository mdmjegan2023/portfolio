const experiences = [
  {
    period: 'Internship',
    role: 'Full Stack Java Intern',
    org: 'FIIT Formacion Pvt Ltd',
    points: [
      'Worked hands-on with full-stack development using Java and modern frameworks',
      'Gained practical exposure to enterprise application structure and professional workflows',
      'Applied backend and frontend integration techniques in a real-world environment',
      'Collaborated on features spanning UI development to server-side logic',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've Worked</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.role} className="timeline-item fade-up">
              <div className="timeline-dot" />
              <div className="timeline-period">{exp.period}</div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-org">{exp.org}</div>
              <ul className="timeline-points">
                {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
