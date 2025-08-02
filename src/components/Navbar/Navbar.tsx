// src/components/Navbar/Navbar.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Furkan Fidan
      </Link>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Ana Sayfa
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            Hakkımda
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
            Projeler
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            İletişim
          </NavLink>
        </li>
      </ul>

      {/* Mobil menü butonu (şimdilik gizli) */}
      {/* <button className="menu-toggle">
        <i className="fas fa-bars"></i>
      </button> */}
    </nav>
  );
};

export default Navbar;