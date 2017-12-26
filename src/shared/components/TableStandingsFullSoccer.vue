<template>
  <div class="table-responsive">
    <table class="table table-hover table-standings table-standings--full table-standings--full-soccer">
      <thead>
        <tr>
          <th class="team-standings__pos">Pos</th>
          <th class="team-standings__team">Teams</th>
          <th class="team-standings__played">Played</th>
          <th class="team-standings__win">Won</th>
          <th class="team-standings__lose">Lost</th>
          <th class="team-standings__drawn">Drawn</th>
          <th class="team-standings__goals-for">Goals For</th>
          <th class="team-standings__goals-against">Goals Against</th>
          <th class="team-standings__goals-diff">Goals Diff</th>
          <th class="team-standings__total-points">Total Points</th>
          <th class="team-standings__points-diff">Points Diff</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="team-standings__pos">01</td>
          <td class="team-standings__team">
            <div class="team-meta">
              <figure class="team-meta__logo">
                <img src="assets/images/samples/logos/pirates_shield.png" alt="">
              </figure>
              <div class="team-meta__info">
                <h6 class="team-meta__name">L.A Pirates</h6>
                <span class="team-meta__place">Bebop Institute</span>
              </div>
            </div>
          </td>
          <td class="team-standings__played">50</td>
          <td class="team-standings__win">36</td>
          <td class="team-standings__lose">14</td>
          <td class="team-standings__drawn">10</td>
          <td class="team-standings__goals-for">19</td>
          <td class="team-standings__goals-against">2</td>
          <td class="team-standings__goals-diff">17</td>
          <td class="team-standings__total-points">118</td>
          <td class="team-standings__points-diff">+ 15</td>
        </tr>
        <tr>
          <td class="team-standings__pos">02</td>
          <td class="team-standings__team">
            <div class="team-meta">
              <figure class="team-meta__logo">
                <img src="assets/images/samples/logos/sharks_shield.png" alt="">
              </figure>
              <div class="team-meta__info">
                <h6 class="team-meta__name">{{ teamName }}</h6>
                <span class="team-meta__place">{{ teamPlace }}</span>
              </div>
            </div>
          </td>
          <td class="team-standings__played">{{ played }}</td>
          <td class="team-standings__win">{{ win }}</td>
          <td class="team-standings__lose">{{ lose }}</td>
          <td class="team-standings__drawn">{{ drawn }}</td>
          <td class="team-standings__goals-for">{{ goalsFor }}</td>
          <td class="team-standings__goals-against">{{ goalsAgainst }}</td>
          <td class="team-standings__goals-diff">{{ goalsDiff }}</td>
          <td class="team-standings__total-points">{{ totalPoints }}</td>
          <td class="team-standings__points-diff">{{ pointsDiff }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {  
  name: 'table-standings-full-soccer',
    props: {
      teamName: {
        type: String,
        required: true
      },
      teamName: {
        type: String,
        required: true
      },
      played: {
        type: String,
        required: true
      },
      win: {
        type: String,
        required: true
      },
      lose: {
        type: String,
        required: true
      },
      drawn: {
        type: String,
        required: true
      },
      goalsFor: {
        type: String,
        required: true
      },
      goalsAgainst: {
        type: String,
        required: true
      },
      goalsDiff: {
        type: String,
        required: true
      },
      totalPoints: {
        type: String,
        required: true
      },
      pointsDiff: {
        type: String,
        required: true
      }, 
  }   
}
</script>
<style scoped>
</style>