import {
  FiFolder,
  FiMail,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiArrowDown,
  FiAward
} from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-ambient-glow hero-glow-1" />
      <div className="hero-ambient-glow hero-glow-2" />

      <div className="section-wrapper hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-status-badge">
            <span className="status-dot"></span>
            <span>{personalInfo.status}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-role">
            {personalInfo.role}
          </h2>

          <p className="hero-bio">
            Passionate software developer interested in <strong>Java</strong>, <strong>React.js</strong>, backend architectures, databases, and crafting robust software to solve real-world problems. Graduating in 2026 from <strong>Sinhgad College of Engineering</strong> with a <strong>9.33 CGPA</strong>.
          </p>

          <div className="hero-location-row">
            <span className="hero-location-item">
              <FiMapPin className="hero-meta-icon" />
              <span>{personalInfo.location}</span>
            </span>
            <span className="hero-divider">&bull;</span>
            <span className="hero-location-item">
              <FiAward className="hero-meta-icon accent-gold" />
              <span>CGPA: {personalInfo.cgpa}</span>
            </span>
          </div>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="btn btn-primary hero-btn"
            >
              <FiFolder />
              <span>View Projects</span>
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="btn btn-secondary hero-btn"
            >
              <FiMail />
              <span>Contact Me</span>
            </a>

            <a
              href={personalInfo.resumeFile}
              download={personalInfo.resumeFile.split('/').pop() || 'Aviraj-Ligade-Resume.pdf'}
              className="btn btn-outline hero-btn"
              title="Download PDF Resume"
            >
              <FiDownload />
              <span>Download Resume</span>
            </a>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hero-btn hero-github-btn"
              title="GitHub Profile"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>

            {personalInfo.socialLinks.linkedin && (
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline hero-btn"
                title="LinkedIn Profile"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
            )}
          </div>

          {/* Quick Metrics */}
          <div className="hero-stats-row">
            <div className="stat-card">
              <div className="stat-number gradient-text">9.33</div>
              <div className="stat-label">CGPA (B.Tech CSE)</div>
            </div>
            <div className="stat-card">
              <div className="stat-number gradient-text">3+</div>
              <div className="stat-label">Major Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number gradient-text">2026</div>
              <div className="stat-label">Graduation Year</div>
            </div>
            <div className="stat-card">
              <div className="stat-number gradient-text">Full-Stack</div>
              <div className="stat-label">Web & App Focus</div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image Placeholder & Tech Badges */}
        <div className="hero-visual">
          <div className="hero-avatar-card glass-card">
            {/* Ambient Avatar Glow */}
            <div className="avatar-ring-glow"></div>

            <div className="avatar-frame">
              {personalInfo.profileImage ? (
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="avatar-img"
                />
              ) : (
                <div className="avatar-placeholder">
                  {/* Modern Developer SVG Illustration */}
                  <svg className="avatar-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="95" fill="#0b1329" stroke="url(#heroGrad)" strokeWidth="3" />
                    <circle cx="100" cy="72" r="36" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                    {/* Stylized Developer Silhouette */}
                    <path d="M100 48C86.7452 48 76 58.7452 76 72C76 85.2548 86.7452 96 100 96C113.255 96 124 85.2548 124 72C124 58.7452 113.255 48 100 48Z" fill="#334155" />
                    <path d="M54 154C54 126.386 74.5949 104 100 104C125.405 104 146 126.386 146 154V165H54V154Z" fill="#1e293b" />
                    {/* Code bracket graphics */}
                    <path d="M38 95L24 105L38 115" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M162 95L176 105L162 115" stroke="#c084fc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Monogram */}
                    <rect x="76" y="128" width="48" height="24" rx="6" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
                    <text x="100" y="145" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">AL &bull; CSE</text>
                    <defs>
                      <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="50%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#c084fc" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}

              {/* Floating tech badges */}
              <div className="floating-badge badge-top-left">
                <span className="badge-icon">☕</span>
                <span>Java &amp; OOP</span>
              </div>

              <div className="floating-badge badge-top-right">
                <span className="badge-icon">⚛️</span>
                <span>React.js</span>
              </div>

              <div className="floating-badge badge-bottom-left">
                <span className="badge-icon">🍃</span>
                <span>Spring Boot</span>
              </div>

              <div className="floating-badge badge-bottom-right">
                <span className="badge-icon">🐬</span>
                <span>MySQL</span>
              </div>
            </div>

            {/* Profile Placeholder Notice */}
            <div className="avatar-meta">
              <div className="avatar-name">{personalInfo.name}</div>
              <div className="avatar-college">{personalInfo.college}</div>
              {!personalInfo.profileImage ? (
                <div className="placeholder-tooltip">
                  <span className="tooltip-indicator">💡</span>
                  <span>Photo placeholder: update <code>profileImage</code> in <code>portfolioData.js</code></span>
                </div>
              ) : (
                <div className="profile-active-tag">
                  <span>{personalInfo.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint-link" aria-label="Scroll down to About section">
        <FiArrowDown className="scroll-arrow-icon" />
      </a>
    </section>
  );
}
