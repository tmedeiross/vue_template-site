<template>
  <aside class="widget widget--sidebar card widget-tagcloud">
    <div class="widget__title card__header">
      <h4>Tag Cloud</h4>
    </div>
    <div class="widget__content card__content">
      <div class="tagcloud" v-for="tag in tags">
        <a href="#" class="btn btn-primary btn-xs btn-outline btn-sm">{{ tag.tagcloud }}</a>
      </div>
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
  name: 'widget-tagcloud',
    props: {
    tagcloud: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>