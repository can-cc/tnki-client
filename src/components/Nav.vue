<template>
  <nav>
	  <div class="container">
		  <img class="logo" alt="logo" src="../assets/logo.png"/>
      <div>
		    <router-link class="top-bar-link" to="/home">
          <i class="el-icon-search"/>
          learn
        </router-link>
        <router-link class="post-link" to="/create">
          <i class="el-icon-edit-outline"/>
          create
        </router-link>
        <router-link class="post-link" to="/cards">
          Cards
        </router-link>
      </div>
	  </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
nav
  height: 40px
  width:  100%
  background: #333

.container
  z-index: 99
  height: 100%
  width: 700px
  margin: 0 auto
  display: flex
  justify-content: flex-start
  align-items: center
  position: relative

.container > div
  position: relative
  text-align: center
  overflow: hidden

.logo
  width: 22px
  height: 22px
  border-radius: 50%
  opacity: 0.95
  margin: 0 20px
  border-radius: 50%

a
  color: white
  width: 80px
  display: inline-block
  font-size: 18px
  margin-top: 3px

</style>
