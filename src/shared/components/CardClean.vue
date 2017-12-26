<template>
    <!-- Featured News -->
    <div class="card card--clean">
        <header class="card__header card__header--has-filter">
        <h4>Featured News</h4>
        <ul class="category-filter category-filter--featured">
            <li class="category-filter__item"><a href="#" class="category-filter__link category-filter__link--reset category-filter__link--active">{{ categoryFilter }}</a></li>
            <li class="category-filter__item"><a href="#" class="category-filter__link" data-category="posts__item--category-1">{{ categoryFilter }}</a></li>
            <li class="category-filter__item"><a href="#" class="category-filter__link" data-category="posts__item--category-3">{{ categoryFilter }}</a></li>
            <li class="category-filter__item"><a href="#" class="category-filter__link" data-category="posts__item--category-2">{{ categoryFilter }}</a></li>
        </ul>
        </header>
        <div class="card__content">

        <!-- Slider -->
        <div class="slick posts posts--slider-featured posts-slider posts-slider--center">

            <div class="posts__item posts__item--category-1">
            <a href="#" class="posts__link-wrapper">
                <figure class="posts__thumb">
                <img src="static/images/soccer/samples/post-slide7.jpg" alt="">
                </figure>
                <div class="posts__inner">
                <div class="posts__cat">
                    <span class="label posts__cat-label">{{ labelPost }}</span>
                </div>
                <h3 class="posts__title">{{ postsTitle }}</h3>
                <div class="post-author">
                    <figure class="post-author__avatar">
                    <img src="static/images/samples/avatar-4.jpg" alt="Post Author Avatar">
                    </figure>
                    <div class="post-author__info">
                    <h4 class="post-author__name">{{ authorName }}</h4>
                    <time datetime="2017-08-28" class="posts__date">{{ datePost }}</time>
                    </div>
                </div>
                </div>
            </a>
            </div>

            <div class="posts__item posts__item--category-3">
            <a href="#" class="posts__link-wrapper">
                <figure class="posts__thumb">
                <img src="static/images/samples/post-slide2.jpg" alt="">
                </figure>
                <div class="posts__inner">
                <div class="posts__cat">
                    <span class="label posts__cat-label">{{ labelPost }}</span>
                </div>
                <h3 class="posts__title">{{ postsTitle }}</h3>
                <div class="post-author">
                    <figure class="post-author__avatar">
                    <img src="static/images/samples/avatar-1.jpg" alt="Post Author Avatar">
                    </figure>
                    <div class="post-author__info">
                    <h4 class="post-author__name">{{ authorName }}</h4>
                    <time datetime="2017-06-28" class="posts__date">{{ datePost }}</time>
                    </div>
                </div>
                </div>
            </a>
            </div>

            <div class="posts__item posts__item--category-1">
            <a href="#" class="posts__link-wrapper">
                <figure class="posts__thumb">
                <img src="static/images/samples/post-slide3.jpg" alt="">
                </figure>
                <div class="posts__inner">
                <div class="posts__cat">
                    <span class="label posts__cat-label">{{ labelPost }}</span>
                </div>
                <h3 class="posts__title">{{ postsTitle }}</h3>
                <div class="post-author">
                    <figure class="post-author__avatar">
                    <img src="static/images/samples/avatar-1.jpg" alt="Post Author Avatar">
                    </figure>
                    <div class="post-author__info">
                    <h4 class="post-author__name">{{ authorName }}</h4>
                    <time datetime="2017-06-28" class="posts__date">{{ datePost }}</time>
                    </div>
                </div>
                </div>
            </a>
            </div>

            <div class="posts__item posts__item--category-3">
            <a href="#" class="posts__link-wrapper">
                <figure class="posts__thumb">
                <img src="static/images/samples/post-slide4.jpg" alt="">
                </figure>
                <div class="posts__inner">
                <div class="posts__cat">
                    <span class="label posts__cat-label">{{ labelPost }}</span>
                </div>
                <h3 class="posts__title">{{ postsTitle }}</h3>
                <div class="post-author">
                    <figure class="post-author__avatar">
                    <img src="static/images/samples/avatar-1.jpg" alt="Post Author Avatar">
                    </figure>
                    <div class="post-author__info">
                    <h4 class="post-author__name">{{ authorName }}</h4>
                    <time datetime="2017-06-28" class="posts__date">{{ datePost }}</time>
                    </div>
                </div>
                </div>
            </a>
            </div>

            <div class="posts__item posts__item--category-3">
            <a href="#" class="posts__link-wrapper">
                <figure class="posts__thumb">
                <img src="static/images/samples/post-slide6.jpg" alt="">
                </figure>
                <div class="posts__inner">
                <div class="posts__cat">
                    <span class="label posts__cat-label">{{ labelPost }}</span>
                </div>
                <h3 class="posts__title">{{ postsTitle }}</h3>
                <div class="post-author">
                    <figure class="post-author__avatar">
                    <img src="static/images/samples/avatar-2.jpg" alt="Post Author Avatar">
                    </figure>
                    <div class="post-author__info">
                    <h4 class="post-author__name">{{ authorName }}</h4>
                    <time datetime="2017-05-24" class="posts__date">{{ datePost }}</time>
                    </div>
                </div>
                </div>
            </a>
            </div>

            <div class="posts__item posts__item--category-2">
            <a href="#" class="posts__link-wrapper">
                <figure class="posts__thumb">
                <img src="static/images/samples/post-slide5.jpg" alt="">
                </figure>
                <div class="posts__inner">
                <div class="posts__cat">
                    <span class="label posts__cat-label">{{ labelPost }}</span>
                </div>
                <h3 class="posts__title">{{ postsTitle }}</h3>
                <div class="post-author">
                    <figure class="post-author__avatar">
                    <img src="static/images/samples/avatar-1.jpg" alt="Post Author Avatar">
                    </figure>
                    <div class="post-author__info">
                    <h4 class="post-author__name">{{ authorName }}</h4>
                    <time datetime="2017-04-12" class="posts__date">{{ datePost }}</time>
                    </div>
                </div>
                </div>
            </a>
            </div>

        </div>
        <!-- Slider / End -->

        </div>
    </div>
    <!-- Featured News / End -->
