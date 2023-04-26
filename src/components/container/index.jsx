/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Popconfirm, Badge
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Button from '../button';
import { logout } from '../../redux/actions/app';
import { LOGIN_PATH, ROOT_PAGE_PATH, PRODUCTS_PATH } from '../../routes/path';

const { Header, Content } = Layout;
const Container = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem('accessToken');
  const { cart } = useSelector((state) => state.cartReducer);
  const sizePage = window.screen.width;
  const totalItems = cart.reduce((acc, curr) => curr.amount + acc, 0);

  const handleLogout = () => {
    dispatch(logout());
    navigate(LOGIN_PATH);
  };

  const handleClickCart = () => navigate(CHECKOUT_PATH);
  const handleClickProducts = () => navigate(PRODUCTS_PATH);

  return (
    <Layout>
      <Header style={{
        position: 'sticky', top: 0, zIndex: 1, width: '100%', display: 'flex', justifyContent: 'space-between'
      }}
      >
        <Link to={ROOT_PAGE_PATH} style={{ color: 'white', fontWeight: 'bold' }}>
          <div
            style={{
              float: 'left',
              width: 120,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '16px 24px 16px 0',
            }}
          >
            Logo
          </div>
        </Link>
        {(token) && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 200
          }}
          >
            <Button text="Productos" onClick={handleClickProducts} ghost />
            <Badge count={totalItems}>
              <Button
                ghost
                icon={<ShoppingCartOutlined />}
                color="transparent"
                onClick={handleClickCart}
              />
            </Badge>
            <Popconfirm
              placement="bottomRight"
              title="¿Desea cerrar la sesion?"
              onConfirm={handleLogout}
              width="10rem"
              okText="Si"
              cancelText="No"
            >
              <Button
                ghost
                icon={<UserOutlined />}
                color="transparent"
              />
            </Popconfirm>
          </div>
        )}
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <div style={{ padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
    </Layout>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
