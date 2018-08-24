<template>
  <div class="card-list-page">
    <el-tabs type="border-card">
      <el-tab-pane label="Cards Pool">
        <el-table
          :data="cards"
          style="width: 100%">
          <el-table-column
            align="left"
            prop="frontText"
            :show-overflow-tooltip="true"
            label="Front">
          </el-table-column>
          <el-table-column
            align="left"
            prop="backText"
            :show-overflow-tooltip="true"
            label="Back">
          </el-table-column>
          <el-table-column
            align="left"
            prop="createdAt"
            :formatter="dateCellFormatter"
            label="Created Date">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="Learning Cards">
        <el-table
          :data="learningCards"
          style="width: 100%">
          <el-table-column
            align="left"
            prop="frontText"
            :show-overflow-tooltip="true"
            label="Front">
          </el-table-column>
          <el-table-column
            align="left"
            prop="backText"
            :show-overflow-tooltip="true"
            label="Back">
          </el-table-column>
          <el-table-column
            align="left"
            prop="easyTime"
            label="Easy Times">
          </el-table-column>
          <el-table-column
            align="left"
            prop="remeberTime"
            label="Remeber Times">
          </el-table-column>
          <el-table-column
            align="left"
            prop="forgetTime"
            label="Forgot Times">
          </el-table-column>
          <el-table-column
            align="left"
            prop="createdAt"
            :formatter="dateCellFormatter"
            label="Created Date">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { Table, TableColumn, Tabs, TabPane } from 'element-ui';
import axios, { AxiosResponse } from 'axios';
import { readUserId } from '@/helper/auth';
import format from 'date-fns/format';

@Component({
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-tabs': Tabs,
    'el-tab-pane': TabPane
  }
})
export default class CardList extends Vue {
  public cards: Card[] = [];
  public learningCards: LearningCard[] = [];

  created() {
    const userId = readUserId();
    axios.get(`/api/cards/user/${userId}`).then((response: AxiosResponse<any[]>) => {
      this.cards = response.data;
    });
    axios.get(`/api/cards/user/${userId}/learning`).then((response: AxiosResponse<any[]>) => {
      this.learningCards = response.data;
    });
  }
  dateCellFormatter(row: object, column: object, cell: number) {
    return format(cell, 'YYYY-MM-DD HH:mm:ss');
  }
}
</script>

<style scoped lang="stylus">
h2 {
  color: #67C23A;
}

.el-card {
  margin: 50px 20px
}

.el-table >>> thead .cell
  white-space: nowrap

.el-tabs
  margin: 20px auto 50px

</style>

<style lang="stylus">
.card-list-page .cell
  text-overflow: ellipsis
  overflow: hidden
  white-space: nowrap
</style>
