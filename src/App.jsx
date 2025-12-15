import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import './App.css';
import ParticlesBackground from './ParticlesBackground';

const XIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h0.001ZM17.082 19.77h1.832L7.084 4.126H5.117z" />
  </svg>
);

const Logo = () => (
  <motion.div
    className="logo"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <img src="/logo.png" alt="Shuffle Logo" className="logo-img" />
    <span className="logo-text">Shuffle</span>
  </motion.div>
);

function App() {
  return (
    <div className="app-container">
      {/* Background Gradient to restore bluish tint */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'radial-gradient(circle at 80% 20%, rgba(65, 207, 196, 0.25) 0%, rgba(240, 244, 248, 0) 60%)',
        pointerEvents: 'none',
      }} />
      <ParticlesBackground />

      <header>
        <Logo />
      </header>

      <main>
        <div className="overflow-hidden">
          <motion.h1
            className="hero-text"
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            LAUNCHING
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="hero-text"
            /* Updated stroke color for light background visibility */
            style={{ color: 'transparent', WebkitTextStroke: '2px #19211c', opacity: 0.3 }}
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            SOON
          </motion.h1>
        </div>


      </main>

      <footer>
        <SocialIcon
          href="https://x.com/shufflerentals"
          icon={<XIcon size={20} />}
          delay={1.2}
        />
        <SocialIcon
          href="https://www.linkedin.com/company/shufflerentals/"
          icon={<Linkedin size={22} />}
          delay={1.3}
        />
        <SocialIcon
          href="https://www.instagram.com/shufflerentals?igsh=aDZvNzJmOWFhbjhv"
          icon={<Instagram size={22} />}
          delay={1.4}
        />
      </footer>
    </div>
  );
}

const SocialIcon = ({ href, icon, delay }) => {
  return (
    <a href={href} className="social-link-wrapper">
      <motion.div
        className="social-icon-btn"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { delay, type: "spring", stiffness: 200, damping: 15 }
        }}
        whileHover={{
          scale: 1.15,
          backgroundColor: "#19211c",
          color: "#41cfc4",
          transition: { duration: 0.1 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
      </motion.div>
    </a>
  )
};

export default App;
