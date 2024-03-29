import axios from 'axios'
const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9000'
    : 'https://secure-gorge-57927.herokuapp.com/api'

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://www.abstractpicnicmaterials.com',
  },
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://www.abstractpicnicmaterials.com',
  },
  withCredentials: true,
})
