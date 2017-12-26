<template>
  <div class="card__content">
    <div class="card">
      <div class="card__content">

        <div class="row">
          <div class="col-md-6">
              <div class="alc-staff__photo">
                <img src="assets/images/samples/roster_player_06.jpg" alt="">
              </div>
            </div>
          <div class="col-md-6">
            <div class="alc-staff-inner">
              <header class="alc-staff__header">
                <h1 class="alc-staff__header-name">{{ staffHeaderFirstName }} <span class="alc-staff__header-last-name">{{ staffHeaderLastName }}</span></h1>
                <span class="alc-staff__header-role">Coach</span>
              </header>

              <!-- Excerpt -->
              <div class="alc-staff-excerpt">
                {{ excerpt }}
              </div>
              <!-- Excerpt / End -->
              
              <!-- Details -->
              <dl class="alc-staff-details">
                <dt class="alc-staff-details__label">Born:</dt>
                <dd class="alc-staff-details__value">{{ staffDetailsBorn }}</dd>

                <dt class="alc-staff-details__label">Age:</dt>
                <dd class="alc-staff-details__value">{{ staffDetailsAge }}</dd>

                <dt class="alc-staff-details__label">Birthday:</dt>
                <dd class="alc-staff-details__value">{{ staffDetailsBirthday }}</dd>

                <dt class="alc-staff-details__label">Current Team:</dt>
                <dd class="alc-staff-details__value">{{ staffDetailsCurrentTeam }}</dd>

                <dt class="alc-staff-details__label">Past Teams:</dt>
                <dd class="alc-staff-details__value">{{ staffDetailsPastTeams }}</dd>

                <dt class="alc-staff-details__label">Competitions:</dt>
                <dd class="alc-staff-details__value">{{ staffDetailsCompetitions }}</dd>

                <dt class="alc-staff-details__label">Seasons:</dt>
                <dd class="alc-staff-details__value">{{ staffDetailsSeasons }}</dd>
                
              </dl>
              <!-- Details / End -->

            </div>

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'staff-bio-card',
    props: {
    staffHeaderFirstName: {
      type: String,
      required: true
    },
    staffHeaderLastName: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    staffDetailsBorn: {
      type: String,
      required: true
    },
    staffDetailsAge: {
      type: String,
      required: true
    },
    staffDetailsBirthday: {
      type: String,
      required: true
    },
    staffDetailsCurrentTeam: {
      type: String,
      required: true
    },
    staffDetailsPastTeams: {
      type: String,
      required: true
    },
    staffDetailsCompetitions: {
      type: String,
      required: true
    },
    staffDetailsSeasons: {
      type: String,
      required: true
    },
  }    
}
</script>

<style scoped>
</style>