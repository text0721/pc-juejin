<template>
  <div class="active">
    <div class="fixedTop">
      <Header />
      <div class="bodyContainer">
        <div class="body">
          <!-- 导航条 -->
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            active-text-color="#007fff"
          >
            <el-menu-item index="-1" @click="changeNav(-1)"
              >热门活动</el-menu-item
            >
            <el-menu-item
              v-for="(item, index) in activeNavList"
              :key="item.id"
              :index="index + '-'"
              v-show="index < 6"
              @click="changeNav(index)"
              >{{ item.city }}</el-menu-item
            >
            <el-submenu index="6">
              <template slot="title" @click="changeNav(index)"
                >其他<i class="iconfont icon-xiangshang"></i
              ></template>
              <el-menu-item
                :index="'6' + '-' + 'index'"
                v-for="(item, index) in activeNavList"
                :key="item.id"
                v-show="index > 5"
                @click="changeNav(index)"
                >{{ item.city }}</el-menu-item
              >
            </el-submenu>
          </el-menu>
          <!-- 右侧的图案 -->
          <div class="right">
            <span class="iconfont icon-xiangshang"></span>
            <p>活动合作</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 展示的活动明细 -->
    <div class="main">
      <div
        class="main-container"
        :style="{ width: screenWidth + 'px', minWidth: 133 + 'px' }"
      >
        <!--内容区的图片、日历部分 -->
        <div class="main-head">
          <div class="bkImg"></div>
          <!-- <img src="./images/head.jpg" /> -->
          <el-calendar v-model="value" class="calendar" :first-day-of-week="7">
          </el-calendar>
        </div>
        <!-- 底下主要的item界面 -->
        <div class="main-item">
          <ActiveItem :currentIndex="currentIndex" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActiveItem from "../../components/activeItem/activeItem";
import Header from "../../components/Header";
import axios from "axios";
export default {
  name: "active",
  data() {
    return {
      value: new Date(),
      activeIndex: "-1",
      activeNavList: [],
      currentIndex: -1,
      screenWidth: 960,
    };
  },
  async mounted() {
    const res = await axios({
      baseURL: `/api/getactivenav`,
    });
    this.activeNavList = res.data.data;
  },
  created() {
    //添加系统滚动条事件
    // window.addEventListener("scroll", this.handScroll);
    //调整添加窗口大小事件
    window.addEventListener("resize", this.handleResize);
  },

  methods: {
    //点击导航切换到不同的请求页面地址
    changeNav(index) {
      this.currentIndex = index;
      this.$bus.$emit("addEvent");
    },
    //系统滚动条事件隐藏头部
    handScroll() {
      // const screenHeight =
      //   document.documentElement.clientHeight || document.body.clientHeight;
      // const half = screenHeight / 2;
      // //如果滚动条的距离=屏幕就隐藏
      // if (window.scrollY > half) {
      //   // console.log(this.$refs.header);
      //   this.$refs.header.style.height = 0;
      //   this.$refs.header.style.height = 0;
      //   this.$refs.header.style.transitionProperty = "height";
      //   this.$refs.header.style.transitionDuration = 0.2 + "s";
      //   this.$refs.header.style.transitionTiming = "linear";
      // } else {
      //   this.$refs.header.style.height = 80 + "px";
      // }
    },
    //窗口调整大小事件，做响应式
    handleResize() {
      const screenWidth =
        document.documentElement.clientWidth || document.body.clientWidth;

      if (screenWidth < 460) {
        this.screenWidth = 460;
        // return;
      } else if (screenWidth > 950) {
        this.screenWidth = 960;
        // return;
      } else {
        this.screenWidth = screenWidth;
        // return;
      }
      console.log(this.screenWidth);
    },
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handScroll);
  },
  components: {
    ActiveItem,
    Header,
  },
};
</script>

