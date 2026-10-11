import { 
  FiArrowUp, 
  FiGithub, 
  FiLinkedin,
  FiMail, 
  FiPhone, 
  FiCode 
} from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer className="portfolio-footer">
      <div className="section-wrapper footer-content-wrap">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="footer-brand-title">
              <span className="footer-logo-box">
                <FiCode />
              </span>
              <span className="footer-name">{personalInfo.name}</span>
            </div>
            <p className="footer-tagline">
              {personalInfo.role} &bull; Sinhgad College of Engineering
            </p>
          </div>

          <div className="footer-nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="footer-nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-row">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="footer-tech-tag">
            Designed &amp; built with React.js &bull; Vite &bull; Vanilla CSS
          </div>

          <div className="footer-social-icons">
            <a 
              href={personalInfo.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="GitHub Profile"
              className="footer-icon-link"
            >
              <FiGithub />
            </a>
            {personalInfo.socialLinks.linkedin && (
              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="LinkedIn Profile"
                className="footer-icon-link"
              >
                <FiLinkedin />
              </a>
            )}
            <a 
              href={`mailto:${personalInfo.email}`} 
              title="Send an Email"
              className="footer-icon-link"
            >
              <FiMail />
            </a>
            <a 
              href={`tel:${personalInfo.phone}`} 
              title="Call"
              className="footer-icon-link"
            >
              <FiPhone />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
