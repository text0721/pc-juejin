<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "app",
  // async mounted() {
  //   const a = await axios({
  //     baseURL: `/api/getindexCateList`,
  //   });
  //   console.log(a.data.data);
  // },
};
</script>

<style>
body {
  background-color: #f4f5f6;
}
</style>
