<template>
  <div id="email-confirmation">
    <div class="alert alert-default" v-if="!error">
      Validating the token...
    </div>   
    <div class="alert alert-danger" v-if="error">
      This e-mail confirmation token has been expired or it is invalid.
    </div>
  </div>
</template>

<script>
import Auth from '@/shared/Auth'
import axios from 'axios'
export default {
  name: 'email-confirmation',
  data () {
    return {
      token: this.$route.params.token,
      error: false
    }
  },
  created () {
    axios.post('/email/confirm', {token: this.token}).then(response => {
      Auth.authenticate(response.data.token, response.data.user, true)
      this.redirectToDashboard()
    })
    .catch(() => {
      this.error = true
      this.redirectToHome()
    })
  },
  methods: {
    redirectToDashboard () {
      this.$router.push({
        name: 'Dashboard',
        params: {
          emailConfirmed: true
        }
      })
    },
    redirectToHome () {
      setTimeout(() => {
        this.$router.push({
          name: 'Home'
        })
      }, 1500)
    }
  }
}
</script>

<style scoped>
</style>
