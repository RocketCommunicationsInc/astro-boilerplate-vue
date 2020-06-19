import Vue from 'vue'
import App from './App.vue'
import 'astroux-static';

import '@astrouxds/rux-global-status-bar';
import '@astrouxds/rux-clock';
import '@astrouxds/rux-tree';
import '@astrouxds/rux-accordion';
import '@astrouxds/rux-button';
import '@astrouxds/rux-notification';
import '@astrouxds/rux-segmented-button';

new Vue({
  render: h => h(App),
}).$mount('#app')

