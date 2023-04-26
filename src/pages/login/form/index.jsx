/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { getValidationRules } from '@/utils/validations';
import Button from '@/components/button';
import Input from '@/components/input';

const { Item } = Form;

const FormLogin = ({ form, onSubmmit }) => (
  <Form form={form} layout="vertical" onFinish={onSubmmit}>
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
      <Button type="primary" htmlType="submit" text="Iniciar Sesión" />
    </Item>
  </Form>
);

FormLogin.propTypes = {
  form: PropTypes.shape().isRequired,
  onSubmmit: PropTypes.func,
};
FormLogin.defaultProps = {
  onSubmmit: () => {}
};
export default FormLogin;
