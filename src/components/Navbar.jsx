import { useState, useEffect } from 'react';
import { 
  FiMenu, 
  FiX, 
  FiDownload, 
  FiGithub, 
  FiLinkedin,
  FiMail, 
  FiCode 
} from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, '#home')}>
          <div className="brand-badge">
            <FiCode className="brand-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Aviraj<span className="brand-dot">.dev</span></span>
            <span className="brand-sub">CSE &bull; 2026</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                    {isActive && <span className="active-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <a
            href={personalInfo.resumeFile}
            download={personalInfo.resumeFile.split('/').pop() || 'Aviraj-Ligade-Resume.pdf'}
            className="btn btn-outline btn-sm nav-resume-btn"
            title="Download Aviraj's Resume"
          >
            <FiDownload />
            <span>Resume</span>
          </a>

          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn"
            title="GitHub Profile"
          >
            <FiGithub />
          </a>

          {personalInfo.socialLinks.linkedin && (
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-btn"
              title="LinkedIn Profile"
            >
              <FiLinkedin />
            </a>
          )}

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <div className="brand-text">
              <span className="brand-name">Aviraj Anil Ligade</span>
              <span className="brand-sub">CSE Graduate 2026</span>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={22} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-footer">
            <div className="mobile-theme-row">
              <span className="mobile-theme-label">Theme Mode</span>
              <ThemeToggle variant="pill" />
            </div>

            <a
              href={personalInfo.resumeFile}
              download={personalInfo.resumeFile.split('/').pop() || 'Aviraj-Ligade-Resume.pdf'}
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiDownload /> Download Resume
            </a>
            <div className="mobile-social-row">
              <a 
                href={personalInfo.socialLinks.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="mobile-social-link"
              >
                <FiGithub /> GitHub
              </a>
              {personalInfo.socialLinks.linkedin && (
                <a 
                  href={personalInfo.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mobile-social-link"
                >
                  <FiLinkedin /> LinkedIn
                </a>
              )}
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="mobile-social-link"
              >
                <FiMail /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
