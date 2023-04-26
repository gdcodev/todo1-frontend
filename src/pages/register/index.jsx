import React from 'react';
import { Form } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/actions/app';
import Card from '../../components/card';
import FormRegister from './form';
import { LOGIN_PATH } from '../../routes/path';
import Container from '../../components/container';

const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleSuccess = () => {
    navigate(LOGIN_PATH);
  };
  const handleSubmmit = (values) => {
    dispatch(register(values, handleSuccess));
  };

  return (
    <Container>
      <Card title="Registrarse">
        <FormRegister form={form} onSubmmit={handleSubmmit} />
      </Card>
    </Container>
  );
};

export default Register;
