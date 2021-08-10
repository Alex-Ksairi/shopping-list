import axios from 'axios';

const axiosApiInstance = axios.create();

axiosApiInstance.defaults.baseURL = 'https://shopping-list-backend-side.herokuapp.com';
axiosApiInstance.defaults.headers.post['Content-Type'] = 'application/json';


export default axiosApiInstance;