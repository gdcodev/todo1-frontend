import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutContainer from '../componets/layout';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import Products from '../pages/products';
import DetailProduct from '../pages/detail-product';
import Checkout from '../pages/checkout';
import {
  ROOT_PAGE_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  PRODUCTS_PATH,
  CHECKOUT_PATH,
  DETAIL_PRODUCT_PATH,
} from './path';

const routes = [
  {
    path: LOGIN_PATH,
    component: <Login />
  },
  {
    path: ROOT_PAGE_PATH,
    component: <Home />
  },
  {
    path: REGISTER_PATH,
    component: <Register />
  },
  {
    path: PRODUCTS_PATH,
    component: <Products />
  },
  {
    path: `${DETAIL_PRODUCT_PATH}/:id`,
    component: <DetailProduct />
  },
  {
    path: CHECKOUT_PATH,
    component: <Checkout />
  },
];
const getRoutes = () => routes.map(({ path, component }) => (
  <Route path={path} element={component} key={path} />
));
const RouteApp = () => (
  <BrowserRouter>
    <LayoutContainer>
      <Routes>
        {getRoutes()}
      </Routes>
    </LayoutContainer>
  </BrowserRouter>
);

export default RouteApp;
