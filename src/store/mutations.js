import * as types from './mutation-type'

// 同步修改数据
const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutations
