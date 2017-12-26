<template>
  <div id="reset-password">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>Reset Password</h1>
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
          Reset Password
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from '@/shared/Auth'
import Form from '@/shared/Form'
export default {
  name: 'reset-password',
  data () {
    return {
      submitting: false,
      errors: {
        email: [],
        password: []
      },
      form: {
        token: this.$route.params.token,
        email: null,
        password: null,
        password_confirmation: null
      }
    }
  },
  methods: {
    submit () {
      Form.submit(this, {
        method: 'post',
        url: '/password/reset',
        data: this.form,
        success: (response) => {
          Auth.authenticate(response.data.token, response.data.user)
          this.$router.push({
            path: '/dashboard'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
