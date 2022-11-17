import Vue from 'vue'
import App from './App'
// vuex
import store from '@/store'

// uview ui
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
// 配置uview ui默认值
uni.$u.config.unit = 'rpx'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App,
  store
})
app.$mount()