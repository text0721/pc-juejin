<template>
  <div class="activeItem">
    <div
      v-for="active in activeList"
      :key="active.data.imgUrl"
      class="activeContainer"
    >
      <img v-lazy="active.data.imgUrl" alt="" />
      <div class="item">
        <p class="title">{{ active.data.title }}</p>
        <div class="data">
          <span class="time iconfont icon-rili"></span>
          <p class="day">{{ active.data.day }}</p>
        </div>
        <div class="countrys">
          <span class="adress iconfont icon-daohang-"></span>
          <span class="city">{{ active.data.adress }}</span>
          <div>报名参加</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "activeItem",
  props: ["currentIndex"],
  data() {
    return {
      activeList: [],
    };
  },
  async mounted() {
    this.getactiveitem();
    // this.activeList = res.data.data;
    // console.log(res.data.data);
    // axios({
    //   method: "GET",
    //   url: "/api/getactiveitem",
    // })
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
    this.$bus.$on("addEvent", this.getactiveitem);
  },
  beforeDestroy() {
    this.$bus.$off("addEvent", this.getactiveitem);
  },
  methods: {
    //封装请求具体活动item 的方法
    async getactiveitem() {
      // console.log("activeItem触发了");
      let res;
      if (this.currentIndex === -1) {
        res = await axios({
          baseURL: `/api/getactiveitem`,
        });
      } else {
        res = await axios({
          baseURL: `/api/getactiveitem`,
        });
      }
      this.activeList = res.data.data;
    },
  },
};
</script>

<style lang='less' scoped>
.activeItem {
  display: flex;
  // 不允许压缩
  flex-shrink: 0;
  // 不允许换行
  flex-wrap: wrap;
  justify-content:space-between;
  width: 100%;
  // box-sizing: border-box;
  position: relative;
  .activeContainer:hover {
    transform: translateY(-5px);
    transition: transform 400ms;
  }
  .activeContainer {
    // margin-right: 10px;
    width: 25%;
    // display: inline-block;
    margin-bottom: 30px;
    transition: transform 400ms;
    width: 230px;
    box-shadow: 0 2px 10px -1px rgb(158, 152, 152); //底部阴影
    img {
      display: block;
      // width: 230px;
      width: 100%;
      height: 135px;
    }
    .item {
      background-color: white;
      padding: 15px 10px;
      .title {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        height: 40px;
        font-size: 14px;
        font-weight: 700;
      }
      .data {
        display: flex;
        .time {
          width: 16px;
          height: 16px;
          margin-right: 5px;
          color: #333;
        }
      }
    }
    .countrys {
      display: flex;
      margin-top: 6px;
      justify-content: space-between;
      position: relative;
      padding: 5px 0;
      .city {
        text-align: left;
        position: absolute;
        left: 25px;
        top: 8px;
      }
      margin-right: 10px;
      .adress {
        width: 16px;
        height: 16px;
        color: #333;
      }
      div {
        width: 100px;
        height: 25px;
        border-radius: 30px;
        background-color: #4d91fd;
        line-height: 25px;
        color: #fff;
        text-align: center;
      }
    }
  }
}
@media screen and (max-width: 950px) {
  .activeItem {
    .activeContainer {
      width: 33%;
      img {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 720px) {
  .activeItem {
    .activeContainer {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 460px) {
  .activeItem {
    .activeContainer {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
