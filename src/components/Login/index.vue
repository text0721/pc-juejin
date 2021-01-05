<template>
  <div class="login">
    <div class="top">
      <h2 class="title">手机登录</h2>
      <p class="close" @click="close">X</p>
    </div>
    <div class="phone">
      <el-input placeholder="请输入手机号码" class="input-with-select">
        <el-select placeholder="+86" slot="prepend">
          <el-option label="中国" value="1"></el-option>
          <el-option label="美国" value="2"></el-option>
          <el-option label="法国" value="3"></el-option>
        </el-select>
      </el-input>
    </div>
    <div class="verification">
      <el-input placeholder="验证码">
        <el-button slot="append">获取验证码</el-button>
      </el-input>
    </div>
    <el-button type="primary" class="login-now">登录</el-button>

    <p class="agreement">其他登录方式</p>
    <p class="agree">注册登录即表示同意 <a href="">用户协议 、 隐私政策</a></p>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {},
  close(){

  }
};
</script>

<style lang="less" scoped>
.login {
  display: block;
  height: 270px;
  width: 310px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  //   z-index: 1000;
  background-color: #ffffff;
  padding: 24px;
}
.login .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.login .title {
  font-size: 16px;
  font-weight: bold;
}
.login .close {
  cursor: pointer;
}
.login .el-select {
  width: 80px;
}
.login .phone {
  margin: 10px 0;
}
.verification {
  margin: 8px 0;
}
.verification .el-button {
  width: 100px;
  color: #007fff;
}

.login .agreement {
  margin-bottom: 20px;
  font-size: 14px;
  color: #007fff;
}
.login .agree {
  font-size: 14px;
  margin: 5px 0;
  color: #b2bac2;
  a {
    color: #007fff;
    text-decoration: none;
  }
}
.login .login-now {
  width: 100%;
  margin: 10px 0;
}
</style>
