<template>
  <div id="app">
     <rux-global-status-bar appName="Astro Vue Boilerplate">
      <rux-clock></rux-clock>
    </rux-global-status-bar>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="css">
@import '~astroux-static/css/astro.core.css';

/* if using CopyWebpackPlugin to load all the astroux-static stuff */
/* @import '/css/astro.core.css'; */

</style>
