import Vue from 'vue'
import Vuex from 'vuex'
import * as action from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  action,
  getters,
  state,
  mutations,
  // 在开发环境下使用严格模式，可以看到日志。但是有性能影响
  strict: debug
})
