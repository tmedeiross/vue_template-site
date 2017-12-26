<template>
  <ul class="posts posts--simple-list posts--simple-list--search">
    <li class="posts__item card posts__item--category-2">
      <div class="posts__inner card__content">
        <div class="posts__cat">
          <span class="label posts__cat-label">{{ categoryName }}</span>
        </div>
        <h6 class="posts__title"><a href="#">{{ title }}</a></h6>
        <time datetime="2017-08-23" class="posts__date">{{ createdAt }}</time>
        <div class="posts__excerpt">
          {{ excerpt }}
        </div>
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
  name: 'posts-simple-list-search',
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