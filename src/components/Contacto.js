import React from 'react';
import { useContactForm } from '../hooks/useContactForm';

// Componente de UI puro: no contiene lógica de estado ni de envío.
// Toda la lógica del formulario vive en useContactForm para poder
// cambiar el mecanismo de envío (mailto → fetch API) sin tocar el JSX.
export const Contacto = () => {
  const { formData, handleInputChange, handleSubmit } = useContactForm();

  return (
    <div className='pages'>
      <h1 className='heading'>Página de contacto</h1>

      <form className='contact' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Nombre'
          name='nombre'
          value={formData.nombre}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='Apellidos'
          name='apellidos'
          value={formData.apellidos}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='Teléfono'
          name='telefono'
          value={formData.telefono}
          onChange={handleInputChange}
        />
        <textarea
          placeholder='Motivo de contacto'
          name='motivo'
          value={formData.motivo}
          onChange={handleInputChange}
        />
        <input type='submit' value='Enviar' />
      </form>
    </div>
  );
};
