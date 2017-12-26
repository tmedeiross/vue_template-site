<template>
  <a href="#" class="btn-social-counter btn-social-counter--card btn-social-counter--fb">
    <div class="btn-social-counter__name">Facebook</div>
    <footer class="btn-social-counter__footer">
      <h6 class="btn-social-counter__title">Like Our Facebook Page</h6>
      <span class="btn-social-counter__count">{{ likesCount }}</span>
      <span class="btn-social-counter__add-icon"></span>
    </footer>
  </a>
</template>

<script>
export default {
  data () {
  },  
  name: 'btn-social-counter-fb',
    props: {
    likesCount: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>