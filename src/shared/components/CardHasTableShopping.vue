<template>
  <div class="card card--has-table">
    <div class="card__header">
      <h4>Your Shopping Cart</h4>
    </div>
    <div class="card__content">

      <div class="table-responsive">
        <table class="table shop-table">
          <thead>
            <tr>
              <th class="product__photo">Photo</th>
              <th class="product__info">Product Info</th>
              <th class="product__price">Price</th>
              <th class="product__size">Size</th>
              <th class="product__color">Color</th>
              <th class="product__quantity">Quantity</th>
              <th class="product__total">Total</th>
              <th class="product__remove">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="product__photo">
                <figure class="product__thumb">
                  <a href="#"><img src="assets/images/soccer/samples/_soccer_cart-sm-1.jpg" alt=""></a>
                </figure>
              </td>
              <td class="product__info">
                <span class="product__cat">{{ categoryName }}</span>
                <h5 class="product__name"><a href="#">{{ productName }}</a></h5>
                <div class="product__ratings">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star empty"></i>
                </div>
              </td>
              <td class="product__price">
                {{ productPrice }}
              </td>
              <td class="product__size">
                {{ productSize }}
              </td>
              <td class="product__color">
                <span class="product__color-item product__color-item--selected product__color-item--color-orange"></span>
              </td>
              <td class="product__quantity">
                <div class="quantity-control">
                  <button class="btn btn-xs"><i class="fa fa-minus"></i></button>
                  <input type="number" step="1" value="1" size="4" class="form-control input-sm">
                  <button class="btn btn-xs"><i class="fa fa-plus"></i></button>
                </div>
              </td>
              <td class="product__total">
                {{ productTotal }}
              </td>
              <td class="product__remove">
                <a href="#" class="fa fa-times product__remove-icon"></a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'card-has-table-shopping',
  props: {
    categoryName: {
      type: String,
      required: true
    },
    productName: {
      type: String,
      required: true
    },
    productPrice: {
      type: String,
      required: true
    },
    productTotal: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
</style>



<style scoped>
</style>