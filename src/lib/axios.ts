import axios from 'axios';
import { env } from './env';

const instance = axios.create({
  // baseURL: env('VITE_API_URL', '/api'),
  baseURL: 'https://dummyjson.com/',
  timeout: 15_000,
  withCredentials: true,
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

let refreshing: Promise<string | null> | null = null;

instance.interceptors.response.use(
  r => r,
  async error => {
    const { response, config } = error || {};
    if (response?.status === 401 && !config.__isRetryRequest) {
      try {
        if (!refreshing) {
          refreshing = (async () => {
            try {
              const res = await axios.post(
                `${instance.defaults.baseURL}/auth/refresh`,
                {},
                { withCredentials: true }
              );
              const newToken = res.data?.accessToken as string | undefined;
              if (newToken) localStorage.setItem('access_token', newToken);
              return newToken ?? null;
            } catch {
              localStorage.removeItem('access_token');
              return null;
            } finally {
              const t = refreshing;
              refreshing = null;
              await t; // drain
            }
          })();
        }
        const token = await refreshing;
        if (!token) return Promise.reject(error);
        config.__isRetryRequest = true;
        config.headers.Authorization = `Bearer ${token}`;
        return instance(config);
      } catch (e) {
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
