<template>
  <aside class="widget widget--sidebar card widget-popular-posts">
    <div class="widget__title card__header">
      <h4>Popular News</h4>
    </div>
    <div class="widget__content card__content">
      <ul class="posts posts--simple-list">
        <li class="posts__item posts__item--category-2" v-for="item in items">
          <figure class="posts__thumb">
            <a href="#"><img :src="item.postsThumb" alt=""></a>
          </figure>
          <div class="posts__inner">
            <div class="posts__cat">
              <span class="label posts__cat-label">{{ item.postsCatLabel }}</span>
            </div>
            <h6 class="posts__title"><a :href="item.postsTitleLink">{{item.postsTitle}}</a></h6>
            <time datetime="2016-08-23" class="posts__date">{{ item.postsDate }}</time>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      items: [],
    }
  },  
  name: 'widget-popular-posts',
    props: {
    postsThumb: {
      type: String,
      required: true
    },
    postsCatLabel: {
      type: String,
      required: true
    },
    postsTitle: {
      type: String,
      required: true
    },
    postsTitleLink: {
      type: String,
      required: true
    },
    postsDate: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>