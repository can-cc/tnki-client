<template>
  <div class="profile-page">
    <aside>
      <router-link to="/profile/learning-item">Learning item</router-link>
    </aside>

    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import axios from 'axios';

@Component({
  components: {}
})
export default class Profile extends Vue {
  created() {}
}
</script>

<style scoped lang="stylus">
.profile-page
  display: flex

aside
  flex: 0 0 200px
  text-align: left
  padding: 18px

.content-container
  flex: 1 0 auto
</style>
