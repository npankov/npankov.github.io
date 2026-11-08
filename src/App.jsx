import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const updateMousePosition = (x, y) => {
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseMove = (e) => {
      updateMousePosition(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleDeviceOrientation = (e) => {
      let gamma = e.gamma || 0; // Наклон влево/вправо [-90, 90]
      let beta = e.beta || 0;   // Наклон вперед/назад [-180, 180]

      // Ограничиваем края, чтобы было комфортно держать в руках
      let xProgress = (gamma + 40) / 80;
      xProgress = Math.max(0, Math.min(1, xProgress));
      
      let yProgress = (beta - 20) / 50; 
      yProgress = Math.max(0, Math.min(1, yProgress));

      updateMousePosition(window.innerWidth * xProgress, window.innerHeight * yProgress);
    };

    const requestOrientationPermission = () => {
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              window.addEventListener('deviceorientation', handleDeviceOrientation);
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
    };

    const handleFirstTouch = () => {
      requestOrientationPermission();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleFirstTouch, { passive: true, once: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  return (
    <div className="app-container">
      <div className="glow-effect" />
      
      <main className="content">
        <header className="header">
          <h1 className="name">Nikolai Pankov</h1>
          <h2 className="title">Software Developer</h2>
          <div className="meta">
            <span>React / TypeScript / AI-Driven Development</span>
            <span className="separator">•</span>
            <span>Lyon / Remote</span>
          </div>
        </header>

        <section className="about">
          <p>
            <span className="break-mobile">Focused on frontend</span>
            <span className="separator">•</span>
            <span className="break-mobile">product work</span>
            <span className="separator">•</span>
            <span className="break-mobile">AI-driven workflows</span>
          </p>
        </section>

        <section className="info-section">
          <h3 className="section-title">Experience</h3>
          <p>LumApps</p>
        </section>

        <section className="info-section">
          <h3 className="section-title">Contact</h3>
          <nav className="links">
            <a href="https://linkedin.com/in/pankof/" className="link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/npankov" className="link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </section>
      </main>
    </div>
  );
};

export default App;
