<template>
  <header class="card__header">
    <h4>{{ cardHeader }}</h4>
  </header>
</template>

<script>
export default { 
  name: 'card-header',
    props: {
    cardHeader: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>