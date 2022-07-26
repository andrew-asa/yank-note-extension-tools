<template>
  <div class="font-pick-root">
    <div class="font-pick-select-pane">
      <el-tabs v-model="activeCard" class="font-tabs" @tab-click="selectTable">
        <el-tab-pane label="字体颜色" name="font_color">
          <color-pick @selectColor="fontColorSure" :show-sure-button=false></color-pick>
        </el-tab-pane>
        <el-tab-pane label="字体大小" name="font_size">
          <font-size-pick @sure="fontSizeSure"></font-size-pick>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="pick-result">
      <div class="pick-items">
        <el-tag
          v-for="tag in dynamicTags"
          :key="tag"
          class="mx-1"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag.value }}
        </el-tag>
      </div>
      <div class="demo-show">
        <span class="show-panel" :style="{ 'color': selectColor , 'font-size' : selectSize}" @dblclick="applySelect">双击应用</span>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { ref } from 'vue'
import ColorPick from './ColorPick.vue'
import FontSizePick from './FontSizePick.vue'
import { isNoEmpty } from '@/utils/StringUtils'
import { run_no_exception } from '@/utils/ghost_base_utils'
import { backgroundColor, fontSetting } from '@/utils/ghost_base_toolbar'

export default {
  name: 'FontPick',
  components: {
    FontSizePick,
    ColorPick
  },
  methods: {
    applySelect: function () {

      // console.log("color:"+ this.selectColor + " font-size:"+this.selectSize)
      var selectColor = this.selectColor
      var selectSize = this.selectSize
      var obj = {}
      if (isNoEmpty(selectColor)) {
        obj["color"] = selectColor
      }
      if (isNoEmpty(selectSize)) {
        obj["font-size"] = selectSize
      }
      run_no_exception(fontSetting,obj)
      this.$emit('sure', obj)
    },
    selectTable: function (tab, event) {
      console.log(tab, event)
    },
    /**
     * 选择了
     * @param color
     */
    fontColorSure: function (color) {
      this.selectColor = color
      this.handleConfirm({
        type: 'color',
        value: color
      })
    },
    fontSizeSure: function (size) {
      this.selectSize = size
      this.handleConfirm({
        type: 'size',
        value: size
      })
    },
  },
  setup () {
    const activeCard = ref('font_color')
    const selectColor = ref('')
    const selectSize = ref('')
    const dynamicTags = ref([])

    function getDynamicTagIndexByType (type) {
      for (var i = 0; i < dynamicTags.value.length; i++) {
        var item = dynamicTags.value[i]
        // @ts-ignore
        if (item.type == type) {
          return i
        }
      }
      return -1
    }

    function handleClose (tag) {
      if (tag.type == 'color') {
        selectColor.value = ''
      } else {
        selectSize.value=''
      }
      var index = getDynamicTagIndexByType(tag.type)
      if (index >= 0) {
        // @ts-ignore
        dynamicTags.value.splice(dynamicTags.value.indexOf(index), 1)
      }
    }

    function handleConfirm (tag) {
      var index = getDynamicTagIndexByType(tag.type)
      if (index >= 0) {
        // dynamicTags.value[index] = tag
        // @ts-ignore
        dynamicTags.value[index].value = tag.value
      } else {
        // @ts-ignore
        dynamicTags.value.push(tag)
      }
    }

    return {
      activeCard,
      selectColor,
      selectSize,
      dynamicTags,
      handleClose,
      handleConfirm
    }
  }
}
</script>

<style scoped>
.font-pick-root {
  width: 220px;
}

.font-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.font-pick-root .pick-result{
  padding-top: 15px;
}

.font-pick-root .demo-show{
  padding-top: 15px;
  width: 220px;
}
.demo-show .show-panel{
  width: 220px;
  float: left;
  text-align:center
}
</style>
