import React from 'react'
import { Link } from 'react-router-dom'

export const Servicios = () => {
  return (
    <div className='pages'>

      <h1 className='heading'>Mis servicios</h1>

      <section className='services'>

        <article className='service'>
          <h2>Diseño web:</h2>
          <p>Transformo ideas en sitios web atractivos y profesionales. Me aseguro de que cada página 
            esté diseñada para captar la atención, crear una experiencia visualmente agradable y reflejar 
            la identidad de tu marca. Tu sitio no solo será bonito, sino funcional, rápido y fácil de usar.</p>
        </article>

        <article className='service'>
          <h2>Desarrollo web:</h2>
          <p>¿Necesitas un sitio web desde cero? Puedo construirlo con las tecnologías más actuales, 
            asegurando que sea completamente responsivo, escalable y optimizado para SEO. Desde la 
            planificación hasta el lanzamiento, me encargaré de cada detalle para que tu web esté lista 
            para impresionar tanto a usuarios como a motores de búsqueda. </p>
        </article>

        <article className='service'>
          <h2>Desarrollo de aplicación web:</h2>
          <p>Crearé una aplicación web robusta y personalizada, desde el frontend que ofrece una experiencia 
            de usuario fluida e intuitiva, hasta el backend que garantiza un funcionamiento seguro y eficiente. 
            Me encargaré de integrar funcionalidades clave para tu negocio, asegurando que todo funcione 
            perfectamente para que tu aplicación esté lista para crecer y adaptarse a nuevas necesidades.</p>
        </article>

        <div className='ini'>
          <h3>Si tienes alguna duda o quieres más información sobre uno de mis servicios, no dudes en contactar:</h3>
          <Link to="/contacto"> Contacta conmigo</Link>
        </div>

      </section>

    </div>

  )
}
