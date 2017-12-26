<template>
  <a href="#" class="btn-social-counter btn-social-counter--card btn-social-counter--gplus">
    <div class="btn-social-counter__name">Google+</div>
    <footer class="btn-social-counter__footer">
      <h6 class="btn-social-counter__title">Friend us on Google+</h6>
      <span class="btn-social-counter__count">{{ friendsCount }}</span>
      <span class="btn-social-counter__add-icon"></span>
    </footer>
  </a>
</template>

<script>
export default {
  data () {
  },  
  name: 'btn-social-counter-gplus',
    props: {
    friendsCount: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>