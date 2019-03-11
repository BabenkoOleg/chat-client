<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { actionTypes } from './store/modules/auth';

export default {
  methods: {
    ...mapActions('auth', [actionTypes.CURRENT_USER]),

    isAuthIndexPage() {
      return !!this.$router.currentRoute.matched.find(route => route.name === 'AuthIndex');
    },
  },
  mounted() {
    this[actionTypes.CURRENT_USER]()
      .then(() => {
        if (this.isAuthIndexPage()) this.$router.push({ name: 'ProfileIndex' });
      })
      .catch(() => {
        if (!this.isAuthIndexPage()) this.$router.push({ name: 'AuthSignIn' });
      });
  },
};
</script>

<style lang="scss">
html,
body,
#app,
.main-wrapper {
  height: 100%;
}

body {
  padding: 0;
  margin: 0;

  &.auth {
    background: #262c30;
  }
}

.full-height {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el-loading-mask {
  transition: null !important;
}
</style>
