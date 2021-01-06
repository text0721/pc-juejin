<template>
  <div class="activeItem">
    <router-link
      to="/active"
      v-for="active in activeList"
      :key="active.data.title"
      class="activeContainer"
    >
      <!-- <div> -->
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
    </router-link>
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
  // justify-content: space-between;
  width: 100%;
  position: relative;
  .activeContainer:hover {
    text-decoration: none;
    transform: translateY(-3px);
    transition: transform 400ms;
    box-shadow: 2px 5px 5px rgb(228, 219, 219); //底部阴影
    .item {
      box-shadow: none;
    }
  }
  .activeContainer {
    display: inline-block;
    margin-right: 13px;
    width: 25%;
    margin-bottom: 30px;
    transition: transform 400ms;
    width: 230px;

    img {
      border-radius: 2px;
      display: block;
      width: 230px;
      // width: 100%;
      height: 135px;
    }
    .item {
      background-color: white;
      padding: 15px 10px;
      box-shadow: 1px 1px 1px rgb(207, 198, 198); //底部阴影
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
  .activeContainer:nth-child(4n) {
    margin-right: 0;
  }
}
@media screen and (max-width: 960px) {
  .activeItem {
    .activeContainer {
      width: 32%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .activeContainer:nth-child(3n) {
      margin-right: 0;
    }
    .activeContainer:nth-child(4n) {
      margin-right: 13px;
    }
    .activeContainer:nth-child(12n) {
      margin-right: 0px;
    }
  }
}
@media screen and (max-width: 720px) {
  .activeItem {
    .activeContainer {
      width: 48%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .activeContainer:nth-child(2n) {
      margin-right: 0;
    }
    .activeContainer:nth-child(3n) {
      margin-right: 13px;
    }
    .activeContainer:nth-child(6n) {
      margin-right: 0;
    }
  }
}
@media screen and (max-width: 480px) {
  .activeItem {
    .activeContainer {
      width: 100%;
      margin-right: 0;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
