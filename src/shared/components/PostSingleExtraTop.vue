<template>
  <article class="card card--lg post post--single post--extra-top">
    <div class="card__content">

      <div class="post__content">
          {{ content }}
      </div>
      
    </div>
  </article>
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
    content: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>