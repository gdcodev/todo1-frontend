/* eslint-disable import/no-extraneous-dependencies */
import { Form } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { getValidationRules } from '../../../utils/validations';
import Button from '../../../components/button';
import Input from '../../../components/input';

const { Item } = Form;

const FormRegister = ({ form, onSubmmit }) => (
  <Form form={form} layout="vertical" onFinish={onSubmmit}>
    <Item
      name="name"
      rules={getValidationRules('name')}
      label="Nombre"
    >
      <Input prefix={<UserOutlined />} />
    </Item>
    <Item
      name="lastName"
      rules={getValidationRules('lastName')}
      label="Apellido"
    >
      <Input prefix={<UserOutlined />} />
    </Item>
    <Item
      name="username"
      rules={getValidationRules('username')}
      label="Nombre de usuario"
    >
      <Input prefix={<UserOutlined />} />
    </Item>
    <Item
      name="email"
      rules={getValidationRules('email')}
      label="Correo electrónico"
    >
      <Input prefix={<UserOutlined />} />
    </Item>
    <Item
      name="password"
      rules={getValidationRules('password')}
      label="Contraseña"
    >
      <Input type="password" prefix={<LockOutlined />} />
    </Item>
    <Item>
      <Button type="primary" htmlType="submit" text="Registrarse" />
    </Item>
  </Form>
);

FormRegister.propTypes = {
  form: PropTypes.shape().isRequired,
  onSubmmit: PropTypes.func,
};
FormRegister.defaultProps = {
  onSubmmit: () => {}
};
export default FormRegister;
