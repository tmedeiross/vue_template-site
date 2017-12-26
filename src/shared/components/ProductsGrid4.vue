<template>
  <ul class="products products--grid products--grid-condensed products--grid-light products--grid-4">
    <!-- Product #1 -->
    <li class="product__item card">

      <div class="product__img">
        <div class="product__img-holder">
          <a href="_soccer_shop-product.html"><img src="assets/images/soccer/samples/_soccer_product-img1.jpg" alt=""></a>
        </div>
      </div>

      <div class="product__content card__content">

        <header class="product__header">
          <div class="product__header-inner">
            <span class="product__category">{{ productCategory }}</span>
            <div class="product__ratings">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star empty"></i>
            </div>
            <h2 class="product__title"><a href="_soccer_shop-product.html">{{ productTitle }}</a></h2>
            <div class="product__price">{{ productPrice }}</div>
          </div>
        </header>
      </div>
    </li>
    <!-- Product #1 / End --> 

  </ul>
</template>

<script>
export default {  
  name: 'products--grid-4',
    props: {
    productCategory: {
      type: String,
      required: true
    },
    productTitle: {
      type: String,
      required: true
    },
    productPrice: {
      type: String,
      required: true
    },
  }    
}
</script>

<style scoped>
</style>