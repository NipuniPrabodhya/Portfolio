function Hero() {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 'var(--nav-h)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* Content side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: 0, fontWeight: 800, lineHeight: 1.1 }}>
              Hello, I&apos;m<br/>
              <span className="gradient-text">Nipuni Prabodhya</span>
            </h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'var(--text-secondary)', margin: 0 }}>
                🎓 <strong>IT Undergraduate</strong> @ SLIIT
              </p>
              <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'var(--text-secondary)', margin: 0 }}>
                ⚙️ <strong>Mechanical Engineering Graduate</strong> @ USJ
              </p>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
              Passionate about bridging hardware and software through embedded systems, AI, and modern web applications.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://www.linkedin.com/in/kl-nipuni-prabodhya" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.6rem', transition: 'var(--transition)' }} onMouseOver={e=>e.target.closest('a').style.color='var(--accent)'} onMouseOut={e=>e.target.closest('a').style.color='var(--text-muted)'}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
              </a>
            </div>
          </div>

          {/* Photo side */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-8px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                opacity: 0.4,
                filter: 'blur(12px)'
              }}></div>
              <img 
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Nipuni Prabodhya" 
                style={{ 
                  width: '280px', 
                  height: '280px', 
                  objectFit: 'cover', 
                  borderRadius: '50%', 
                  border: '4px solid var(--accent)', 
                  boxShadow: '0 8px 40px var(--accent-glow)',
                  position: 'relative',
                  zIndex: 1
                }} 
              />
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-card)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }}></span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;