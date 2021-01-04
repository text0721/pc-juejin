<template>
  <div id="app">APP</div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  async mounted() {
    const a = await axios({
      baseURL: `/api/getindexCateList`,
    });
    console.log(a.data.data);
  },
};
</script>

<style>
</style>
