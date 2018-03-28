<template>
  <div class="learn-complete-page">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import axios, { AxiosResponse } from 'axios';
import { readUserId } from '@/helper/auth';

import { Table } from 'element-ui';

@Component({
  components: { Table }
})
export default class CardList extends Vue {
  public cards: any[] = [];
  public learningCards: any[] = [];

  created() {
    const userId = readUserId();
    axios.get(`/api/cards/user/${userId}`).then((response: AxiosResponse<any[]>) => {
      this.cards = response.data;
    });
    axios.get(`/api/cards/user/${userId}/learning`).then((response: AxiosResponse<any[]>) => {
      this.learningCards = response.data;
    });
  }
}
</script>

<style scoped lang="stylus">
h2 {
  color: #67C23A;
}

.el-card {
  margin: 50px 20px;
}
</style>
