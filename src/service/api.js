/* eslint-disable no-undef */
import axios from 'axios';

const { VITE_URL_API } = import.meta.env;
export const api = axios.create({
  baseURL: VITE_URL_API,
});

export const setAuthentication = (accessToken) => {
  api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const removeTokens = () => {
  localStorage.removeItem('accessToken');
};

export const saveTokenAuthentication = ({ accessToken }, rol) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('rol', rol);
};
