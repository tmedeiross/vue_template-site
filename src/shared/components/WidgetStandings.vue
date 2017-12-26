<template>
  <aside class="widget card widget--sidebar widget-standings">
    <div class="widget__title card__header card__header--has-btn">
        <h4>West League 2016</h4>
        <a href="#" class="btn btn-default btn-outline btn-xs card-header__button">See All Stats</a>
    </div>
    <div class="widget__content card__content">
        <div class="table-responsive">
            <table class="table table-hover table-standings">
            <thead>
                <tr>
                <th>Team Positions</th>
                <th>W</th>
                <th>L</th>
                <th>D</th>
                <th>PTS</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td>
                        <div class="team-meta">
                        <figure class="team-meta__logo">
                            <img :src="item.teamMetaLogo" alt="">
                        </figure>
                        <div class="team-meta__info">
                            <h6 class="team-meta__name">{{ item.teamMetaName }}</h6>
                            <span class="team-meta__place">{{ item.teamMetaPlace }}</span>
                        </div>
                        </div>
                    </td>
                    <td>{{ item.W }}</td>
                    <td>{{ item.L }}</td>
                    <td>{{ item.D }}</td>
                    <td>{{ item.pts }}</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</aside>
</template>

<script>
export default {
    name: 'widget-standings',
    data () {
        return {
        items: [],
        }
    },
    props: {
    teamMetaName: {
      type: String,
      required: true
    },
    teamMetaPlace: {
      type: String,
      required: true
    },
    teamMetaLogo: {
      type: String,
      required: true
    },
    W: {
      type: String,
      required: true
    },
    L: {
      type: String,
      required: true
    },
    D: {
      type: String,
      required: true
    },
    pts: {
      type: String,
      required: true
    },
  }    
}
</script>

<style scoped>
</style>