import Vue from 'vue'
import App from './App.vue'

import 'firefox-ui/dist/css/index.css';
import MUI from 'firefox-ui';
import Toast from '../components/lib/toast'

Vue.use(MUI);
Vue.use(Toast);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
