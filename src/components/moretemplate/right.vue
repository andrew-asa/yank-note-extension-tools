<template>
  <el-form :model="activeCary" label-width="80px" v-if="activeCary.id">
    <el-form-item label="模板名称">
      <el-input v-model="activeCary.descript" />
    </el-form-item>
    <el-form-item label="模板">
      <el-input v-model="activeCary.template" type="textarea" rows="8" />
    </el-form-item>
    <el-form-item label="预览">
      <el-input v-model="formatterTemplate" type="textarea" rows="8" disabled="true" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="saveTemplate">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { compile } from '@/utils/template'


export default {
  props: {
    // 模板信息
    activeCary: {
      type: Object,
      default: {}
    }
  },
  components: {
  },

  setup() {

    return {
    }
  },
  computed: {
    formatterTemplate() {
      return compile(this.activeCary.template) 
    }
  },
  methods: {
    saveTemplate(t) {
      this.$emit('save', this.activeCard)
    },

  }
}

</script>


<style></style>
