const contactLinks = [
  { label: '✉ mdmjegan2023@gmail.com', href: 'mailto:mdmjegan2023@gmail.com' },
  { label: 'in LinkedIn', href: 'https://www.linkedin.com/in/jegannathan-dhakshinamoorthy/', target: '_blank' },
  { label: '⌥ GitHub', href: 'https://github.com/mdmjegan2023', target: '_blank' },
  { label: '📱 +91 97891 14979', href: 'tel:+919789114979' },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <p className="section-label" style={{ justifyContent: 'center' }}>Contact</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-tagline">
            Actively seeking <strong>entry-level software development roles</strong>.
            Whether you have an opportunity, a project, or just want to say hello — my inbox is open.
          </p>
          <div className="contact-links">
            {contactLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.target}
                rel={l.target ? 'noreferrer' : undefined}
                className="contact-link"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a href="mailto:mdmjegan2023@gmail.com" className="btn-primary" style={{ margin: '0 auto' }}>
            Say Hello →
          </a>
        </div>
      </div>
    </section>
  );
}
