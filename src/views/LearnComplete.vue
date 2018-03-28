<template>
  <div class="learn-complete-page">
    <el-card>
      <h2>Congratulations, learn complete!</h2>
    </el-card>

    <el-button>
      <router-link to="home">Go Home</router-link>
    </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class LearnComplete extends Vue {}
</script>

<style scoped lang="stylus">
  h2 {
  color: #67C23A;
  }

  .el-card {
  margin: 50px 20px;
  }
</style>
