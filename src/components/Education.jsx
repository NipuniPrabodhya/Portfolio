function Education() {
  const education = [
    {
      degree: 'B.Sc. (Hons) Information Technology specialized in Information Technology (3rd Year 2nd Semester UG)',
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      date: 'January 2026 - Present'
    },
    {
      degree: 'B.Sc. (Hons) Engineering specialized in Mechanical Engineering (Minor - Mechatronics Engineering)',
      institution: 'University of Sri Jayewardenepura',
      date: '2021 - 2026'
    },
    {
      degree: 'Higher Diploma in Information Technology',
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      date: 'October 2022 - December 2024'
    },
    {
      degree: 'G.C.E. Advanced Level Examination (2019) - AAB in Physical Science Stream',
      institution: 'Sujatha Vidyalaya Matara (District Rank 11th)',
      date: '2020'
    }
  ];

  const certifications = [
    'Programming Certifications: Python Programming, Python for Beginners, Web Design for Beginners - CODL, University of Moratuwa',
    'Professional Courses: Agile Project Management, AI for Beginners, Data Science & Analytics - HP LIFE, HP Foundation',
    'Engineering Courses: Lean Manufacturing Principles and Implementation (Alison), Introduction to Mechatronic Systems (NPTEL/Alison)',
    'Dean\'s List (2022) and Semester Performance-Based Scholarship - SLIIT',
    'C & Java Programming - Southern IT Education Center, Matara',
    'Short Course in Spoken English - The Open University of Sri Lanka'
  ];

  return (
    <section id="education" className="section container">
      <div className="section-header">
        <h3 className="section-subtitle">Academic Background</h3>
        <h2 className="section-title">Education &amp; Certifications</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        <div className="glass" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>🎓 Education Summary</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
            Holding a <strong>B.Sc. (Hons) in Mechanical Engineering (Minor in Mechatronics)</strong> from the University of Sri Jayewardenepura, and currently pursuing a <strong>B.Sc. (Hons) in Information Technology</strong> at SLIIT.
            Also completed a <strong>Higher Diploma in Information Technology</strong> and maintained a strong academic record throughout.
          </p>
        </div>

        <div className="glass" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>📜 Certifications Summary</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
            Extensively certified across multiple disciplines, including <strong>Python Programming, Web Design, Agile Project Management, Data Science &amp; Analytics</strong>, and <strong>Lean Manufacturing Principles</strong>.
            Additionally completed courses in <strong>C &amp; Java Programming</strong> and <strong>Spoken English</strong> from recognized institutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
