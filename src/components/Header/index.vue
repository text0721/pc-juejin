<template>
  <div class="header">
    <div class="header-container" ref="header">
      <div class="header-logo">
        <img
          src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/logo.a7995ad.svg"
          alt=""
        />
      </div>
      <ul class="header-list">
        <!-- <li class="active"></li> -->
        <li :class="{ active: changActive === 1 }" @click="changeActive(1)">
          <router-link to="/">首页</router-link>
        </li>
        <li :class="{ active: changActive === 2 }" @click="changeActive(2)">
          <router-link to="">沸点</router-link>
        </li>
        <li :class="{ active: changActive === 3 }" @click="changeActive(3)">
          <router-link to="/books">小册</router-link>
        </li>
        <li :class="{ active: changActive === 4 }" @click="changeActive(4)">
          <router-link to="/active">活动</router-link>
        </li>
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
          <button class="header-login" @click="handleLogin">登录</button>
        </div>
      </div>
    </div>
    <!-- <Login v-show="isLogin" :isLogin.sync="isLogin" ref="login" /> -->
  </div>
</template>

<script>
// import Login from "../Login";
export default {
  name: "Header",
  data() {
    return {
      isLogin: false,
      changActive: 1,
    };
  },
  methods: {
    //系统滚动条事件隐藏头部
    handScroll() {
      const screenHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      const half = screenHeight / 2;
      //如果滚动条的距离=屏幕高度就隐藏
      if (window.scrollY > half) {
        this.$refs.header.style.height = 0;
        // this.$refs.header.style.height = 0;
        this.$refs.header.style.transitionProperty = "height";
        this.$refs.header.style.transitionDuration = 0.2 + "s";
        this.$refs.header.style.transitionTiming = "linear";
        this.$refs.header.style.overflow = "hidden";
      } else {
        this.$refs.header.style.height = 61 + "px";
      }
    },
    handleLogin() {
      this.$bus.$emit("showLogin");
    },
    changeActive(num) {
      console.log(num);
      this.changActive = num;
    },
  },
  mounted() {
    //添加系统滚动条事件
    window.addEventListener("scroll", this.handScroll);
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.handScroll);
  },
  // methods: {
  //   handleLogin() {
  //     // console.log(this);
  //     this.$refs.login.$emit("tiggle");
  //     this.isLogin = !this.isLogin;
  //   },
  // },
  components: {
    // Login,
  },
};
</script>

<style lang="less" scoped>
.header {
  background-color: #fff;
  width: 960px;
}
.header-container {
  height: 61px;
  display: flex;
  width: 960px;
  margin: 0 auto;
  align-items: center;
  // border-bottom: 1px solid #f1f1f1;
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
    &.active a {
      color: #007fff;
    }
    &:hover a {
      color: #007fff;
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
