import axios from "axios";
const BASE_URL = "https://secure-gorge-57927.herokuapp.com/api";
const url = require('url');
const fixieUrl = url.parse(process.env.FIXIE_URL);
const fixieAuth = fixieUrl.auth.split(':');

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":
      "https://intense-island-04875.herokuapp.com/",
  },
  proxy: {
    protocol: 'http',
    host: fixieUrl.hostname,
    port: fixieUrl.port,
    auth: {username: fixieAuth[0], password: fixieAuth[1]}
  }
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":
      "https://intense-island-04875.herokuapp.com/",
  },
  withCredentials: true,
});
