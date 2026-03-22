import React from 'react';
import { DescargarCvPdf } from './DescargarCvPdf';
import { CurriculumSidebar } from './curriculum/CurriculumSidebar';
import { CurriculumMain } from './curriculum/CurriculumMain';

// Curriculum actúa como orquestador del layout de dos columnas.
// El contenido de cada columna vive en CurriculumSidebar y CurriculumMain
// para que este componente no crezca con cada cambio de datos del CV.
export const Curriculum = () => (
  <div className='curriculum-container'>

    <div className='titcont'>
      <h1 className='heading'>Curriculum Vitae</h1>
      {/* CTA de descarga en la parte superior para usuarios que
          llegan directamente a /curriculum sin hacer scroll */}
      <DescargarCvPdf />
    </div>

    <div className='grid-container'>
      <CurriculumSidebar />
      <CurriculumMain />
    </div>

  </div>
);
