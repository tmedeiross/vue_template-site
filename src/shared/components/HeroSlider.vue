<template>
  <div class="hero-slider-wrapper">
    <div class="hero-slider">
  
      <!-- Slide #1 -->
      <div class="hero-slider__item hero-slider__item--img1">  
        <div class="container hero-slider__item-container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <!-- Post Meta - Top -->
              <div class="post__meta-block post__meta-block--top">
  
                <!-- Post Category -->
                <div class="post__category">
                  <span class="label posts__cat-label">
                     {{ labelPost }} 
                    </span>
                </div>
                <!-- Post Category / End -->
  
                <!-- Post Title -->
                <h1 class="page-heading__title"><a href="#">{{ title }}</a></h1>
                <!-- Post Title / End -->
  
                <!-- Post Meta Info -->
                <ul class="post__meta meta">
                  <li class="meta__item meta__item--date"><time datetime="2017-08-23">{{ datePost }}</time></li>
                  <li class="meta__item meta__item--views">{{ views }}</li>
                  <li class="meta__item meta__item--likes"><a href="#"><i class="meta-like meta-like--active icon-heart"></i> {{ likes }}</a></li>
                  <li class="meta__item meta__item--comments"><a href="#">{{ comments }}</a></li>
                </ul>
                <!-- Post Meta Info / End -->
  
                <!-- Post Author -->
                <div class="post-author">
                  <figure class="post-author__avatar">
                    <img src="static/images/samples/avatar-1.jpg" alt="Post Author Avatar">
                  </figure>
                  <div class="post-author__info">
                    <h4 class="post-author__name">{{ authorName }}</h4>
                    <span class="post-author__slogan">{{ authorSlogan }}</span>
                  </div>
                </div>
                <!-- Post Author / End -->
  
              </div>
              <!-- Post Meta - Top / End -->
            </div>
          </div>
        </div>
  
      </div>
      <!-- Slide #1 / End -->
  
      <!-- Slide #2 -->
      <div class="hero-slider__item hero-slider__item--img2">  
        <div class="container hero-slider__item-container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <!-- Post Meta - Top -->
              <div class="post__meta-block post__meta-block--top">
  
                <!-- Post Category -->
                <div class="post__category">
                  <span class="label posts__cat-label">
                     {{ labelPost }} 
                    </span>
                </div>
                <!-- Post Category / End -->
  
                <!-- Post Title -->
                <h1 class="page-heading__title"><a href="#">{{ title }}</a></h1>
                <!-- Post Title / End -->
  
                <!-- Post Meta Info -->
                <ul class="post__meta meta">
                  <li class="meta__item meta__item--date"><time datetime="2017-08-23">{{ datePost }}</time></li>
                  <li class="meta__item meta__item--views">{{ views }}</li>
                  <li class="meta__item meta__item--likes"><a href="#"><i class="meta-like meta-like--active icon-heart"></i> {{ likes }}</a></li>
                  <li class="meta__item meta__item--comments"><a href="#">{{ comments }}</a></li>
                </ul>
                <!-- Post Meta Info / End -->
  
                <!-- Post Author -->
                <div class="post-author">
                  <figure class="post-author__avatar">
                    <img src="static/images/samples/avatar-1.jpg" alt="Post Author Avatar">
                  </figure>
                  <div class="post-author__info">
                    <h4 class="post-author__name">{{ authorName }}</h4>
                    <span class="post-author__slogan">{{ authorSlogan }}</span>
                  </div>
                </div>
                <!-- Post Author / End -->
  
              </div>
              <!-- Post Meta - Top / End -->
            </div>
          </div>
        </div>
  
      </div>
      <!-- Slide #2 / End -->
  
      <!-- Slide #3 -->
      <div class="hero-slider__item hero-slider__item--img3">  
        <div class="container hero-slider__item-container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <!-- Post Meta - Top -->
              <div class="post__meta-block post__meta-block--top">
  
                <!-- Post Category -->
                <div class="post__category">
                  <span class="label posts__cat-label">
                     {{ labelPost }} 
                    </span>
                </div>
                <!-- Post Category / End -->
  
                <!-- Post Title -->
                <h1 class="page-heading__title"><a href="#">{{ title }}</a></h1>
                <!-- Post Title / End -->
  
                <!-- Post Meta Info -->
                <ul class="post__meta meta">
                  <li class="meta__item meta__item--date"><time datetime="2017-08-23">{{ datePost }}</time></li>
                  <li class="meta__item meta__item--views">{{ views }}</li>
                  <li class="meta__item meta__item--likes"><a href="#"><i class="meta-like meta-like--active icon-heart"></i> {{ likes }}</a></li>
                  <li class="meta__item meta__item--comments"><a href="#">{{ comments }}</a></li>
                </ul>
                <!-- Post Meta Info / End -->
  
                <!-- Post Author -->
                <div class="post-author">
                  <figure class="post-author__avatar">
                    <img src="static/images/samples/avatar-1.jpg" alt="Post Author Avatar">
                  </figure>
                  <div class="post-author__info">
                    <h4 class="post-author__name">{{ authorName }}</h4>
                    <span class="post-author__slogan">{{ authorSlogan }}</span>
                  </div>
                </div>
                <!-- Post Author / End -->
  
              </div>
              <!-- Post Meta - Top / End -->
            </div>
          </div>
        </div>
  
      </div>
      <!-- Slide #3 / End -->
  
      
    </div>
  
    <div class="hero-slider-thumbs-wrapper">
      <div class="container">
        <div class="hero-slider-thumbs posts posts--simple-list">
          <div class="hero-slider-thumbs__item">
            <div class="posts__item posts__item--category-1">
              <div class="posts__inner">
                <div class="posts__cat">
                  <span class="label posts__cat-label">{{ thumbsPostsLabel }}</span>
                </div>
                <h6 class="posts__title">{{ thumbsPostsTitle }}</h6>
                <time datetime="2017-12-12" class="posts__date">{{ thumbsPostsDate }}</time>
              </div>
            </div>
          </div>
          <div class="hero-slider-thumbs__item">
            <div class="posts__item posts__item--category-2">
              <div class="posts__inner">
                <div class="posts__cat">
                  <span class="label posts__cat-label">{{ thumbsPostsLabel }}</span>
                </div>
                <h6 class="posts__title">{{ thumbsPostsTitle }}</h6>
                <time datetime="2017-11-14" class="posts__date">{{ thumbsPostsDate }}</time>
              </div>
            </div>
          </div>
          <div class="hero-slider-thumbs__item">
            <div class="posts__item posts__item--category-1">
              <div class="posts__inner">
                <div class="posts__cat">
                  <span class="label posts__cat-label">{{ thumbsPostsLabel }}</span>
                </div>
                <h6 class="posts__title">{{ thumbsPostsTitle }}</h6>
                <time datetime="2017-12-13" class="posts__date">{{ thumbsPostsDate }}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero-slider',
  props: {
    labelPost: {
      type: String,
      required: false,
      default: 'The Team'
    },
    title: {
      type: String,
      required: false,
      default: 'The Alchemists'
    },
    datePost: {
      type: String,
      required: false,
      default: 'August 23rd, 2017'
    },
    views: {
      type: String,
      required: false,
      default: '2369'
    },
    likes: {
      type: String,
      required: false,
      default: '530'
    },
    comments: {
      type: String,
      required: false,
      default: '18'
    },
    authorName: {
      type: String,
      required: false,
      default: 'James Spiegel'
    },
    authorSlogan: {
      type: String,
      required: false,
      default: 'Alchemists Ninja'
    },
    authorAvatar: {
      type: String,
      required: false,
    },    
    thumbsPostsTitle: {
      type: String,
      required: false,
      default: 'The New Eco Friendly Stadium won a leafy award in 2016',
    },
    thumbsPostsLabel: {
      type: String,
      required: false,
      default: 'THE TEAM',
    },
    thumbsPostsDate: {
      type: String,
      required: false,
      default: 'November 14th, 2016',
    }
  },
  mounted () {

      // Hero Slider
      if ( $('.hero-slider').exists() ) {

        $('.hero-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          autoplay: true,
          autoplaySpeed: 8000,
          asNavFor: '.hero-slider-thumbs',

          responsive: [
            {
              breakpoint: 992,
              settings: {
                fade: false,
              }
            }
          ]
        });
        $('.hero-slider-thumbs').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: $('.hero-slider'),
          focusOnSelect: true,
        });
      };

      // Hero Slider - Football
        $('.posts--slider-top-news').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 8000,
          adaptiveHeight: true,
        });
  }
}
</script>

<style scoped>
</style>
