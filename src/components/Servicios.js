import React from 'react';
import { Link } from 'react-router-dom';

// Los datos viven junto al componente porque solo Servicios los consume.
// Si en el futuro se necesitan en otra vista (ej: Home), se mueven a datos/servicios.js.
const SERVICIOS = [
  {
    id: 'diseno',
    titulo: 'Diseño web',
    descripcion: 'Transformo ideas en sitios web atractivos y profesionales. Me aseguro de que cada página esté diseñada para captar la atención, crear una experiencia visualmente agradable y reflejar la identidad de tu marca. Tu sitio no solo será bonito, sino funcional, rápido y fácil de usar.',
  },
  {
    id: 'desarrollo',
    titulo: 'Desarrollo web',
    descripcion: '¿Necesitas un sitio web desde cero? Puedo construirlo con las tecnologías más actuales, asegurando que sea completamente responsivo, escalable y optimizado para SEO. Desde la planificación hasta el lanzamiento, me encargaré de cada detalle para que tu web esté lista para impresionar tanto a usuarios como a motores de búsqueda.',
  },
  {
    id: 'aplicacion',
    titulo: 'Desarrollo de aplicación web',
    descripcion: 'Crearé una aplicación web robusta y personalizada, desde el frontend que ofrece una experiencia de usuario fluida e intuitiva, hasta el backend que garantiza un funcionamiento seguro y eficiente. Me encargaré de integrar funcionalidades clave para tu negocio, asegurando que todo funcione perfectamente para que tu aplicación esté lista para crecer y adaptarse a nuevas necesidades.',
  },
];

// Sub-componente atómico: puramente presentacional, sin estado.
// Definido aquí porque solo Servicios lo usa; no justifica su propio archivo.
const ServiceCard = ({ titulo, descripcion }) => (
  <article className='service'>
    <h2>{titulo}:</h2>
    <p>{descripcion}</p>
  </article>
);

export const Servicios = () => (
  <div className='pages'>
    <h1 className='heading'>Mis servicios</h1>

    <section className='services'>
      {SERVICIOS.map(({ id, titulo, descripcion }) => (
        <ServiceCard key={id} titulo={titulo} descripcion={descripcion} />
      ))}

      <div className='ini'>
        <h3>Si tienes alguna duda o quieres más información sobre uno de mis servicios, no dudes en contactar:</h3>
        <Link to="/contacto">Contacta conmigo</Link>
      </div>
    </section>
  </div>
);
