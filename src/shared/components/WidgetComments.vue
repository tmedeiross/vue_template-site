<template>
  <aside class="widget widget--sidebar card widget-comments">
    <div class="widget__title card__header">
      <h4>Latest Comments</h4>
    </div>
    <div class="widget__content card__content">
      <ul class="comments-list">
        <li class="comments-list__item">
          <header class="comments-list__header">
            <figure class="comments-list__avatar">
              <img :src="commentsListAvatar" alt="">
            </figure>
            <div class="comments-list__info">
              <h5 class="comments-list__author-name">{{ commentsListAuthorName }}</h5>
              <time class="comments-list__date" datetime="2016-08-23">{{ commentsListDate }}</time>
            </div>
            <a href="#" class="comments-list__link"><span class="icon-options"></span></a>
          </header>
          <div class="comments-list__body">
            {{ commentsListBody }}
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
  name: 'widget-comments',
    props: {
    commentsListAvatar: {
      type: String,
      required: true
    },
    commentsListAuthorName: {
      type: String,
      required: true
    },
    commentsListBody: {
      type: String,
      required: true
    },
    commentsListDate: {
      type: String,
      required: true      
    }
  }    
}
</script>

<style scoped>
</style>