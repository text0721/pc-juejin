<template>
  <div id="app">
    <router-view></router-view>
    <div class="login-container">
      <Login v-show="isLogin" />
    </div>
  </div>
</template>

<script>
import Login from "./components/Login";

export default {
  name: "app",
  data() {
    return {
      isLogin: false,
    };
  },
  mounted() {
    this.$bus.$on("showLogin", () => {
      this.isLogin = !this.isLogin;
    });
  },
  components: {
    Login,
  },
};
</script>
<style>
body {
  background-color: #f4f5f6;
}

html {
  background-color: #f4f5f5;
}
</style>
