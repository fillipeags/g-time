import axios from 'axios';

const api = axios.create({
  baseURL: 'https://61b4d2980e84b7001733199a.mockapi.io/api/v1/',
});

export default api;
