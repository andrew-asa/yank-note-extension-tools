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
        >
          <component :is=item.popupPane></component>
          <template #reference>
            <el-button link>
              <font-awesome-icon class="svg-icon" :icon=item.icon />
            </el-button>
          </template>
        </el-popover>
        <el-button v-else link @click=item.fn()>
          <font-awesome-icon class="svg-icon" :icon=item.icon />
        </el-button>
      </el-tooltip>
    </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import { toolbar as tb} from "./toolbar";
import { ElButton } from 'element-plus'
import { faBold } from '@fortawesome/free-solid-svg-icons'
export default {

  setup () {
    const toolbars = reactive(tb)
    return {
      toolbars,
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
