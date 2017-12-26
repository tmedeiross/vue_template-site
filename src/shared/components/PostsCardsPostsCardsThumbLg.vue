<template>
    <div class="posts__item posts__item--card card" :class="'posts__item--category-' + categoryId">
      <figure class="posts__thumb">
        <a href="#"><img src="assets/images/samples/post-img4-lg.jpg" alt=""></a>
      </figure>
      <div class="posts__inner card__content">
        <a href="#" class="posts__cta"></a>
        <div class="posts__cat">
          <span class="label posts__cat-label">{{ categoryName }}</span>
        </div>
        <h6 class="posts__title"><a href="#">{{ title }}</a></h6>
        <time datetime="2016-08-23" class="posts__date">August 23rd, 2016</time>
        <div class="posts__excerpt">
          {{ excerpt }}
        </div>
      </div>
      <footer class="posts__footer card__footer">
        <div class="post-author">
          <figure class="post-author__avatar">
            <img src="assets/images/samples/avatar-1.jpg" alt="Post Author Avatar">
          </figure>
          <div class="post-author__info">
            <h4 class="post-author__name">{{ authorName }}</h4>
          </div>
        </div>
        <ul class="post__meta meta">
          <li class="meta__item meta__item--views">{{ viewsCount }}</li>
          <li class="meta__item meta__item--likes"><a href="#"><i class="meta-like meta-like--active icon-heart"></i> {{ likesCount }}</a></li>
          <li class="meta__item meta__item--comments"><a href="#">{{ commentsCount }}</a></li>
        </ul>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'post-card',
  props: {
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


