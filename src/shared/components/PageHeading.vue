<template>
  <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <h1 class="page-heading__title">{{ pageHeadingTitle }}</h1>
          <ol class="page-heading__breadcrumb breadcrumb">
            <li><a href="_soccer_index.html">Home</a></li>
            <li class="active">Contact Us</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-heading',
  props: {
    pageHeadingTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
