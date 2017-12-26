import Auth from '@/shared/Auth'

export default (to, from, next) => {
  if (Auth.check()) {
    document.title = 'Dashboard'
    next({
      name: 'Dashboard'
    })
  } else {
    next()
  }
}
