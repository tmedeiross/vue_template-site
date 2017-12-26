<template>
  <div class="gallery__item col-xs-6 col-sm-4">
    <a href="_soccer_team-gallery-album.html" class="gallery__item-inner card">
      <figure class="gallery__thumb">
        <img src="assets/images/samples/post-img4.jpg" alt="">
        <span class="btn-fab gallery__btn-fab"></span>
      </figure>
      <div class="gallery__content card__content">
        <span class="gallery__icon">
          <span class="icon-camera"></span>
        </span>
        <div class="gallery__details">
          <h4 class="gallery__name">{{ galleryName }}</h4>
          <div class="gallery__date">{{ galleryDate }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'gallery-item-inner',
    props: {
    galleryName: {
      type: String,
      required: true
    },
    galleryDate: {
      type: String,
      required: true
    },
    
  }    
}
</script>

<style scoped>
</style>