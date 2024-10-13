// import React from 'react';
import '../style/header.css';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';  // Icono de menú
import { MdSpaceDashboard } from 'react-icons/md';  // Icono del dashboard
import { FaSun, FaMoon } from 'react-icons/fa';     // Iconos para modo claro/oscuro

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : ''}`}>
      <div className="navbar-container">
        {/* Botón de menú */}
        <div className="flex-between">
          <button className="button-menu">
            <HiOutlineMenuAlt2 className="icon" />
          </button>

          {/* Logo del Dashboard */}
          <a href="#" className="logo">
          <img src="/makers.png" alt="Makers logo" style={{ height: '40px' }} />
            <span className={`logo-text ${darkMode ? 'dark-mode-text' : ''}`}>
              Makers Tech
            </span>
          </a>
        </div>

        {/* Botón para cambiar el modo oscuro/claro */}
        <button className="button-menu" onClick={toggleDarkMode}>
          {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </button>
      </div>
    </nav>
  );
}

export default Header;

