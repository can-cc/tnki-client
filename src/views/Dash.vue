<template>
  <div class="dash-page">
    <el-card :body-style="{ padding: '0' }">
      <div class="statistics">
        <div class="statistics-grid">
          <div class="value">{{ numberize(statistics.learnedNumber) }}</div>
          <div class="name">已记忆</div>
        </div>
        <div class="statistics-grid">
          <div class="value">{{ numberize(statistics.needLearnNumber) }}</div>
          <div class="name">还需记忆</div>
        </div>
        <div class="statistics-grid">
          <div class="value">{{ numberize(statistics.allNumber) }}</div>
          <div class="name">总计</div>
        </div>
      </div>
    </el-card>

    <div>
      <router-link class="go-learn-button" to="learn">
        <div>进入学习</div>
      </router-link>
    </div>

    <div class="post-link-container">
      <router-link to="/create">
        <i class="el-icon-d-arrow-right"></i>
        add new card
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import axios from 'axios';

interface DailyStatistics {
  learnedNumber?: number;
  needLearnNumber?: number;
  allNumber?: number;
}

@Component({
  components: {}
})
export default class Dash extends Vue {
  public statistics: DailyStatistics = {};

  numberize(n: number | undefined) {
    if (n !== 0 && !n) {
      return '-';
    }
    return n;
  }

  created() {
    axios.post(`/api/daily-check-in`).then(() => {
      axios.get(`/api/daily-statistics`).then(response => {
        this.statistics = {
          learnedNumber: response.data.learnedNumber,
          needLearnNumber: response.data.needLearnNumber,
          allNumber: response.data.learnedNumber! + response.data.needLearnNumber!
        };
      });
    });
  }
}
</script>

<style scoped lang="stylus">
.dash-page
  margin: 0 auto

.el-card {
    margin: 10px;
}

.statistics-grid {
    width: 100%;
    color: #878D99;
}
.statistics-grid .value {
    font-weight: 900;
    font-size: 1.5rem;
    letter-spacing: 2px;
    line-height: 1rem;
    color: #EB9E05;
}
.statistics-grid .name {
    font-weight: 300;
    font-size: 0.8rem;
}

.statistics {
    display: flex;
    padding: 10px 0 10px;
}

.go-learn-button {
    display: block;
    height: 80px;
    width: 80px;
    line-height: 80px;
    background-color: #409EFF;
    color: white;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: 700;
    border: 5px solid #4a9de0;
    margin: 30px auto 0;
}

.go-learn-button div {
    display: block;
    vertical-align: middle;
}

.post-link-container {
  margin-top: 15px;
}

.post-link-container a
  font-weight: 700
  letter-spacing: -0.5px

.post-link-container .el-icon-d-arrow-right
  font-size: 10px
  margin-left: -4px
</style>
