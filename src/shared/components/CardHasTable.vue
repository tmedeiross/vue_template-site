<template>
  <div class="card card--has-table">
    <div class="card__header card__header--has-btn">
      <h4>Last Games Log</h4>
      <a href="_soccer_player-stats.html" class="btn btn-default btn-outline btn-xs card-header__button">See complete games log</a>
    </div>
    <div class="card__content">
      <div class="table-responsive">
        <table class="table table-hover game-player-result">
          <thead>
            <tr>
              <th class="game-player-result__date">Date</th>
              <th class="game-player-result__vs">Versus</th>
              <th class="game-player-result__score">Score</th>
              <th class="game-player-result__min">Min</th>
              <th class="game-player-result__tg">TG</th>
              <th class="game-player-result__ts">TS</th>
              <th class="game-player-result__ga">GA</th>
              <th class="game-player-result__fc">FC</th>
              <th class="game-player-result__fs">FS</th>
              <th class="game-player-result__yc">YC</th>
              <th class="game-player-result__rc">RC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="game-player-result__date">{{ createdAt }}0</td>
              <td class="game-player-result__vs">
                <div class="team-meta">
                  <figure class="team-meta__logo">
                    <img src="assets/images/samples/logos/sharks_shield.png" alt="">
                  </figure>
                  <div class="team-meta__info">
                    <h6 class="team-meta__name">{{ teamMetaName}}</h6>
                    <span class="team-meta__place">{{ teamMetaPlace }}</span>
                  </div>
                </div>
              </td>
              <td class="game-player-result__score"><span class="game-player-result__game">W</span> {{ score }}</td>
              <td class="game-player-result__min">{{ min }}</td>
              <td class="game-player-result__tg">{{ tg }}</td>
              <td class="game-player-result__ts">{{ ts }}</td>
              <td class="game-player-result__ga">{{ ga }}</td>
              <td class="game-player-result__fc">{{ fc }}</td>
              <td class="game-player-result__fs">{{ fs }}</td>
              <td class="game-player-result__yc">{{ yc }}</td>
              <td class="game-player-result__rc">{{ rc }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'post-card',
  props: {
    createdAt: {
      type: String,
      required: true
    },
    teamMetaName: {
      type: String,
      required: true
    },
    teamMetaPlace: {
      type: String,
      required: true
    },
    score: {
      type: String,
      required: true
    },
    min: {
      type: String,
      required: true
    },
    tg: {
      type: String,
      required: true
    },
    ts: {
      type: String,
      required: true
    },
    ga: {
      type: String,
      required: true
    },
    fc: {
      type: String,
      required: true
    },
    fs: {
      type: String,
      required: true
    },
    yc: {
      type: String,
      required: true
    },
    rc: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
</style>


