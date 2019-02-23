<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    // 我们套的组件可能是动态变化的
    data: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  },
  // 监听子组件数据变化
  watch: {
    data() {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}

</script>
