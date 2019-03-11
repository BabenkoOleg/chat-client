<template>
  <div class="auth-container">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    document.body.classList.add('auth');
  },
  destroyed() {
    document.body.classList.remove('auth');
  },
};
</script>

<style lang="scss" scoped>
.auth-container {
  left: 50%;
  max-width: 400px;
  padding: 30px;
  position: absolute;
  transform: translate(-50%, calc(-50% - 20px));
  top: 50%;
  width: 100%;

  /deep/ .auth-form {
    .auth-nav-link {
      margin-top: 10px;
      text-align: center;

      a {
        color: #b5b5b5;
        font-size: 15px;
        line-height: 15px;

        &:hover {
          color: #e2e2e2;
        }
      }
    }
  }
}
</style>
