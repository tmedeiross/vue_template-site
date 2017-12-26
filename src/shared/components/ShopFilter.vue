<template>
  <header class="card__header card__header--shop-filter">
    <div class="shop-filter">
      <h5 class="shop-filter__result">Showing 6 of 98 products</h5>
      <ul class="shop-filter__params">
        <li class="shop-filter__control">
          <select class="form-control input-xs">
            <option>Product Price</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </li>
        <li class="shop-filter__control">
          <select class="form-control input-xs">
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
        </li>
        <li class="shop-filter__control">
          <select class="form-control input-xs">
            <option>Show 6 per page</option>
            <option>Show 12 per page</option>
            <option>Show 24 per page</option>
          </select>
        </li>
      </ul>
      <div class="shop-filter__layout">
        <a href="_soccer_shop-grid.html" class="shop-filter__grid-layout icon-grid-layout icon-grid-layout--active">
          <span class="icon-grid-layout__inner">
            <span class="icon-grid-layout__item"></span>
            <span class="icon-grid-layout__item"></span>
            <span class="icon-grid-layout__item"></span>
          </span>
        </a>
        <a href="_soccer_shop-list.html" class="shop-filter__list-layout icon-list-layout">
          <span class="icon-list-layout__inner">
            <span class="icon-list-layout__item"></span>
            <span class="icon-list-layout__item"></span>
            <span class="icon-list-layout__item"></span>
          </span>
        </a>
      </div>
    </div>

  </header>
</template>

<script>
export default { 
  name: 'shop-filter',
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