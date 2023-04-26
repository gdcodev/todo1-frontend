import { Form } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { CalendarOutlined, CreditCardOutlined } from '@ant-design/icons';
import Input from '../../../components/input';
import { getValidationRules } from '../../../utils/validations';

const { Item } = Form;

const FormCardPayment = ({ form, onChange }) => {
  const handleChange = (e) => {
    onChange({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  return (
    <Form layout="vertical">
      <Item
        name="fullName"
        rules={getValidationRules('full name')}
        label="Nombre completo"
        placeholder="Nombre completo"
      >
        <Input name="fullName" onChange={handleChange} value={form.fullName} />
      </Item>
      <Item
        name="numberHash"
        label="Numero de tarjeta"
        rules={[
          { required: true, message: 'Por favor ingresa el numero de tarjeta' },
          { len: 16, message: 'El numero de tarjeta debe tener 16 dígitos' },
        ]}
      >
        <Input
          name="numberHash"
          type="number"
          prefix={<CreditCardOutlined />}
          onChange={handleChange}
          value={form.numberHash}
        />
      </Item>
      <Item
        name="dueDate"
        label="Fecha de expiracion"
        rules={[
          { required: true, message: 'Por favor ingresa la fecha de expiración' },
          { len: 4, message: 'La fecha de expiración debe tener 4 dígitos' },
        ]}
      >
        <Input
          name="dueDate"
          prefix={<CalendarOutlined />}
          onChange={handleChange}
          value={form.dueDate}
        />
      </Item>
      <Item
        name="cvv"
        label="CVV"
        rules={[
          { required: true, message: 'Por favor ingresa el cvv' },
          { len: 3, message: 'El cvv debe tener 3 dígitos' },
        ]}
      >
        <Input
          name="cvv"
          type="number"
          onChange={handleChange}
          value={form.cvv}
          maxLength={3}
        />
      </Item>
    </Form>
  );
};

FormCardPayment.propTypes = {
  form: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormCardPayment;
