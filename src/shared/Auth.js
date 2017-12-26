import axios from 'axios'
import router from '@/router'
import Auth from '@/shared/Auth'
import Form from '@/shared/Form'

export default {
  user: {
    authenticated: false,
    profile: null
  },

  check () {
    if (!this.user.authenticated) {
      let token = localStorage.getItem('token')
      let user = localStorage.getItem('user')

      if (token !== null && user !== null) {
        Auth.setUser(token, JSON.parse(user))
      }
    }

    return this.user.authenticated
  },

  guest () {
    return !this.check()
  },

  authenticate (token, user, avoidRedirect) {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))

    this.setUser(token, user)

    if (!avoidRedirect) {
      router.push({
        path: router.history.current.params.redirect || '/dashboard'
      })
    }
  },

  login (context, credentials) {
    Form.submit(context, {
      method: 'post',
      url: '/login',
      data: credentials,
      success: (response) => {
        this.authenticate(response.data.token, response.data.user)
      }
    })
  },

  register (context, data) {
    Form.submit(context, {
      method: 'post',
      url: '/register',
      data: data,
      success: (response) => {
        this.authenticate(response.data.token, response.data.user)
      }
    })
  },

  logout (makeRequest = true) {
    if (makeRequest) {
      axios.post('/logout').then(response => {
        this.doAfterLogout()
      })
    } else {
      this.doAfterLogout()
    }
  },

  doAfterLogout () {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    this.user.authenticated = false
    this.user.profile = null
    this.user.emailConfirmationTokenSent = false

    router.push({
      name: 'Login'
    })
  },

  logOutOfAllSessions () {
    axios.post('/logOutOfAllSessions')
  },

  logOutSession (sessionId) {
    axios.post(`/sessionTokens/${sessionId}/destroy`)
  },

  sendPasswordResetLink (context) {
    Form.submit(context, {
      method: 'post',
      url: '/password/email',
      data: context.form,
      resetAfterSuccess: true,
      success: (response) => {
        context.emailSentMessage = response.data.status
      }
    })
  },

  getSessionTokens (context) {
    axios.get('/sessionTokens').then(response => {
      context.sessionTokens = response.data.sessionTokens
      context.current = response.data.current
    })
  },

  setUser (token, user) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    this.user.authenticated = true
    this.user.profile = user
  }
}
