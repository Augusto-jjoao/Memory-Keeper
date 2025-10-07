// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import MusicPlayer from './MusicPlayer'; // <-- 1. IMPORTE AQUI
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        {/* ... Seus NavLinks continuam aqui ... */}
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Início
        </NavLink>
        <NavLink to="/historia" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          A História
        </NavLink>
        <NavLink to="/memorias" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Memórias
        </NavLink>
      </div>

      <div className="navbar-spacer" /> {/* <-- ADICIONE ESTA LINHA */}

      <MusicPlayer />
    </nav>
  );
}

export default Navbar;