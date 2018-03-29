<template>
  <div class="post-page">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">Home</el-breadcrumb-item>
    </el-breadcrumb>

    <form v-on:submit="post($event)">
      <div class="post-input">
        <div>

        </div>

        <el-container>
          <el-main>

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
            <el-upload
              action="/api/image"
              name="image"
              :limit="1"
              list-type="picture-card">
              <i class="el-icon-plus"></i>
            </el-upload>
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
            <el-upload
              action="/api/image"
              name="image"
              :limit="1"
              list-type="picture-card">
              <i class="el-icon-plus"></i>
            </el-upload>
            <div class="button-container">
              <el-button native-type="submit" type="primary" plain>Add Card</el-button>
            </div>
          </el-main>
        </el-container>

      </div>


    </form>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { Upload } from 'element-ui';
import { Message } from 'element-ui';
import { setJwt } from '@/helper/auth';
import axios from 'axios';
import router from '@/router';

@Component({
  components: { 'el-upload': Upload }
})
export default class Create extends Vue {
  public front: string = '';
  public backend: string = '';

  reset(): void {
    this.front = '';
    this.backend = '';
  }
  async post(event: Event): Promise<void> {
    event.preventDefault();
    if (!this.front.trim() || !this.backend.trim()) {
      Message.warning('Please fill card front and back.');
      return;
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
