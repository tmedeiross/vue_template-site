<template>
  <a href="#" class="btn-social-counter btn-social-counter--card btn-social-counter--twitter">
    <div class="btn-social-counter__name">Twitter</div>
    <footer class="btn-social-counter__footer">
      <h6 class="btn-social-counter__title">Follow Us on Twitter</h6>
      <span class="btn-social-counter__count">{{ followCount }}</span>
      <span class="btn-social-counter__add-icon"></span>
    </footer>
  </a>
</template>

<script>
export default {
  data () {
  },  
  name: 'btn-social-counter-twitter',
    props: {
    followCount: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>