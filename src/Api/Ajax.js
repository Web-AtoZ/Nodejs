import axios from 'axios';
import { SPRING_BACKEND_API } from 'Config/URL';

const ajax = {
	baseURL: SPRING_BACKEND_API,
	timeout: 5000,
};

export const NoAuthAjax = axios.create(ajax);
