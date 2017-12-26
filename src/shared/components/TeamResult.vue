<template>
  <div class="card card--has-table">
    <div class="card__header card__header--has-btn">
      <h4>Latest Results</h4>
      <!-- Result Filter -->
      <ul class="team-result-filter">
        <li class="team-result-filter__item">
          <select class="form-control input-xs">
            <option>West League 2016</option>
            <option>West League 2015</option>
            <option>West League 2014</option>
          </select>
        </li>
        <li class="team-result-filter__item">
          <select class="form-control input-xs">
            <option>Game Date</option>
            <option>December 2016</option>
            <option>November 2016</option>
            <option>October 2016</option>
            <option>September 2016</option>
            <option>August 2016</option>
            <option>July 2016</option>
            <option>June 2016</option>
            <option>May 2016</option>
            <option>April 2016</option>
            <option>March 2016</option>
            <option>February 2016</option>
            <option>January 2016</option>
          </select>
        </li>
        <li class="team-result-filter__item">
          <select class="form-control input-xs">
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </li>
        <li class="team-result-filter__item">
          <button type="submit" class="btn btn-default btn-outline btn-xs card-header__button">Filter Latest Results</button>
        </li>
      </ul>
      <!-- Result Filter / End -->
    </div>
    <div class="card__content">
      <div class="table-responsive">
        <table class="table table-hover team-result">
          <thead>
            <tr>
              <th class="team-result__date">Date</th>
              <th class="team-result__vs">Versus</th>
              <th class="team-result__score">Score</th>
              <th class="team-result__status">Status</th>
              <th class="team-result__ball-posession">Ball Posession</th>
              <th class="team-result__shots">Shots (on goal)</th>
              <th class="team-result__fouls">Total Fouls</th>
              <th class="team-result__game-overview">Game Overview</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="team-result__date">{{ resultDate }}</td>
              <td class="team-result__vs">
                <div class="team-meta">
                  <figure class="team-meta__logo">
                    <img :src="resultLogo" alt="">
                  </figure>
                  <div class="team-meta__info">
                    <h6 class="team-meta__name">{{ teamMetaName }}</h6>
                    <span class="team-meta__place">{{ teamMetaPlace }}</span>
                  </div>
                </div>
              </td>
              <td class="team-result__score"><span class="team-result__game">W</span> 2-0</td>
              <td class="team-result__status">{{ resultStatus }}</td>
              <td class="team-result__ball-posession">{{ resultBallPosession }}</td>
              <td class="team-result__shots">{{ resultShots }}</td>
              <td class="team-result__fouls">{{ resultsFouls }}</td>
              <td class="team-result__game-overview"><a href="#" class="btn btn-xs btn-default btn-outline btn-block">See Full Overview</a></td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'team-result',
    props: {
    resultDate: {
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
    resultStatus: {
      type: String,
      required: true
    },
    resultBallPosession: {
      type: String,
      required: true
    },
    resultShots: {
      type: String,
      required: true
    },
    resultsFouls: {
      type: String,
      required: true
    },
  }    
}
</script>

<style scoped>
</style>