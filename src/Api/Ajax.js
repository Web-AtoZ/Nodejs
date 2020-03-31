import axios from 'axios';
import {URL} from 'Config';

const ajax = {
  baseURL: URL.SPRING_BACKEND_API,
  timeout: 5000,
};

export const NoAuthAjax = axios.create(ajax);