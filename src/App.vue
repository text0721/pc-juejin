<template>
  <div id="app">
    <Active />
  </div>
</template>

<script>
import Active from "./pages/active/active";
export default {
  name: "app",
  components: {
    Active,
  },
};
</script>


<style lang="less" scoped>
html,
body {
  width: 100%;
}
#app {
  width: 100%;
}
</style>
