import { useState } from 'react';
import { 
  FiCode, 
  FiGlobe, 
  FiServer, 
  FiDatabase, 
  FiSmartphone, 
  FiTool, 
  FiCpu, 
  FiStar 
} from 'react-icons/fi';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoryIconMap = {
    'Programming Languages': <FiCode />,
    'Web Technologies': <FiGlobe />,
    'Backend Development': <FiServer />,
    'Databases': <FiDatabase />,
    'Mobile App Development': <FiSmartphone />,
    'Tools & Platforms': <FiTool />,
    'Core Computer Science': <FiCpu />
  };

  const categories = ['All', ...skillsData.map((c) => c.category)];

  const filteredCategories = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiCode /> Technical Skills
          </div>
          <h2 className="section-title">
            Technologies &amp; <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Categorized technical skills reflecting my academic foundation, hands-on projects, and internship training.
          </p>
        </div>

        {/* Category Filters */}
        <div className="skills-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat !== 'All' && categoryIconMap[cat]}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((group) => (
            <div key={group.category} className="skill-category-card glass-card">
              <div className="category-header">
                <div className="category-icon-box">
                  {categoryIconMap[group.category]}
                </div>
                <div>
                  <h3 className="category-title">{group.category}</h3>
                  <span className="category-count">{group.skills.length} competencies</span>
                </div>
              </div>

              <div className="skills-items-container">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <div className="chip-top">
                      <span className="chip-name">{skill.name}</span>
                      <span className="chip-level-badge">{skill.level}</span>
                    </div>
                    {skill.note && (
                      <span className="chip-note">{skill.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on resume alignment */}
        <div className="skills-disclaimer-box glass-card">
          <FiStar className="disclaimer-icon" />
          <p>
            <strong>Resume-Accurate Competencies:</strong> Skills are represented strictly in alignment with actual project work, QSpiders internship curriculum, and B.Tech CSE coursework.
          </p>
        </div>
      </div>
    </section>
  );
}
