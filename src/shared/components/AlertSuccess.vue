<template>
  <div class="alert alert-success">
    <strong>3 Articles were found for your "<span class="text-success">Alchemists Roster</span>" search</strong>
  </div>
</template>

<script>
export default {  
  name: 'alert-success',
    props: {
    createdAt: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>