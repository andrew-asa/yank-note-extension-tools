<template>
  <!-- <el-card shadow="hover">卡片</el-card>
  <el-card>卡片</el-card>
  <el-card>卡片</el-card>
  <el-card>卡片</el-card> -->
  <!-- <el-card shadow="hover" v-for="t in templates" @click="activeTemplate(t)">{{ t.descript }}</el-card> -->
  <el-row>
    <el-col> <el-input v-model="searchInput" placeholder="搜索" :prefix-icon=Search
        @keyup.enter.native="searchTemplate" /></el-col>
  </el-row>
  <div>


  </div>
  <el-scrollbar max-height="800px">
    <el-card :class='{ active: activeId == t.id }' class="card" shadow="hover" v-for="t in showTemplates"
      @click="activeTemplate($event, t)">

      <div style="padding: 14px">
        <span>{{ t.descript }}</span>
        <div class="bottom">
          <time class="time">{{ getTime(t.updateTime) }}</time>
          <!-- <el-button text class="button">Operating</el-button> -->
          <!-- <el-button circle class="svg-icon"> <font-awesome-icon :icon=faEllipsis></font-awesome-icon> </el-button> -->
          <el-popover placement="right-start" trigger="click">
            <el-button link class="svg-icon" :icon="Delete" @click="deleteTemplate($event, t)"> </el-button>
            <el-button link class="svg-icon" :icon="Plus"> </el-button>
            <template #reference>
              <!-- <el-button circle class="svg-icon"> <font-awesome-icon :icon=faEllipsis></font-awesome-icon> </el-button> -->
              <el-button link class="card-op" :icon="More"> </el-button>
            </template>
          </el-popover>
        </div>
      </div>
    </el-card>
  </el-scrollbar>
</template>
<script lang="ts">
import { formatDate } from '@/utils/ghost_base_date';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import letfoperation from './letfoperation.vue'
import { Search, Plus, Delete, More } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import { reactive, ref } from 'vue';

export default {
  props: {
    // 模板信息
    templates: {
      type: Array,
      default: []
    }
  },
  components: {
  },
  data() {
    return {
      active: 'active',
      activeId: ''
    }
  },
  setup(props) {
    const searchInput = ref('')
    const ts = []
    for (let i in props.templates) {
      ts.push(props.templates[i])
    }
    const showTemplates = ref(ts)
    return {
      faEllipsis, searchInput, Search, Plus, Delete, More, showTemplates
    }
  },
  methods: {

    activeTemplate(event, t) {
      // console.log(t)
      this.activeId = t.id
      this.$emit("clickCard", t)
    },
    getTime(t) {
      return formatDate(t)
    },
    cardActive(t) {
      return this.activeId == t
    },
    deleteTemplate(enent, t) {
      var self = this
      ElMessageBox.confirm('Are you sure to delete this template?')
        .then(() => {
          self.doDeleteTemplate(t)
        })
        .catch(() => {
          // catch error
        })

    },
    searchByCondition(ts, fn) {
      var r = []
      for (let i in ts) {
        if (fn(ts[i])) {
          r.push(ts[i])
        }
      }
      return r
    },
    searchTemplate() {
      var s = this.searchInput
      var st = this.searchByCondition(this.templates, (t) => {
        var ds = t.descript
        return ds && ds.indexOf(s) != -1
      })
      this.showTemplates.value = st
      console.log(st)
    },
    doDeleteTemplate(t) {
      console.log(t)
      var self = this
      self.templates.forEach(function (item, index, arr) {
        if (item.id == t.id) {
          self.templates.splice(index, 1);
        }
      });

    }
  }
}

</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.button {
  padding: 0;
  min-height: auto;
}

.card.active {
  background-color: #f4f6f7;
}

.svg-icon:hover {
  background-color: #dde1e3;
}
</style>
