<template>
<div class="products products--list products--list-lg">
  <div class="product__item card">

    <div class="product__img">
      <div class="product__img-holder">

        <!-- Product Slider - Soccer -->
        <div class="product__slider-soccer-wrapper">
          <!-- Product Thumbs -->
          <div class="product__slider-thumbs slick-initialized slick-slider slick-vertical">
            <div aria-live="polite" class="slick-list draggable" style="height: 216px;">
              <div class="slick-track" style="opacity: 1; height: 216px; transform: translate3d(0px, 0px, 0px);" role="listbox">
                <div class="product__slide-thumb slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 62px;" tabindex="-1" role="option" aria-describedby="slick-slide10">
                  <div class="product__slide-thumb-holder">
                    <img src="assets/images/soccer/samples/_soccer_product-img6-1-thumb.jpg" alt="">
                  </div>
                </div><div class="product__slide-thumb slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 62px;" tabindex="-1" role="option" aria-describedby="slick-slide11">
                  <div class="product__slide-thumb-holder">
                    <img src="assets/images/soccer/samples/_soccer_product-img6-2-thumb.jpg" alt="">
                  </div>
                </div><div class="product__slide-thumb slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 62px;" tabindex="-1" role="option" aria-describedby="slick-slide12">
                  <div class="product__slide-thumb-holder">
                    <img src="assets/images/soccer/samples/_soccer_product-img6-3-thumb.jpg" alt="">
                  </div>
                </div>
                </div>
            </div>
          </div>
          <!-- Product Thumbs / End -->

          <!-- Product Slider -->
          <div class="product__slider-soccer slick-initialized slick-slider">
            <div aria-live="polite" class="slick-list draggable">
              <div class="slick-track" style="opacity: 1; width: 1250px; transform: translate3d(-250px, 0px, 0px);" role="listbox">
                <div class="product__slide slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 250px;" tabindex="-1">
                  <img src="assets/images/soccer/samples/_soccer_product-img6-lg.jpg" alt="">
                </div><div class="product__slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 250px;" tabindex="-1" role="option" aria-describedby="slick-slide00">
                  <img src="assets/images/soccer/samples/_soccer_product-img6-lg.jpg" alt="">
                </div><div class="product__slide slick-slide" data-slick-index="1" aria-hidden="true" style="width: 250px;" tabindex="-1" role="option" aria-describedby="slick-slide01">
                  <img src="assets/images/soccer/samples/_soccer_product-img6-lg.jpg" alt="">
                </div><div class="product__slide slick-slide" data-slick-index="2" aria-hidden="true" style="width: 250px;" tabindex="-1" role="option" aria-describedby="slick-slide02">
                  <img src="assets/images/soccer/samples/_soccer_product-img6-lg.jpg" alt="">
                </div><div class="product__slide slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" style="width: 250px;" tabindex="-1">
                  <img src="assets/images/soccer/samples/_soccer_product-img6-lg.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
          <!-- Product Slider / End -->
        </div>
        <!-- Product Slider - Soccer / End -->

        <div class="product__param-item product__param-item--color product__param-item--color-lg">
          <form action="#" class="form-product-color">
            <label>Color</label>
            <ul class="filter-color">
              <li class="filter-color__item">
                <label class="radio">
                  <input type="radio" id="product_color_1" name="product-color" value="1" class="color-black" checked="">
                  <span class="radio-indicator"></span>
                </label>
              </li>
              <li class="filter-color__item">
                <label class="radio">
                  <input type="radio" id="product_color_2" name="product-color" value="2" class="color-white">
                  <span class="radio-indicator"></span>
                </label>
              </li>
              <li class="filter-color__item">
                <label class="radio">
                  <input type="radio" id="product_color_3" name="product-color" value="3" class="color-blue">
                  <span class="radio-indicator"></span>
                </label>
              </li>
              <li class="filter-color__item">
                <label class="radio">
                  <input type="radio" id="product_color_4" name="product-color" value="4" class="color-light-blue">
                  <span class="radio-indicator"></span>
                </label>
              </li>
            </ul>
          </form>
        </div>

      </div>
    </div>

    <div class="product__content card__content">

      <header class="product__header">
        <div class="product__header-inner">
          <span class="product__category">{{ productCategory }}</span>
          <h2 class="product__title">{{ productTitle }}</h2>
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

      <div class="product__excerpt product__excerpt--sm">
        <h6>Description</h6>
        {{ excerpt}}
      </div>

      <form action="#" class="product__params">

        <div class="product__param-item product__param-item--size product__param-item--size-lg">
          <label>Size</label>
          <div class="form-group mb-0">
            <label class="radio radio-inline radio--word radio--word-lg">
              <input type="radio" id="inlineRadio1" value="option1" name="inlineRadioOptions"><span class="radio-label">Small</span>
            </label>
            <label class="radio radio-inline radio--word radio--word-lg">
              <input type="radio" id="inlineRadio2" value="option2" name="inlineRadioOptions" checked=""><span class="radio-label">Medium</span>
            </label>
            <label class="radio radio-inline radio--word radio--word-lg">
              <input type="radio" id="inlineRadio3" value="option3" name="inlineRadioOptions"><span class="radio-label">Large</span>
            </label>
            <label class="radio radio-inline radio--word radio--word-lg">
              <input type="radio" id="inlineRadio4" value="option4" name="inlineRadioOptions"><span class="radio-label">Extra Large</span>
            </label>
          </div>
        </div>
        <div class="product__param-item product__param-item--quantity">
          <label>Quantity</label>
          <div class="quantity-control">
            <button class="btn btn-xs"><i class="fa fa-minus"></i></button>
            <input type="number" step="1" value="2" size="4" class="form-control input-sm">
            <button class="btn btn-xs"><i class="fa fa-plus"></i></button>
          </div>
        </div>
      </form>

      <footer class="product__footer">
        <a href="shop-cart.html" class="btn btn-primary-inverse btn-icon product__add-to-cart"><i class="icon-bag"></i> Add to Cart</a>
        <a href="#" class="btn btn-default btn-single-icon product__wish"><i class="icon-heart"></i></a>
      </footer>
    </div>
  </div>

</div>  
</template>

<script>
export default { 
  name: 'products--list-lg',
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