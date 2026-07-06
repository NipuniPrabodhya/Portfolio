import { useState } from 'react';

const categories = [
  'All Projects',
  'Software Engineering',
  'Embedded Systems & IoT',
  'AI & Machine Learning',
  'Engineering & Design'
];

const projects = [
  {
    title: 'UniNexus - Student Collaboration & Marketplace Platform',
    year: '2026',
    description: 'A full-stack student marketplace and collaboration platform with user management, marketplace modules, authentication, and comprehensive CRUD features for the academic community.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'Software Engineering'
  },
  {
    title: 'Smart Campus Operational Hub',
    year: '2026',
    description: 'An enterprise-level campus management system featuring a Facilities & Assets Catalogue module and User management module for streamlined operational workflows.',
    technologies: ['Spring Boot', 'React', 'MongoDB'],
    category: 'Software Engineering'
  },
  {
    title: 'AI-Based Weather Prediction',
    year: '2025',
    description: 'Research project developing LSTM-based deep learning models for accurate weather forecasting, including temperature prediction and rainfall classification using historical climate data.',
    technologies: ['Python', 'LSTM', 'Scikit-learn', 'TensorFlow'],
    category: 'AI & Machine Learning'
  },
  {
    title: 'Low-Cost Safety Bike Jacket',
    year: '2025',
    description: 'Final year project: An ESP32-based smart airbag jacket with real-time crash detection algorithms and automated CO2 deployment to protect motorcyclists on impact.',
    technologies: ['ESP32', 'Arduino IDE', 'Sensors', 'IoT'],
    category: 'Embedded Systems & IoT'
  },
  {
    title: 'Automated Ayurvedic Decoction Machine',
    year: '2024',
    description: 'An Arduino-based automated system for preparing traditional Ayurvedic kasaya (herbal decoctions) with precise temperature and timing control to improve consistency.',
    technologies: ['Arduino', 'Sensors', 'Automation', 'EasyEDA'],
    category: 'Engineering & Design'
  },
  {
    title: 'Inventory Management System',
    year: '2024',
    description: 'Developed the payroll module of a full MERN-based inventory system, including authentication, leave management, and automated salary processing.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'Software Engineering'
  },
  {
    title: 'To-Do Mobile App',
    year: '2024',
    description: 'A native Android task management mobile application for creating, organizing, and tracking daily tasks with a clean and intuitive user interface.',
    technologies: ['Kotlin', 'Android Studio', 'SQLite'],
    category: 'Software Engineering'
  },
  {
    title: 'Fighting Robot Toy Design',
    year: '2023',
    description: 'An Arduino-based interactive multiplayer robot fighting toy system designed for educational applications, featuring wireless control and battle logic.',
    technologies: ['Arduino', 'Wireless Communication', 'Robotics'],
    category: 'Engineering & Design'
  },
  {
    title: 'Smart Door System',
    year: '2023',
    description: 'A remote-controlled smart door system using Arduino Nano with wireless communication for secure and automated access control.',
    technologies: ['Arduino Nano', 'Wireless', 'IoT'],
    category: 'Embedded Systems & IoT'
  },
  {
    title: 'Maze Solving Robot - ROBOFEST',
    year: '2023',
    description: 'An Arduino Uno-based autonomous maze-solving robot using ultrasonic sensors and a wall-following algorithm, built for the ROBOFEST competition.',
    technologies: ['Arduino Uno', 'Ultrasonic Sensors', 'Robotics'],
    category: 'Engineering & Design'
  },
  {
    title: 'E-Commerce Website Development',
    year: '2023',
    description: 'Developed the Contact Us and Cart modules of a full e-commerce website, including dynamic product cart functionality and backend form handling.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    category: 'Software Engineering'
  }
];

const categoryColors = {
  'Software Engineering':      { bg: '#EFF6FF', text: '#1D4ED8', dot: '#3B82F6' },
  'Embedded Systems & IoT':    { bg: '#ECFDF5', text: '#065F46', dot: '#10B981' },
  'AI & Machine Learning':     { bg: '#FFF7ED', text: '#9A3412', dot: '#F97316' },
  'Engineering & Design':      { bg: '#F5F3FF', text: '#5B21B6', dot: '#8B5CF6' }
};

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filtered = activeFilter === 'All Projects'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <h3 className="section-subtitle">Portfolio</h3>
        <h2 className="section-title">Projects</h2>
      </div>

      {/* Filter Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              padding: '0.6rem 1.4rem',
              borderRadius: '100px',
              border: activeFilter === cat ? '2px solid var(--accent)' : '2px solid var(--border)',
              background: activeFilter === cat ? 'var(--accent)' : 'var(--bg-card)',
              color: activeFilter === cat ? '#FFFFFF' : 'var(--text-secondary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'var(--transition)',
              boxShadow: activeFilter === cat ? '0 4px 15px var(--accent-glow)' : 'none'
            }}
            onMouseOver={e => {
              if (activeFilter !== cat) {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--accent)';
              }
            }}
            onMouseOut={e => {
              if (activeFilter !== cat) {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
        {filtered.map((project, index) => {
          const catStyle = categoryColors[project.category] || {};
          return (
            <div key={index} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              {/* Top row: year + category badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.78rem', fontWeight: 700,
                  color: catStyle.text,
                  background: catStyle.bg,
                  padding: '0.3rem 0.85rem',
                  borderRadius: '100px'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: catStyle.dot }}></span>
                  {project.category}
                </span>
                <span style={{
                  fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600,
                  background: 'var(--bg-primary)', padding: '0.2rem 0.6rem', borderRadius: '6px'
                }}>
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: '1.65', marginBottom: '1.25rem', flexGrow: 1 }}>
                {project.description}
              </p>

              {/* Technologies */}
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Technologies
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.5rem' }}>
                  {project.technologies.map(tag => (
                    <span key={tag} style={{
                      fontSize: '0.8rem',
                      color: 'var(--accent)',
                      background: 'rgba(20,184,166,0.08)',
                      border: '1px solid rgba(20,184,166,0.2)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '100px',
                      fontWeight: 500
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;