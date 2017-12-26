<template>
  <div class="main-news-banner main-news-banner--soccer-ball">
    <div class="main-news-banner__inner">
      <div class="posts posts--simple-list posts--simple-list--xlg">
        <div class="posts__item posts__item--category-1">
          <div class="posts__inner">
            <div class="posts__cat">
              <span class="label posts__cat-label">{{ postsCatLabel }}/span>
            </div>
            <h6 class="posts__title"><a href="#">{{postsTitle}}</a></h6>
            <time datetime="2016-08-23" class="posts__date">postsDate</time>
            <div class="posts__excerpt">
              {{ postsExcerpt }}
            </div>
            <div class="posts__more">
              <a href="#" class="btn btn-inverse btn-sm btn-outline btn-icon-right btn-condensed">Read More <i class="fa fa-plus text-primary"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
    }
  },  
  name: 'main-news-banner-soccer-ball',
    props: {
    postsCatLabel: {
      type: String,
      required: true
    },
    postsTitle: {
      type: String,
      required: true
    },
    postsDate: {
      type: String,
      required: true
    },
    postsExcerpt: {
      type: String,
      required: true
    },
  }    
}
</script>

<style scoped>
</style>