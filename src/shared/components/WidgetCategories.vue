<template>
  <aside class="widget card widget--sidebar widget_categories">
    <div class="widget__title card__header">
      <h4>Categories</h4>
    </div>
    <div class="widget__content card__content">
      <ul class="widget__list" v-for="item in items">
        <li><a href="#">{{ widgetListCategory }}</a></li>
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
  name: 'widget_categories',
    props: {
    widgetListCategory: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>