<template>
  <div class="font-size-container">
    <div class="font-size s-12" @click="sure('12px')">12px</div>
    <div class="font-size s-14" @click="sure('14px')">14px</div>
    <div class="font-size s-15" @click="sure('15px')">16px</div>
    <div class="font-size s-16" @click="sure('16px')">16px</div>
    <div class="font-size s-17" @click="sure('17px')">17px</div>
    <div class="font-size s-18" @click="sure('18px')">18px</div>
    <div class="font-size s-20" @click="sure('20px')">20px</div>
    <div class="font-size s-24" @click="sure('24px')">24px</div>
    <div class="font-size-input-container">
      <el-input class="font-size-input" v-model="sizeInput" placeholder="" @input=inputSizeChange></el-input>
      <el-button class="font-size-input-sure" @click="inputSure()" type="success">确认</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { heading } from '@/utils/ghost_base_toolbar'
import { run_no_exception } from '@/utils/ghost_base_utils'
import { ref } from 'vue'
import { FONT_SIZE_PX_REG, isNoNegativeInteger, testStr } from '@/utils/StringUtils'

export default {
  props: {},
  methods: {
    sure (value) {
      console.log(value)
      // 向上传递事件
      this.sizeInput = value
      this.$emit('sure', value)
      // run_no_exception(heading,value)
    },
    inputSure () {
      var si = this.sizeInput
      if (testStr(si, FONT_SIZE_PX_REG)) {
        if (isNoNegativeInteger(si)) {
          si = si + 'px'
        }
        // this.sure(si)
        this.$emit('sure', si)
      }
    }
  },
  setup () {
    const sizeInput = ref('')
    return {
      sizeInput
    }
  },
}
</script>

<style scoped>
.font-size.s-12 {
  font-size: 12px;
}

.font-size.s-14 {
  font-size: 14px;
}

.font-size.s-16 {
  font-size: 16px;
}

.font-size.s-17 {
  font-size: 17px;
}

.font-size.s-18 {
  font-size: 18px;
}

.font-size.s-20 {
  font-size: 20px;
}

.font-size.s-24 {
  font-size: 24px;
}

.font-size {
  /*width: 100px;*/
  text-align: center;
}


.font-size:hover {
  background-color: #e4ebf5
}

.font-size-input {
  background-color: transparent;
  border: 0;
  outline: 0;
  /*line-height: 24px;*/
  height: 30px;
  width: 110px;
  margin-top: 20px;
}

.font-size-input-sure {
  margin-left: 6px;
  height: 30px;
}
</style>
