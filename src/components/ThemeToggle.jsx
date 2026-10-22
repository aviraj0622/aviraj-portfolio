import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle({ variant = 'icon', className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  if (variant === 'pill') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`theme-toggle-pill ${isDark ? 'dark' : 'light'} ${className}`}
        aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
        title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      >
        <span className="pill-option pill-dark">
          <FiMoon className="pill-icon" />
          <span>Dark</span>
        </span>
        <span className="pill-option pill-light">
          <FiSun className="pill-icon" />
          <span>Light</span>
        </span>
        <span className="pill-slider" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn ${isDark ? 'is-dark' : 'is-light'} ${className}`}
      aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
    >
      <div className="theme-icon-container">
        <FiSun className="theme-icon sun-icon" />
        <FiMoon className="theme-icon moon-icon" />
      </div>
      <span className="theme-toggle-ripple" />
    </button>
  );
}
