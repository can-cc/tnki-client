<template>
  <div class="signin-page">
    <h1>Tnki</h1>
    <h2>- Sign In</h2>
    <form v-on:submit="signIn($event)">
      <div class="form-item">
        <label>
          <span>Email</span>
          <el-input v-model="email" name="tnki-email" type="email" placeholder="Email"></el-input>
        </label>
      </div>

      <div class="form-item">
        <label>
          <span>Password</span>
          <el-input v-model="password" name="tnki-password" type="password" placeholder="Password"></el-input>
        </label>
      </div>

      <div class="button-container">
        <el-button native-type="submit" type="primary" plain>Sign In</el-button>
      </div>

      <div class="tip">
        Do not have account? <router-link to="/signup">Sign Up</router-link>
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
export default class SignIn extends Vue {
  public password: string = '';
  public email: string = '';

  public async signIn(event: Event) {
    event.preventDefault();
    try {
      const response = await axios.post('/api/signin', {
        email: this.email,
        password: this.password
      });

      setJwt(response.headers.jwt);
      Message.success('Sign in sccuess');
      router.push('/dash');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return Message.error('Email or Password not match');
      }
      Message.error('Sign In Error');
    }
  }
}
</script>

<style scoped lang="stylus">
h1, h2 {
  color: #409EFF;
  font-family: "Verdana";
}

h2 {
  margin-top: -1.5rem;
  white-space: pre;
}

form {
  padding: 0 10px;
}

.form-item {
  margin-bottom: 10px;
}

.form-item label {
  display: flex;
  align-items: center;
}

.form-item span {
  display: inline-block;
  width: 110px;
  text-align: left;
  color: #409EFF;
  font-weight: bolder;
}

.tip {
  margin-top: 10px;
}

.tip a {
  color: #409EFE
}

.button-container {
  margin-top: 10px;
}

</style>
