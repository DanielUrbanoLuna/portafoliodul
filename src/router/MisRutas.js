import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Inicio }     from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Servicios }  from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
import { Contacto }   from '../components/Contacto';
import { Footer }     from '../components/layout/Footer';
import { HeaderNav }  from '../components/layout/HeaderNav';

// HashRouter en lugar de BrowserRouter porque GitHub Pages no soporta
// el fallback del servidor para rutas del History API: una recarga directa
// de /portafolio devolvería 404. El hash (#/portafolio) se resuelve en cliente.
export const MisRutas = () => (
  <HashRouter>
    <HeaderNav />

    <section className="content">
      <Routes>
        <Route path="/"           element={<Inicio />} />
        <Route path="/inicio"     element={<Inicio />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/servicios"  element={<Servicios />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contacto"   element={<Contacto />} />
        {/* Catch-all: evita pantalla en blanco ante URLs desconocidas */}
        <Route path="*"           element={<Navigate to="/inicio" />} />
      </Routes>
    </section>

    <Footer />
  </HashRouter>
);
