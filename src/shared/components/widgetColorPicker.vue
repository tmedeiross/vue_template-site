<template>
  <aside class="widget card widget--sidebar widget_color-picker">
    <form action="#" class="color-picker-form">
      <div class="widget__title card__header card__header--has-btn">
        <h4>Filter by Color</h4>
        <button class="btn btn-default btn-outline btn-xs card-header__button">Filter</button>
      </div>
      <div class="widget__content card__content">
  
        <ul class="filter-color" v-for="color in colors">
          <li class="filter-color__item">
            <label class="checkbox">
              <input type="checkbox" :id="color.productColorId" value="1" :class="color.colorName">
              <span class="checkbox-indicator"></span>
            </label>
          </li>
        </ul>
      </div>
    </form>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      colors: [],
    }
  },  
  name: 'widget_color-picker',
    props: {
    productColorId: {
      type: String,
      required: true
    },
    colorName: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>