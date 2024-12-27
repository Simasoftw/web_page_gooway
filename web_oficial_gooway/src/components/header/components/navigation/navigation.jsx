import React, { useState } from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";


const NavigationHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/productos", label: "Productos" },
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav aria-label="Menú principal" className="navigation-header">
      {/* Botón de menú hamburguesa */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!isMenuOpen)}
        aria-label="Abrir menú de navegación"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>

        
      </button>

      {/* Opciones de navegación */}
      <ul className={`navigation-links ${isMenuOpen ? "open" : ""}`}>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationHeader;