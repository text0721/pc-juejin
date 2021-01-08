<template>
  <div class="book-container">
    <div class="container">
      <div class="book-list">
        <div class="item">
          <div class="poster" v-if="bookDetailData.booklet">
            <img :src="bookDetailData.booklet.base_info.cover_img" alt="" />
          </div>
          <div class="poster-info" v-if="bookDetailData.booklet">
            <div class="title" v-if="bookDetailData.booklet">
              {{ bookDetailData.booklet.base_info.title }}
            </div>
            <div class="desc" v-if="bookDetailData.booklet">
              {{ bookDetailData.booklet.base_info.summary }}
            </div>
            <div class="author">
              <div class="author-info">
                <a href="#" class="user-img">
                  <img
                    class="user-avatar"
                    v-if="bookDetailData.booklet"
                    :src="bookDetailData.booklet.user_info.avatar_large"
                    alt=""
                  />
                  <a href="#" class="author-name">
                    <span class="name" v-if="bookDetailData.booklet">{{
                      bookDetailData.booklet.user_info.user_name
                    }}</span>
                    <a href="#" class="rank">
                      <img src="" alt="" />
                    </a>
                  </a>
                </a>
              </div>
              <div class="author-desc" v-if="bookDetailData.booklet">
                <span class="self-desc" v-if="bookDetailData.booklet">
                  {{ bookDetailData.booklet.user_info.job_title }} @
                  {{ bookDetailData.booklet.user_info.company }}
                </span>
              </div>
            </div>
            <div class="other" v-if="bookDetailData.booklet">
              <button class="buy" @click="toBuy" v-if="bookDetailData.booklet">
                购买 ￥{{ bookDetailData.booklet.base_info.price / 100 }}
              </button>
              <div class="try">试读</div>
            </div>
          </div>
        </div>
        <div class="buy-count" v-if="bookDetailData.booklet">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNjY2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2IDYpIj4KICAgICAgICA8Y2lyY2xlIGN4PSI5LjUiIGN5PSI5LjUiIHI9IjkuNSIvPgogICAgICAgIDxwYXRoIGQ9Ik01IDlsMyAzIDYtNiIvPgogICAgPC9nPgo8L3N2Zz4K"
            alt=""
          />
          <span v-if="bookDetailData.booklet"
            >{{ bookDetailData.booklet.base_info.buy_count }} 人已购买</span
          >
        </div>
      </div>

      <!-- 目录部分 -->
      <div class="book-card">
        <!-- 目录 -->
        <div class="book-menu-wrap">
          <a href="#menu" class="menu active">目录</a>
          <a href="#produce" class="produce">介绍</a>
          <!-- <div class="menu active">目录</div>
          <div class="produce">介绍</div> -->
        </div>
        <!-- 小册内容 -->
        <a name="menu"></a>
        <div class="book-con">
          <div class="con-header">小册内容</div>
          <div class="con-info">
            <a
              href=""
              class="info"
              v-for="(bookDetail, index) in bookDetailData.sections"
              :key="bookDetail.id"
            >
              <div class="step">
                <div class="round">{{ index + 1 }}</div>
              </div>
              <div class="center">
                <!-- <div class="title" v-show="bookDetail.sections.is_free">准备篇：学前准备</div> -->
                <div class="title">{{ bookDetail.draft_title }}</div>
                <div class="sub-line">
                  <div class="try-read" v-if="bookDetail.is_free">
                    {{ bookDetail.is_free ? "试读" : "" }}
                  </div>
                  <div class="statistics">
                    <span> 时长: 15分55秒 </span>
                    <span> {{ bookDetail.read_count }}次学习 </span>
                    <span> {{ bookDetail.comment_count }}条评论 </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <a name="produce"></a>
        <div
          v-if="bookDetailData.introduction"
          v-html="bookDetailData.introduction.content"
          class="bookContent"
        ></div>
        <!-- <div class="section" v-if="bookDetail">
          <div class="article-content">
            {{ bookDetail.introduction.content }}
            <h3>作者介绍</h3>
            <p>
              Hello，我是JowayYoung，一枚全栈前端开发工程师，目前就职于网易的互动娱乐事业群。涉足于前端领域和后端领域，擅长CSS/JS开发技巧、基于CSS/JS开发各种应用(网站应用、桌面应用、移动应用、服务应用、爬虫应用、同构应用、工具应用、脚手架应用、自动化应用、小程序应用)、数据分析和资料整理。日常喜欢学习与分享，经常会开发一些小工具提高工作效率和改善生活质量。
            </p>
            <p>
              笔者是掘金近期专栏作家，目前专栏都是发表一些技巧性和概括性的文章，比较适合初中级前端开发者去阅读，后期会去发表一些原理性和架构性的进阶型文章。目前专栏有15篇文章，关注量1.1万+，点赞量1.2万+，阅读量40万+。有兴趣的同学可移步到笔者的掘金专栏JowayYoung，或关注笔者的微信公众号IQ前端。
            </p>
            <h3>小册介绍</h3>
            <p>
              笔者是一位很喜欢CSS艺术的人儿，欢迎各位同学与笔者一起探讨和进阶CSS。说到CSS，很多同学会觉得CSS很简单，但是也有一些同学会觉得CSS很困难。
            </p>
            <p>
              为何会产生这种问题呢？觉得CSS简单的同学，可能很多场景都是使用UI框架开发，在开发过程中基本不会考虑如何编写好CSS或重构CSS，在遇到与需求有出入的情况顶多就使用样式覆盖的方式暴力解决。觉得CSS困难的同学，大多数情况是依据设计师提供的设计图还原切片图层，需考虑很多设计规范的问题，甚至一套样式规范应用到各种屏幕上，增加了CSS在适配上的难度。
            </p>
            <p>
              本小册是一本深入学习和玩转CSS的电子工具书，附带大量的CSS神操作骚技巧，90%的内容纯讲CSS，也有两章会涉及到JS，当然这也难不倒用心学习的同学。CSS的存在当然会有它的原因，并不能觉得简单而去忽略它。前端三剑客缺少一个都不行，HTML、CSS和JS三者相辅相成，缺一不可。CSS的盒模型、文档流、选择器和属性等，组成了一个强而有力的CSS知识体系。学习好CSS不仅能解决一些工作问题，还能提升自己的审美标准，在业余时间也是一种消磨时间和挖掘艺术的方式。
            </p>
            <p>
              所以在学习本小册前，我们可放平心态，想着学好CSS就足够了，完全不用管JS。我们现在是一位CSS艺术开发者，英文Title是Art
              CSSer。CSS神操作骚技巧其实很简单，勇敢发挥你的想象力，你也会成为一位优秀的Art
              CSSer。希望能与各位同学分享笔者的学习思路和思维方式，相信各位同学学习完本小册也能得心应手编写出一些完美的CSS效果。
            </p>
            <h3>小册目录</h3>
            <ul>
              <li>
                <input type="checkbox" checked disabled />
                "第01章："
                <strong>学前准备</strong>
                "(准备篇)"
              </li>
              <li>
                <input type="checkbox" checked disabled />
                "第01章："
                <strong>学前准备</strong>
                "(准备篇)"
              </li>
              <li>
                <input type="checkbox" checked disabled />
                "第01章："
                <strong>学前准备</strong>
                "(准备篇)"
              </li>
              <li>
                <input type="checkbox" checked disabled />
                "第01章："
                <strong>学前准备</strong>
                "(准备篇)"
              </li>
            </ul>
            <p>
              <img
                height="380px"
                width="660px"
                src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd20f091b3af4050be2c0c765823062c~tplv-k3u1fbpfcp-zoom-1.image"
                alt="玩转CSS"
              />
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import moment from "moment"
// import { mapState } from "vuex";
export default {
  name: "BookDetail",
  data() {
    return {
      // bookDetail: {},
      bookDetailData: {},
    };
  },
  computed: {
    // ...mapState({
    //   bookDataList: (state) => state.book.bookDataList,
    // }),
  },
  methods: {
    toBuy() {
      this.$router.push({
        name: "Payment",
        params: {
          bookDetailData: this.bookDetailData,
        },
      });
    },
  },
  async mounted() {
    // console.log(this.$route.params.id);
    // console.log(bookDetailData);
    let { id } = this.$route.params;
    let bookDetailData = await axios({
      baseURL: `/api/getBookDetailList?id=${id}`,
      method: "GET",
      // data: {
      //   booklet_id: id,
      // },
    });
    // this.bookDetailData = bookDetailData;
    this.bookDetailData = bookDetailData.data.data;
    console.log(this.bookDetailData);
    //  this.$refs.content.innerHTML=this.bookDetailData.introduction.conten
  },
};
</script>

