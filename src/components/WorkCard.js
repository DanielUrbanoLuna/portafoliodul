import React from 'react';

// Componente puramente presentacional: no tiene estado ni efectos.
// Extraído de Portafolio.js para que cada tarjeta sea testeable
// en aislamiento y para que Portafolio se ocupe solo del grid, no del markup de cada ítem.
export const WorkCard = ({ trabajo }) => (
  <article className='work-item'>
    <div className='masc'>
      <img
        src={`${process.env.PUBLIC_URL}/images/${trabajo.id}.png`}
        alt={trabajo.nombre}
      />
    </div>
    <h2>
      {/* <a> en lugar de Link porque la URL destino es externa al router */}
      <a href={trabajo.url} target="_blank" rel="noopener noreferrer">
        {trabajo.nombre}
      </a>
    </h2>
    <h3>{trabajo.tecnologias}</h3>
  </article>
);
