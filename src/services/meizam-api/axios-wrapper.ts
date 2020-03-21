import axios, { AxiosRequestConfig } from 'axios';
import { store } from '../../store'
import { notLoggedInException } from '../../store/user/actions';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_MEIZAM_API_BASE_HOST
};
if (config.baseURL && config.baseURL.indexOf('localhost') >= 0) {
  console.log('running on localhost')
} else {
  config.withCredentials = true;
}
const axiosInstance = axios.create(config);

axiosInstance.interceptors.response.use((res: any) => {
  if (res?.data?.error === 'must be logged in') {
    store.dispatch(notLoggedInException());
  }
  return res;
});


export default axiosInstance;
