<template>
  <div id="change-password">
    <div class="alert alert-success" v-if="passwordChanged">
      Your password has been changed.
    </div>
    <div class="well" v-if="passwordChanged">
      <p>You have changed your password successfully. Do you want to log out of all sessions?</p>
      <div class="clearfix"></div>
      <button @click="logOutOfAllSessions()" type="button" class="btn btn-primary btn-xs">Yes</button>
      <button @click="passwordChanged = false" type="button" class="btn btn-default btn-xs">Close</button>
    </div>
    <div class="form-group" :class="{ 'has-error': errors.password_current.length }">
      <label class="control-label" for="password_current">Current Password:</label>
      <input type="password" id="password_current" v-model="form.password_current" class="form-control">

      <span class="help-block" v-bind:key="error" v-for="error in errors.password_current">
        <strong>{{ error }}</strong>
      </span>
    </div>
    <div class="form-group" :class="{ 'has-error': errors.password.length }">
      <label class="control-label" for="password">New Password:</label>
      <input type="password" id="password" v-model="form.password" class="form-control">

      <span class="help-block" v-bind:key="error" v-for="error in errors.password">
        <strong>{{ error }}</strong>
      </span>
    </div>
    <div class="form-group">
      <label class="control-label" for="password_confirmation">Confirm Password:</label>
      <input type="password" id="password_confirmation" v-model="form.password_confirmation" class="form-control">
    </div>
    <button @click="changePassword()" :disabled="submitting" type="submit" class="btn btn-primary">
      Save
    </button>
  </div>
</template>

<script>
import Auth from '@/shared/Auth'
import Form from '@/shared/Form'
export default {
  name: 'change-password',
  data () {
    return {
      passwordChanged: false,
      submitting: false,
      errors: {
        password_current: [],
        password: []
      },
      form: {
        password_current: null,
        password: null,
        password_confirmation: null
      }
    }
  },
  methods: {
    changePassword () {
      Form.submit(this, {
        method: 'post',
        url: '/updatePassword',
        data: this.form,
        resetAfterSuccess: true,
        success: (response) => {
          this.passwordChanged = true
          Auth.authenticate(response.data.token, response.data.user, true)
        }
      })
    },
    logOutOfAllSessions () {
      this.passwordChanged = false
      Auth.logOutOfAllSessions()
    }
  }
}
</script>

<style scoped>
</style>
