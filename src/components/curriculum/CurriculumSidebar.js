import React from 'react';
import { DescargarCvPdf } from '../DescargarCvPdf';

// Columna izquierda del CV aislada en su propio componente
// para que Curriculum.js actúe únicamente como orquestador del layout,
// sin mezclar la estructura de la grid con el contenido de cada sección.
export const CurriculumSidebar = () => (
  <div className='left-column'>

    {/* La foto ocupa su propia sección para que el CSS pueda
        controlar su altura de forma independiente al texto de abajo */}
    <div className='content-section'>
      <img
        src={`${process.env.PUBLIC_URL}/images/mifoto.png`}
        alt="Daniel Urbano Luna"
      />
    </div>

    <div className='content-section'>
      <div className='contact-info'>
        <h3>Datos de Contacto</h3>
        <p>Email: urbanobdn@gmail.com</p>
        <p>
          Perfil linkedin:{' '}
          <a
            href="https://www.linkedin.com/in/daniel-urbano-luna-131274304/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel Urbano Luna
          </a>
        </p>
        <p>
          Perfil Github:{' '}
          <a
            href="https://github.com/DanielUrbanoLuna"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel Urbano Luna
          </a>
        </p>
        <p>Ubicación: Barcelona, España</p>
      </div>

      <div className='skills'>
        <h3>Aptitudes</h3>
        <ul>
          <li>Proactivo</li>
          <li>Depuración de código</li>
          <li>Código limpio y bien comentado</li>
          <li>Código escalable e interactivo</li>
          <li><strong>JavaScript, Java, React HTML CSS, PHP</strong></li>
          <li>Control de versiones <strong>GIT</strong></li>
          <li><strong>GITHUB</strong></li>
          <li><strong>Pruebas unitarias y de integración</strong></li>
          <li>Despliegue de aplicaciones</li>
          <li>Trabajo en equipo</li>
          <li>Resolución de problemas</li>
        </ul>
      </div>

      <div className='languages'>
        <h3>Idiomas</h3>
        <ul>
          <li>Español: Nativo</li>
          <li>Catalán: Experto</li>
          <li>Inglés: Intermedio</li>
        </ul>
      </div>

      <div className='courses'>
        <h3>Cursos de Formación</h3>
        <ul>
          <li>JavaScript, Java, React y Node.js - ReactJS, Hooks, MERN, NodeJS, JWT+</li>
          <li>Programación orientada a objetos</li>
        </ul>
      </div>
    </div>

    {/* Segundo punto de descarga en el sidebar: orientado a reclutadores
        que hayan hecho scroll y necesiten el CTA sin volver arriba */}
    <div className='boton2'>
      <DescargarCvPdf />
    </div>

  </div>
);
