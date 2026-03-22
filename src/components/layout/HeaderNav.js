import React from 'react';
import { NavLink } from 'react-router-dom';

// getNavClass centraliza la lógica de clase activa para que no se repita
// en cada NavLink. Si en el futuro se añade lógica (ej: prefetch on hover),
// hay un único punto de cambio.
const getNavClass = ({ isActive }) => isActive ? 'active' : '';

export const HeaderNav = () => (
  <header className='header'>
    <div className='logo'>
      <span>DUL</span>
      <h2>Daniel Urbano Luna</h2>
    </div>

    <nav>
      <ul>
        <li><NavLink to="/inicio"      className={getNavClass}>Inicio</NavLink></li>
        <li><NavLink to="/portafolio"  className={getNavClass}>Portafolio</NavLink></li>
        <li><NavLink to="/servicios"   className={getNavClass}>Servicios</NavLink></li>
        <li><NavLink to="/curriculum"  className={getNavClass}>Curriculum</NavLink></li>
        <li><NavLink to="/contacto"    className={getNavClass}>Contacto</NavLink></li>
      </ul>
    </nav>
  </header>
);
