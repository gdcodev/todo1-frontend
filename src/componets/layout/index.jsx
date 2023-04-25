/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { menu } from '../../utils/menu-nav';
import Button from '../button';
import { logout } from '../../redux/actions/app';
import { LOGIN_PATH, ROOT_PAGE_PATH } from '../../routes/path';

const { Header, Content } = Layout;
function LayoutContainer({ children }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem('accessToken');
  const rol = localStorage.getItem('rol');
  const { nombre } = useSelector((state) => state.appReducer.user);
  const sizePage = window.screen.width;

  const handeleLogout = () => {
    dispatch(logout());
    navigate(LOGIN_PATH);
  };

  return (
    <Layout>
      <Header style={{
        position: 'sticky', top: 0, zIndex: 1, width: '100%',
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
        {(token && rol) && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Menu
            theme="dark"
            selectedKeys={pathname}
            mode="horizontal"
            items={menu}
          />
          <Popconfirm
            placement="bottomRight"
            title="¿Desea cerrar la sesion?"
            onConfirm={handeleLogout}
            width="10rem"
            okText="Si"
            cancelText="No"
          >
            <Button icon={<UserOutlined />} text={sizePage > 800 && nombre} color="transparent" />
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
}

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContainer;
