<template>
  <div id="app">
   
    <Topic />
  </div>
</template>

<script>

import Topic from "./views/Topic";
// import axios from "axios";

export default {
  name: "app",
  components: {

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