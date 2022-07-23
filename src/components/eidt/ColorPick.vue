<template>
  <div class="base_color">
    <div class="base_color_select_root">
      <el-tag class="select_item" v-for="item in baseColor" :color="item" hit="true"
              @click="selectColorItem(item)" @dblclick="sure"></el-tag>
    </div>
    <div class="base_color_input_root">
<!--      <el-tag class="select_result" :color=selectColor hit="true"></el-tag>-->
      <el-color-picker v-model="selectColor" @change="pickColor($event)"/>
      <el-input class="color_input" v-model="colorInput" placeholder="" @input="inputColorChange(value)"></el-input>
      <el-button class="color_sure" @click="sure()">确认</el-button>
    </div>


<!--    <el-input  placeholder="请输入" min="1" oninput ="value=value.replace(/^#([0-9a-fA-F]{0,6}|[0-9a-fA-F]{3})$/,'')"></el-input>-->
  </div>

</template>
<script lang="ts">
import { ref } from 'vue'
import { COLOR_REG, testStr } from '@/utils/StringUtils'

export default {
  props: {},
  methods:{
    sure(){
      // console.log("pick color:"+this.colorInput)
      this.$emit('sure', this.colorInput)
    }
  },
  setup (props) {
    const baseColor = ['#ffffff', '#ffd7d5', '#ffdaa9', '#fffed5', '#d4fa00', '#73fcd6', '#a5c8ff', '#ffacd5', '#ff7faa', '#d6d6d6', '#ffacaa', '#ffb995', '#fffb00', '#73fa79', '#00fcff', '#78acfe', '#d84fa9', '#ff4f79', '#b2b2b2', '#d7aba9', '#ff6827', '#ffda51', '#00d100', '#00d5ff', '#0080ff', '#ac39ff', '#ff2941', '#888888', '#7a4442', '#ff4c00', '#ffa900', '#3da742', '#3daad6', '#0052ff', '#7a4fd6', '#d92142', '#000000', '#7b0c00', '#ff4c41', '#d6a841', '#407600', '#007aaa', '#021eaa', '#797baa', '#ab1942']
    const selectColor = ref('#ffffff')
    const colorInput = ref('#ffffff')

    function isColorStr (str) {
      return testStr(str,COLOR_REG)
    }

    /**
     * 取色器取色
     * @param color
     */
    function pickColor (color) {
      colorInput.value = color
    }

    function selectColorItem (color) {
      selectColor.value = color
      colorInput.value = color
    }

    function  inputColorChange(value) {
      if (isColorStr(colorInput.value)) {
        selectColor.value = colorInput.value
      }
    }

    return {
      baseColor,
      selectColor,
      pickColor,
      colorInput,
      selectColorItem,
      inputColorChange,
    }
  },
}
</script>

<style scoped>
.base_color {
  width: 220px;
}

.base_color_select_root {
  width: 220px;
}

.base_color_select_root .select_item {
  float: left;
  width: 18px;
  height: 18px;
  margin: 0 4px 4px 0;
  cursor: pointer;

}

.base_color_input_root {
  padding-top: 15px;
}

.base_color_input_root .select_result {
  width: 30px;
  height: 30px;
  margin-right: 6px;
  padding-top: 11px;
}

.base_color_input_root .color_input {
  background-color: transparent;
  border: 0;
  outline: 0;
  /*line-height: 24px;*/
  height: 30px;
  width: 110px;
  margin-top: 20px;
}

.base_color_input_root .color_sure {
  margin-left: 6px;
  height: 30px;
}

</style>
