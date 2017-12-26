<template>
  <aside class="widget card card--no-paddings widget--sidebar widget-commentary">
    <div class="widget__title card__header">
      <h4>Game Highlights</h4>
    </div>
    <div class="widget__content card__content">
      <ul class="commentary" v-for="commentary in commentarys">
        <li class="commentary__item">
          <span class="commentry__time">{{commentary.commentryTime}}</span>
          <img src="assets/images/soccer/icon-whistle.svg" class="commentry__icon" alt="">
          {{ commentary.commentryText }}
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      commentary: [],
    }
  },  
  name: 'widget-commentary',
    props: {
    commentryTime: {
      type: String,
      required: true
    },
    commentryText: {
      type: String,
      required: true
    },
  }    
}
</script>

<style scoped>
</style>