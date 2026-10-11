import { 
  FiAward, 
  FiCheckCircle 
} from 'react-icons/fi';
import { certificationsData } from '../data/portfolioData';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiAward /> Certifications
          </div>
          <h2 className="section-title">
            Verified Knowledge &amp; <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Industry &amp; academic programs completed to strengthen full-stack, AI, and backend capabilities.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <div key={index} className="cert-card glass-card">
              <div className="cert-card-top">
                <div className="cert-icon-wrapper">
                  <FiAward className="cert-badge-icon" />
                </div>
                <span className="cert-category-badge">{cert.badge}</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>

              <div className="cert-issuer-row">
                <span className="issuer-label">Issued by:</span>
                <span className="issuer-name">{cert.issuer}</span>
              </div>

              <p className="cert-description">{cert.description}</p>

              <div className="cert-verified-footer">
                <FiCheckCircle className="verified-icon" />
                <span>Verified Curriculum</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
