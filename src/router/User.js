import Guest from '@/shared/Middleware/Guest'
import Login from '@/views/Login'
import ForgotPassword from '@/views/ForgotPassword'
import ResetPassword from '@/views/ResetPassword'
import Register from '@/views/Register'
import EmailConfirmation from '@/views/EmailConfirmation'

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: Guest,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/password/reset',
    name: 'Forgot Password',
    component: ForgotPassword,
    beforeEnter: Guest,
    meta: {
      title: 'Forgot Your Password?'
    }
  },
  {
    path: '/password/reset/:token',
    name: 'Reset Password',
    component: ResetPassword,
    beforeEnter: Guest,
    meta: {
      title: 'Reset Password'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: Guest,
    meta: {
      title: 'Register'
    }
  },
  {
    path: '/email/confirm/:token',
    name: 'E-Mail Confirmation',
    component: EmailConfirmation,
    meta: {
      title: 'E-Mail Confirmation'
    }
  }
]
