import React from 'react';
import html2pdf from 'html2pdf.js';

// Configuración fuera del handler para que no se recree en cada click
// y para que sea visible y editable sin necesidad de entrar en el flujo del evento.
const PDF_OPTIONS = {
  margin: [0.5, 0.5, 0.5, 0.5],
  filename: 'Mi_Curriculum.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 1 },
  jsPDF: {
    unit: 'in',
    format: [18, 13],
    orientation: 'portrait',
  },
};

export const DescargarCvPdf = () => {
  const handleDownloadPDF = () => {
    // querySelector en lugar de ref porque el nodo objetivo (.curriculum-container)
    // puede estar montado en otro componente (Inicio renderiza Curriculum oculto).
    // Un ref cruzado entre componentes desacoplados sería más frágil que este selector.
    const element = document.querySelector('.curriculum-container');
    html2pdf().from(element).set(PDF_OPTIONS).save();
  };

  return (
    <div>
      <button onClick={handleDownloadPDF}>Descargar CV en PDF</button>
    </div>
  );
};
