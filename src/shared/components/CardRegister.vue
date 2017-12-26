<template>
  <div class="card">
    <div class="card__header">
      <h4>Register Now</h4>
    </div>
    <div class="card__content">

      <!-- Register Form -->
      <form action="#">
        <div class="form-group">
          <label for="register-name">Your Email</label>
          <input type="email" name="register-name" id="register-name" class="form-control" placeholder="Enter your email address...">
        </div>
        <div class="form-group">
          <label for="register-password">Your Password</label>
          <input type="password" name="register-password" id="register-password" class="form-control" placeholder="Enter your password...">
        </div>
        <div class="form-group">
          <label for="repeat-password">Repeat Password</label>
          <input type="password" name="repeat-password" id="repeat-password" class="form-control" placeholder="Repeat your password...">
        </div>
        <div class="form-group form-group--submit">
          <a href="_soocer_shop-account.html" class="btn btn-default btn-lg btn-block">Create Your Account</a>
        </div>
      </form>
      <!-- Register Form / End -->

    </div>
  </div>
</template>

<script>
export default {  
  name: 'post-register',
    props: {

  }    
}
</script>

<style scoped>
</style>