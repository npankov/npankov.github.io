import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const ripple = document.createElement('div');
        ripple.className = 'touch-ripple';
        ripple.style.left = `${touch.clientX}px`;
        ripple.style.top = `${touch.clientY}px`;
        document.body.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <div className="app-container">
      <div className="glow-effect" />

      <main className="content">
        <header className="fade-in">
          <h1 className="name">Nikolai Pankov</h1>
          <h2 className="title">Software Developer</h2>
          <div className="meta">
            <span>React · TypeScript · AI-Driven Development</span>
            <span className="separator">·</span>
            <span>Lyon / Remote</span>
          </div>
        </header>

        <div className="divider fade-in" />

        <section className="about fade-in">
          <p>
            Focused on frontend, product work,<br />
            and AI-driven workflows.
          </p>
        </section>

        <div className="divider fade-in" />

        <section className="info-section fade-in">
          <h3 className="section-title">Experience</h3>
          <p>LumApps</p>
        </section>

        <div className="divider fade-in" />

        <section className="info-section fade-in">
          <h3 className="section-title">Contact</h3>
          <nav className="links">
            <a href="https://linkedin.com/in/pankof/" className="link" target="_blank" rel="noopener noreferrer">
              <span className="link-arrow">↗</span> LinkedIn
            </a>
            <a href="https://github.com/npankov" className="link" target="_blank" rel="noopener noreferrer">
              <span className="link-arrow">↗</span> GitHub
            </a>
          </nav>
        </section>
      </main>
    </div>
  );
};

export default App;
