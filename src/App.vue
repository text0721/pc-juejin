<template>
  <div id="app">
    <Home />
    <router-view></router-view>
    <div class="login-container">
      <Login v-show="isLogin" />
    </div>
  </div>
</template>

<script>
import Home from "./pages/home";
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
    Home,
    Login,
  },
};
</script>

<style>
body {
  background-color: #f4f5f6;
}
</style>
