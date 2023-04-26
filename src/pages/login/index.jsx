import React from 'react';
import { Form } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/app';
import FormLogin from './form';
import { ROOT_PAGE_PATH } from '../../routes/path';
import Card from '../../components/card';
import Container from '../../components/container';

const LoginForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleSuccess = () => {
    navigate(ROOT_PAGE_PATH);
  };
  const handleSubmmit = (values) => {
    dispatch(login(values, handleSuccess));
  };

  return (
    <Container>
      <Card title="Iniciar Sesión">
        <FormLogin form={form} onSubmmit={handleSubmmit} />
      </Card>
    </Container>
  );
};

export default LoginForm;
