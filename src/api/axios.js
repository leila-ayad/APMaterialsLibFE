import axios from "axios";

const BASE_URL = "https://secure-gorge-57927.herokuapp.com/api";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":
      "https://intense-island-04875.herokuapp.com/",
  },
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