<style lang="less" scoped>
.book-container {
  width: 960px;
  margin: 0 auto;
}
.container {
  margin: 0 auto;
  max-width: 750px;
}
a {
  cursor: pointer;
  color: #909090;
  text-decoration: none;
}
.book-list {
  width: 100%;
  max-width: 720px;
  box-shadow: 0 1px 3px 0 rgba(4, 5, 13, 0.23);
  a {
    border-bottom: 1px solid #e6e8e8;
  }
}
.item {
  display: flex;
  padding: 25px;
  box-sizing: border-box;
  background-color: #fff;
}
.poster {
  width: 100px;
  height: 140px;
  img {
    width: 100%;
    height: 100%;
  }
}
.poster-info {
  flex-grow: 1;
  font-size: 14px;
  color: #2e3135;
  padding-left: 22px;
  .title {
    font-size: 20px;
    font-weight: 400;
    color: inherit;
  }
  .desc {
    height: 20px;
    line-height: 20px;
    // white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
    color: #71777c;
    font-size: 14px;
  }
}
.author {
  display: flex;
  align-items: center;
  margin-top: 6px;
  overflow: hidden;
  white-space: nowrap;
  .author-info {
    .user-img {
      .user-avatar {
        width: 26px;
        height: 26px;
        margin-right: 5px;
      }
    }
    .author-name {
      color: #000;
      font-weight: 400;
      .name {
        display: inline-block;
        vertical-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .rank {
      margin-left: 5px;
    }
  }
  .author-desc {
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .self-desc {
      margin: 0 10px 0 10px;
    }
  }
}
.other {
  margin-top: 25px;
  display: flex;
  // align-items: center;
  .buy {
    border: none;
    background-color: #007fff;
    height: 40px;
    color: #fff;
    text-align: center;
    font-size: 16px;
    border-radius: 2px;
    outline: none;
    padding: 0 30px;
    &:hover {
      background-color: #0371df;
    }
  }
  .try {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding-left: 30px;
    padding-right: 30px;
    color: #71777c;
    text-align: center;
    background-color: #fff;
    border: 1px solid #aeb6c0;
    margin-left: 5px;
    &:hover {
      background: #f2f4f7;
    }
  }
}
.buy-count {
  width: 720px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 22px 8px 15px;
  border: 1px solid #ecf0f3;
  color: #666;
  font-size: 16px;
  font-weight: 400;
}

.book-card {
  margin-top: 20px;
  width: 720px;
  font-size: 16px;
  box-shadow: 0 1px 3px 0 rgba(4, 5, 13, 0.23);
}
.book-menu-wrap {
  display: flex;
  height: 50px;
  line-height: 50px;
  border: 1px solid #f2f4f7;
  a {
    padding: 0 20px;
    cursor: pointer;
    &:hover {
      color: #007fff;
    }
  }
  a.active {
    color: #007fff;
    border-bottom: 2px solid #007fff;
  }
}
.book-con {
  padding: 30px 30px 0;
}
.con-header {
  margin: 0 0 20px;
  padding: 0 0 12px;
  font-size: 24px;
  font-weight: 700;
  border-bottom: 1px solid #ececec;
}
.con-info {
  .info {
    text-decoration: none;
    min-height: 70px;
    cursor: pointer;
    display: flex;
    align-items: center;
    // justify-content: flex-start;
    padding-left: 20px;
    padding-right: 35px;
    &:hover {
      background: #dbdee0;
    }
  }
  .step {
    position: relative;
    margin-right: 15px;
    // align-self: stretch;
    &::before {
      z-index: 0;
      position: absolute;
      left: 50%;
      transform: translateY(-90%);
      width: 2px;
      background-color: #b5b7ba;
      height: 45%;
      content: "";
    }
  }
  .info:nth-of-type(1) .step::before {
    content: "";
    display: none;
    // width: 10px;
  }

  .round {
    border: 2px solid #b5b7ba;
    color: #b5b7ba;
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-width: 3px;
    border-radius: 50%;
    z-index: 10;
    font-size: 18px;
  }

  .center {
    .title {
      font-size: 16px;
    }
    .sub-line {
      display: flex;
      align-items: center;
      font-size: 12px;
      .try-read {
        width: 40px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: #fa5600;
        color: #fff;
        border-radius: 2px;
        margin-right: 10px;
      }
      .statistics {
        color: #b2bac2;
        span {
          margin-right: 10px;
        }
      }
    }
  }
}

.section {
  padding: 1px 30px 30px;
}
.article-content {
  h3 {
    font-size: 18px;
    padding-bottom: 12px;
    border-bottom: 1px solid #ececec;
  }
  p {
    margin: 22px 0;
  }
}
.bookContent {
  width: 720px;
  margin-top: 20px;
  text-indent: 10px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  img {
    position: absolute;
    // overflow: hidden;
    // box-sizing: border-box;
  }
  overflow: hidden;
}
</style>
