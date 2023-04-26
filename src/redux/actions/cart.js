import { api } from '../../service/api';
import { CREATE_SALE_PATH, FETCH_CARDS_PATH } from '../../service/path';
import { ADD_ITEM_TO_CART, CREATE_SALE, REMOVE_ITEM_TO_CART, UPDATE_ITEM_AMOUNT_TO_CART, CLEAN_CART, FETCH_CARDS } from './types';

export const addItemToCart = (item) => (dispatch) => dispatch({
  type: ADD_ITEM_TO_CART,
  payload: item
});

export const removeItemFromCart = (id) => (dispatch) => dispatch({
  type: REMOVE_ITEM_TO_CART,
  payload: id
});

export const updateItemToCart = (item) => (dispatch) => dispatch({
  type: UPDATE_ITEM_AMOUNT_TO_CART,
  payload: item
});

export const cleanCart = () => (dispatch) => dispatch({
  type: CLEAN_CART
});

export const fetchCards = (userId) => (dispatch) => dispatch({
  type: FETCH_CARDS,
  promise: api.get(`${FETCH_CARDS_PATH}/${userId}`, { params: { userId } })
});

export const createSale = (data, callback) => (dispatch) => dispatch({
  type: CREATE_SALE,
  promise: api.post(CREATE_SALE_PATH, data),
  meta: {
    onSuccess: () => callback()
  }
});
