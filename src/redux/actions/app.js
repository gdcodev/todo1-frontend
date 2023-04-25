import { LOGIN_API_PATH, REGISTER_API_PATH, SET_USER_API_PATH } from '../../service/path';
import {
  LOGIN, LOGOUT, REGISTER, SET_TOKEN, SET_USER
} from './types';
import { api, saveTokenAuthentication, setAuthentication } from '../../service/api';
import { showErrorMessage, showSuccessMessage } from '../../utils/utils';

export const setToken = (tokens) => (dispatch) => dispatch({
  type: SET_TOKEN,
  tokens,
});

export const setUser = () => (dispatch) => dispatch({
  type: SET_USER,
  promise: api.get(SET_USER_API_PATH),
});

export const login = (data, callback) => (dispatch) => dispatch({
  type: LOGIN,
  promise: api.post(LOGIN_API_PATH, data),
  meta: {
    onSuccess: (res) => {
      setAuthentication(res.data.tokens.accessToken);
      saveTokenAuthentication(res.data.tokens, res.data.user.rol);
      dispatch(setToken(res.data.tokens));
      callback();
    },
    onFailure: (res) => {
      showErrorMessage(res.response.data.message, dispatch);
    }
  }
});

export const logout = () => (dispatch) => dispatch({
  type: LOGOUT,
});

export const register = (data, callback) => (dispatch) => dispatch({
  type: REGISTER,
  promise: api.post(REGISTER_API_PATH, data),
  meta: {
    onSuccess: (res) => {
      console.log(res);
      showSuccessMessage(res.data.message, dispatch);
      callback();
    },
    onFailure: (res) => {
      showErrorMessage(res.response.data.message, dispatch);
    }
  }
});
