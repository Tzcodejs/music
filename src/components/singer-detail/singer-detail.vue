<template>
  <transition name="slide">
    <div class="singer-detail">
      <div>123</div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
