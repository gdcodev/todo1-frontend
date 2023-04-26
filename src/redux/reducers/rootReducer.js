import { combineReducers } from 'redux';
import { LOGOUT } from '../actions/types';
import { removeTokens } from '../../service/api';
import appReducer from './appReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

const applicationReducer = combineReducers({
  appReducer,
  productReducer,
  cartReducer
});
const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
    removeTokens();
  }
  return applicationReducer(state, action);
};
export default rootReducer;
