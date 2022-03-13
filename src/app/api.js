import axios from 'axios'
import { getSession, removeSession } from '../utils/storage'

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 900000,
})

Axios.interceptors.request.use(
  async config => {
    const session = getSession()
    if (session) config.headers.common['Authorization'] = `Bearer ${session?.token}`

    return config
  },
  error => Promise.reject(error)
)

Axios.interceptors.response.use(
  async config => config,
  async error => {
    if (error.response.status === 401) {
      removeSession()
      window.location = '/admin/auth/login'
    }

    if (error.response.status === 403) return Promise.reject(new Error('You are not authorized to perform this action'))

    return Promise.reject(new Error('something went wrong'))
  }
)

export default Axios
