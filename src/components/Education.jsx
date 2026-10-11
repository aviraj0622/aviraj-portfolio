import { 
  FiBookOpen, 
  FiAward, 
  FiCalendar 
} from 'react-icons/fi';
import { educationData } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiBookOpen /> Education
          </div>
          <h2 className="section-title">
            Academic <span className="gradient-text">Journey &amp; Excellence</span>
          </h2>
          <p className="section-subtitle">
            Consistent scholastic performance, culminating in a 9.33/10 CGPA in Computer Science and Engineering.
          </p>
        </div>

        {/* Education Cards */}
        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div 
              key={idx} 
              className={`education-card glass-card ${edu.isHighlighted ? 'highlighted-degree-card' : ''}`}
            >
              {edu.isHighlighted && (
                <div className="featured-banner">
                  <FiAward /> Current Degree &bull; 9.33 CGPA
                </div>
              )}

              <div className="edu-top-row">
                <span className="edu-badge">{edu.badge}</span>
                <span className="edu-duration">
                  <FiCalendar /> {edu.duration}
                </span>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>

              <div className="edu-score-box">
                <span className="edu-score-label">Academic Result</span>
                <span className={`edu-score-val ${edu.isHighlighted ? 'gradient-text' : ''}`}>
                  {edu.score}
                </span>
              </div>

              <p className="edu-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
