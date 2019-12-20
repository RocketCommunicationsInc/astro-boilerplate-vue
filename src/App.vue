<template>
  <div id="app">
     <rux-global-status-bar appName="Astro Vue Bootstrap">
      <rux-clock></rux-clock>
    </rux-global-status-bar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Astro Vue.js App'
    }
  }
}
</script>

<style lang="css">
@import '/src/assets/astro.core.min.css';
</style>
