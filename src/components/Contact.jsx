function Contact() {
  return (
    <section id="contact" className="section container">
      <div className="section-header">
        <h3 className="section-subtitle">Get In Touch</h3>
        <h2 className="section-title">Contact Me</h2>
      </div>

      <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '1rem' }}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
            </div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Location</h4>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Malabe, Colombo District, Sri Lanka</span>
          </div>
          
        </div>

        <a href="https://www.linkedin.com/in/kl-nipuni-prabodhya" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', padding: '1rem 2rem' }}>
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;