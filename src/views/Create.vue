<template>
  <div class="post-page">

    <h1>
      <i class="el-icon-edit"></i>
      Add Card:
    </h1>

    <form v-on:submit="post($event)">
      <div class="post-input">
        <div>

        </div>

        <el-card :body-style="{padding: '0'}">
          <h2>
            Front:
            <small>(markdown)</small>
          </h2>
          <div class="input-area">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="Please input card front"
              v-model="front">
            </el-input>
          </div>
        </el-card>

        <el-card :body-style="{padding: '0'}">
          <h2>
            Back:
            <small>(markdown)</small>
          </h2>
          <div class="input-area">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="please input card backend"
              v-model="backend">
            </el-input>
          </div>
        </el-card>

      </div>


      <div class="button-container">
        <el-button native-type="submit" type="primary" plain>Add Card</el-button>
      </div>

    </form>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { Message } from 'element-ui';
import { setJwt } from '@/helper/auth';
import axios from 'axios';
import router from '@/router';

@Component({
  components: {}
})
export default class Create extends Vue {
  public front: string = '';
  public backend: string = '';

  reset(): void {
    this.front = '';
    this.backend = '';
  }
  async post(event: Event): void {
    event.preventDefault();
    if (!this.front.trim() || !this.backend.trim()) {
      return Message.warning('Please fill card front and back.');
    }
    try {
      event.preventDefault();
      await axios.post('/api/cards', {
        front: this.front,
        back: this.backend
      });
      Message.success('Add card successful!');
      this.reset();
    } catch (error) {
      Message.error('Add card error');
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
