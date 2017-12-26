import Auth from '@/shared/Auth'

export default (to, from, next) => {
  if (Auth.guest()) {
    document.title = 'Login'
    next({
      name: 'Login',
      params: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
}
