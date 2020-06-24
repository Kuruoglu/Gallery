import axios from 'axios';
import {apiUrl} from './baseUrl';

export const getAllImagesApi = () => axios.get(apiUrl);
console.log(apiUrl);