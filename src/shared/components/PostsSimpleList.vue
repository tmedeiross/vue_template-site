<template>
    <ul class="posts posts--simple-list">
      <li class="posts__item" :class="'posts__item--category-' + categoryId">
        <figure class="posts__thumb">
          <a href="#"><img src="static/images/samples/post-img22-xs.jpg" alt=""></a>
        </figure>
        <div class="posts__inner">
          <div class="posts__cat">
            <span class="label posts__cat-label">{{ categoryName }}</span>
          </div>
          <h6 class="posts__title"><a href="#">{{ title }}</a></h6>
          <time datetime="2016-08-23" class="posts__date">{{ createdAt }}</time>
        </div>
        <div class="posts__excerpt posts__excerpt--space-sm">
          {{ excerpt }}
        </div>
      </li>
    </ul>
</template>

<script>
export default {
    name: 'posts-simple-list',
      props: {
      title: {
        type: String,
        required: false,
      },
      excerpt: {
        type: String,
        required: false,
      },
      categoryName: {
        type: String,
        required: false,
      },
      createdAt: {
        type: String,
        required: false,
      },
    }
}
</script>

<style scoped>
</style>