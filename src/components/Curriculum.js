import React from 'react';
import html2pdf from 'html2pdf.js';

export const Curriculum = () => {
  const handleDownloadPDF = () => {
    // Selecciona el contenedor del currículum
    const element = document.querySelector('.curriculum-container');
  
    // Configura las opciones para html2pdf
    const opt = {
      margin: 0.5,
      filename: 'Mi_Curriculum.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 }, // Ajustar el escalado si es necesario
      jsPDF: { 
        unit: 'in', 
        format: [19, 13], // Tamaño A4 en pulgadas
        orientation: 'portrait' 
      }
    };
  
    // Genera y descarga el PDF
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className='curriculum-container'>
      <div className='titcont'>

        <h1 className='heading'>Curriculum Vitae</h1>
        {/* Botón de descarga del curriculum */}
        <button className="boton-descargax" onClick={handleDownloadPDF}>
              Descargar Curriculum
        </button>

      </div>
      

      <div className='grid-container'>
        {/* Columna izquierda */}
        <div className='left-column'>
          {/* Fila 1: Foto */}
          <div className='content-section'>
            <img src={`${process.env.PUBLIC_URL}/images/mifoto.png`} alt="Daniel Urbano Luna" />

          </div>

          {/* Fila 2: Datos de contacto, aptitudes, idiomas, cursos */}
          <div className='content-section'>
            <div className='contact-info'>
              <h3>Datos de Contacto</h3>
              <p>Email: urbanobdn@gmail.com</p>
              <p>Perfil linkedin: <a href="https://www.linkedin.com/in/daniel-urbano-luna-131274304/" target="_blank" rel="noopener noreferrer">Daniel Urbano Luna</a></p>
              <p>Perfil Github: <a href="https://github.com/DanielUrbanoLuna" target="_blank" rel="noopener noreferrer">Daniel Urbano Luna</a></p>
              <p>Ubicación: Barcelona, España</p>
            </div>

            <div className='skills'>
              <h3>Aptitudes</h3>
              <ul>
                <li>Proactivo</li>
                <li>Depuración de código</li>
                <li>Código limpio y bien comentado</li>
                <li>Código escalable e interactivo</li>
                <li>Control de versiones GIT</li>
                <li>GITHUB</li>
                <li>Pruebas unitarias</li>
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
                <li>React y Node.js - ReactJS, Hooks, MERN, NodeJS, JWT+</li>
                <li>Programación orientada a objetos</li>
              </ul>
            </div>
          </div>

          {/* Botón de descarga del curriculum */}
          <button className="boton-descarga" onClick={handleDownloadPDF}>
            Descargar Curriculum
          </button>
        </div>

        {/* Columna derecha */}
        <div className='right-column'>
          {/* Fila 1: Nombre y pequeño resumen */}
          <div className='profile-section'>
            <h2 className='name-heading'>Daniel Urbano Luna</h2>
            <p className='profile-summary'>
              Soy <strong>desarrollador de aplicaciones web</strong> con una gran motivación por seguir aprendiendo y mejorando continuamente.
              Me considero una persona proactiva y comprometida con la mejora constante y el perfeccionamiento de mis habilidades. 
              Actualmente, estoy especializándome en el desarrollo de aplicaciones interactivas utilizando React y Node.js.
            </p>
          </div>

          {/* Fila 2: Experiencia laboral, conocimientos, formación */}
          <div className='details-section'>
            <div className='experience-section'>
              <h2>Experiencia laboral</h2>
              <ul>
                <li>
                  <strong>Técnico de soporte informático y programación:</strong> Actualmente realizando servicio para el departamento de residuos, Departamento de Interior y Departamento de Acción climática y agricultura de la Generalitat de Catalunya.
                </li><br />

                <li>
                  <strong>Portafolio DUL de Daniel Urbano Luna: </strong> Este trabajo que estás viendo ahora, es un
                  portafolio creado desde 0 para presentarme ante los reclutadores, y sobretodo para seguir aprendiendo 
                  y creciendo con <strong>React, Hooks y rutas, useNavigate, etc.</strong> <br />
                  -Tecnologías para Frontend: <strong>HTML, CSS, JavaScript con REACT</strong><br />
                  -Herramientas desarrollo: <strong>Visual Studio Code.</strong><br />
                </li><br />

                <li>
                  <strong>Mis películas y mis series:</strong> Aplicación con <strong>React</strong> para guardar en Storage tus series y 
                  películas favoritas y poder buscarlas después filtrándolas para que solo salga lo buscado.<br />
                  La finalidad es practicar y aprender creando y utilizando <strong>componentes y los diferentes Hooks.</strong><br />
                  -Tecnologías para Frontend: <strong>HTML, CSS, JavaScript con REACT</strong><br />
                  Si quieres la aplicación, <a href="https://danielurbanoluna.github.io/06_proyecto_pelis/build/" target="_blank" rel="noopener noreferrer">clica aquí</a>
                </li><br />

                <li>
                  <strong>Juego de piedra papel tijera: </strong> Una aplicación del típico juego de piedra papel tijeras.<br />
                  -Tecnologías para Frontend: <strong>HTML, CSS, JavaScript con REACT</strong><br />
                  Si quieres probarla, <a href="https://danielurbanoluna.github.io/piedrapapeltijera/build/" target="_blank" rel="noopener noreferrer">clica aquí</a><br />
                </li><br />

                <li>
                  <strong>LaSevaSalut:</strong> Aplicación web de registro de usuarios donde éstos pueden registrar a sus mascotas para poder controlar su salud. <br />
                  -Backend: <strong>PHP</strong><br />
                  -Frontend: <strong>HTML, CSS, JavaScript</strong><br />
                  -Base de Datos: <strong>MySQL</strong><br />
                </li>
              </ul>
            </div>

            <div className='cv1'>
              <h2>Conocimientos</h2>
              <img src={`${process.env.PUBLIC_URL}/images/conocimientos.png`} alt="Daniel Urbano Luna" />
            </div> 

            <div className='education-section'>
              <h2>Formación Académica</h2>
              <ul>
                <li><strong>FP Superior en Desarrollo de Aplicaciones Web</strong></li>
                <li><strong>Formación de React: ReactJS, Hooks, MERN, NodeJS, JWT+</strong></li>
                <li>Prueba acceso Universidad mayores de 25 años</li>
                <li>Educación Secundaria Obligatoria ESO</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};