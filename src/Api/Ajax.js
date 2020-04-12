import axios from 'axios';
import URL from '../Config/URL';

//URL.SPRING_BACKEND_API
const ajax = {
  baseURL: 'http://localhost:8080/',
  timeout: 5000,
};

export const NoAuthAjax = axios.create(ajax);