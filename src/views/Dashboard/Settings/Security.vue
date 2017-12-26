<template>
  <div id="security">
    <h4>Security</h4>
    <div class="panel panel-default">
      <div class="panel-heading">
        Where You're Logged In
      </div>
      <div class="panel-body">
        <where-you-are-logged-in></where-you-are-logged-in>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        Change Password
      </div>
      <div class="panel-body">
        <change-password></change-password>
      </div>
    </div>
  </div>
</template>

<script>
import WhereYouAreLoggedIn from './Security/WhereYouAreLoggedIn'
import ChangePassword from './Security/ChangePassword'
export default {
  name: 'security',
  components: {
    WhereYouAreLoggedIn,
    ChangePassword
  }
}
</script>

<style scoped>
</style>
