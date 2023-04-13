import axios from 'axios'
import { BASE_API_URL } from '../utils'

const baseURL = BASE_API_URL

const fetchAPI = axios.create({
  baseURL
})

export default fetchAPI
