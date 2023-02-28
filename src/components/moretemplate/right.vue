<template>
  {{activeCary.descript}}
  {{activeCary.template}}
</template>
<script lang="ts">


export default {
  props: {
    // 模板信息
    activeCary:{
      type: Object,
      default: {}
    }
  },
  components:{
  },

  setup () {
    
    return {
    }
  },
  methods:{
   
  }
}

</script>


<style>
</style>
