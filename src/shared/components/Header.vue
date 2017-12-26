<template>

  <div id="header">
    <!-- Header Mobile -->
    <div class="header-mobile clearfix" id="header-mobile">
      <div class="header-mobile__logo">
        <a href="_soccer_index.html"><img src="static/images/soccer/logo.png" srcset="static/images/soccer/logo@2x.png 2x" alt="Alchemists" class="header-mobile__logo-img"></a>
      </div>
      <div class="header-mobile__inner">
        <a id="header-mobile__toggle" class="burger-menu-icon"><span class="burger-menu-icon__line"></span></a>
        <span class="header-mobile__search-icon" id="header-mobile__search-icon"></span>
      </div>
    </div>

    <!-- Header Desktop -->
    <header class="header">

      <!-- Header Top Bar -->
      <div class="header__top-bar clearfix">
        <div class="container">

          <!-- Account Navigation -->
          <ul class="nav-account">
            <li class="nav-account__item"><a href="#" data-toggle="modal" data-target="#modal-login-register-tabs">Your Account</a></li>
            <li class="nav-account__item nav-account__item--wishlist"><a href="_soccer_shop-wishlist.html">Wishlist <span class="highlight">8</span></a></li>
            <li class="nav-account__item"><a href="#">Currency: <span class="highlight">USD</span></a>
              <ul class="main-nav__sub">
                <li><a href="#">USD</a></li>
                <li><a href="#">EUR</a></li>
                <li><a href="#">GBP</a></li>
              </ul>
            </li>
            <li class="nav-account__item"><a href="#">Language: <span class="highlight">EN</span></a>
              <ul class="main-nav__sub">
                <li><a href="#">English</a></li>
                <li><a href="#">Spanish</a></li>
                <li><a href="#">French</a></li>
                <li><a href="#">German</a></li>
              </ul>
            </li>
            <li class="nav-account__item nav-account__item--logout"><a href="_soccer_shop-login.html">Logout</a></li>
          </ul>
          <!-- Account Navigation / End -->

        </div>
      </div>
      <!-- Header Top Bar / End -->

      <!-- Header Secondary -->

      <div class="header__secondary">
        <div class="container">
          <!-- Header Search Form -->
          <div class="header-search-form">
            <form action="#" id="mobile-search-form" class="search-form">
              <input type="text" class="form-control header-mobile__search-control" value="" placeholder="Enter your seach here...">
              <button type="submit" class="header-mobile__search-submit"><i class="fa fa-search"></i></button>
            </form>
          </div>
          <!-- Header Search Form / End -->
          <ul class="info-block info-block--header">
            <li class="info-block__item info-block__item--contact-primary">
              <svg role="img" class="df-icon df-icon--whistle">
                <use xlink:href="static/images/icons-soccer.svg#whistle"/>
              </svg>
              <h6 class="info-block__heading">Join Our Team!</h6>
              <a class="info-block__link" href="mailto:tryouts@alchemists.com">tryouts@alchemists.com</a>
            </li>
            <li class="info-block__item info-block__item--contact-secondary">
              <svg role="img" class="df-icon df-icon--soccer-ball">
                <use xlink:href="static/images/icons-soccer.svg#soccer-ball"/>
              </svg>
              <h6 class="info-block__heading">Contact Us</h6>
              <a class="info-block__link" href="mailto:info@alchemists.com">info@alchemists.com</a>
            </li>
            <li class="info-block__item info-block__item--shopping-cart">
              <a href="#" class="info-block__link-wrapper">
                <div class="df-icon-stack df-icon-stack--bag">
                  <svg role="img" class="df-icon df-icon--bag">
                    <use xlink:href="static/images/icons-basket.svg#bag"/>
                  </svg>
                  <svg role="img" class="df-icon df-icon--bag-handle">
                    <use xlink:href="static/images/icons-basket.svg#bag-handle"/>
                  </svg>
                </div>
                <h6 class="info-block__heading">Your Bag (8 items)</h6>
                <span class="info-block__cart-sum">$256,30</span>
              </a>

              <!-- Dropdown Shopping Cart -->
              <ul class="header-cart">
                <li class="header-cart__item">
                  <figure class="header-cart__product-thumb">
                    <a href="_soccer_shop-product.html">
                      <img src="static/images/soccer/samples/_soccer_cart-sm-1.jpg" alt="">
                    </a>
                  </figure>
                  <div class="header-cart__inner">
                    <span class="header-cart__product-cat">Sneakers</span>
                    <h5 class="header-cart__product-name"><a href="_soccer_shop-product.html">Sundown Sneaker</a></h5>
                    <div class="header-cart__product-ratings">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star empty"></i>
                    </div>
                    <div class="header-cart__product-sum">
                      <span class="header-cart__product-price">$28.00</span> x <span class="header-cart__product-count">2</span>
                    </div>
                    <div class="fa fa-times header-cart__close"></div>
                  </div>
                </li>
                <li class="header-cart__item">
                  <figure class="header-cart__product-thumb">
                    <a href="_soccer_shop-product.html">
                      <img src="static/images/soccer/samples/_soccer_cart-sm-4.jpg" alt="">
                    </a>
                  </figure>
                  <div class="header-cart__inner">
                    <span class="header-cart__product-cat">Sneakers</span>
                    <h5 class="header-cart__product-name"><a href="_soccer_shop-product.html">Atlantik Sneaker</a></h5>
                    <div class="header-cart__product-ratings">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="header-cart__product-sum">
                      <span class="header-cart__product-price">$30.00</span> x <span class="header-cart__product-count">4</span>
                    </div>
                    <div class="fa fa-times header-cart__close"></div>
                  </div>
                </li>
                <li class="header-cart__item">
                  <figure class="header-cart__product-thumb">
                    <a href="_soccer_shop-product.html">
                      <img src="static/images/soccer/samples/_soccer_cart-sm-2.jpg" alt="">
                    </a>
                  </figure>
                  <div class="header-cart__inner">
                    <span class="header-cart__product-cat">Sneakers</span>
                    <h5 class="header-cart__product-name"><a href="_soccer_shop-product.html">Aquarium Sneaker</a></h5>
                    <div class="header-cart__product-ratings">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star empty"></i>
                      <i class="fa fa-star empty"></i>
                    </div>
                    <div class="header-cart__product-sum">
                      <span class="header-cart__product-price">$26.00</span> x <span class="header-cart__product-count">1</span>
                    </div>
                    <div class="fa fa-times header-cart__close"></div>
                  </div>
                </li>
                <li class="header-cart__item header-cart__item--subtotal">
                  <span class="header-cart__subtotal">Cart Subtotal</span>
                  <span class="header-cart__subtotal-sum">$282.00</span>
                </li>
                <li class="header-cart__item header-cart__item--action">
                  <a href="_soccer_shop-cart.html" class="btn btn-default btn-block">Go to Cart</a>
                  <a href="_soccer_shop-checkout.html" class="btn btn-primary-inverse btn-block">Checkout</a>
                </li>
              </ul>
              <!-- Dropdown Shopping Cart / End -->

            </li>
          </ul>
        </div>        
      </div>
      <!-- Header Secondary / End -->

      <!-- Header Primary -->
      <navbar></navbar>
      <!-- Header Primary / End -->

    </header>
  </div>
</template>

<script>
import Navbar from '@/shared/components/Navbar'

export default {
  name: 'header',
  components: {
    Navbar
  }
}
</script>

<style scoped>
</style>
