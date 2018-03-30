<template>
  <div class="post-page">
    <el-form :model="form" label-width="80px">
      <el-form-item label="Front:">
        <el-input
          type="textarea"
          :rows="5"
          placeholder="Please input card front"
          v-model="front">
        </el-input>

        <img v-bind:src="form.frontImage"/>
        {{form.frontImage}}
      </el-form-item>

      <el-form-item>

      <el-upload
        action="/api/image"
        name="image"
        :limit="1"
        :on-success="handleImageUploadSuccess('frontImage')"
        list-type="picture-card">
        <i class="el-icon-plus"></i>
      </el-upload>
      </el-form-item>


      <el-form-item label="Back:">
        <el-input
          type="textarea"
          :rows="5"
          placeholder="please input card backend"
          v-model="backend">
        </el-input>
        <el-upload
          action="/api/image"
          name="image"
          :limit="1"
          list-type="picture-card">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <el-button type="primary" plain v-on:click="create($event)">Add Card</el-button>
    </el-form>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { Upload, Message, Form, FormItem } from 'element-ui';
import { setJwt } from '@/helper/auth';
import axios from 'axios';
import router from '@/router';

@Component({
  components: { 'el-upload': Upload, 'el-form': Form, 'el-form-item': FormItem }
})
export default class Create extends Vue {
  public front: string = '';
  public backend: string = '';
  public form: {
    frontText: string;
    frontImage: string;
    backText: stirng;
    backImage: string;
  } = { frontText: '', frontImage: '', backText: '' };

  handleImageUploadSuccess = (field: string): Function => {
    return (res, file) => {
      this.form[field] = '/image/' + res.file.path;
    };
  };

  reset(): void {
    this.front = '';
    this.backend = '';
  }
  async create(event: Event): Promise<void> {
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
