import React from 'react';
import { Link } from 'react-router-dom';
import {
  PRODUCTS_PATH,
  ROOT_PAGE_PATH,
} from '../routes/path';

export const menu = [
  {
    key: ROOT_PAGE_PATH,
    label: <Link to={ROOT_PAGE_PATH} className="link">Home</Link>
  },
  {
    key: PRODUCTS_PATH,
    label: <Link to={PRODUCTS_PATH} className="link">Products</Link>
  },

];
