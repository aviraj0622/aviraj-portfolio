import { 
  FiFolder, 
  FiGithub, 
  FiExternalLink, 
  FiCheckCircle, 
  FiEdit3 
} from 'react-icons/fi';
import { projectsData } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiFolder /> Featured Projects
          </div>
          <h2 className="section-title">
            Engineered For <span className="gradient-text">Real-World Utility</span>
          </h2>
          <p className="section-subtitle">
            Full-stack web and mobile applications demonstrating architecture design, secure payment integrations, database modeling, and offline-first workflows.
          </p>
        </div>

        {/* Notice for editing links */}
        <div className="projects-note-card glass-card">
          <div className="note-icon-box">
            <FiEdit3 />
          </div>
          <div className="note-text-content">
            <strong>Customizable Project Repositories:</strong>
            <span>
              All project links (GitHub repository and Live Demo URLs) are managed centrally in{' '}
              <code>src/data/portfolioData.js</code>. Replace the marked placeholders with your live repository links when ready.
            </span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article key={project.id} className="project-card glass-card">
              <div className="project-card-header">
                <div className="project-badge-row">
                  <span className="project-type-badge">{project.badge}</span>
                  <span className="project-index-num">0{index + 1}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-highlight">{project.highlight}</p>
              </div>

              <div className="project-card-body">
                <p className="project-description">{project.description}</p>

                {/* Key Architecture Features */}
                <div className="project-features-list">
                  <span className="features-list-title">Core Implementation Highlights:</span>
                  <ul>
                    {project.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <FiCheckCircle className="feat-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Pills */}
                <div className="project-tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="project-card-footer">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary project-action-btn"
                    title={project.isGithubPlaceholder ? "Placeholder: Update in src/data/portfolioData.js" : "View source code on GitHub"}
                  >
                    <FiGithub />
                    <span>GitHub Repository</span>
                    {project.isGithubPlaceholder && (
                      <span className="placeholder-tag">Placeholder</span>
                    )}
                  </a>
                ) : (
                  <span
                    className="btn btn-secondary project-action-btn project-btn-disabled"
                    title="Source code is private or coming soon"
                  >
                    <FiGithub />
                    <span>Code Coming Soon</span>
                  </span>
                )}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-action-btn"
                    title={project.isLivePlaceholder ? "Placeholder: Update in src/data/portfolioData.js" : "Open live deployment"}
                  >
                    <FiExternalLink />
                    <span>Live Demo</span>
                    {project.isLivePlaceholder && (
                      <span className="placeholder-tag">Placeholder</span>
                    )}
                  </a>
                ) : (
                  <span
                    className="btn btn-secondary project-action-btn project-btn-disabled"
                    title="Live demo is upcoming"
                  >
                    <FiExternalLink />
                    <span>Demo Upcoming</span>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
