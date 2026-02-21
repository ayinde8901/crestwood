import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaSchool, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../Context/ThemeContext";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`navbar ${theme}`}>
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <FaSchool size={22} />
          <NavLink to="/">Crestwood Academy</NavLink>
        </div>

        {/* Actions (Theme + Hamburger) */}
        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Nav Links */}
        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/academics" onClick={() => setMenuOpen(false)}>Academics</NavLink>
          <NavLink to="/teachers" onClick={() => setMenuOpen(false)}>Teachers</NavLink>
          <NavLink to="/events" onClick={() => setMenuOpen(false)}>Events</NavLink>
          <NavLink to="/admissions" onClick={() => setMenuOpen(false)}>Admissions</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
