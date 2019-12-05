<template>
  <div class="post-page">
    <el-form :model="form">
      <h4>
        Create a tnki card:
      </h4>
      <el-form-item label="Front:">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="Please input card front"
          v-model="form.front"
        >
        </el-input>
      </el-form-item>

      <el-form-item label="Tip:">
        <el-input type="textarea" :rows="4" placeholder="Please input card tip" v-model="form.tip">
        </el-input>
      </el-form-item>

      <el-form-item label="Back:">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="please input card backend"
          v-model="form.back"
        >
        </el-input>
      </el-form-item>

      <div>
        <el-button type="primary" plain v-on:click="create($event)">Add Card</el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { Upload, Message, Form, FormItem } from 'element-ui';
import { setJwt } from '@/helper/auth';
import axios, { AxiosResponse } from 'axios';
import router from '@/router';

@Component({
  components: { 'el-upload': Upload, 'el-form': Form, 'el-form-item': FormItem }
})
export default class Create extends Vue {
  public form: {
    front: string;
    tip: string;
    back: string;
  } = { front: '', tip: '', back: '' };

  reset(): void {
    this.form = { front: '', tip: '', back: '' };
  }

  async create(event: Event): Promise<void> {
    event.preventDefault();
    if (!this.form.front.trim() || !this.form.back.trim()) {
      Message.warning('Please fill card front and back.');
      return;
    }
    try {
      event.preventDefault();
      await axios.post('/api/learn-item', this.form);
      Message.success('Add card successful!');
      this.reset();
    } catch (error) {
      Message.error('Add card error');
    }
  }
}
</script>

<style scoped lang="stylus">
.post-page
  text-align: left
  margin-bottom: 50px

.el-form-item >>> .el-upload
  overflow: hidden
  display: block
  text-align: left
  width: 100%

.el-form
  img
    max-width: 100%
</style>
