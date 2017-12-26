import Vue from 'vue'

Vue.filter('str_limit', (value, max, str) => {
  max = max || 100
  str = str || '...'

  if (value.length < max) {
    return value
  }

  return value.slice(0, max) + str
})
