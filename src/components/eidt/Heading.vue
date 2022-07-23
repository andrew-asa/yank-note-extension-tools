<template>
  <div class="heading-container" v-on:mouseleave=mouseleave>
    <div class="heading h1" @click="sure('#')">标题1</div>
    <div class="heading h2" @click="sure('##')">标题2</div>
    <div class="heading h3" @click="sure('###')">标题3</div>
    <div class="heading h4" @click="sure('####')">标题4</div>
    <div class="heading h5" @click="sure('#####')">标题5</div>
    <div class="heading" @click="sure('')">正文</div>
  </div>

</template>
<script lang="ts">
import { heading } from '@/utils/ghost_base_toolbar'

export default {
  props: {
    hide: {
      type: Function,
      default: () => {
        console.log("after click")
      }
    }
  },
  methods:{
    sure(value){
      console.log(value)
      // 向上传递事件
      this.$emit('sure',value)
    }
  },
  setup (props) {
    // function head (prefix: string) {
    //   // console.log(prefix)
    //   props.hide()
    //   heading(prefix)
    // }
    //
    // function mouseleave () {
    //   // console.log("mouseleave")
    //   props.hide()
    // }

    return {
      // head,
      // mouseleave
    }
  },
}
</script>

<style scoped>
.heading.h1 {
  font-size: 2em;
}

.heading.h2 {
  font-size: 1.5em;
}

.heading.h3 {
  font-size: 1.17em;
}

.heading.h4 {
}

.heading.h5 {
  font-size: 0.83em;
}

.heading {
  /*width: 100px;*/
  text-align: center;
}

.heading-container {
  /*width: 100px;*/
  /*background: #67c23a;*/
}

.heading:hover {
  background-color: #e4ebf5
}

</style>
