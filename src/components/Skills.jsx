const skillGroups = [
  {
    title: 'Languages',
    tags: [
      { label: 'C',          type: 'lang' },
      { label: 'C++',        type: 'lang' },
      { label: 'Java',       type: 'lang' },
      { label: 'JavaScript', type: 'lang' },
    ],
  },
  {
    title: 'Frontend',
    tags: [
      { label: 'React.js', type: 'front' },
      { label: 'HTML5',    type: 'front' },
      { label: 'CSS3',     type: 'front' },
    ],
  },
  {
    title: 'Backend',
    tags: [
      { label: 'Spring Boot', type: 'back' },
      { label: 'REST APIs',   type: 'back' },
    ],
  },
  {
    title: 'Databases',
    tags: [
      { label: 'MongoDB', type: 'db' },
      { label: 'MySQL',   type: 'db' },
      { label: 'Oracle',  type: 'db' },
      { label: 'SQL',     type: 'db' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technical Toolkit</h2>
        <div className="skills-grid">
          {skillGroups.map(group => (
            <div key={group.title} className="skill-group fade-up">
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-tags">
                {group.tags.map(tag => (
                  <span key={tag.label} className={`skill-tag ${tag.type}`}>{tag.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
