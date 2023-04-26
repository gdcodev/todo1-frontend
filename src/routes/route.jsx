import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import DetailProduct from '../pages/detail-product';
import Checkout from '../pages/checkout';
import {
  ROOT_PAGE_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  CHECKOUT_PATH,
  DETAIL_PRODUCT_PATH,
  PRODUCTS_PATH,
  PAYMENT_PATH,
} from './path';
import Products from '../pages/products';
import Payment from '../pages/payment';

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
  {
    path: PAYMENT_PATH,
    component: <Payment />
  },
];
const getRoutes = () => routes.map(({ path, component }) => (
  <Route path={path} element={component} key={path} />
));
const RouteApp = () => (
  <BrowserRouter>
    <Routes>
      {getRoutes()}
    </Routes>
  </BrowserRouter>
);

export default RouteApp;
