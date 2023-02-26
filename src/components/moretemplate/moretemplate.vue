<template>
  <el-row>
    <el-col :span="4">
      <left></left>
    </el-col>
    <el-col :span="16">
      <right></right>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import Left from './left.vue'
import Right from './right.vue'


export default {
  props: {
    // 模板信息
    templates:{
      type: Array,
      default: []
    }
  },
  components: {
    Left,Right
  },
  stetup() {

    return {
    }
  },
  methods: {

  }
}

</script>


<style>

</style>
