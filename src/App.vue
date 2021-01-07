<template>
  <div id="app">
    <Hearder />
    <Topic />
  </div>
</template>

<script>
import Hearder from "./views/Hearder";
import Topic from "./views/Topic";
// import axios from "axios";

export default {
  name: "app",
  components: {
    Hearder,
    Topic,
    // async mounted() {
    //   const a = await axios({
    //     baseURL: `/api/getindexCateList`,
    //   });
    //   console.log(a.data.data);
    // },
  },
};
</script>
<style>
html {
  background-color: #f4f5f5;
}
</style>