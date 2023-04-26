import {
  LOGIN_API_PATH,
  REGISTER_API_PATH,
  FETCH_USER_PATH,
} from '../../service/path';
import {
  LOGIN, LOGOUT, REGISTER, SET_TOKEN, FETCH_USER, SET_USER_ID
} from './types';
import {
  api,
  saveTokenAuthentication,
  setAuthentication,
} from '../../service/api';
import { showErrorMessage, showSuccessMessage } from '../../utils/utils';

export const setToken = (tokens) => (dispatch) => dispatch({
  type: SET_TOKEN,
  tokens,
});

export const fetchUser = () => (dispatch) => dispatch({
  type: FETCH_USER,
  promise: api.get(FETCH_USER_PATH),
});

export const setUserId = (userId) => (dispatch) => dispatch({
  type: SET_USER_ID,
  payload: userId
});

export const login = (data, callback) => (dispatch) => dispatch({
  type: LOGIN,
  promise: api.post(LOGIN_API_PATH, data),
  meta: {
    onSuccess: (res) => {
      setAuthentication(res.data.tokens.accessToken);
      localStorage.setItem('userId', res.data.user._id);
      saveTokenAuthentication(res.data.tokens, res.data.user.rol);
      dispatch(setToken(res.data.tokens));
      callback();
    },
    onFailure: (res) => {
      showErrorMessage(res.response.data.message, dispatch);
    },
  },
});

export const logout = () => (dispatch) => dispatch({
  type: LOGOUT,
});

export const register = (data, callback) => (dispatch) => dispatch({
  type: REGISTER,
  promise: api.post(REGISTER_API_PATH, data),
  meta: {
    onSuccess: () => {
      showSuccessMessage('Usuario registrado correctamente', dispatch);
      callback();
    },
    onFailure: (res) => {
      showErrorMessage(res.response.data.message, dispatch);
    },
  },
});
