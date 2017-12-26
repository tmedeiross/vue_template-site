<template>
  <div class="dropdown pull-right" :class="{ 'open': !collapsed }">
    <span @click.stop="toggle" class="glyphicon glyphicon-option-vertical"></span>
    <ul class="dropdown-menu" v-click-outside="close">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  data () {
    return {
      collapsed: true
    }
  },
  methods: {
    open () {
      this.collapsed = false
    },
    close () {
      this.collapsed = true
    },
    toggle () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style scoped>
  .dropdown > span {
    cursor: pointer;
  }
</style>