</template>

<script>
export default {
  name: 'card-clean',
  props: {
    categoryFilter: {
      type: String,
      required: false,
      default: 'The Team'
    },
    postsThumb: {
      type: String,
      required: false,
    },
    labelPost: {
      type: String,
      required: false,
      default: 'The Team'
    },    
    postsTitle: {
      type: String,
      required: false,
      default: 'The Team'
    },
    authorName: {
      type: String,
      required: false,
      default: 'James Spiegel'
    },
    datePost: {
      type: String,
      required: false,
      default: 'April 12th, 2017'
    },     
  },
  mounted () {
    $('.posts--slider-featured').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false
          }
        }
      ]
    });

    // Filter by Categories
    var filtered = false;

    $('.category-filter--featured .category-filter__link').on('click', function(e){
      var category = $(this).data('category');
      $('.posts--slider-featured').slick('slickUnfilter');
      $('.posts--slider-featured').slick('slickFilter', '.' + category);
      $('.category-filter--featured .category-filter__link--active').removeClass('category-filter__link--active');
      $(this).addClass('category-filter__link--active');
      e.preventDefault();
    });

    // Reset Filter (Show All posts)
    $('.category-filter--featured .category-filter__link--reset').on('click', function(e){
      $('.posts--slider-featured').slick('slickUnfilter');
      $('.category-filter--featured .category-filter__link').removeClass('category-filter__link--active');
      $(this).addClass('category-filter__link--active');
      filtered = false;
      e.preventDefault();
    });
  }
}
</script>

<style scoped>
</style>