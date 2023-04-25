import {
  LOGIN,
  LOGOUT,
  SET_FLASH_MESSAGE,
  SET_TOKEN,
  SET_USER,
} from '../actions/types';
import { handleAction } from '../../utils/handleAction';

const initialState = {
  isLoading: true,
  isLgged: false,
  token: null,
  flashMessageContent: {
    text: '',
    type: '',
    isVisible: false
  },
  user: {
    nombre: '',
    rol: ''
  }
};
const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        isLoading: false,
        isLgged: true,
        token: action.tokens
      };
    case SET_USER:
      return handleAction(state, action, {
        failure: (prevState) => ({ ...prevState, error: payload }),
        success: (prevState) => ({
          ...prevState,
          user: payload.data
        }),
      });
    case SET_FLASH_MESSAGE:
      return {
        ...state,
        flashMessageContent: {
          ...state.flashMessageContent,
          ...action.flashMessageContent
        }
      };
    case LOGIN:
      return handleAction(state, action, {
        failure: (prevState) => ({ ...prevState, error: payload }),
        success: (prevState) => ({
          ...prevState,
          isLgged: true,
          token: payload.data.tokens,
          user: payload.data.user
        }),
      });
    case LOGOUT:
      return {
        ...initialState,
        isLoading: false,
        isLgged: false
      };
    default:
      return state;
  }
};
export default appReducer;
