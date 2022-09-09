import axios from 'axios';
const BASE_URL = 'https://abstract-picnic-materials-lib.herokuapp.com/api';

export default axios.create({
    baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json'},
    withCredentials: true
}) 