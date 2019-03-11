<template>
  <div class="profile-container">
    <p v-if="currentUser">Hello, {{ currentUser.nickname }}!</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('auth', ['currentUser']),
  },
};
</script>

<style lang="scss" scoped>
.profile-container {
  text-align: center;
}
</style>
