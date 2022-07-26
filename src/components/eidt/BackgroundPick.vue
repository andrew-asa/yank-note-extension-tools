<template>
  <color-pick @sure="sure"></color-pick>
</template>

<script lang="ts">
import ColorPick from './ColorPick.vue'
import { backgroundColor, heading } from '@/utils/ghost_base_toolbar'
import { run_no_exception } from '@/utils/ghost_base_utils'

export default {
  components: { ColorPick },
  methods: {
    sure (value) {
      run_no_exception(backgroundColor,value)
      // 向上传递事件
      this.$emit('sure', value)
    }
  },
  // @ts-ignore
  setup (props) {
    return {}
  }
}
</script>

<style scoped>

</style>
