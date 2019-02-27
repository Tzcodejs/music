<template>
  <transition name="slide">
    <music-list :songs="songs" :title="title" :bg-iamge="bgIamge"></music-list>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import MusicList from 'components/music-list/music-list'
import { getSingerDetail } from 'api/singer'
import { ERR_OK } from 'api/config'
import { createSong, isValidMusic, processSongsUrl } from 'common/js/song'
export default {
  data () {
    return {}
  },
  computed: {
    title() {
      return this.singer.name
    },
    bgImage() {
      return this.singer.avatar
    },
    ...mapGetters([
      'singer'
    ])
  },
  created() {
    this._getDetail()
  },
  methods: {
    _getDetail() {
      // 通过判断这里的id，来知道用户是通过列表进来还是直接当前页面刷新的
      if (!this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {
          processSongsUrl(this._normalizeSongs(res.data.list)).then((songs) => {
            this.songs = songs
          })
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((item) => {
        let {musicData} = item
        if (isValidMusic(musicData)) {
          // 这里不用new了
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  components: {
    MusicList
  }
}

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
