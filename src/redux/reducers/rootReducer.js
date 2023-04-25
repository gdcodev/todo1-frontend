import { combineReducers } from 'redux';
import { LOGOUT } from '../actions/types';
import { removeTokens } from '../../service/api';
import appReducer from './appReducer';

const MainReducer = combineReducers({
  appReducer,
});
const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    removeTokens();
  }
  return MainReducer(state, action);
};
export default rootReducer;
