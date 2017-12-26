<template>
  <div class="post-comments card card--lg">
    <header class="post-commments__header card__header">
      <h4>Comments (18)</h4>
    </header>
    <div class="post-comments__content card__content">
  
      <ul class="comments">
        <li class="comments__item" v-for="comment in comments">
          <div class="comments__inner">
            <header class="comment__header">
              <div class="comment__author">
                <figure class="comment__author-avatar">
                  <img src="assets/images/samples/avatar-9.jpg" alt="">
                </figure>
                <div class="comment__author-info">
                  <h5 class="comment__author-name">{{ comment.authorName }}</h5>
                  <time class="comment__post-date" datetime="2016-08-23">{{ comment.createdAt }}</time>
                </div>
              </div>
              <div class="comment__reply">
                <a href="#" class="comment__reply-link btn btn-link btn-xs">Reply</a>
              </div>
            </header>
            <div class="comment__body">
              {{ comment.commentBody }}
            </div>
          </div>
        </li>
      </ul>
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
  name: 'post-card',
    props: {
    createdAt: {
      type: String,
      required: true
    },
    commentBody: {
      type: String,
      required: true
    },
    authorName: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>