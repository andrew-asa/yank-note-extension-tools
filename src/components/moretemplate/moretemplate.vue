<template>
  <el-row>
    <el-col :span="4">
      <left :templates="templates" @edit=editCard @delete=deleteCard></left>
    </el-col>
    <el-col :span="16" :offset="1">
      <right :activeCary="activeCary" @save="saveCard"></right>
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
    },
    deleteCard(t) {
      // console.log(this.templates)
    },
    saveCard(t) {
      // console.log(this.templates)
    }
  },
  watch: {
    templates: {
      handler(newValue, oldValue) {
        console.log('props', newValue)
      },
      deep: true
    }
  }
}

</script>


<style></style>
