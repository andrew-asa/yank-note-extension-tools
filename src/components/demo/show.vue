<template>
  <Edit></Edit>
  <el-button type="success" @click="toggleToolbar"> {{showToolbar?'隐藏':'显示'}}</el-button>
</template>
<script lang="ts">
import Edit from '../eidt/index.vue'
import { useStore } from 'vuex'
import { reactive, toRefs } from 'vue'
import { toggleToolbar } from '@/utils/ghost_base_toolbar'

export default {
  components:{
    Edit
  },
  setup () {
    const store = useStore()
    const { showToolbar } = toRefs<AppState>(store.state)

    return {
      showToolbar,
      toggleToolbar
    }
  },
}

</script>


<style>
</style>
