import Vue from 'vue'
import App from './App.vue'
import 'astroux-static';
import '../node_modules/@astrouxds/rux-global-status-bar';
import '../node_modules/@astrouxds/rux-clock';

new Vue({
  el: '#app',
  render: h => h(App)
})
