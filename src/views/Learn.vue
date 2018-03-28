<template>
  <div class="learn-page">
    <el-card class="card-container" v-if="cards[0]" :body-style="{padding: '10px'}">

      <div slot="header" class="card-header">
        <span>Card:</span>
      </div>

      <span class="text-container-label">front:</span>
      <div class="card-text-container" v-html="cards[0].front_text"></div>

      <div v-if="learningOpen">
        <span class="text-container-label">back:</span>
        <div class="card-text-container" v-html="cards[0].back_text"></div>
      </div>

      <div class="operation" v-if="!learningOpen">
        <el-button size="mini" type="primary" v-on:click="show()">Show back</el-button>
      </div>

      <div class="operation__open" v-if="learningOpen">
        <el-button size="mini" type="success" v-on:click="open(0)">Too easy</el-button>
        <el-button size="mini" type="primary" v-on:click="open(1)">Remeber</el-button>
        <el-button size="mini" type="warning" v-on:click="open(2)">Forgot</el-button>
      </div>

    </el-card>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { Message } from 'element-ui';
import axios from 'axios';
import router from '@/router';
import { readUserId } from '@/helper/auth';

@Component({
  components: {}
})
export default class Learn extends Vue {
  cards: any[] = [];
  learningOpen = false;

  created(): void {
    const userId = readUserId();
    axios.get(`/api/cards/user/${userId}/learn/today`).then(response => {
      this.cards = response.data;
      if (!this.cards.length) {
        return router.push('/learn-complete');
      }
    });
  }
  async open(memoryLevel): void {
    await axios.post(`/api/cards/${this.cards[0].id}/memory`, {
      memoryLevel: memoryLevel
    });
    this.cards = this.cards.slice(1);
    if (!this.cards.length) {
      return router.push('/learn-complete');
    }
    this.learningOpen = false;
  }
  show() {
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
