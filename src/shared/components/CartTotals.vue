<template>
  <div class="col-md-4">
    <!-- Cart Totals -->
    <div class="card card--has-table">
      <div class="card__header">
        <h4>Cart Totals</h4>
      </div>
      <div class="card__content">

        <!-- Checkout Review Order -->
        <div class="df-checkout-review-order">
          <div class="table-responsive">
            <table class="df-checkout-review-order-table table">
              <tfoot>
                <tr class="cart-subtotal">
                  <th>Cart Subtotal</th>
                  <td>
                    <span class="amount">
                      <span class="df-Price-currencySymbol">$</span>242.00
                    </span>
                  </td>
                </tr>
                <tr class="shipping">
                  <th>Shipping and Handlings</th>
                  <td>
                    <span class="amount">
                      <span class="df-Price-currencySymbol">$</span>50.00
                    </span>
                  </td>
                </tr>
                <tr class="coupon">
                  <th>Coupone Code</th>
                  <td>
                    <span class="amount">
                      -<span class="df-Price-currencySymbol">$</span>10.00
                    </span>
                  </td>
                </tr>
                <tr class="order-total">
                  <th>Cart Total</th>
                  <td>
                    <span class="amount">
                      <span class="df-Price-currencySymbol">$</span>282.00
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <!-- Checkout Review Order / End -->

        <!-- Checkout Payment -->
        <div class="df-checkout-payment">
          <div class="form-row place-order">
            <input type="submit" class="btn btn-primary btn-lg btn-block" name="df_checkout_place_order" id="place_order" value="Place your order now!">
          </div>
        </div>
        <!-- Checkout Payment / End -->

      </div>
    </div>
    <!-- Cart Totals / End -->
  </div>
</template>

<script>
export default {
  name: 'cart-totals',
    props: {
  }    
}
</script>

<style scoped>
</style>