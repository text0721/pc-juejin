<template>
  <div class="book-container" v-if="bookDataList.length > 0">
    <div class="book-list">
      <div v-for="book in bookDataList" :key="book.base_info.title">
        <router-link :to="`/book/${book.base_info.booklet_id}`" class="item">
          <div class="poster">
            <img class="posterImg" :src="book.base_info.cover_img" alt="" />
          </div>
          <div class="info">
            <div class="title">{{ book.base_info.title }}</div>
            <div class="desc">
              {{ book.base_info.summary }}
            </div>
            <div class="author">
              <div class="author-info">
                <a href="#" class="user-img">
                  <img
                    class="user-avatar"
                    :src="book.user_info.avatar_large"
                    alt=""
                  />
                  <a href="#" class="author-name">
                    <span class="name">{{ book.user_info.user_name }}</span>
                    <a href="#" class="rank">
                      <img src="" alt="" />
                    </a>
                  </a>
                </a>
              </div>
              <div class="author-desc">
                <span class="self-desc"
                  >{{ book.user_info.job_title }} @
                  {{ book.user_info.company }}</span
                >
              </div>
            </div>
            <div class="other">
              <router-link :to="`/payment/${book.base_info.booklet_id}`">
                <div class="price">￥{{ book.base_info.price / 100 }}</div>
              </router-link>

              <div class="message">
                <span class="point"
                  >{{ book.base_info.section_count }}小节</span
                >
                <span>
                  <span>{{ book.base_info.buy_count }}</span>
                  <span>人已购买</span>
                </span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="book-aside">
      <div class="aside">
        <div class="notice">
          <a href="#" class="notice-content">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA0CAMAAAD/uJueAAAAulBMVEUAAAA+Xpw4Voc3VYg3VYg4VYc8V4o3Voc3VYg4Vok4Vok8Woc4VYc3VYc3VYc5Voo4VYc5Vog5VY5AVZU4VYc3VYg3VYc4Vog4Vog7WIk4Vog5V4g4Vof///83VYcra979/f4radnh5u6ntctcdJ00W51CXo/t8PXQ1+OAk7MtZ9EuZckvYrxrgaY2WJT3+PqSor5FYpDX3efL0+C+x9i5w9WwvNCHmbd6jq9geKBVb5lMZ5Q7WInr7vOydVF/AAAAHXRSTlMACPexzPMi2fB/eBHl3WZMYDMbDLqrmYlVGppnRCmvHJoAAAFOSURBVEjHtdRpb4JAGARgEBAK1KpVe+5wWHpYFO19/v+/1ddasqabQCeN84UY88SJw671l3Qdi4u91wEnDvYBhkgn4ALgOl1OU4DqdHOlFMB0ulYSgOmkNoTpZJC2TpoQnQzS0kkTopMmrZ0aids7NDs1E8CbDH51MonnO/1IE4n8lO5kBt8JQrsm+XIFeKNYdzJJNisLwB3+EKXSxzm2O5kkkdwuEA9rIsmBVDWTJCvg2pooebYQMQuEHJFuCCKSJAX6LCnhsGQGnyUZvH+QHRYrMd7Bn0xMSbww9GtJv/yVPMgj9v60PjHEQXZ84O1BvieuC+tY0Ou9CZouJessBuZ3hmi8+uwwAF7yJmImOurg4/mTIJKTU7kClxVBJN0xsJpWBJEMRnomTVpy7q5nokg9E0Mkvc1MBNEzEaSeiSIy06QDgtQzEUTPtP3pCx5TpfyEn6+dAAAAAElFTkSuQmCC"
              alt=""
            />
            <span>小册下线分销提现公告</span>
          </a>
        </div>
        <div class="section">
          <div class="section-introduce">
            <div class="title">掘金小册是什么？</div>
            <div class="desc">
              一个小篇幅、高浓度、成体系、有收益的技术学习平台
            </div>
          </div>
          <div class="wechat">
            <div class="title">关注公众号 领取优惠码</div>
            <div class="wechat-qr"></div>
          </div>
        </div>
        <div class="section-help">
          <a href="#">
            <img
              src="//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/author.c5d975e.png"
              alt=""
            />
            <div class="con">成为作者</div>
          </a>
          <a href="#">
            <img
              src="//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/feedback.1230fb5.png"
              alt=""
            />
            <div class="con">建议反馈</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Book",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      bookDataList: (state) => state.book.bookDataList,
    }),
  },
  async mounted() {
    await this.$store.dispatch("GetBookData");
  },
};
</script>

<style lang="less" scoped>
.book-container {
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  a:hover {
    cursor: pointer;
    color: #909090;
    text-decoration: none;
  }
}

.book-list {
  width: 100%;
  margin-top: 80px;
  max-width: 700px;
  box-shadow: 0 1px 3px 0 rgba(4, 5, 13, 0.23);
  a {
    border-bottom: 1px solid #e6e8e8;
  }
}
.book-aside {
  position: absolute;
  right: 0;
  top: 0;
  width: 240px;
  .aside {
    position: fixed;
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
  .posterImg {
    width: 100px;
    height: 140px;
  }
}
.info {
  flex-grow: 1;
  font-size: 14px;
  color: #2e3135;
  padding-left: 22px;
  .title {
    font-size: 20px;
    font-weight: 400;
    color: inherit;
    &:hover {
      color: #007fff;
    }
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
  margin-top: 6px;
  display: flex;
  align-items: center;
  .price {
    color: #ed7b11;
    font-size: 18px;
    margin-right: 15px;
    align-items: center;
  }
  .message {
    opacity: 0.6;
    color: #71777c;
    font-size: 13px;
    .point {
      text-align: center;
      &::after {
        display: inline-block;
        content: ".";
        color: #71777c;
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
}
.book-aside .aside {
  border-bottom: 1px solid #e6e8e8;
  .notice {
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 1px 3px 0 rgba(4, 5, 13, 0.23);
    background-color: #fff;
    margin-bottom: 10px;
    .notice-content {
      padding: 15px 16px;
      display: flex;
      align-items: center;
      img {
        height: 32px;
      }
      span {
        font-size: 16px;
        margin-left: 10px;
        font-weight: 500;
        color: #000;
      }
    }
  }
  .section {
    width: 240px;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 1px 3px 0 rgba(4, 5, 13, 0.23);
    background-color: #fff;
    .section-introduce {
      padding: 15px 16px;
      .title {
        font-size: 15px;
      }
      .desc {
        margin-top: 8px;
        font-size: 14px;
        color: #646464;
      }
    }
    .wechat {
      padding: 12px 16px;
      .title {
        font-size: 15px;
      }
      .wechat-qr {
        font-size: 14px;
        margin-top: 9px;
        height: 95px;
        background: url(//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/wechat-qr.f1926e7.png)
          no-repeat center 0;
        background-size: contain;
        border-radius: 2px;
      }
    }
  }
  .section-help {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    margin-top: 10px;
    border-radius: 2px;
    box-shadow: 0 1px 3px 0 rgba(4, 5, 13, 0.23);
    a {
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #71777b;
      flex-grow: 1;
      img {
        height: 18px;
      }
    }
  }
}
</style>
