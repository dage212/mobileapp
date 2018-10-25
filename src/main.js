import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import VideoPlayer from 'vue-video-player'
import 'muse-ui/dist/muse-ui.css'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import './registerServiceWorker'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: '0Gn1OSXG5A2GzMI4mB4fDde8xIlQqiB5'
})
Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.use(VideoPlayer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
