import axios from 'axios';
import dataFormatter from './data-formatter';

const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.request.use((config) => {
  const accessToken = window.localStorage.getItem('accessToken');
  if (accessToken) config.headers.authorization = `Bearer ${accessToken}`;
  return config;
});

const onFulfilled = (response) => {
  const accessToken = response.headers['x-access-token'];
  const refreshToken = response.headers['x-refresh-token'];

  if (accessToken && refreshToken) {
    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('refreshToken', refreshToken);
  }

  if (response.data) return Promise.resolve(dataFormatter.deserialize(response.data));
  return null;
};

const onRejected = (error) => Promise.reject(error);

instance.interceptors.response.use(onFulfilled, onRejected);

export default instance;
