<template>
  <article class="card card--lg post post--single" :class="'posts-single-' + postId">
    <figure class="post__thumbnail">
      <img src="assets/images/samples/single-post-img1.jpg" alt="">
    </figure>

    <div class="card__content">
      <div class="post__category">
        <span class="label posts__cat-label">{{ categoryName }}</span>
      </div>
      <header class="post__header">
        <h2 class="post__title">{{ title }}</h2>
        <ul class="post__meta meta">
          <li class="meta__item meta__item--date"><time datetime="2017-08-23">{{ createdAt }}</time></li>
          <li class="meta__item meta__item--views">{{ viewsCount}}</li>
          <li class="meta__item meta__item--likes"><a href="#"><i class="meta-like icon-heart"></i> {{ likesCount }}</a></li>
          <li class="meta__item meta__item--comments"><a href="#">{{ commentsCount }}</a></li>
        </ul>
      </header>

      <div class="post__content">
        {{ content }}
      </div>

      <footer class="post__footer">
        <div class="post__tags" v-for="tag in tags">
          <a :href="tag.tagLink" class="btn btn-primary btn-outline btn-xs">{{ tag.tagName }}</a>
        </div>
      </footer>
      
    </div>
  </article>
</template>


<script>
export default {
  name: 'post-single',
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
    },
    tagNametagName: {
      type: Number,
      required: true
    },
    tagLink: {
      type: Number,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>