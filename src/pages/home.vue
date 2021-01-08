<template>
  <div class="indexContainer">
    <div class="header">
      <Header />
      <!--沸点组件HeaderList根据 meta 来隐藏-->
      <HeaderList v-if="!$route.meta.isHeaderList" />
    </div>
  </div>
</template>

<script>
import HeaderList from "../components/HeaderList";
import Header from "../components/Header";
export default {
  name: "Home",
  data() {
    // return {
    //   isLogin: false,
    // };
    return {};
  },
  components: {
    HeaderList,
    Header,
  },
  methods: {},
  mounted() {},
};
</script>

<style lang='less' scoped>
.header {
  position: fixed;
  z-index: 1000;
  background-color: #ffffff;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
}
</style>
