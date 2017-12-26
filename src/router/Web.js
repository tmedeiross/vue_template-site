import Home from '@/views/Home'
import About from '@/views/About'
import Contact from '@/views/Contact'
import PrivacyPolicy from '@/views/PrivacyPolicy'
import TermsOfService from '@/views/TermsOfService'
import SearchTableExample from '@/views/SearchTableExample'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact'
    }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: {
      title: 'PrivacyPolicy'
    }
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: TermsOfService,
    meta: {
      title: 'TermsOfService'
    }
  },
  {
    path: '/search-table-example',
    name: 'SearchTableExample',
    component: SearchTableExample,
    meta: {
      title: 'Search Table Example'
    }
  }
]
