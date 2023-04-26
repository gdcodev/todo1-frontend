export const getValidationRules = (key) => {
  if (key === 'email') {
    return [
      { required: true, message: 'Por favor ingresa tu correo electronico', },
      { type: 'email', message: 'Por favor ingresa un correo válido', },
    ];
  }
  if (key === 'name') {
    return [
      { min: 3, message: 'La longitud del nombre tiene que ser mayor a 3', },
      { pattern: /(^[^\d]*$)/, message: 'El nombre no debe tener números', },
      { required: true, message: 'Por favor ingresa el nombre', },
    ];
  }
  if (key === 'lastName') {
    return [
      { min: 3, message: 'La longitud del apellido tiene que ser mayor a 3', },
      { pattern: /^(^[^\d]*$)/, message: 'El apellido no debe tener números', },
      { required: true, message: 'Por favor ingresa el apellido', },
    ];
  }
  if (key === 'username') {
    return [
      { min: 3, message: 'La longitud del nombre de usuario tiene que ser mayor a 3', },
      { required: true, message: 'Por favor ingresa el nombre de usuario', },
    ];
  }
  if (key === 'password') {
    return [
      { required: true, message: 'Por favor ingresa tu contraseña', },
      { min: 8, max: 16, message: 'La longitud de la contraseña debe ser entre 8 y 16 caracteres', },
      { pattern: /^(?=.*[A-Z])/, message: 'La contraseña debe contener al menos una letra mayúscula', },
      { pattern: /^(?=.*[a-z])/, message: 'La contraseña debe tener al menos una letra minúscula', },
      { pattern: /^(?=.*\d)/, message: 'La contraseña debe tener al menos un número', },
    ];
  }

  if (key === 'user-password') {
    return [
      { required: true, message: 'Por favor ingresa tu contraseña', },
      { min: 8, max: 16, message: 'La longitud de la contraseña debe ser entre 8 y 16 caracteres', },
      { pattern: /^(?=.*[A-Z])/, message: 'La contraseña debe contener al menos una letra mayúscula', },
      { pattern: /^(?=.*[a-z])/, message: 'La contraseña debe tener al menos una letra minúscula', },
      { pattern: /^(?=.*\d)/, message: 'La contraseña debe tener al menos un número', },
    ];
  }
  return [
    { required: true, message: `Please enter ${key}`, },
  ];
};
