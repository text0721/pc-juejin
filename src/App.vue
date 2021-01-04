<template>
  <div id="app">
    <Hearder />
    <Topic />
  </div>
</template>

<script>
import Hearder from "./views/Hearder";
import Topic from "./views/Topic";
export default {
  name: "app",
  components: {
    Hearder,
    Topic,
  },
};
</script>

<style>
html {
  background-color: #f4f5f5;
}
</style>

