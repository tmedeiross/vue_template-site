<template>
  <aside class="widget card widget--sidebar widget-filter-price">
    <form action="#" class="filter-price-form">
      <div class="widget__title card__header card__header--has-btn">
        <h4>Filter by Price</h4>
        <button class="btn btn-default btn-outline btn-xs card-header__button">Filter</button>
      </div>
      <div class="widget__content card__content">
  
        <div class="slider-range-wrapper">
          <div id="slider-range" class="slider-range noUi-target noUi-ltr noUi-horizontal"><div class="noUi-base"><div class="noUi-origin" style="left: 0%;"><div class="noUi-handle" data-handle="0" style="z-index: 5;"></div></div><div class="noUi-connect" style="left: 0%; right: 22.2222%;"></div><div class="noUi-origin" style="left: 77.7778%;"><div class="noUi-handle" data-handle="1" style="z-index: 4;"></div></div></div></div>
          <div class="slider-range-label">
            Price: $<span id="slider-range-value-min">0.00</span> - $<span id="slider-range-value-max">350.00</span>
          </div>
        </div>
  
      </div>
    </form>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      items: [],
    }
  },  
  name: 'widget-filter-price',
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