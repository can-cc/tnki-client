<template>
  <div class="learn-page">
    <el-card class="card-container" v-if="activeItem" :body-style="{ padding: '10px' }">
      <div slot="header" class="card-header">
        <span>Card:</span>
      </div>

      <span class="text-container-label">front:</span>
      <div class="card-text-container" v-html="activeItem.memoItem.front"></div>

      <div v-if="learningOpen">
        <span class="text-container-label">back:</span>
        <div class="card-text-container" v-html="activeItem.memoItem.back"></div>
      </div>

      <div class="operation" v-if="!learningOpen">
        <el-button size="mini" type="primary" v-on:click="showBack()">Show back</el-button>
      </div>

      <div class="operation__open" v-if="learningOpen">
        <el-button size="mini" type="success" v-on:click="rememberWithQuality(0)"
          >Too easy</el-button
        >
        <el-button size="mini" type="primary" v-on:click="rememberWithQuality(1)"
          >Remeber</el-button
        >
        <el-button size="mini" type="warning" v-on:click="rememberWithQuality(2)">Forgot</el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { Message } from 'element-ui';
import axios from 'axios';
import router from '@/router';
import { LearningItem } from '@/interface/learning-item';

@Component({
  components: {}
})
export default class Learn extends Vue {
  items: LearningItem[] = [];
  activeItem: LearningItem | null = null;
  learningOpen = false;
  index = -1;

  created(): void {
    axios.get(`/api/daily-learn-item`).then(response => {
      this.items = response.data;
      if (!this.items.length) {
        return this.finishLearn();
      }
      this.refreshLearningItem();
    });
  }

  refreshLearningItem() {
    this.index++;
    if (this.index > this.items.length) {
      this.finishLearn();
    }
    this.activeItem = this.items[this.index];
  }

  async rememberWithQuality(memoQuality: number): Promise<void> {
    await axios.post(`/api/learn`, {
      itemID: this.activeItem!.memoItem.id,
      memoQuality: memoQuality
    });
    this.refreshLearningItem();
    this.learningOpen = false;
  }

  finishLearn() {
    return router.push('/learn-complete');
  }

  showBack() {
    this.learningOpen = true;
  }
}
</script>

<style scoped lang="stylus">
.card-container {
  margin: 20px 10px;
  text-align: left;
}

.card-header {
  color: #409EFF;
  font-weight: 700;
}

.operation__open .el-button {
  width: 31%;
}

.operation__open, .operation {
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  margin: 20px auto 10px;
}

.card-text-container {
  border-radius: 4px;
  border: 1px solid #DFE4ED;
  margin: 0 0 10px 0;
  padding: 5px;
  font-size: 12px;
  overflow: auto;
}

.text-container-label {
  color: #409EFF;
  font-size: 12px;
  font-weight: 700;
}
</style>
