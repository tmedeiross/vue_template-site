<template>
  <aside class="widget widget--sidebar card widget-preview">
    <div class="widget__title card__header">
      <h4>Next Match</h4>
    </div>
    <div class="widget__content card__content">
  
      <!-- Match Preview -->
      <div class="match-preview">
        <section class="match-preview__body">
          <header class="match-preview__header">
            <time class="match-preview__date" datetime="2017-05-17">{{ matchPreviewDate }}</time>
            <h3 class="match-preview__title match-preview__title--lg">{{ matchPreviewTitleLg }}</h3>
          </header>
          <div class="match-preview__content">
  
            <!-- 1st Team -->
            <div class="match-preview__team match-preview__team--first">
              <figure class="match-preview__team-logo">
                <img src="assets/images/soccer/logos/alchemists_buy_tickets.png" alt="">
              </figure>
              <h5 class="match-preview__team-name">{{ matchPreviewTeamNameFirst }}</h5>
              <div class="match-preview__team-info">{{ matchPreviewTeamInfoFirst }}</div>
            </div>
            <!-- 1st Team / End -->
  
            <div class="match-preview__vs">
              <div class="match-preview__conj">VS</div>
              <div class="match-preview__match-info">
                <time class="match-preview__match-time" datetime="2017-05-17 09:00">9:00 PM</time>
                <div class="match-preview__match-place">Madison Cube Stadium</div>
              </div>
            </div>
  
            <!-- 2nd Team -->
            <div class="match-preview__team match-preview__team--second">
              <figure class="match-preview__team-logo">
                <img src="assets/images/soccer/logos/pirates_buy_tickets.png" alt="">
              </figure>
              <h5 class="match-preview__team-name">{{ matchPreviewTeamNameSecond }}</h5>
              <div class="match-preview__team-info">{{ matchPreviewTeamInfoSecond }}</div>
            </div>
            <!-- 2nd Team / End -->
  
          </div>
        </section>
        <div class="countdown__content">
           <div class="countdown-counter" data-date="September 12, 2017 12:00:00">
              <Countdown deadline="August 22, 2018"></Countdown>
           </div>
        </div>
        <div class="match-preview__action match-preview__action--ticket">
          <a href="#" class="btn btn-primary-inverse btn-lg btn-block">Buy Tickets Now</a>
        </div>
      </div>
      <!-- Match Preview / End -->
  
    </div>
  </aside>
</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
  components: { Countdown },
  name: 'widget-match-preview',  
  props: {
    matchPreviewDate: {
      type: String,
      required: true
    },
    matchPreviewTitleLg: {
      type: String,
      required: true
    },
    matchPreviewTeamNameFirst: {
      type: String,
      required: true
    },
    matchPreviewTeamInfoFirst: {
      type: String,
      required: true
    },
    matchPreviewTeamNameSecond: {
      type: String,
      required: true
    },
    matchPreviewTeamInfoSecond: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
ul.vue-countdown {
    width:  100%;
}
ul.vue-countdown li {
    font-size: 26px;
    line-height: 1.2em;
    text-transform: uppercase;
    color: #31404b;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-align: center;
    float: left;
    width: 24%;
    position: relative;
}
ul.vue-countdown li .text {
    display: block;
    font-size: 10px;
    line-height: 1.2em;
    padding-top: 3px;
    color: #9a9da2;
}

.vue-countdown li:after {
    font-size: 26px;
    line-height: 1.2em;
    font-weight: normal;
}
</style>