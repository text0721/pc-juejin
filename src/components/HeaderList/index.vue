<template>
  <div class="headerlist" ref="headerlist">
    <ul class="headerlist-navigation" @click="handleClick">
      <li
        :class="{ first: true, active: changActive === 1 }"
        @click="changeActive(1)"
      >
        <router-link to="/recommend" class="alink not">推荐</router-link>
      </li>
      <li :class="{ active: changActive === 2 }" @click="changeActive(2)">
        <router-link to="/following" class="alink not">关注</router-link>
      </li>
      <li :class="{ active: changActive === 3 }" @click="changeActive(3)">
        <router-link
          to="/backend"
          class="alink"
          data-cate_id="6809637769959178254"
          >后端</router-link
        >
        <div class="detail" v-if="navtag">
          <span class="item" v-for="item in navtag" :key="item.id">{{
            item.tag_name
          }}</span>
        </div>
      </li>
      <li :class="{ active: changActive === 4 }" @click="changeActive(4)">
        <router-link
          to="/frontend"
          class="alink"
          data-cate_id="6809637767543259144"
          >前端</router-link
        >
        <div class="detail" v-if="navtag">
          <span class="item" v-for="item in navtag" :key="item.id">{{
            item.tag_name
          }}</span>
        </div>
      </li>
      <li :class="{ active: changActive === 5 }" @click="changeActive(5)">
        <router-link
          to="/android"
          class="alink"
          data-cate_id="6809635626879549454"
          >Android</router-link
        >
        <div class="detail" v-if="navtag">
          <span class="item" v-for="item in navtag" :key="item.id">{{
            item.tag_name
          }}</span>
        </div>
      </li>
      <li :class="{ active: changActive === 6 }" @click="changeActive(6)">
        <router-link to="/ios" class="alink" data-cate_id="6809635626661445640"
          >iOS</router-link
        >
        <div class="detail" v-if="navtag">
          <span class="item" v-for="item in navtag" :key="item.id">{{
            item.tag_name
          }}</span>
        </div>
      </li>
      <li :class="{ active: changActive === 7 }" @click="changeActive(7)">
        <router-link to="/ai" class="alink">人工智能</router-link>
        <div class="detail" v-if="navtag">
          <span class="item" v-for="item in navtag" :key="item.id">{{
            item.tag_name
          }}</span>
        </div>
      </li>
      <li :class="{ active: changActive === 8 }" @click="changeActive(8)">
        <router-link to="/freebie" class="alink">开发工具</router-link>
        <div class="detail" v-if="navtag">
          <span class="item" v-for="item in navtag" :key="item.id">{{
            item.tag_name
          }}</span>
        </div>
      </li>
      <li :class="{ active: changActive === 9 }" @click="changeActive(9)">
        <router-link to="/career" class="alink">代码人生</router-link>
        <div class="detail" v-if="navtag">
          <span class="item" v-for="item in navtag" :key="item.id">{{
            item.tag_name
          }}</span>
        </div>
      </li>
      <li :class="{ active: changActive === 10 }" @click="changeActive(10)">
        <router-link to="/acticle" class="alink">阅读</router-link>
        <div class="detail" v-if="navtag">
          <span class="item" v-for="item in navtag" :key="item.id">{{
            item.tag_name
          }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "HeaderList",
  data() {
    return {
      changActive: 1,
      isShow: false,
      navtagShow: false,
      navtag: [],
      // isShowNvatag:
      //   this.$route.path === "/recommend" || this.$route.path === "/following",
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
        this.$refs.headerlist.style.top = -61 + "px";
        // this.$refs.headerlist.style.height = 40;
        this.$refs.headerlist.style.transitionProperty = "height";
        this.$refs.headerlist.style.transitionDuration = 0.2 + "s";
        this.$refs.headerlist.style.transitionTiming = "linear";
        // this.$refs.headerlist.style.overflow = "hidden";
        // this.$refs.headerlist.style.top = -61+"px";
      } else {
        this.$refs.headerlist.style.top = 0;
      }
    },
    // 点击navitem
    async handleClick(e) {
      // console.log(this.$route.path);
      let isShow =
        this.$route.path === "/recommend" || this.$route.path === "/following";
      if (isShow) {
        this.$bus.$emit("showNavtag", "hide"); //点击隐藏navtag
      } else {
        this.$bus.$emit("showNavtag", "show"); //点击出现navtag
      }

      const { cate_id } = e.target.dataset;
      this.$store.dispatch("GetNavTag", cate_id);

      // let navtag = await axios({ baseURL: `/api/navtag?id=${cate_id}` });
      // console.log(navtag);
      // this.navtag = navtag;
    },
    changeActive(num) {
      this.changActive = num;
    },
  },
  computed: {
    ...mapState({
      navtag: (state) => state.navtag.navtag,
    }),
  },
  async mounted() {
    //添加系统滚动条事件
    window.addEventListener("scroll", this.handScroll);

    await this.$store.dispatch("GetNavTag");
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.handScroll);
  },
};
</script>

<style lang="less" scoped>
.headerlist {
  border-top: 1px solid #f1f1f1;
  position: fixed;
  width: 100%;
  height: 46px;
  z-index: 1000;
  margin-top: 61px;
  background-color: #fff;
}
.headerlist-navigation {
  display: flex;
  width: 960px;
  margin: 0 auto;
  height: 46px;
  align-items: center;
  li {
    height: 46px;
    line-height: 46px;
    position: relative;
    display: flex;
    padding: 0 12px;
    font-size: 14px;
    cursor: pointer;
    .alink {
      text-decoration: none;
    }
    &.active .alink {
      color: #007fff;
    }
    &:hover .alink {
      color: #007fff;
    }
    .detail {
      border: 1px solid #ebe8e8;
      display: none;
      position: absolute;
      top: 45px;
      left: 0;
      width: 300px;
      height: 180px;
      background: #fff;
      padding: 13px 20px;
      border-radius: 8px;
      .item {
        display: inline-block;
        text-align: center;
        background: #f1f1f1;
        padding: 3px 6px;
        border-radius: 4px;
        color: #909090;
      }
    }
    // &:hover .detail {
    //   display: block;
    // }
  }
}
</style>
