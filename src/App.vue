<template>
  <div id="app" class="site-wrapper clearfix">
    <div class="site-overlay"></div>
    <header-component></header-component>
    <pushy-panel></pushy-panel>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
import PushyPanel from '@/shared/components/PushyPanel'
import Header from '@/shared/components/Header'
import Footer from '@/shared/components/Footer'
export default {
  name: 'app',
  components: {
    PushyPanel,
    'header-component': Header,
    'footer-component': Footer
  }
}
</script>

<style>
</style>
