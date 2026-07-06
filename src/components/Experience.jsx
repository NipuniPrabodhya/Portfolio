function Experience() {
  const experiences = [
    {
      title: 'Autonomation Engineer (Intern)',
      company: 'MAS Intimates Central Autonomation - Rathmalana, Sri Lanka',
      date: 'September 2025 - June 2026',
      summary: 'Contributed to the development and deployment of Industrial IoT systems, focusing on machine monitoring and production optimization using Arduino and ESP32. Assisted in machine vision solutions and designed electrical schematics for automation control panels.'
    },
    {
      title: 'Mechatronics Engineer (Intern)',
      company: 'KD Rise Electrical Motors (Pvt) Ltd, Kaduwela, Sri Lanka',
      date: 'June 2024 - January 2025',
      summary: 'Developed an electric scooter HMI dashboard and RFID-based ignition systems. Modeled modular automation applications in SolidWorks and performed testing and analysis on lithium-ion batteries.'
    }
  ];

  return (
    <section id="experience" className="section container">
      <div className="section-header">
        <h3 className="section-subtitle">Career Path</h3>
        <h2 className="section-title">Work Experience</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass" style={{ padding: '2rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent)', borderTopLeftRadius: 'var(--radius-md)', borderBottomLeftRadius: 'var(--radius-md)' }}></div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.title}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--accent-2)', fontWeight: 600 }}>{exp.company}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{exp.date}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {exp.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
