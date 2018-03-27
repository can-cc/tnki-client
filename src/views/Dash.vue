<template>
  <div class="dash-page">
    <el-card :body-style="{padding: '0'}">
      <div class="total-days-container">
        <span class="day-number">{{statistics ? statistics.total_days : '-'}}</span>
        <span class="day-text">days</span>
        <i class="el-icon-date"></i>
      </div>
      <div class="statistics">
        <div v-bind:key="item.name" 
             v-for="item in [
               {name: 'Learned', key: 'learn_time'}, 
               {name: 'Need learn', key: 'need_learn_count'}, 
               {name: 'All Finish', key: 'all_finish'}
             ]" 
             class="statistics-grid">
          <div class="value">{{statistics ? statistics[item.key] : '-'}}</div>
          <div class="name">{{item.name}}</div>
        </div>
      </div>
    </el-card>

    <div>
      <router-link class="go-learn-button" to="learn">
        <div>Learn</div>
      </router-link>
    </div>

    <div class="post-link-container">
      <router-link to="/post">
        <i class="el-icon-d-arrow-right"></i>
        add new card
      </router-link>
    </div>

    <div class="ds-container" v-if="dailySentence">
      <div class="content">{{dailySentence.content}}</div>
      <div class="note">{{dailySentence.note}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import axios from 'axios';
import jsonp from 'jsonp';

interface DailySentence {
  content: string;
  note: string;
}

@Component({
  components: {}
})
export default class Dash extends Vue {
  public statistics = null;
  public dailySentence: DailySentence | null = null;

  created() {
    axios.get(`/api/daily/statistics?timestamp=${new Date().getTime()}`).then(response => {
      this.statistics = response.data;
    });
    jsonp(`//open.iciba.com/dsapi/`, (error: Error | null, dailySentence: DailySentence) => {
      this.dailySentence = dailySentence;
    });
  }
}
</script>

<style scoped lang="stylus">
.dash-page
  max-width: 700px
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

.total-days-container {
    margin: 30px auto 10px;
}

.total-days-container .day-number {
    font-weight: 900;
    font-size: 4rem;
    color: #67C23A;
    margin-left: 58px;
}

.total-days-container .day-text {
    color: #409EFF;
    font-weight: 900;
}

.total-days-container .el-icon-date {
    color: #409EFF;
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

.ds-container
  margin-top: 30px
  font-size: 12px
  font-weight: 500
  color: #67C23A
  width: 100%
</style>
