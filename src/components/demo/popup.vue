<template>
  <el-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button>Hover to activate</el-button>
    </template>
  </el-popover>

  <el-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="click"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button>Click to activate</el-button>
    </template>
  </el-popover>

  <el-popover
    ref="popover"
    placement="right"
    title="Title"
    :width="200"
    trigger="focus"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button>Focus to activate</el-button>
    </template>
  </el-popover>

  <el-popover
    ref="popover"
    title="Title"
    :width="200"
    trigger="contextmenu"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button>contextmenu to activate</el-button>
    </template>
  </el-popover>

  <el-popover
    v-model:visible="visible"
    placement="bottom"
    title="Title"
    :width="200"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button @click="visible = !visible">Manual to activate</el-button>
    </template>
  </el-popover>
</template>
<script lang="ts">
import { ElPopover,ElButton } from 'element-plus'
import { reactive, ref } from 'vue'
import { toolbar as tb } from '@/components/eidt/toolbar'
export default {

  setup () {
    const visible = reactive(new Boolean(false))
  },
}
</script>

<style scoped>
</style>
