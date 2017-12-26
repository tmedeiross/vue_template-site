<template>
  <a href="#" class="btn-social-counter btn-social-counter--card btn-social-counter--rss">
    <div class="btn-social-counter__name"><i class="fa fa-rss"></i> RSS Feed</div>
    <footer class="btn-social-counter__footer">
      <h6 class="btn-social-counter__title">Subscribe to our RSS</h6>
      <span class="btn-social-counter__count">{{ subscribe }}</span>
      <span class="btn-social-counter__add-icon"></span>
    </footer>
  </a>
</template>

<script>
export default {
  data () {
  },  
  name: 'btn-social-counter-rss',
    props: {
    subscribe: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>