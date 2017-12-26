import Authenticate from '@/shared/Middleware/Authenticate'
import Dashboard from '@/views/Dashboard'

import Home from './Home'
import Profile from './Profile'
import Settings from './Settings'

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: Authenticate,
    children: [
      ...Home,
      ...Profile,
      ...Settings
    ]
  }
]
