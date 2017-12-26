<template>
  <div id="register">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>Register</h1>
        <div class="form-group" :class="{ 'has-error': errors.name.length }">
          <label class="control-label" for="name">Name</label>
          <input type="text" id="name" v-model="form.name" class="form-control">

          <span class="help-block" v-bind:key="error" v-for="error in errors.name">
            <strong>{{ error }}</strong>
          </span>
        </div>
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
        <div class="form-group">
          <label class="control-label" for="password_confirmation">Confirm Password</label>
          <input type="password" id="password_confirmation" v-model="form.password_confirmation" class="form-control">
        </div>
        <button @click="submit()" :disabled="submitting" type="submit" class="btn btn-primary">
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from '@/shared/Auth'
export default {
  name: 'register',
  data () {
    return {
      submitting: false,
      errors: {
        name: [],
        email: [],
        password: []
      },
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    }
  },
  methods: {
    submit () {
      Auth.register(this, this.form)
    }
  }
}
</script>

<style scoped>
</style>
