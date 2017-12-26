<template>
  <div id="dashboard">
    <div class="page-header">
      <h2>Welcome to Dashboard!</h2>
    </div>

    <div v-if="!Auth.user.profile.confirmed && !emailConfirmationTokenSent" class="alert alert-warning">
      You need to confirm you're human. Please either check your email entry box or <a href="javascript:;" @click="sendEmailConfimationToken()">click here</a> to send again.
    </div>
    <div v-if="!Auth.user.profile.confirmed && emailConfirmationTokenSent" class="alert alert-info">
      Please check your email entry to confirm you're human.
    </div>
    <div v-if="!Auth.user.profile.confirmed && emailConfirmationTokenError" class="alert alert-danger">
      An error ocurred when you trying to request. Please reload this page and try again.
    </div>
    <div v-if="emailConfirmed" class="alert alert-success">
      Your e-mail has been confirmed. Thank you for using our application!
    </div>

    <div class="row">
      <div class="col-md-3">
        <div class="list-group">
          <router-link to="/dashboard" active-class="active" class="list-group-item" exact>Dashboard</router-link>
          <router-link to="/dashboard/profile" active-class="active" class="list-group-item">Profile</router-link>
          <router-link to="/dashboard/settings" active-class="active" class="list-group-item">Settings</router-link>
          <a href="javascript:;" @click="Auth.logout()" class="list-group-item">Logout</a>
        </div>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Auth from '@/shared/Auth'
export default {
  name: 'dashboard',
  data () {
    return {
      Auth,
      emailConfirmationTokenSent: false,
      emailConfirmationTokenError: false,
      emailConfirmed: this.$route.params.emailConfirmed || false
    }
  },
  methods: {
    sendEmailConfimationToken () {
      axios.post('/email/confirm/again').then(response => {
        this.emailConfirmationTokenSent = true
        this.emailConfirmationTokenError = false
      }).catch(() => {
        this.emailConfirmationTokenError = true
      })
    }
  }
}
</script>

<style scoped>
</style>
