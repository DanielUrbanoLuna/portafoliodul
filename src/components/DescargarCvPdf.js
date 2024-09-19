import React from 'react';
import html2pdf from 'html2pdf.js';

export const DescargarCvPdf = () => {

  const handleDownloadPDF = () => {
    // Selecciona el contenedor del currículum
    const element = document.querySelector('.curriculum-container');

    // Aplica temporalmente un estilo específico para ajustar el tamaño al formato A4
    element.style.width = '4.27in'; // Forzamos el ancho a A4 en pulgadas
    element.style.height = 'auto';  // Permitimos que la altura sea dinámica
    element.style.padding = '1rem'; // Opcional: Agregamos un padding para márgenes

    // Configura las opciones para html2pdf
    const opt = {
      margin: 0.5,
      filename: 'Mi_Curriculum.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 }, // Escala 1 para evitar distorsión
      jsPDF: { 
        unit: 'in', 
        format: 'a4', // Formato A4 estándar
        orientation: 'portrait' // Vertical
      }
    };

    // Genera y descarga el PDF
    html2pdf().from(element).set(opt).save().then(() => {
      // Restaurar el estilo original después de la descarga
      element.style.width = '';
      element.style.height = '';
      element.style.padding = '';
    });
  };

  return (
    <div>
      <button onClick={handleDownloadPDF}>Descargar CV en PDF</button>
    </div>
  );
};
