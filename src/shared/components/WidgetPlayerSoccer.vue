<template>
  <aside class="widget card widget--sidebar widget-player widget-player--soccer">
    <div class="widget__content card__content">
      <div class="widget-player__ribbon">
        <div class="fa fa-star"></div>
      </div>
      <figure class="widget-player__photo">
        <img :src="widgetPlayerPhoto" alt="">
      </figure>
      <header class="widget-player__header clearfix">
        <div class="widget-player__number">07</div>
        <h4 class="widget-player__name">
          <span class="widget-player__first-name">{{ widgetPlayerFirstName }}</span>
          <span class="widget-player__last-name">{{ widgetPlayerLastName }}</span>
        </h4>
      </header>
      <div class="widget-player__content">
        <div class="widget-player__content-inner">
  
          <div class="widget-player__stat widget-player__goals">
            <div class="widget-player__stat-number">{{ widgetPlayerStatNumberGoals }}</div>
            <h6 class="widget-player__stat-label">Goals</h6>
          </div>
          <div class="widget-player__stat widget-player__shots">
            <div class="widget-player__stat-number">{{ widgetPlayerStatNumberShots }}</div>
            <h6 class="widget-player__stat-label">Shots</h6>
          </div>
          <div class="widget-player__stat widget-player__assists">
            <div class="widget-player__stat-number">{{ widgetPlayerStatNumberAssists }}</div>
            <h6 class="widget-player__stat-label">Assists</h6>
          </div>
          <div class="widget-player__stat widget-player__games">
            <div class="widget-player__stat-number">{{ widgetPlayerStatNumberGames }}</div>
            <h6 class="widget-player__stat-label">Games</h6>
          </div>
        </div>
  
        <div class="widget-player__content-alt">
          <!-- Progress: Shot Accuracy -->
          <div class="progress-stats">
            <div class="progress__label">SHOT ACC</div>
            <div class="progress">
              <div class="progress__bar progress__bar--success progress__bar-width-90" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress__number">{{ progressNumberShot }}</div>
          </div>
          <!-- Progress: Shot Accuracy / End -->
  
          <!-- Progress: Pass Accuracy -->
          <div class="progress-stats">
            <div class="progress__label">PASS ACC</div>
            <div class="progress">
              <div class="progress__bar progress__bar--success progress__bar-width-70" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress__number">{{ progressNumberPass }}</div>
          </div>
          <!-- Progress: Pass Accuracy / End -->
        </div>
      </div>
  
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      items: [],
    }
  },  
  name: 'widget-player-soccer',
  props: {
    widgetPlayerPhoto: {
      type: String,
      required: true
    },
    widgetPlayerFirstName: {
      type: String,
      required: true
    },
    widgetPlayerLastName: {
      type: String,
      required: true
    },
    widgetPlayerStatNumberGoals: {
      type: String,
      required: true
    },
    widgetPlayerStatNumberShots: {
      type: String,
      required: true
    },
    widgetPlayerStatNumberAssists: {
      type: String,
      required: true
    },
    widgetPlayerStatNumberGames: {
      type: String,
      required: true
    },
    progressNumberShot: {
      type: String,
      required: true
    },
    progressNumberPass: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
</style>