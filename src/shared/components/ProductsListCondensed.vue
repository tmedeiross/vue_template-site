<template>
  <ul class="products products--list products--list-condensed">
    <li class="product__item card">
      <div class="product__img">
        <div class="product__img-holder">
          <img src="assets/images/soccer/samples/_soccer_product-img1.jpg" alt="">
        </div>
      </div>

      <div class="product__content card__content">

        <header class="product__header">
          <div class="product__header-inner">
            <span class="product__category">{{ productCategory }}</span>
            <h2 class="product__title"><a href="_soccer_shop-product.html">{{ productTitle }}</a></h2>
            <div class="product__ratings">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star empty"></i>
            </div>
          </div>
          <div class="product__price">{{ productPrice }}</div>
        </header>

        <div class="product__excerpt">
          {{ excerpt }}
        </div>

        <footer class="product__footer">
          <a href="_soccer_shop-cart.html" class="btn btn-primary-inverse btn-icon product__add-to-cart"><i class="icon-bag"></i> Add to Cart</a>
          <a href="#" class="btn btn-default btn-single-icon product__wish"><i class="icon-heart"></i></a>
          <a href="#" class="btn btn-default btn-single-icon product__view"><i class="icon-eye"></i></a>
        </footer>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      items: [],
    }
  },  
  name: 'products-list-condensed',
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
    excerpt: {
      type: String,
      required: true
    },
  }    
}
</script>

<style scoped>
</style>