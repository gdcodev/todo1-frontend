import {
  LOGIN,
  SET_TOKEN,
  SET_USER_ID
} from '../actions/types';
import { handleAction } from '../../utils/handleAction';

const initialState = {
  isLoading: false,
  isLgged: false,
  token: null,
  userId: null,
  userRole: null,
  userName: null
};
const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        isLoading: false,
        isLgged: true,
        token: action.tokens,
      };

    case SET_USER_ID:
      return {
        ...state,
        userId: payload
      };

    case LOGIN:
      return handleAction(state, action, {
        failure: (prevState) => ({ ...prevState, error: payload }),
        success: (prevState) => ({
          ...prevState,
          isLgged: true,
          token: payload.data.tokens,
          // eslint-disable-next-line no-underscore-dangle
          userId: payload.data.user._id,
          userRole: payload.data.user.role,
          userName: payload.data.user.name
        }),
      });
    // case LOGOUT:
    //   return {
    //     ...initialState, // TODO: refactor logout
    //     isLoading: false,
    //     isLgged: false,
    //   };
    default:
      return state;
  }
};
export default appReducer;
