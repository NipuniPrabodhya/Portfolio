import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 'var(--nav-h)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      transition: 'var(--transition)',
      background: 'var(--bg-secondary)', // Always Deep Navy
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ul style={{ display: 'flex', gap: '2.5rem', margin: 0, padding: 0, listStyle: 'none' }}>
          {['About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: '#94A3B8', // Light slate gray for readability on Deep Navy
                  textDecoration: 'none',
                  transition: 'var(--transition)',
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
                onMouseOut={(e) => e.target.style.color = '#94A3B8'}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;