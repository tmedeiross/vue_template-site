<template>
  <div id="forgot-password">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>Reset Password</h1>
        <div class="alert alert-success" v-if="emailSentMessage">
          {{ emailSentMessage }}
        </div>
        <div class="form-group" :class="{ 'has-error': errors.email.length }">
          <label class="control-label" for="email">E-Mail Address</label>
          <input type="email" id="email" v-model="form.email" class="form-control">

          <span class="help-block" v-bind:key="error" v-for="error in errors.email">
            <strong>{{ error }}</strong>
          </span>          
        </div>
        <button @click="submit()" type="submit" :disabled="submitting" class="btn btn-primary">
          Send Password Reset Link
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from '@/shared/Auth'
export default {
  name: 'forgot-password',
  data () {
    return {
      submitting: false,
      emailSentMessage: null,
      errors: {
        email: []
      },
      form: {
        email: null
      }
    }
  },
  methods: {
    submit () {
      Auth.sendPasswordResetLink(this)
    }
  }
}
</script>

<style scoped>
</style>
