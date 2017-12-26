<template>
  <div class="card">
    <div class="card__header">
      <h4>Calculate Shipping</h4>
    </div>
    <div class="card__content">

      <form action="#" class="shipping-calculation-form">
        <div class="form-group form-group--sm">
          <select name="account-country" id="account-country" class="form-control">
            <option value="0">Select your country</option>
            <option value="Canada">Canada</option>
            <option value="Italy">Italy</option>
            <option value="Spain">Spain</option>
            <option value="Greece">Greece</option>
          </select>
        </div>
        <div class="form-group form-group--sm">
          <select name="account-city" id="account-city" class="form-control">
            <option value="0">Select your State</option>
            <option value="1">New York</option>
            <option value="2">Barcelona</option>
            <option value="3">Paris</option>
            <option value="4">London</option>
          </select>
        </div>
        <div class="form-group form-group--sm">
          <input type="text" name="account-postcode" id="account-postcode" class="form-control" placeholder="Entery your ZIP Code">
        </div>
        <div class="">
          <button type="submit" class="btn btn-default btn-lg btn-block">Update Shipping</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {  
  name: 'shipping-calculation',
    props: {
    createdAt: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>