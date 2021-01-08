<template>
  <div class="active">
    <div class="fixedTop">
      <Header />

      <!-- 导航条 -->
      <div class="bodyContainer">
        <div class="body">
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

          <el-calendar v-model="value" class="calendar" :first-day-of-week="7">
            <template slot="dateCell" slot-scope="{ data }">
              <!-- <div :data-time="week">111</div> -->
              <div
                @mouseenter="showMessage(data.day)"
                @mouseleave="day = ''"
                class="setActive"
              >
                <p class="calendar-day" v-if="data.day.substr(-2) < 10">
                  {{ data.day.substr(-1) }}
                </p>
                <p class="calendar-day" v-else>{{ data.day.substr(-2) }}</p>
                <!-- 日历下的圆点 -->
                <div class="events">
                  <span
                    class="remarks"
                    v-for="item in showObj[
                      data.day.split('-').splice(1, 2).join('-')
                    ]"
                    :key="item"
                  ></span>
                </div>
                <!-- 鼠标移入提示的title -->
                <div>
                  <ul
                    class="message"
                    v-show="
                      data.day.split('-').splice(1, 2).join('-') === day &&
                      showObj[day]
                    "
                  >
                    <li v-for="msg in showObj[day]" :key="msg">
                      <a href="">-{{ msg }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
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
      activeList: [],
      //需要展示日历上的数据数组
      showObj: {},
      day: "01-31",
    };
  },
  async mounted() {
    const res = await axios({
      baseURL: `/api/getactivenav`,
    });
    this.activeNavList = res.data.data;

    //将传送过来的数据调处理成obj格式展示
    let obj = {};
    this.$nextTick(() => {
      this.activeList.forEach((item) => {
        let str = item.day.substr(0, 5);
        obj[str] = [];
        this.activeList.forEach((active) => {
          if (active.day.substr(0, 5) === str) {
            obj[str].push(active.title);
          }
        });
        this.showObj = obj;
        // console.log(obj);
      });
    });
  },
  created() {
    //添加系统滚动条事件
    // window.addEventListener("scroll", this.handScroll);
    //调整添加窗口大小事件
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.$bus.$on("showMessage", this.getMessage);

    //日历相关
    this.$nextTick(() => {
      // 点击前一个月
      let prevBtn = document.querySelector(
        ".el-calendar__button-group .el-button-group>button:nth-child(1)"
      );
      prevBtn.innerHTML = "";
      prevBtn.className = "iconfont icon-103fangxiang_xiangzuo";

      //点击下一个月
      let nextBtn = document.querySelector(
        ".el-calendar__button-group .el-button-group>button:nth-child(3)"
      );
      nextBtn.innerHTML = "";
      nextBtn.className = "iconfont icon-101fangxiang_xiangyou";
    });
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
      // let screenWidth =
      //   document.documentElement.clientWidth || document.body.clientWidth;
      let screenWidth = window.innerWidth;

      if (screenWidth > 960) {
        this.screenWidth = 960;
      } else {
        this.screenWidth = screenWidth;
      }
      // console.log("实际窗口宽", screenWidth);
    },
    //hover的显示信息事件
    showMessage(days) {
      //格式化hover传下来的日期为月日格式
      let day = days.split("-").splice(1, 2).join("-");
      this.day = day;
    },
    //获取接受到的message
    getMessage(message) {
      this.activeList = message;
    },
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handScroll);
    this.$bus.$off("showMessage");
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
  //固定的头部
  .fixedTop {
    width: 100%;
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
        //轮播图部分
        /deep/.el-carousel__item h3 {
          color: #475669;
          font-size: 14px;
          opacity: 0.75;
          line-height: 150px;
          margin: 0;
        }

        /deep/.el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }

        /deep/.el-carousel__item:nth-child(2n + 1) {
          background-color: #d3dce6;
        }
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
            position: relative;
            height: 25px;
            padding: 5px 0;
            padding-left: 86px;
            margin: 0 auto;
            border: 0;
            /deep/.el-calendar__title {
              margin: 0 auto;
              // margin-left: 65.5px;
              font-size: 14px;
              color: #007fff;
              font-weight: 700;
              line-height: 25px;
            }
            /deep/.el-calendar__button-group {
              /deep/.el-button-group {
                button {
                  line-height: 25px;
                  border: none;
                  background-color: transparent;
                  outline: none;
                  color: #007fff;
                }
                //上个月的按钮
                button:nth-child(1) {
                  position: absolute;
                  left: 70px;
                }
                button:nth-child(2) {
                  display: none;
                }
                button:nth-child(3) {
                  margin-right: 70px;
                }
              }
            }
          }
          //日历body
          /deep/.el-calendar__body {
            padding: 0 1px;
            padding-left: 0;
            width: 100%;
            /deep/.el-calendar-table {
              /deep/ .el-calendar-table__row {
                .prev,
                .next {
                  // 修改非本月的颜色
                  .el-calendar-day {
                    p {
                      color: rgb(159, 163, 162);
                    }
                  }
                }

                td {
                  // 修改固定列td标签
                  &:first-child,
                  &:last-child {
                    // background: aquamarine;
                    color: #007fff;
                  }
                }
              }

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
                color: rgb(104, 98, 99);
                /deep/.el-calendar-day {
                  position: relative;
                  width: 64px;
                  height: 36px;
                  .setActive:hover {
                    .remarks {
                      background-color: #007fff;
                    }
                  }

                  //备注日程部分
                  p {
                    display: inline-block;
                    margin: 0 auto;
                    font-size: 13px;
                  }
                  div {
                    text-align: center;
                  }
                }
                .events {
                  margin: 0 auto;
                  width: 50px;
                  display: flex;
                  height: 6px;
                  margin-top: 3px;
                  justify-content: center;
                  text-align: center;
                  overflow: hidden;

                  .remarks {
                    font-size: 13px;
                    box-sizing: border-box;

                    flex-shrink: 0;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    border: 1px solid #007fff;
                    margin-right: 3px;
                  }
                  .remarks:last-child {
                    margin-right: 0;
                  }
                }

                /deep/.el-calendar-day:hover {
                  background: none;
                  // .remarks {
                  //   background-color: #007fff;
                  // }
                  //展示的标题部分
                  .message {
                    list-style-type: disc;
                    display: block;
                    color: black;
                    position: absolute;
                    z-index: 9;
                    top: 40px;
                    left: -80px;
                    background: rgb(185, 241, 210);
                    border: 1px solid #007fff;
                    padding: 5px;
                    li {
                      list-style-type: disc;
                      list-style-type: circle !important;
                      width: 200px;
                      line-height: 20px;
                      text-align: left;
                      padding-left: 5px;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      a {
                        color: #007fff;
                        text-decoration: none;
                        cursor: pointer;
                      }
                    }
                  }
                }

                //具体的每天
                /deep/td {
                  border: 0;
                }
                //选中的当天
                /deep/.is-selected {
                  background-color: white;
                  span,
                  .calendar-day {
                    display: block;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    color: #fff;
                    border-radius: 50%;
                    background-color: #007fff;
                  }
                  .remarks {
                    background: none;
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
    }
  }
}
//媒体查询
@media screen and (max-width: 960px) {
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
