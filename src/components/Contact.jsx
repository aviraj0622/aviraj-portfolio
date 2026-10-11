import { useState } from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGithub, 
  FiLinkedin,
  FiSend, 
  FiCopy, 
  FiCheck, 
  FiExternalLink,
  FiMessageSquare,
  FiAlertCircle
} from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    // Construct mailto link to provide real functionality without needing a server backend
    const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Aviraj,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    // Open email client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiMail /> Get In Touch
          </div>
          <h2 className="section-title">
            Let's Discuss <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="section-subtitle">
            Whether you are looking to hire a dedicated 2026 graduate, collaborate on a project, or discuss software engineering, I'd love to connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-column">
            <div className="contact-card-box glass-card">
              <h3 className="contact-column-heading">
                Direct Contact <span className="gradient-text">Channels</span>
              </h3>
              <p className="contact-lead-text">
                Feel free to reach out via email, phone, or GitHub. I usually respond within 24 hours.
              </p>

              <div className="contact-methods-list">
                {/* Email Item */}
                <div className="contact-method-item">
                  <div className="method-icon-wrap">
                    <FiMail />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Email Address</span>
                    <a href={`mailto:${personalInfo.email}`} className="method-val">
                      {personalInfo.email}
                    </a>
                  </div>
                  <button 
                    type="button" 
                    className="copy-btn" 
                    onClick={handleCopyEmail}
                    title="Copy email address"
                  >
                    {copiedEmail ? <FiCheck className="text-emerald" /> : <FiCopy />}
                    <span className="copy-label">{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                {/* Phone Item */}
                <div className="contact-method-item">
                  <div className="method-icon-wrap">
                    <FiPhone />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Phone / WhatsApp</span>
                    <a href={`tel:${personalInfo.phone}`} className="method-val">
                      {personalInfo.phoneDisplay}
                    </a>
                  </div>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="action-pill-btn"
                    title="Call directly"
                  >
                    Call
                  </a>
                </div>

                {/* Location Item */}
                <div className="contact-method-item">
                  <div className="method-icon-wrap">
                    <FiMapPin />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Location</span>
                    <span className="method-val text-primary">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="contact-method-item">
                  <div className="method-icon-wrap">
                    <FiGithub />
                  </div>
                  <div className="method-details">
                    <span className="method-label">GitHub Profile</span>
                    <a 
                      href={personalInfo.socialLinks.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="method-val"
                    >
                      {personalInfo.socialLinks.github}
                    </a>
                  </div>
                  <a 
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-pill-btn"
                    title="Open GitHub"
                  >
                    <FiExternalLink />
                  </a>
                </div>

                {/* LinkedIn Item */}
                {personalInfo.socialLinks.linkedin && (
                  <div className="contact-method-item">
                    <div className="method-icon-wrap">
                      <FiLinkedin />
                    </div>
                    <div className="method-details">
                      <span className="method-label">LinkedIn Profile</span>
                      <a 
                        href={personalInfo.socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="method-val"
                      >
                        {personalInfo.socialLinks.linkedin}
                      </a>
                    </div>
                    <a 
                      href={personalInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-pill-btn"
                      title="Open LinkedIn"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                )}
              </div>

              {/* Status Note */}
              <div className="hire-availability-pill">
                <span className="availability-dot"></span>
                <span>Graduating in 2026 &bull; Open for Entry-Level &amp; Internship roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <div className="contact-form-card glass-card">
              <div className="form-card-header">
                <FiMessageSquare className="form-header-icon" />
                <div>
                  <h3 className="form-card-title">Send a Message</h3>
                  <p className="form-card-sub">
                    Fill out the form below to initiate an email draft directly.
                  </p>
                </div>
              </div>

              {/* Informational banner about front-end demo */}
              <div className="demo-banner">
                <FiAlertCircle className="demo-banner-icon" />
                <p>
                  <strong>Front-End Interactive Demo:</strong> Submitting prepares a pre-filled draft in your default email client. You can also email directly to{' '}
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
                </p>
              </div>

              {formSubmitted && (
                <div className="form-success-banner">
                  <FiCheck className="banner-success-icon" />
                  <div>
                    <strong>Draft Prepared!</strong> Your email client should now be open with your message. If it didn't open, click{' '}
                    <a href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Message')}&body=${encodeURIComponent(formData.message)}`}>
                      here to send directly
                    </a>.
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="form-error-banner">
                  <FiAlertCircle />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">
                      Your Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">
                      Your Email <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Opportunity Inquiry / Project Collaboration"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">
                    Message <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="form-input form-textarea"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-form-btn">
                  <FiSend />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
