import React from 'react'
import { Link } from 'react-router-dom'
import html2pdf from 'html2pdf.js';
import { Curriculum } from './Curriculum';

export const Inicio = () => {

  const handleDownloadPDF = () => {
    // Selecciona el contenedor del currículum
    const element = document.querySelector('.curriculum-container');

    // Configura las opciones para html2pdf
    const opt = {
      margin: 0.5,
      filename: 'Mi_Curriculum.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Genera y descarga el PDF
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className='ini'>

      <h2 className='heading'>
        Hola, mi nombre es Daniel Urbano Luna. Soy <strong>desarrollador web</strong> en Barcelona. Ofrezco mis 
        servicios de <strong>programación y desarrollo web</strong> en la provincia de Barcelona, o si está la 
        posibilidad de trabajar remotamente, de cualquier proyecto de desarrollo o programación web.
      </h2>

      <h3>
        Te ayudaré a crear tu sitio o aplicación web de forma responsiva, adaptada a cualquier dispositivo,
        dinámica y optimizada para mejorar la experiencia de los usuarios. <Link to="/contacto"> Contacta conmigo</Link>
      </h3>

      <section className='last-work'>
        <h2>Proyectos</h2>
        <p>Aquí os muestro mis últimos trabajos como desarrollador de aplicaciones web. <Link to="/portafolio"> Mira mis proyectos</Link></p>
        
        <h2>Curriculum</h2>
        <p>
          A lo largo de mi carrera profesional he pasado por diferentes etapas, tanto de formación como de 
          experiencia laboral, la cual recogeré los puntos más importantes en el apartado de mi curriculum 
          y también podrás descargarlo para analizarlo más detenidamente. <Link to="/curriculum"> Ir al apartado de curriculum</Link>
        </p>
          
        <div className='descini'>
          
          <p>Para descargar mi curriculum: 
              
              {/* Botón de descarga del curriculum */}
            <button className="boton-descarga" onClick={handleDownloadPDF}>
              Descargar Curriculum
            </button>
          </p>
        
        </div>  

            {/* Llmar componente Curriculum para poder descargar pdf, pero oculto para que no salga en inicio */}
        <div style={{ display: 'none' }}>
          <Curriculum />
        </div>
      
      </section>

    </div>
  )
}
