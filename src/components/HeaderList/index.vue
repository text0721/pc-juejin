<template>
  <div class="headerlist">
    <ul class="headerlist-navigation">
        
      <li class="first"><a href="">推荐</a></li>
      <li><a href="">后端</a></li>
      <li><a href="">前端</a></li>
      <li><a href="">Andriod</a></li>
      <li><a href="">iOS</a></li>
      <li><a href="">人工智能</a></li>
      <li><a href="">开发工具</a></li>
      <li><a href="">代码人生</a></li>
      <li><a href="">阅读</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderList",
};
</script>

<style lang="less" scoped>
.headerlist {
  width: 960px;
  margin: 0 auto;
}
.headerlist-navigation {
  display: flex;
  height: 46px;
  align-items: center;
  li {
    padding: 0 12px;
    font-size: 14px;
    cursor: pointer;
    a {
      text-decoration: none;
    }
  }
  .first {
    padding-left: 0;
  }
}
</style>
