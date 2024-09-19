import React from 'react';
import html2pdf from 'html2pdf.js';

export const DescargarCvPdf = () => {

  const handleDownloadPDF = () => {
    // Selecciona el contenedor del currículum
    const element = document.querySelector('.curriculum-container');
  
    // Configura las opciones para html2pdf
    const opt = {
      margin: 0.5,
      filename: 'Mi_Curriculum.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 }, // Escala para mejorar la resolución
      jsPDF: { 
        unit: 'in', 
        format: [13, 13], // Tamaño A4 en pulgadas
        orientation: 'portrait' // Vertical
      }
    };
  
    // Genera y descarga el PDF
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div>
      <button onClick={handleDownloadPDF}>Descargar CV en PDF</button>
    </div>
  );
};
