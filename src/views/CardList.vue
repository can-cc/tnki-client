<template>
  <div class="learn-complete-page">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import axios, { AxiosResponse } from 'axios';
import { readUserId } from '@/helper/auth';

@Component({
  components: {}
})
export default class CardList extends Vue {
  public cards: any[] = [];

  created() {
    const userId = readUserId();
    axios.get(`/api/cards/user/${userId}/learn`).then((response: AxiosResponse<any[]>) => {
      this.cards = response.data;
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
