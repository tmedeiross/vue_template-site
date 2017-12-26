<template>
  <div id="login">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>Login</h1>
        <div class="form-group" :class="{ 'has-error': errors.email.length }">
          <label class="control-label" for="email">E-Mail Address</label>
          <input type="email" id="email" v-model="form.email" class="form-control">

          <span class="help-block" v-bind:key="error" v-for="error in errors.email">
            <strong>{{ error }}</strong>
          </span>
        </div>
        <div class="form-group" :class="{ 'has-error': errors.password.length }">
          <label class="control-label" for="password">Password</label>
          <input type="password" id="password" v-model="form.password" class="form-control">

          <span class="help-block" v-bind:key="error" v-for="error in errors.password">
            <strong>{{ error }}</strong>
          </span>
        </div>
        <router-link to="/password/reset" class="pull-right">Forgot Your Password?</router-link>
        <button @click="submit()" type="submit" :disabled="submitting" class="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from '@/shared/Auth'
export default {
  name: 'login',
  data () {
    return {
      submitting: false,
      errors: {
        email: [],
        password: []
      },
      form: {
        email: null,
        password: null
      }
    }
  },
  watch: {
    'errors.email' () {
      this.form.password = null
    }
  },
  methods: {
    submit () {
      Auth.login(this, this.form)
    }
  }
}
</script>

<style scoped>
</style>
