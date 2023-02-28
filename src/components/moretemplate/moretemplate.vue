<template>
  <el-row>
    <el-col :span="4">
      <left :templates="templates" @clickCard=editCard></left>
    </el-col>
    <el-col :span="16" :offset="1">
      <right :activeCary="activeCary"></right>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import Left from './left.vue'
import Right from './right.vue'


export default {
  props: {
    // 模板信息
    templates: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      activeCary: {}
    }
  },
  components: {
    Left, Right
  },
  stetup() {

  },
  methods: {
    editCard(c) {
      this.activeCary = c
    }

  }
}

</script>


<style></style>
