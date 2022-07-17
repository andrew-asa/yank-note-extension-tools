<template>
  <div class="heading-container">
    <div class="heading h1" @click="head('#')">标题1</div>
    <div class="heading h2" @click="head('##')">标题2</div>
    <div class="heading h3" @click="head('###')">标题3</div>
    <div class="heading h4" @click="head('####')">标题4</div>
    <div class="heading h5" @click="head('#####')">标题5</div>
    <div class="heading" @click="head('')">正文</div>
  </div>

</template>
<script lang="ts">

export default {

  setup () {
    function head(head: string) {
      console.log(head)
    }
    return {
      head,
    }
  },
}
</script>

<style scoped>
.heading.h1{
  font-size: 2em;
}
.heading.h2{
  font-size: 1.5em;
}
.heading.h3{
  font-size: 1.17em;
}
.heading.h4{
}
.heading.h5{
  font-size: 0.83em;
}

.heading{
  /*width: 100px;*/
  text-align: center;
}
.heading-container{
  /*width: 100px;*/
  /*background: #67c23a;*/
}
.heading:hover {
  background-color: #e4ebf5
}

</style>
