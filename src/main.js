import Vue from 'vue'
import App from './App.vue'
import 'astroux-static';

import '@astrouxds/rux-global-status-bar';
import '@astrouxds/rux-clock';

new Vue({
  render: h => h(App),
}).$mount('#app')
