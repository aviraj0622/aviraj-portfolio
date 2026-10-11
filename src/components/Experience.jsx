import { 
  FiBriefcase, 
  FiCalendar, 
  FiMapPin, 
  FiCheckCircle, 
  FiTerminal 
} from 'react-icons/fi';
import { experienceData } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiBriefcase /> Work Experience
          </div>
          <h2 className="section-title">
            Internship &amp; <span className="gradient-text">Practical Training</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development training, intensive problem solving, and enterprise technology concepts.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>

              <div className="timeline-card glass-card">
                <div className="exp-card-header">
                  <div className="exp-title-group">
                    <span className="exp-type-badge">{exp.type}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-org">{exp.organization}</h4>
                  </div>

                  <div className="exp-meta-group">
                    <span className="exp-meta-badge duration-badge">
                      <FiCalendar /> {exp.duration}
                    </span>
                    <span className="exp-meta-badge location-badge">
                      <FiMapPin /> {exp.location}
                    </span>
                    <span className="exp-status-pill">{exp.status}</span>
                  </div>
                </div>

                <p className="exp-description">{exp.description}</p>

                {/* Training Highlights */}
                <div className="exp-highlights-box">
                  <span className="highlights-header">
                    <FiTerminal /> Core Focus &amp; Practical Training:
                  </span>
                  <ul className="highlights-list">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx}>
                        <FiCheckCircle className="highlight-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="exp-tech-row">
                  <span className="exp-tech-label">Technologies:</span>
                  <div className="exp-tech-tags">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
