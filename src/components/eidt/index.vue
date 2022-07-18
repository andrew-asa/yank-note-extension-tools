<template>
  <div id="toolbar">
    <!--      <el-tooltip v-for="item in toolbars"-->
    <!--                  class="box-item"-->
    <!--                  effect="light"-->
    <!--                  :content=item.tooltipMsg-->
    <!--                  placement="bottom-start"-->
    <!--      >-->
    <!--        <el-button link @click=item.fn()>-->
    <!--          <font-awesome-icon class="svg-icon" :icon=item.icon />-->
    <!--        </el-button>-->
    <!--      </el-tooltip>-->


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
            <font-awesome-icon class="svg-icon" :icon=item.icon ></font-awesome-icon>
          </el-button>
<!--          <el-button link>-->
<!--            <font-awesome-icon class="svg-icon" :icon=item.icon></font-awesome-icon>-->
<!--          </el-button>-->
        </template>
      </el-popover>
      <el-button v-else link @click=item.fn()>
        <font-awesome-icon class="svg-icon" :icon=item.icon></font-awesome-icon>
      </el-button>
    </el-tooltip>
  </div>
</template>
<script lang="ts">
import { reactive } from 'vue'
import { toolbar as tb } from './toolbar'
import { ElButton } from 'element-plus'
import { faBold } from '@fortawesome/free-solid-svg-icons'

export default {

  setup () {
    for (let entry of tb) {
      if (entry.popupUp) {
        // @ts-ignore
        entry.popupVisible = false
      }
    }
    const toolbars = reactive(tb)

    function getToolbarItem (name: string) {
      let len = toolbars.length
      for (let i = 0; i < len; i++) {
        if (toolbars[i].name == name) {
          return toolbars[i]
        }
      }
      return null
    }

    function showPopup (item: string) {
      // toolbars[item].popupVisible = true
      console.log('showPopup ', item)
      let ti = getToolbarItem(item)
      if (ti) {
        ti.popupVisible = true
      }
    }

    function hidePopup (item: string) {
      // toolbars[item].popupVisible = true
      console.log('hidePopup ', item)
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
#toolbar {

}


#toolbar .icon:hover {
  background-color: #e4ebf5
}

#toolbar .divider {
  font-size: 14px;
  margin-right: 8px;
  position: relative;
  color: #e1e6ed;
}
</style>
