<template>
  <div class="table-responsive">
    <table class="table table-hover team-schedule team-schedule--full">
      <thead>
        <tr>
          <th class="team-schedule__date">Date</th>
          <th class="team-schedule__versus">Versus</th>
          <th class="team-schedule__status">Status</th>
          <th class="team-schedule__time">Time</th>
          <th class="team-schedule__compet">Competition</th>
          <th class="team-schedule__venue">Venue</th>
          <th class="team-schedule__tickets">Tickets</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="team-schedule__date">Saturday, Mar 24</td>
          <td class="team-schedule__versus">
            <div class="team-meta">
              <figure class="team-meta__logo">
                <img src="assets/images/samples/logos/lucky_clovers_shield.png" alt="">
              </figure>
              <div class="team-meta__info">
                <h6 class="team-meta__name">{{ teamName }}</h6>
                <span class="team-meta__place">{{ teamPlace }}</span>
              </div>
            </div>
          </td>
          <td class="team-schedule__status">{{ status }}</td>
          <td class="team-schedule__time">{{ time }}</td>
          <td class="team-schedule__compet">{{ compet }}</td>
          <td class="team-schedule__venue">{{ venue }}</td>
          <td class="team-schedule__tickets"><a href="#" class="btn btn-xs btn-default btn-outline btn-block">{{ tickets }}</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'team-schedule',
    props: {
    teamName: {
      type: String,
      required: true
    },
    teamName: {
      type: String,
      required: true
    },
    teamPlace: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    compet: {
      type: String,
      required: true
    },
    venue: {
      type: String,
      required: true
    },
    tickets: {
      type: String,
      required: true
    }, 
  }    
}
</script>

<style scoped>
</style>