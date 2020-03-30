<template>
  <div class="learning-item-page">
    <el-table :data="learningItems" style="width: 100%">
      <el-table-column
        align="left"
        prop="memoItem.front"
        :show-overflow-tooltip="true"
        label="题面"
      >
      </el-table-column>
      <el-table-column align="left" prop="memoItem.tip" :show-overflow-tooltip="true" label="提示">
      </el-table-column>
      <el-table-column
        align="left"
        prop="memoItem.back"
        :show-overflow-tooltip="true"
        label="答案"
      ></el-table-column>
      <el-table-column align="left" prop="ef" label="EF值"> </el-table-column>
      <el-table-column
        align="left"
        prop="lastLearnDate"
        :formatter="dateCellFormatter"
        label="上次学习时间"
      >
      </el-table-column>
      <el-table-column
        align="left"
        prop="nextLearnDate"
        :formatter="dateCellFormatter"
        label="下次学习时间"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import axios, { AxiosResponse } from 'axios';
import { Table, TableColumn } from 'element-ui';
import { LearningItem } from '../../interface/learning-item';
import format from 'date-fns/format';

@Component({
  components: {
    'el-table': Table,
    'el-table-column': TableColumn
  }
})
export default class LearningItemPage extends Vue {
  public learningItems: LearningItem[] = [];

  created() {
    axios
      .get(`/api/learning-items`, {
        params: {
          offset: 0,
          limit: 100
        }
      })
      .then((response: AxiosResponse<LearningItem[]>) => {
        this.learningItems = response.data;
      });
  }

  dateCellFormatter(row: object, column: object, cell: string) {
    return format(new Date(cell), 'yyyy-MM-dd');
  }
}
</script>

<style scoped lang="stylus">
.dash-page
  margin: 0 auto
</style>
