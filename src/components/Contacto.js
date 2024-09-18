import React, { useState } from 'react';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    motivo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:urbanobdn@gmail.com?subject=Contacto de ${formData.nombre} ${formData.apellidos}&body=Nombre: ${formData.nombre}%0D%0AApellidos: ${formData.apellidos}%0D%0AEmail: ${formData.email}%0D%0ATelefono: ${formData.telefono}%0D%0AMotivo: ${formData.motivo}`;
    
    // Abrir el cliente de correo
    window.location.href = mailtoLink;
  };

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
          placeholder='Telefono' 
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
