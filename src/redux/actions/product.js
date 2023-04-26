import { api } from '../../service/api';
import { FETCH_PRODUCTS_PATH } from '../../service/path';
import { FETCH_PRODUCTS, FETCH_PRODUCT_BY_ID } from './types';

export const getProducts = () => (dispatch) => dispatch({
  type: FETCH_PRODUCTS,
  promise: api.get(FETCH_PRODUCTS_PATH),
});

export const getProductById = (id) => (dispatch) => dispatch({
  type: FETCH_PRODUCT_BY_ID,
  promise: api.get(`${FETCH_PRODUCTS_PATH}/${id}`),
});
