// 使用getter取数据
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playList = state => state.playList

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

// 获得当前播放歌曲,通过计算获得
export const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}
