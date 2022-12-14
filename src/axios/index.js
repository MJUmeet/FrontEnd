import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar', 'Access-Control-Allow-Origin': '*'},
  'Content-type': 'application/json',
});

export default instance;
