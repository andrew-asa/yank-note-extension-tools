<template>
  <div id="toolbar" v-show="showToolbar">
    <el-tooltip v-for="item in toolbars"
                class="box-item"
                effect="light"
                :content=item.tooltipMsg
                placement="bottom-start"
    >

      <el-popover v-if=item.popupUp
                  placement="bottom"
                  trigger="hover"
                  :popper-class=item.popupPaneCls
                  width="auto"

      >
<!--        <component :is=item.popupPane @mouseleave="()=>hidePopup(item.name)"-->
<!--                   @sure="()=>hidePopup(item.name)"></component>-->

        <component :is=item.popupPane
                   @sure="()=>hidePopupByHand(item.name)"></component>
        <template #reference>
          <el-button link @click="showPopup(item.name)">
            <font-awesome-icon class="svg-icon" :icon=item.icon></font-awesome-icon>
          </el-button>
        </template>
      </el-popover>
      <el-button v-else link @click=item.fn()>
        <font-awesome-icon class="svg-icon" :icon=item.icon></font-awesome-icon>
      </el-button>
    </el-tooltip>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue'
import { toolbar as tb } from './toolbar'
import { useStore } from 'vuex'
import Heading from '@/components/eidt/Heading.vue'
import BackgroundPick from '@/components/eidt/BackgroundPick.vue'
import FontPick from '@/components/eidt/FontPick.vue'
import { AppState } from '@/render/store'
export default {
  components: {
    "Heading": Heading,
    "BackgroundPick": BackgroundPick,
    "FontPick": FontPick,
  },
  methods:{
    hidePopupByHand: function (name) {

    },

  },
  setup () {
    const store = useStore()
    const { showToolbar } = toRefs<AppState>(store.state)

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
      // console.log('showPopup ', item)
      let ti = getToolbarItem(item)
      if (ti) {
        // @ts-ignore
        ti.popupVisible = true
      }
    }

    function hidePopup (item: string) {
      // toolbars[item].popupVisible = true
      // console.log('hidePopup ', item)
      let ti = getToolbarItem(item)
      if (ti) {
        // @ts-ignore
        ti.popupVisible = false
      }
    }

    return {
      showToolbar,
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
