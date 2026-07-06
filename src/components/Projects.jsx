function Projects() {
  const projects = [
    {
      title: 'UniNexus - Student Collaboration & Marketplace Platform',
      year: '2026',
      description: 'Developed user management and marketplace modules with authentication and CRUD features.',
      tags: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      title: 'Smart Campus Operational Hub',
      year: '2026',
      description: 'Developed the Facilities & Assets Catalogue module and User management module.',
      tags: ['Spring Boot', 'React', 'MongoDB']
    },
    {
      title: 'AI-Based Weather Prediction',
      year: '2025',
      description: 'Developed LSTM-based weather forecasting models for temperature prediction and rainfall classification. (Research Project)',
      tags: ['Python', 'Machine Learning', 'LSTM']
    },
    {
      title: 'Low-Cost Safety Bike Jacket',
      year: '2025',
      description: 'Developed an ESP32-based smart airbag jacket with crash detection and automated CO2 deployment. (Final Year Project)',
      tags: ['ESP32', 'IoT', 'Hardware']
    },
    {
      title: 'Automated Ayurvedic Decoction Machine',
      year: '2024',
      description: 'Developed an Arduino-based automated kasaya preparation system to improve efficiency and consistency.',
      tags: ['Arduino', 'Automation', 'Sensors']
    },
    {
      title: 'Inventory Management System',
      year: '2024',
      description: 'Developed the payroll module of a system with authentication, leave management, and salary processing.',
      tags: ['MERN Stack']
    },
    {
      title: 'To-Do Mobile App',
      year: '2024',
      description: 'Built a task management mobile application for creating and managing daily tasks.',
      tags: ['Kotlin', 'Android']
    },
    {
      title: 'Fighting Robot Toy Design',
      year: '2023',
      description: 'Developed an Arduino-based multiplayer robot fighting system for interactive educational applications.',
      tags: ['Arduino', 'Robotics']
    },
    {
      title: 'Smart Door System',
      year: '2023',
      description: 'Designed a remote-controlled smart door using Arduino Nano and wireless communication.',
      tags: ['Arduino', 'Wireless', 'IoT']
    },
    {
      title: 'Maze Solving Robot - ROBOFEST',
      year: '2023',
      description: 'Built an Arduino Uno-based autonomous robot using ultrasonic sensors for maze navigation.',
      tags: ['Arduino', 'Robotics', 'Sensors']
    },
    {
      title: 'E-Commerce Website Development',
      year: '2023',
      description: 'Developed Contact Us and Cart modules using HTML, CSS, JavaScript, PHP, and MySQL.',
      tags: ['HTML/CSS', 'PHP', 'MySQL', 'JavaScript']
    }
  ];
  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <h3 className="section-subtitle">Portfolio</h3>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ fontSize: '2rem', color: 'var(--accent)' }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"></path></svg>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{project.year}</span>
            </div>
            
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', flexGrow: 0 }}>{project.title}</h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
              {project.description}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'var(--font-heading)', background: 'var(--accent-glow)', padding: '0.25rem 0.75rem', borderRadius: '100px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;