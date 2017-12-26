<template>
  <div class="team-roster team-roster--card team-roster--card-slider">
    <!-- Player -->
    <div class="team-roster__item card card--no-paddings">
      <div class="card__content">
        <div class="team-roster__content-wrapper">

          <!-- Player Photo -->
          <figure class="team-roster__player-img">
            <div class="team-roster__player-shape"></div>
            <img src="assets/images/soccer/rosterv3_player_01.png" alt="">
          </figure>
          <!-- Player Photo / End-->

          <!-- Player Content -->
          <div class="team-roster__content">

            <!-- Player Details -->
            <div class="team-roster__player-details">
              <div class="team-roster__player-number">07</div>
              <div class="team-roster__player-info">
                <h3 class="team-roster__player-name">
                  <span class="team-roster__player-first-name">{{ playerFirstName }}</span>
                  <span class="team-roster__player-last-name">{{ playerLastName }}</span>
                </h3>
              </div>
            </div>
            <!-- Player Details / End -->

            <!-- Player Excerpt -->
            <div class="team-roster__player-excerpt">
              {{ excerpt }}
            </div>
            <!-- Player Excerpt / End -->

            <!-- Player Stats -->
            <div class="team-roster__player-stats">

              <!-- Progress: Shot Accuracy -->
              <div class="progress-stats mb-20">
                <div class="progress__label progress__label--color-default">Shot Accuracy</div>
                <div class="progress">
                  <div class="progress__bar progress__bar--success progress__bar-width-90" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress__number progress__number--color-highlight">{{ progressShot }}</div>
              </div>
              <!-- Progress: Shot Accuracy / End -->

              <!-- Progress: Pass Accuracy -->
              <div class="progress-stats mb-20">
                <div class="progress__label progress__label--color-default">Pass Accuracy</div>
                <div class="progress">
                  <div class="progress__bar progress__bar--success progress__bar-width-70" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress__number progress__number--color-highlight">{{ progressPass }}</div>
              </div>
              <!-- Progress: Pass Accuracy / End -->

              <!-- Progress: Perfomance -->
              <div class="progress-stats mb-20">
                <div class="progress__label progress__label--color-default">Perfomance</div>
                <div class="progress">
                  <div class="progress__bar progress__bar--success progress__bar-width-80" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress__number progress__number--color-highlight">{{ progressPerfomance }}</div>
              </div>
              <!-- Progress: Perfomance / End -->

            </div>
            <!-- Player Stats / End -->

            <!-- Player Footer -->
            <footer class="team-roster__player-footer">
              <a href="#" class="btn btn-primary-inverse">Read Full Bio</a>
              <a href="#" class="btn btn-single-icon btn-facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="btn btn-single-icon btn-twitter"><i class="fa fa-twitter"></i></a>
            </footer>
            <!-- Player Footer / End -->
          </div>
          <!-- Player Content / End -->

          <!-- Player Meta Info -->
          <aside class="team-roster__meta">
            <div class="team-roster__meta-item team-roster__meta-item--lg">
              <div class="team-roster__meta-value">{{ goals }}</div>
              <div class="team-roster__meta-label">Goals</div>
            </div>
            <div class="team-roster__meta-item">
              <div class="team-roster__meta-value">{{ games }}</div>
              <div class="team-roster__meta-label">Games</div>
            </div>
            <div class="team-roster__meta-item">
              <div class="team-roster__meta-value">{{ position }}</div>
              <div class="team-roster__meta-label">Position</div>
            </div>
            <div class="team-roster__meta-item">
              <div class="team-roster__meta-value">{{ foot }}</div>
              <div class="team-roster__meta-label">Foot</div>
            </div>
          </aside>
          <!-- Player Meta Info / End -->

        </div>
      </div>
    </div>
    <!-- Player / End -->
  </div>
</div>
</template>

<script>
export default {  
  name: 'team-roster-card',
    props: {
    playerFirstName: {
      type: String,
      required: true
    },
    playerLastName: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    progressShot: {
      type: String,
      required: true
    },
    progressPass: {
      type: String,
      required: true
    },
    progressPerfomance: {
      type: String,
      required: true
    },
    goals: {
      type: String,
      required: true
    },
    games: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
  }    
}
</script>

<style scoped>
</style>