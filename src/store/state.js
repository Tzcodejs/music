import { playMode } from 'common/js/config'

const state = {
  singer: {},
  // 是否正在播放
  playing: false,
  // 是否全屏
  fullScreen: false,
  // 播放列表
  playList: [],
  // 播放模式
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}

export default state
