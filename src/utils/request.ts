import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import store from '@/store';

const axiosInstance = axios.create({
  timeout: 7600,
  baseURL: import.meta.env.BASE_URL
});

interface ErrorType {
    response?: AxiosResponse;
    [name: string]: any;
  }


const errorHandler = (error: ErrorType) => {
    if (error.response) {
      const { data } = error.response;
      console.log(data)
    }
    return Promise.reject(error);
  };

  axiosInstance.interceptors.response.use((response: AxiosResponse<any>) => {
    return response.data;
  }, errorHandler);
  
  export default axiosInstance;  