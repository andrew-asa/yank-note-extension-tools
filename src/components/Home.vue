<template>
  <el-button link v-for="link in links" type="success" @click="more(link)">{{ link.name }}</el-button>
</template>
<script lang="ts">
import { routes } from '@/render/router';
export default {
  components: {
  },
  setup() {
    const links = []
    var rs = routes
    for (let i = 0; i < rs.length; ++i) {
      var r = rs[i]
      links.push({
        name: r.describe || r.name,
        path: r.path
      })
    }
    return {
      links
    }
  },
  methods: {
    more(link) {
      console.log(link.name)
      this.$router.push(link.path)
    }
  }
}

</script>


<style>

</style>
