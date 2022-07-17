<template>
  <el-tooltip v-for="item in toolbars"
              class="box-item"
              effect="light"
              :content=item.tooltipMsg
              placement="bottom-start"
  >

    <el-popover v-if=item.popupUp
                placement="bottom"
                trigger="click"
                :popper-class=item.popupPaneCls
                width="auto"
    >
      <component :is=item.popupPane></component>
      <template #reference>
        <el-button link>
          <font-awesome-icon class="svg-icon" :icon=item.icon />
        </el-button>
      </template>
    </el-popover>
    <el-button v-else link>
      <font-awesome-icon class="svg-icon" :icon=item.icon />
    </el-button>
  </el-tooltip>
</template>
<script lang="ts">
import { ElPopover, ElButton } from 'element-plus'
import { reactive, ref } from 'vue'
import { toolbar as tb } from '@/components/eidt/toolbar'
import { faHeading, faPencil } from '@fortawesome/free-solid-svg-icons'
import Heading from '@/components/eidt/Heading.vue'

export default {
  components: {
    Heading
  },
  setup () {
    const toolbars = reactive([
      {
        name: 'faPencil',
        tooltipMsg: '字体设置',
        icon: faPencil,
        fn: () => {
        },
      }, {
        name: 'faHeading',
        tooltipMsg: '标题',
        icon: faHeading,
        popupUp: true,
        popupPane: Heading,
        popupPaneCls: 'heading-popup',
        fn: () => {
        }
      }
    ])
    return {
      toolbars,
    }
  },
}
</script>

<style scoped>
.heading-popup{

}
</style>
