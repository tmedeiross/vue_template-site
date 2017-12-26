<template>
  <div class="card">
    <div class="card__header">
      <h4>Coupon Code</h4>
    </div>
    <div class="card__content">

      <form action="#" class="coupon-code-form">
        <p class="form-desc form-desc--sm">Receive the latest news from the team: game reminders, new adquisitions and professional match results.</p>
        <div class="form-group form-group--sm">
          <input type="text" class="form-control" value="" name="account-coupon-code" id="account-coupon-code" placeholder="Enter your Coupon Code">
        </div>
        <div class="form-group--submit">
          <button type="submit" class="btn btn-default btn-lg btn-block">Redeem your code</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default { 
  name: 'coupon-code',
    props: {

  }    
}
</script>

<style scoped>
</style>