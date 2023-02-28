<template>
  <el-button link @click=searchIcon> {{url}}</el-button>
</template>
<script lang="ts">

export default {
  components: {
  },
  setup() {
     const url = "https://element-plus.gitee.io/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88"
     return {
      url
     }
  },
  methods: {
   searchIcon(){
      window.open(this.url)
   }
  }
}

</script>


<style></style>
