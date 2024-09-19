import React from 'react';
import { Link } from 'react-router-dom';
import { Curriculum } from './Curriculum';
import { DescargarCvPdf } from './DescargarCvPdf'; // Importa el componente DescargarCvPdf

export const Inicio = () => {
  return (
    <div className='ini'>
      <div className='intro-section'>
        <div className="flex-container">
          <img src={`${process.env.PUBLIC_URL}/images/mifoto.png`} alt="Daniel Urbano Luna" className="profile-photo2" />  
          <div className='text-content'>
            <h2 className='heading'>
              Hola, mi nombre es Daniel Urbano Luna. Soy <strong>desarrollador web</strong> en Barcelona. Ofrezco mis 
              servicios de <strong>programación y desarrollo web</strong> en la provincia de Barcelona, o si está la 
              posibilidad de trabajar remotamente, de cualquier proyecto de desarrollo o programación web.
            </h2>

            <h3>
              Te ayudaré a crear tu sitio o aplicación web de forma responsiva, adaptada a cualquier dispositivo,
              dinámica y optimizada para mejorar la experiencia de los usuarios. <Link to="/contacto"> Contacta conmigo</Link>
            </h3>
          </div>
        </div>
      </div>

      <section className='last-work'>
        <h2>Proyectos</h2>
        <p>Aquí os muestro mis últimos trabajos como desarrollador de aplicaciones web. <Link to="/portafolio"> Mira mis proyectos</Link></p>
        
        <h2>Curriculum</h2>
        <p>
          A lo largo de mi carrera profesional he pasado por diferentes etapas, tanto de formación como de 
          experiencia laboral, la cual recogeré los puntos más importantes en el apartado de mi curriculum 
          y también podrás descargarlo para analizarlo más detenidamente. <Link to="/curriculum"> Ir al apartado de curriculum</Link>
        </p>
        
        {/* componente DescargarCvPdf */}
        <DescargarCvPdf /> 

        {/* Llamar al componente Curriculum para poder descargar pdf, pero oculto para que no salga en inicio */}
        <div style={{ display: 'none' }}>
          <Curriculum />
        </div>
      
      </section>
    </div>
  );
};
