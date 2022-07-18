<template>
  <el-popover v-model:visible=state.item placement="bottom" :width="160">
    <p>Are you sure to delete this?</p>
    <div style="text-align: right; margin: 0">
      <el-button size="small" text @click="hide('item')">cancel</el-button>
      <el-button size="small" type="primary" @click="hide('item')">confirm</el-button>
    </div>
    <template #reference>
      <el-button @click="show('item')">Delete</el-button>
    </template>
  </el-popover>

  <el-popover v-model:visible=state.item2 placement="bottom" :width="160">
    <p>Are you sure to delete this?</p>
    <div style="text-align: right; margin: 0">
      <el-button size="small" text @click="hide('item2')">cancel</el-button>
      <el-button size="small" type="primary" @click="hide('item2')">confirm</el-button>
    </div>
    <template #reference>
      <el-button @click="show('item2')">ADD</el-button>
    </template>
  </el-popover>
</template>

<script lang="ts">
import { reactive, ref,toRefs } from 'vue'

// const visible = ref(false)

const state = reactive({
  item: false,
  item2:false
})
// const stateAsRefs = toRefs(state)
export default {
  setup () {
    const visible =state.item
    function hide (key:string) {
      console.log('hide ' + key)
      state[key] = false
    }

    function show (key:string) {
      console.log('show ' + key)
      state[key] = true
    }

    return {
      hide,
      show,
      state,
      visible
    }
  },
}
</script>
