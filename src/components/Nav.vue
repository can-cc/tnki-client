<template>
  <nav>
    <div class="container">
      <img class="logo" alt="logo" src="../assets/logo.png" />
      <div class="main-link-container">
        <router-link class="top-bar-link" to="/home">
          <i class="el-icon-search" />
          学习
        </router-link>
        <router-link class="post-link" to="/create">
          <i class="el-icon-edit-outline" />
          创建
        </router-link>
        <router-link class="post-link" to="/cards">
          <i class="el-icon-tickets"></i>
          条目
        </router-link>
      </div>
      <div class="profile-link-container">
        <router-link class="post-link" to="/profile">
          <i class="el-icon-tickets"></i>
          我的
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {}
</script>

<style scoped lang="stylus">
nav
  height: 40px
  width:  100%
  background: #333

.container
  z-index: 99
  height: 100%
  max-width: 1000px
  margin: 0 auto
  display: flex
  justify-content: flex-start
  align-items: center
  position: relative

.container .main-link-container
  position: relative
  text-align: left
  overflow: hidden
  flex-grow: 10

.logo
  width: 22px
  height: 22px
  border-radius: 50%
  opacity: 0.95
  margin: 0 10px
  border-radius: 50%

a
  color: white
  width: 100px
  display: inline-block
  font-size: 18px
  margin-top: 3px
</style>
