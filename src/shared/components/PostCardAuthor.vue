<template>
  <div class="post-author card card--lg">
    <div class="card__content">
      <header class="post-author__header">
        <figure class="post-author__avatar">
          <img src="assets/images/samples/avatar-1.jpg" alt="Post Author Avatar">
        </figure>
        <div class="post-author__info">
          <h4 class="post-author__name">{{ nameAuthor }}</h4>
          <span class="post-author__slogan">{{ sloganAuthor }}</span>
        </div>
        <ul class="post-author__social-links social-links social-links--btn">
          <li class="social-links__item">
            <a href="#" class="social-links__link social-links__link--fb"><i class="fa fa-facebook"></i></a>
          </li>
          <li class="social-links__item">
            <a href="#" class="social-links__link social-links__link--twitter"><i class="fa fa-twitter"></i></a>
          </li>
        </ul>
      </header>
      <div class="post-author__description">
        {{ description }}
      </div>
    </div>
            </div>
</template>

<script>
export default {
  data () {
  },  
  name: 'post-card',
    props: {
    description: {
      type: String,
      required: true
    },
    sloganAuthor: {
      type: String,
      required: true
    },
    nameAuthor: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>