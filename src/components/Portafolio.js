import React from 'react';
import { trabajos } from './datos/trabajos';
import { WorkCard } from './WorkCard';

// Portafolio gestiona únicamente la disposición del grid.
// WorkCard encapsula el markup y las responsabilidades visuales de cada ítem,
// siguiendo el principio de responsabilidad única.
export const Portafolio = () => (
  <div className='pages'>
    <h1 className='heading'>Portafolio</h1>

    <section className='works'>
      {trabajos.map(trabajo => (
        <WorkCard key={trabajo.id} trabajo={trabajo} />
      ))}
    </section>
  </div>
);
