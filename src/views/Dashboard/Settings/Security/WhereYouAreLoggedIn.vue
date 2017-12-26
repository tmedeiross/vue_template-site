<template>
  <div id="where-you-are-logged-in">
    <ul class="list-group">
      <li class="list-group-item"
        v-for="(session, index) in sessionTokens.slice(0, limit)"
        v-bind:item="session"
        v-bind:index="index"
        v-bind:key="session.id">
        <dropdown>
          <li><a href="javascript:;">Not You?</a></li>
          <li><a @click="logOutSession(index)" href="javascript:;">Log Out</a></li>
        </dropdown>
        <!-- <strong>Windows PC · Rio de Janeiro, RJ, Brazil</strong> -->
        <strong>{{ session.user_agent }}</strong>
        <!-- <small>Chrome · October 14 at 11:03pm</small> -->
        <small>{{ session.iat }}</small>
        <small v-if="index === 0" class="text-primary">Current Session</small>
      </li>  
      <li class="list-group-item text-right" v-if="sessionTokens.length > 1">
        <a @click="seeMore()" v-if="limit < sessionTokens.length" href="javascript:;" class="pull-left">See More</a>
        <a @click="logOutOfAllSessions()" href="javascript:;">Log Out Of All Sessions</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Auth from '@/shared/Auth'
import Dropdown from '@/shared/components/Dropdown'
export default {
  name: 'where-you-are-logged-in',
  data () {
    return {
      limit: 3,
      steps: 3,
      sessionTokens: []
    }
  },
  methods: {
    logOutOfAllSessions () {
      if (confirm('Are you sure you want to log out of all sessions?')) {
        Auth.logOutOfAllSessions()
        this.sessionTokens.splice(1, this.sessionTokens.length)
      }
    },
    logOutSession (index) {
      let sessionToken = this.sessionTokens[index]
      if (index === 0) {
        Auth.logout()
      } else {
        Auth.logOutSession(sessionToken.id)
        this.sessionTokens.splice(index, 1)
      }
    },
    seeMore () {
      this.limit += this.steps
    }
  },
  created () {
    Auth.getSessionTokens(this)
  },
  components: {
    Dropdown
  }
}
</script>

<style scoped>
  small {
    display: block;
  }
  .list-group {
    margin-bottom: 0;
  }
</style>
