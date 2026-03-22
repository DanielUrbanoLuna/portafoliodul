import React from 'react';

// Columna derecha del CV: agrupa perfil y detalles en un único componente
// porque ambas secciones pertenecen conceptualmente al mismo eje narrativo
// (quién soy → qué he hecho), aunque tengan estilos de fondo distintos.
export const CurriculumMain = () => (
  <div className='right-column'>

    {/* Sección de presentación con fondo oscuro-azulado:
        diseñada para dar impacto visual inmediato al abrir el CV */}
    <div className='profile-section'>
      <h2 className='name-heading'>Daniel Urbano Luna</h2>
      <p className='profile-summary'>
        Soy <strong>desarrollador de aplicaciones web</strong> con una gran motivación
        por seguir aprendiendo y mejorando continuamente. Me considero una persona
        proactiva y comprometida con la mejora constante y el perfeccionamiento de
        mis habilidades. Creando aplicaciones, me gusta ir haciendo pruebas unitarias
        de los métodos y funcionalidades y de integración entre ellos para detectar
        a tiempo los errores surgidos.
      </p>
    </div>

    {/* Sección de detalle con fondo claro para maximizar la legibilidad
        del contenido más denso: experiencia, conocimientos y formación */}
    <div className='details-section'>

      <div className='experience-section'>
        <h2>Experiencia laboral</h2>
        <ul>
          <li>
            <strong>Técnico de soporte informático y programación:</strong> Actualmente
            realizando servicio para el departamento de residuos, Departamento de Interior
            y Departamento de Acción climática y agricultura de la Generalitat de Catalunya.
          </li><br />

          <li>
            <strong>Portafolio DUL de Daniel Urbano Luna: </strong> Este trabajo que estás
            viendo ahora, es un portafolio creado desde 0 para presentarme ante los
            reclutadores, y sobretodo para seguir aprendiendo y creciendo con{' '}
            <strong>React, Hooks y rutas, useNavigate, etc.</strong><br />
            -Tecnologías para Frontend: <strong>HTML, CSS, JavaScript con REACT</strong><br />
            -Herramientas desarrollo: <strong>Visual Studio Code.</strong>
          </li><br />

          <li>
            <strong>Mis películas y mis series:</strong> Aplicación con <strong>React</strong>{' '}
            para guardar en Storage tus series y películas favoritas y poder buscarlas
            después filtrándolas para que solo salga lo buscado.<br />
            La finalidad es practicar y aprender creando y utilizando{' '}
            <strong>componentes y los diferentes Hooks.</strong><br />
            -Tecnologías para Frontend: <strong>HTML, CSS, JavaScript con REACT</strong><br />
            Si quieres la aplicación,{' '}
            <a
              href="https://danielurbanoluna.github.io/06_proyecto_pelis/build/"
              target="_blank"
              rel="noopener noreferrer"
            >
              clica aquí
            </a>
          </li><br />

          <li>
            <strong>Juego de piedra papel tijera: </strong> Una aplicación del típico
            juego de piedra papel tijeras.<br />
            -Tecnologías para Frontend: <strong>HTML, CSS, JavaScript con REACT</strong><br />
            Si quieres probarla,{' '}
            <a
              href="https://danielurbanoluna.github.io/piedrapapeltijera/build/"
              target="_blank"
              rel="noopener noreferrer"
            >
              clica aquí
            </a>
          </li><br />

          <li>
            <strong>LaSevaSalut:</strong> Aplicación web de registro de usuarios donde
            éstos pueden registrar a sus mascotas para poder controlar su salud.<br />
            -Backend: <strong>PHP</strong><br />
            -Frontend: <strong>HTML, CSS, JavaScript</strong><br />
            -Base de Datos: <strong>MySQL</strong>
          </li>
        </ul>
      </div>

      <div className='cv1'>
        <h2>Conocimientos</h2>
        <img
          src={`${process.env.PUBLIC_URL}/images/conocimientos.png`}
          alt="Diagrama de conocimientos técnicos"
        />
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
);
