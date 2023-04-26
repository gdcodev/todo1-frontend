import { handleAction } from '../../utils/handleAction';
import { parserProduct } from '../../utils/parsers';
import { FETCH_PRODUCTS } from '../actions/types';

const initialState = {
  isLoading: false,
  products: [],
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return handleAction(state, action, {
        success: (state) => ({
          ...state,
          products: payload.data.map(parserProduct),
        }),
      });
    default:
      return state;
  }
};
export default productReducer;
