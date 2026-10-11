import { 
  FiUser, 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiBookOpen, 
  FiCheckCircle,
  FiZap,
  FiCompass,
  FiLayers,
  FiTrendingUp,
  FiDownload
} from 'react-icons/fi';
import { personalInfo, aboutMe } from '../data/portfolioData';
import './About.css';

export default function About() {
  const strengthIcons = {
    problemSolving: <FiZap className="strength-icon text-cyan" />,
    creativity: <FiCompass className="strength-icon text-purple" />,
    realWorld: <FiLayers className="strength-icon text-blue" />,
    learning: <FiTrendingUp className="strength-icon text-emerald" />
  };

  return (
    <section id="about" className="about-section">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiUser /> About Me
          </div>
          <h2 className="section-title">
            Passionate About Engineering <span className="gradient-text">Impactful Software</span>
          </h2>
          <p className="section-subtitle">
            Get to know my background, core focus areas, and how I bring technical concepts to life.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Bio Narrative & Quick Details */}
          <div className="about-main-card glass-card">
            <div className="card-top-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-label">developer-bio.md</span>
            </div>

            <div className="about-narrative">
              {aboutMe.summary.map((paragraph, index) => (
                <p key={index} className="narrative-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Details Table / Grid */}
            <div className="about-details-grid">
              <div className="detail-item">
                <div className="detail-icon-wrap">
                  <FiUser className="detail-icon" />
                </div>
                <div className="detail-info">
                  <span className="detail-title">Full Name</span>
                  <span className="detail-val">{personalInfo.name}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-wrap">
                  <FiBookOpen className="detail-icon" />
                </div>
                <div className="detail-info">
                  <span className="detail-title">Education</span>
                  <span className="detail-val">B.Tech CSE (2022–2026)</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-wrap">
                  <FiMapPin className="detail-icon" />
                </div>
                <div className="detail-info">
                  <span className="detail-title">Location</span>
                  <span className="detail-val">{personalInfo.location}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-wrap">
                  <FiMail className="detail-icon" />
                </div>
                <div className="detail-info">
                  <span className="detail-title">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="detail-val link-val">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-wrap">
                  <FiPhone className="detail-icon" />
                </div>
                <div className="detail-info">
                  <span className="detail-title">Phone</span>
                  <a href={`tel:${personalInfo.phone}`} className="detail-val link-val">
                    {personalInfo.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-wrap">
                  <FiCheckCircle className="detail-icon" />
                </div>
                <div className="detail-info">
                  <span className="detail-title">Academic Record</span>
                  <span className="detail-val highlight-val">CGPA: {personalInfo.cgpa}</span>
                </div>
              </div>
            </div>

            <div className="about-cta-row">
              <a
                href={personalInfo.resumeFile}
                download={personalInfo.resumeFile.split('/').pop() || 'Aviraj-Ligade-Resume.pdf'}
                className="btn btn-primary"
              >
                <FiDownload /> Download Full Resume
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let's Connect
              </a>
            </div>
          </div>

          {/* Right Column: Professional Strengths */}
          <div className="about-strengths-column">
            <h3 className="strengths-column-title">
              Professional <span className="gradient-text">Strengths</span>
            </h3>

            <div className="strengths-list">
              {aboutMe.strengths.map((item, index) => (
                <div key={index} className="strength-card glass-card">
                  <div className="strength-header">
                    <div className="strength-icon-box">
                      {strengthIcons[item.icon]}
                    </div>
                    <h4 className="strength-title">{item.title}</h4>
                  </div>
                  <p className="strength-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
