<template>
  <div id="settings">
    <h2>Settings</h2>
    <ul class="nav nav-pills" role="tablist">
      <router-link to="/dashboard/settings" tag="li" exact active-class="active">
        <a>General</a>
      </router-link>
      <router-link to="/dashboard/settings/privacy" tag="li" exact active-class="active">
        <a>Privacy</a>
      </router-link>
      <router-link to="/dashboard/settings/security" tag="li" exact active-class="active">
        <a>Security</a>
      </router-link>
      <router-link to="/dashboard/settings/language" tag="li" exact active-class="active">
        <a>Language</a>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'settings'
}
</script>

<style scoped>
</style>
