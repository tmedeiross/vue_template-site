import Settings from '@/views/Dashboard/Settings'
import General from '@/views/Dashboard/Settings/General'
import Language from '@/views/Dashboard/Settings/Language'
import Privacy from '@/views/Dashboard/Settings/Privacy'
import Security from '@/views/Dashboard/Settings/Security'

export default [
  {
    path: 'settings',
    component: Settings,
    children: [
      {
        path: '',
        component: General,
        meta: {
          title: 'Dashboard | General Account Settings'
        }
      },
      {
        path: 'language',
        component: Language,
        meta: {
          title: 'Dashboard | Language Account Settings'
        }
      },
      {
        path: 'privacy',
        component: Privacy,
        meta: {
          title: 'Dashboard | Privacy Account Settings'
        }
      },
      {
        path: 'security',
        component: Security,
        meta: {
          title: 'Dashboard | Security Account Settings'
        }
      }
    ]
  }
]
