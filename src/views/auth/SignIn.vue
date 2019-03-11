<template>
  <div class="sign-in full-height">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>SignIn</span>
      </div>
      <el-form :model="form" ref="form" status-icon :rules="rules">
        <div class="inputs">
          <el-form-item label="Nickname" prop="nickname">
            <el-input type="text" v-model="form.nickname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="success" :loading="isLoading" @click="signIn">Sign In</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { actionTypes } from '../../store/modules/auth';

export default {
  data() {
    return {
      form: {
        nickname: 'user',
        password: 'password',
      },
      rules: {
        nickname: [
          {
            required: true,
            message: 'Please input nickname',
            trigger: 'change',
          },
          {
            min: 4,
            message: 'Length should be 4 or more characters',
            trigger: 'change',
          },
        ],
        password: [
          {
            required: true,
            message: 'Please input password',
            trigger: 'change',
          },
          {
            min: 4,
            message: 'Length should be 4 or more characters',
            trigger: 'change',
          },
        ],
      },
      isLoading: false,
    };
  },
  methods: {
    ...mapActions('auth', [actionTypes.SIGN_IN]),

    signIn() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.isLoading = true;
          this[actionTypes.SIGN_IN]({ auth: this.form })
            .then(() => {
              this.isLoading = false;
              this.$message.success('Signed in successfully');
              this.$router.push({ name: 'ProfileIndex' });
            }).catch((error) => {
              this.isLoading = false;
              this.$refs.form.clearValidate();
              this.$message.error(error.response.data.error);
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  align-items: center;
  display: flex;
  justify-content: center;

  /deep/ .el-card {
    width: 700px;

    .el-card__body {
      padding: 10px 20px 0 !important;

      .el-form {
        .inputs {
          margin-bottom: 40px;
        }

        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>
