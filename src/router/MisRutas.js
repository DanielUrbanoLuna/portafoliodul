import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';
import { Footer } from '../components/layout/Footer';
import { HeaderNav } from '../components/layout/HeaderNav';

export const MisRutas = () => {
  return (
    <HashRouter>
      {/* HEADER Y NAVEGACION */}
      <HeaderNav />

      {/* CONTENIDO PRINCIPAL */}
      <section className="content">
        <Routes>
          {/* Ruta inicial */}
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Redirección si la ruta no existe */}
          <Route path="*" element={<Navigate to="/inicio" />} />
        </Routes>
      </section>

      {/* PIE DE PAGINA */}
      <Footer />
    </HashRouter>
  );
};
