import React from 'react';
import { trabajos } from './datos/trabajos';

export const Portafolio = () => {
  return (
    <div className='pages'>
        <h1 className='heading'>Portafolio</h1>

        <section className='works'>
        {
        trabajos.map(trabajo => {
          return(
            <article key={trabajo.id} className='work-item'>
              <div className='masc'>
              <img src={`${process.env.PUBLIC_URL}/images/${trabajo.id}.png`} alt={trabajo.nombre} />
              </div>
              <h2>
                {/* Uso de <a> para redirigir a una URL externa */}
                <a href={trabajo.url} target="_blank" rel="noopener noreferrer">
                  {trabajo.nombre}
                </a>
              </h2>
              <h3>{trabajo.tecnologias}</h3>
            </article>
          );         
        })
      }
        </section>
    </div>
  );
}
