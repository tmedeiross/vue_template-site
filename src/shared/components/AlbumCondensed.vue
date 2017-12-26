<template>
  <div class="album__item col-xs-6 col-sm-4" style="position: absolute; left: 0%; top: 0px;">
    <div class="album__item-holder">
      <a href="assets/images/samples/album-img1.jpg" class="album__item-link mp_gallery">
        <figure class="album__thumb">
          <img src="assets/images/samples/album-img1.jpg" alt="">
        </figure>
        <div class="album__item-desc">
          <h4 class="album__item-title">{{ albumItemTitle }}</h4>
          <time class="album__item-date" datetime="2016-08-23">{{ albumItemDate }}</time>
          <span class="album__item-btn-fab btn-fab btn-fab--clean"></span>
        </div>
      </a>
      <ul class="album__item-meta meta">
        <li class="meta__item meta__item--likes"><a href="#"><i class="meta-like meta-like--active icon-heart"></i> {{ albumItemLike }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {  
  name: 'album-condensed',
    props: {
    albumItemTitle: {
      type: String,
      required: true
    },
    albumItemDate: {
      type: String,
      required: true
    },
    albumItemLike: {
      type: String,
      required: true
    }
  }    
}
</script>

<style scoped>
</style>