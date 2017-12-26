<template>
  <aside class="widget card widget--sidebar widget-products">
    <div class="widget__title card__header">
      <h4>Hot Products</h4>
    </div>
    <div class="widget__content card__content">
      <ul class="products-list" v-for="product in products">
        <li class="products-list__item">
          <figure class="products-list__product-thumb">
            <a href="#">
              <img :src="product.productTumb" alt="">
            </a>
          </figure>
          <div class="products-list__inner">
            <span class="products-list__product-cat">{{ product.productCat }}</span>
            <h5 class="products-list__product-name"><a :href="product.productLink">{{ product.productName }}</a></h5>
            <div class="products-list__product-ratings">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star empty"></i>
            </div>
            <div class="products-list__product-sum">
              <span class="products-list__product-price">{{ product.productPrice}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      products: [],
    }
  },  
  name: 'widget-products',
    props: {
    product: {
      type: String,
      required: true
    },
    productTumb: {
      type: String,
      required: true
    },
    productCat: {
      type: String,
      required: true
    },
    productName: {
      type: String,
      required: true
    },
    productLink: {
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