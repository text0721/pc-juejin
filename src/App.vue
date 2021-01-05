<template>
  <div id="app">
    <Header />
    <HeaderList />
    <HomeContent />
  </div>
</template>

<script>
import Header from "./components/Header";
import HeaderList from "./components/HeaderList";
import HomeContent from "./pages/HomeContent";
export default {
  name: "app",
  components: {
    Header,
    HeaderList,
    HomeContent,
  },
};
</script>

<style>
</style>
