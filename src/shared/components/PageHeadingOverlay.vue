<template>
  <div class="page-heading page-heading--overlay page-heading--post-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <!-- Post Meta - Top -->
            <div class="post__meta-block post__meta-block--top">

              <!-- Post Category -->
              <div class="post__category">
                <span class="label posts__cat-label">{{ categoryName }}</span>
              </div>
              <!-- Post Category / End -->

              <!-- Post Title -->
              <h1 class="page-heading__title">{{ pageHeadingTitle }}</h1>
              <!-- Post Title / End -->

              <!-- Post Meta Info -->
              <ul class="post__meta meta">
                <li class="meta__item meta__item--date"><time datetime="2017-08-23">{{ createdAt }}</time></li>
                <li class="meta__item meta__item--views">{{ viewsCount }}</li>
                <li class="meta__item meta__item--likes"><a href="#"><i class="meta-like meta-like--active icon-heart"></i> {{ likesCount }}</a></li>
                <li class="meta__item meta__item--comments"><a href="#">{{ commentsCount }}</a></li>
              </ul>
              <!-- Post Meta Info / End -->

              <!-- Post Author -->
              <div class="post-author">
                <figure class="post-author__avatar">
                  <img src="assets/images/samples/avatar-1.jpg" alt="Post Author Avatar">
                </figure>
                <div class="post-author__info">
                  <h4 class="post-author__name">{{ authorName }}</h4>
                  <span class="post-author__slogan">{{ authorName }}</span>
                </div>
              </div>
              <!-- Post Author / End -->

            </div>
            <!-- Post Meta - Top / End -->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'page-heading',
  props: {
    pageHeadingTitle: {
      type: String,
      required: true
    },
    categoryName: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: false
    },
    categoryName: {
      type: String,
      required: true
    },
    categoryId: {
      type: Number,
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    authorAvatar: {
      type: String,
      required: true
    },
    viewsCount: {
      type: Number,
      required: true,
    },
    likesCount: {
      type: Number,
      required: true
    },
    commentsCount: {
      type: Number,
      required: true
    }    
  }
}
</script>

<style scoped>
</style>
