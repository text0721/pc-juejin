<template>
  <div>
    <div class="header">
      <Header />
      <!--沸点组件HeaderList根据 meta 来隐藏-->
      <HeaderList v-if="!$route.meta.isHeaderList" />
    </div>
    <HomeContent />
  </div>
</template>

<script>
import HeaderList from "../components/HeaderList";
import Header from "../components/Header";
import HomeContent from "./HomeContent/index";
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
    HomeContent,
  },
  methods: {},
};
</script>

<style lang='less' scoped>
// position: fixed;
// z-index: 1000;
// background-color: white;
// top: 0;
// left: 0;
// right: 0;
// width: 100%;
// margin: auto;
.header {
  position: fixed;
  z-index: 1000;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
}
</style>
