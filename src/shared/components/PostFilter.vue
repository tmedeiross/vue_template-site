<template>
  <div class="post-filter">
      <div class="container">
        <form action="#" class="post-filter__form clearfix">
          <div class="post-filter__select">
            <label class="post-filter__label">Category</label>
            
          <div class="cs-select cs-skin-border" tabindex="0"><span class="cs-placeholder">All Articles</span><div class="cs-options"><ul><li data-option="" data-value="all"><span>All Articles</span></li><li data-option="" data-value="team"><span>The Team</span></li><li data-option="" data-value="playoffs"><span>Playoffs</span></li><li data-option="" data-value="injuries"><span>Injuries</span></li></ul></div><select class="cs-select cs-skin-border">
              <option value="" disabled="" selected="">All Articles</option>
              <option value="all">All Articles</option>
              <option value="team">The Team</option>
              <option value="playoffs">Playoffs</option>
              <option value="injuries">Injuries</option>
            </select></div></div>
          <div class="post-filter__select">
            <label class="post-filter__label">Filter By</label>
            
          <div class="cs-select cs-skin-border" tabindex="0"><span class="cs-placeholder">Article Date</span><div class="cs-options"><ul><li data-option="" data-value="date"><span>Article Date</span></li><li data-option="" data-value="id"><span>Article ID</span></li><li data-option="" data-value="comments"><span>Last Comments</span></li><li data-option="" data-value="random"><span>Random</span></li></ul></div><select class="cs-select cs-skin-border">
              <option value="" disabled="" selected="">Article Date</option>
              <option value="date">Article Date</option>
              <option value="id">Article ID</option>
              <option value="comments">Last Comments</option>
              <option value="random">Random</option>
            </select></div></div>
          <div class="post-filter__select">
            <label class="post-filter__label">Order</label>
            
          <div class="cs-select cs-skin-border" tabindex="0"><span class="cs-placeholder">Ascending</span><div class="cs-options"><ul><li data-option="" data-value="ascending"><span>Ascending</span></li><li data-option="" data-value="descending"><span>Descending</span></li></ul></div><select class="cs-select cs-skin-border">
              <option value="" disabled="" selected="">Ascending</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select></div></div>
          <div class="post-filter__select">
            <label class="post-filter__label">Author</label>
            
          <div class="cs-select cs-skin-border" tabindex="0"><span class="cs-placeholder">All Authors</span><div class="cs-options"><ul><li data-option="" data-value="all"><span>All Authors</span></li><li data-option="" data-value="author1"><span>James Spiegel</span></li><li data-option="" data-value="author2"><span>Jessica Hoops</span></li><li data-option="" data-value="author3"><span>Mark Johnson</span></li></ul></div><select class="cs-select cs-skin-border">
              <option value="" disabled="" selected="">All Authors</option>
              <option value="all">All Authors</option>
              <option value="author1">James Spiegel</option>
              <option value="author2">Jessica Hoops</option>
              <option value="author3">Mark Johnson</option>
            </select></div></div>
          <div class="post-filter__submit">
            <button type="submit" class="btn btn-default btn-lg btn-block">Filter News</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
    }
  },  
  name: 'post-filter',
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