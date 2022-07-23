<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>

</template>
<script lang="ts">
import { heading } from '@/utils/ghost_base_toolbar'

export default {
  props: {

  },
  setup (props) {
    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]
    return {
      tableData,
    }
  },
}
</script>

<style scoped>
.heading.h1 {
  font-size: 2em;
}

.heading.h2 {
  font-size: 1.5em;
}

.heading.h3 {
  font-size: 1.17em;
}

.heading.h4 {
}

.heading.h5 {
  font-size: 0.83em;
}

.heading {
  /*width: 100px;*/
  text-align: center;
}

.heading-container {
  /*width: 100px;*/
  /*background: #67c23a;*/
}

.heading:hover {
  background-color: #e4ebf5
}

</style>
