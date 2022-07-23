<template>
 <color-pick @sure="sure"></color-pick>
</template>

<script>
import ColorPick from './ColorPick.vue'
export default {
  components: { ColorPick },
  methods:{
    sure(value){
      console.log(value)
      // 向上传递事件
      this.$emit('sure',value)
    }
  },
  setup(props){
    return {

    }
  }
}
</script>

<style scoped>

</style>
