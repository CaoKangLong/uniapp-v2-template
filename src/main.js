import Vue from 'vue'
import App from './App'
// vuex
import store from '@/store'

// 多语言 需要则配置
// import VueI18n from 'vue-i18n'
// import messages from '@/locale/index'
// let i18nConfig = {
//   locale: uni.getLocale(), // 获取已设置的语言
//   messages
// }
// Vue.use(VueI18n)
// const i18n = new VueI18n(i18nConfig);

// uView ui 
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
uni.$u.config.unit = 'rpx'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  i18n,
  store,
  ...App
})
app.$mount()
