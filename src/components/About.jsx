function About() {
  return (
    <section id="about" className="section container">
      <div className="section-header">
        <h3 className="section-subtitle">Introduction</h3>
        <h2 className="section-title">About Me</h2>
      </div>
      
      <div className="glass" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)', maxWidth: '800px', margin: '0 auto' }}>
          I am a <strong>Mechanical Engineering graduate (Mechatronics Minor)</strong> and an <strong>IT undergraduate at SLIIT</strong>. 
          Passionate about embedded systems, IoT, automation, AI/ML, and software development. 
          Eager to explore emerging technologies, continuously expand technical expertise, and contribute 
          innovative solutions to real-world engineering challenges.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {[
            { icon: '🧩', title: 'Problem Solving' },
            { icon: '🧠', title: 'Analytical Thinking' },
            { icon: '🤝', title: 'Team Work & Collaboration' },
            { icon: '🌟', title: 'Leadership' },
            { icon: '⏱️', title: 'Time Management' },
            { icon: '🔄', title: 'Adaptability' },
            { icon: '📚', title: 'Continuous Learning' },
            { icon: '📋', title: 'Project Coordination & Planning' }
          ].map(skill => (
            <div key={skill.title} style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{skill.icon}</div>
              <h4 style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{skill.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
