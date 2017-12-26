import NotFound from '@/views/NotFound'

export default [
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '404 Not Found'
    }
  }
]
