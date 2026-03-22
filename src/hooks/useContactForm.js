import { useState } from 'react';

// Estado inicial fuera del hook para que no se recree en cada render
// y sirva de referencia clara del shape del formulario.
const INITIAL_STATE = {
  nombre: '',
  apellidos: '',
  email: '',
  telefono: '',
  motivo: '',
};

// Hook extraído de Contacto.js para separar la lógica de negocio
// del árbol JSX. Si en el futuro se reemplaza mailto: por una
// llamada a una API REST, solo cambia este hook, no el componente de UI.
export const useContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Functional update con prev para evitar cierre obsoleto del estado
    // en casos donde varios cambios se encolen en el mismo ciclo de render.
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellidos, email, telefono, motivo } = formData;

    // encodeURIComponent garantiza que tildes, saltos de línea y
    // caracteres especiales no rompan el URI en distintos clientes de correo.
    const subject = encodeURIComponent(`Contacto de ${nombre} ${apellidos}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nApellidos: ${apellidos}\nEmail: ${email}\nTeléfono: ${telefono}\nMotivo: ${motivo}`
    );

    window.location.href = `mailto:urbanobdn@gmail.com?subject=${subject}&body=${body}`;
  };

  return { formData, handleInputChange, handleSubmit };
};
