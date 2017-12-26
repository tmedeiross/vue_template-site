import axios from 'axios'
import Auth from '@/shared/Auth'
import Environment from '@/.env'

axios.defaults.baseURL = Environment.APP_URL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.interceptors.response.use(response => response, (error) => {
  if (error.response.status === 401) {
    if (error.response.data.message === 'The token has been blacklisted' || error.response.data.message === 'Token has expired') {
      Auth.logout(false)
    } else if (error.response.data.message === 'Account not confirmed') {
      router.push({
        name: 'Dashboard'
      })
    } else if (error.response.data.message === 'This action is unauthorized.') {
      alert('This action is unauthorized.')
    }
  }

  return Promise.reject(error)
})
