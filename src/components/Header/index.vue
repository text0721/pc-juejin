<template>
  <div class="header">
    <div class="header-container">
      <div class="header-logo">
        <img
          src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/logo.a7995ad.svg"
          alt=""
        />
      </div>
      <ul class="header-list">
        <li><a href="">首页</a></li>
        <li><a href="">沸点</a></li>
        <li><a href="">小册</a></li>
        <li><a href="">活动</a></li>
      </ul>
      <div class="header-content">
        <div class="header-search">
          <input type="text" placeholder="探索掘金" />
          <img
            src="//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-search-icon.6f8ba1b.svg"
          />
        </div>
        <div class="header-btn">
          <div class="header-write">
            <button>写文章<i class="el-icon-caret-bottom"></i></button>
          </div>
          <button class="header-login">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
.header {
  border-bottom: 1px solid #f1f1f1;
}
.header-container {
  height: 60px;
  display: flex;
  width: 960px;
  margin: 0 auto;
  align-items: center;
}
.header-logo {
  margin-right: 24px;
  cursor: pointer;
}
.header-list {
  display: flex;
  font-size: 16px;
  li {
    margin: 0 18px;
    cursor: pointer;
    a {
      text-decoration: none;
    }
  }
}
.header-content {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
}
.header-search {
  width: 168px;
  text-align: right;
  //   margin-right: 20px;
  position: relative;
  //   box-sizing: border-box;
  input {
    width: 100%;
    height: 32px;
    border: none;
    border: 1px solid #e5e6e7;
    outline: none;
    padding-left: 10px;
    box-sizing: border-box;
    background-color: #f9fafb;
    border-radius: 2px;
    color: #aaabab;
  }
  img {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
}
.header-btn {
  display: flex;
  margin-left: 30px;
}
.header-write {
  height: 32px;
  width: 80px;
  font-size: 14px;
  button {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    // border-right: 1px solid #fff;
    border-radius: 3px;
    color: white;
    background-color: #007fff;
    cursor: pointer;
    i {
      width: 5px;
    }
  }
}
.header-login {
  width: 73px;
  border: 1px solid #007fff;
  background-color: #fff;
  border-radius: 3px;
  margin-left: 15px;
  outline: none;
  cursor: pointer;
  color: #007fff;
  font-size: 16px;
}
</style>
