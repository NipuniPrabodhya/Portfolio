function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['C', 'C++', 'Java', 'Python', 'R']
    },
    {
      category: 'AI & Data Science',
      skills: ['Machine Learning', 'OpenCV', 'Scikit-learn']
    },
    {
      category: 'Web & Software Development',
      skills: ['MERN Stack', 'HTML', 'CSS', 'REST APIs']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'MySQL', 'Microsoft SQL Server']
    },
    {
      category: 'Embedded Systems & IoT',
      skills: ['Arduino', 'ESP32', 'Industrial IoT (IIoT)']
    },
    {
      category: 'PLC & Automation',
      skills: ['Delta PLC', 'Delta HMI', 'Nextion HMI']
    },
    {
      category: 'Electronics & PCB Design',
      skills: ['EasyEDA', 'Circuit Design', 'PCB Layout Design']
    },
    {
      category: 'Development Tools',
      skills: ['Visual Studio Code', 'Arduino IDE', 'ISPSoft', 'RDWorks', 'Nextion Editor']
    },
    {
      category: 'Design Tools',
      skills: ['SolidWorks', 'AutoCAD', 'RDWorks']
    },
    {
      category: 'Manufacturing & Machining',
      skills: ['Laser Cutting', 'Drilling', 'Tapping', 'Milling', 'Lathe Operation', 'Band Saw', 'Sand Blasting', 'Arc Welding', '3D Scanning', '3D Printing']
    },
    {
      category: 'Microsoft Office',
      skills: ['Word', 'Excel', 'PowerPoint']
    }
  ];

  return (
    <section id="skills" className="section container">
      <div className="section-header">
        <h3 className="section-subtitle">Expertise</h3>
        <h2 className="section-title">Technical Skills</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((group, index) => (
          <div key={index} className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
              {group.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {group.skills.map(skill => (
                <div key={skill} style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid var(--border)', 
                  padding: '0.5rem 1rem', 
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  transition: 'var(--transition)',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.target.style.borderColor = 'var(--accent)';
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.transform = 'none';
                }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;