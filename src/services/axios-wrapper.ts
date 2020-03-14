import axios from 'axios';
import { store } from '../store'
import { notLoggedInException } from '../store/user/actions';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use((res: any) => {
  if(res?.error?.message === 'must be logged in') {
    store.dispatch(notLoggedInException());
  }
  return res;
});


export default axiosInstance;
