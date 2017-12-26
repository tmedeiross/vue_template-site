<template>
  <div>
    <div class="post-grid__item col-sm-6">
      <div class="posts__item posts__item--card card" :class="'posts__item--category-' + categoryId">
        <figure class="posts__thumb">
          <div class="posts__cat">
            <span class="label posts__cat-label">
              {{ categoryName }}
            </span>
          </div>
          <a href="#"><img src="static/images/samples/post-img3.jpg" alt=""></a>
        </figure>
        <div class="posts__inner card__content">
          <a href="#" class="posts__cta"></a>
          <time datetime="2016-08-23" class="posts__date">
            {{ createdAt }}
          </time>
          <h6 class="posts__title">
            <a href="#">
              {{ title }}
            </a>
          </h6>
          <div class="posts__excerpt">
            {{ excerpt }}
          </div>
        </div>
        <footer class="posts__footer card__footer">
          <div class="post-author">
            <figure class="post-author__avatar">
              <img src="static/images/samples/avatar-2.jpg" alt="Post Author Avatar">
            </figure>
            <div class="post-author__info">
              <h4 class="post-author__name">
                {{ authorName }}
              </h4>
            </div>
          </div>
          <ul class="post__meta meta">
            <li class="meta__item meta__item--views">
              {{ viewsCount }}
            </li>
            <li class="meta__item meta__item--likes">
              <a href="#">
                <i class="meta-like icon-heart"></i> {{ likesCount }}
              </a>
            </li>
            <li class="meta__item meta__item--comments">
              <a href="#">
                {{ commentsCount }}
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
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


