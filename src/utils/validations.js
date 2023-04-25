export const getValidationRules = (key) => {
  if (key === 'email') {
    return [
      { required: true, message: 'Please enter your username', },
      { type: 'email', message: 'Please enter a valid email address', },
    ];
  }
  if (key === 'password') {
    return [
      { required: true, message: 'Please enter your password', },
      { min: 8, max: 16, message: 'Password length should be between 8 and 16 characters', },
      { pattern: /^(?=.*[A-Z])/, message: 'Password must contain at least one uppercase letter', },
      { pattern: /^(?=.*[a-z])/, message: 'Password must contain at least one lowercase letter', },
      { pattern: /^(?=.*\d)/, message: 'Password must contain at least one number', },
    ];
  }
  if (key === 'sensor-type') {
    return [
      { required: true, message: 'Please enter the sensor type', },
    ];
  }

  if (key === 'user-password') {
    return [
      { min: 8, max: 16, message: 'Password length should be between 8 and 16 characters', },
      { pattern: /^(?=.*[A-Z])/, message: 'Password must contain at least one uppercase letter', },
      { pattern: /^(?=.*[a-z])/, message: 'Password must contain at least one lowercase letter', },
      { pattern: /^(?=.*\d)/, message: 'Password must contain at least one number', },
    ];
  }
  return [
    { required: true, message: `Please enter ${key}`, },
  ];
};