<style lang='less' scoped>
@import "../active/font_2308214_8zv6abar282/iconfont.css";
.active {
  width: 100%;
  // border: 5px solid blue;
  //固定的头部
  .fixedTop {
    width: 100%;
    // position: absolute;
    position: fixed;
    top: 0;
    z-index: 999;
  }
  /deep/.el-submenu:hover {
    .icon-xiangshang {
      //设置三角形的旋转
      -webkit-transform: rotateZ(180deg);
      -moz-transform: rotateZ(180deg);
      -o-transform: rotateZ(180deg);
      -ms-transform: rotateZ(180deg);
      transform: rotateZ(180deg);
      transition: 0.3s linear;
    }
  }
  // 有下拉选择的部分
  /deep/.el-submenu {
    i {
      transition: 0.3s linear;
    }
    position: relative;
    .icon-xiangshang {
      position: absolute;
      margin-left: 5px;
    }
    /deep/.el-icon-arrow-down {
      display: none;
    }
    /deep/.el-submenu__title:hover {
      color: #007fff;
    }
    /deep/.el-submenu__title {
      height: 45px;
      line-height: 45px;
    }
  }
  .bodyContainer {
    width: 100%;
    z-index: 1000;
    min-width: 960px;
    background-color: white;
    .body {
      margin: 0 auto;
      max-width: 960px;
      display: flex;
      justify-content: space-between;
      //右侧的图
      .right {
        text-align: center;
        display: flex;
        height: 46px;
        line-height: 46px;
        font-size: 14px;
        color: #72777b;
        p:hover {
          color: #007fff;
          cursor: pointer;
        }
        p {
          width: 80px;
          text-align: center;
        }
      }
      //左侧的导航
      .el-menu-demo {
        width: 600px;
        height: 46px;
        border-bottom: none;
        /deep/li.el-menu-item {
          border-bottom: none;
          height: 46px;
          line-height: 46px;
          padding: 0 10px;
        }
        /deep/li.el-menu-item:hover {
          color: #007fff;
        }
      }
    }
  }
  //主体非fixed部分
  .main {
    background-color: #f1f1f1;
    padding-top: 120px;
    .main-container {
      margin: 0 auto;
      // max-width: 960px;
      .main-head {
        display: flex;
        margin-bottom: 35px;
        // justify-content: space-between;
        .bkImg {
          background-image: url(./images/head.jpg);
          background-size: cover;
          display: block;
          // 设置背景定位，元素拉大缩小集中在中间
          background-position: 50%;
          background-repeat: no-repeat;
          width: 470px;
          height: 280px;
          margin-right: 14px;
        }
        // 日历部分
        /deep/.calendar {
          width: 475px;
          height: 280px;
          box-shadow: 0 2px 3px -1px rgb(202, 187, 187);
          /deep/.el-calendar {
            width: 475px;
          }
          // 日历头部
          /deep/.el-calendar__header {
            height: 25px;
            padding: 5px 0;
            margin: 0 auto;
            border: 0;
            /deep/.el-calendar__title {
              margin: 0 auto;
              font-size: 14px;
              color: #007fff;
              font-weight: 700;
            }
            /deep/.el-calendar__button-group {
              display: none;
            }
          }
          //日历body
          /deep/.el-calendar__body {
            padding: 0 1px;
            width: 100%;
            /deep/.el-calendar-table {
              /deep/thead {
                /deep/th {
                  height: 20px;
                  line-height: 20px;
                  padding: 0;
                  width: 100%;
                  background-color: #007fff;
                  color: #fff;
                  text-align: center;
                  font-size: 12px;
                }
              }
              //每一行
              /deep/.el-calendar-table__row {
                height: 36px;
                padding: 3px 0 5px 0;
                /deep/.el-calendar-day {
                  width: 64px;
                  height: 36px;
                  span {
                    text-align: center;
                    display: block;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    margin: 0 auto;
                    // color: #72777b;
                    font-size: 13px;
                  }
                }
                //具体的每天
                /deep/td {
                  border: 0;
                }
                //选中的当天
                /deep/.is-selected {
                  background-color: white;
                  span {
                    display: block;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    color: #fff;
                    border-radius: 50%;
                    background-color: #007fff;
                  }
                }
              }
            }
          }
        }
      }
    }

    .main-item {
      width: 100%;
      // max-width: 960px;
      // margin-top: 35px;
      // display: flex;
      // flex-wrap: wrap;
      // align-items: stretch;
      // margin-left: -7px;
      // margin-right: -7px;
      // justify-content: space-between;
    }
  }
}
@media screen and (max-width: 950px) {
  .active {
    //右侧的活动隐藏
    .bodyContainer {
      .body {
        .right {
          display: none;
        }
      }
    }

    .main {
      .main-container {
        margin: 0;
        .main-head {
          width: 100%;
          .bkImg {
            width: 100%;
            min-width: 320px;
            margin-right: 0;
          }
          .calendar {
            //日历
            display: none;
          }
        }
      }
    }
  }
}
</style>
