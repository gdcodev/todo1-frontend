import {
  ADD_ITEM_TO_CART, CLEAN_CART, REMOVE_ITEM_TO_CART, UPDATE_ITEM_AMOUNT_TO_CART, FETCH_CARDS
} from '../actions/types';
import { parserCard } from "../../utils/parsers";
import { handleAction } from '../../utils/handleAction';

const initialState = {
  isLoading: false,
  cards: [],
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: !state.cart.find((item) => item.id === payload.id)
          ? [
            ...state.cart,
            payload
          ]
          : state.cart
      };

    case REMOVE_ITEM_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload)
      };

    case UPDATE_ITEM_AMOUNT_TO_CART:
      return {
        ...state,
        cart: state.cart.map((item) => (
          item.id === payload.id
            ? {
              ...item,
              amount: payload.amount
            }
            : item
        ))
      };

    case CLEAN_CART:
      return {
        ...state,
        cart: initialState.cart
      };

    case FETCH_CARDS:
      return handleAction(state, action, {
        success: (state) => ({
          ...state,
          cards: action.payload.data.map((item) => parserCard(item))
        })
      });

    default:
      return state;
  }
};
export default cartReducer;
