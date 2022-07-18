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
                :visible=item.popupVisible
    >
      <component :is=item.popupPane :hide="function() {
        hidePopup(item.name)
      }"></component>
      <template #reference>
        <el-button link @click="showPopup(item.name)">
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
        popupVisible:false,
        fn: () => {
        }
      }
    ])

    function getToolbarItem (name: string) {
      let len = toolbars.length
      for (let i = 0; i < len; i++) {
        if (toolbars[i].name == name) {
          return toolbars[i];
        }
      }
      return null
    }

    function showPopup (item:string) {
      // toolbars[item].popupVisible = true
      console.log("showPopup ",item)
      let ti = getToolbarItem(item)
      if (ti) {
        ti.popupVisible = true
      }
    }
    function hidePopup (item:string) {
      // toolbars[item].popupVisible = true
      console.log("hidePopup ",item)
      let ti = getToolbarItem(item)
      if (ti) {
       ti.popupVisible = false
      }
    }
    return {
      toolbars,
      showPopup,
      hidePopup
    }
  },
}
</script>

<style scoped>
.heading-popup{

}
</style>
