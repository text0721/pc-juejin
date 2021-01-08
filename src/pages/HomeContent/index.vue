<template>
  <div class="home">
    <div class="home-content">
      <!-- navtag部分 -->
      <nav class="nav" v-if="navtag">
        <ul class="nav-list" v-if="navtag">
          <li
            :class="{ 'nav-item': true, active: activeIndex === index }"
            v-for="(item, index) in navtag"
            :key="item.id"
            @click="chooseActive(index)"
          >
            <a href="javascript:;">{{ item.tag_name }}</a>
          </li>
          <li class="nav-item last">
            <a href="javascript:;">展开 </a>
          </li>
        </ul>
      </nav>
      <!-- 版心部分 -->
      <div class="home-outer">
        <div class="home-container">
          <ul class="home-recommend">
            <li class="active"><a href="javascript:;">热门</a></li>
            <li><a href="javascript:;">最新</a></li>
            <li><a href="javascript:;">热榜</a></li>
          </ul>
          <div class="recommend-content">
            <div class="contentList">
              <div class="content" v-if="recommendData.length">
                <p class="contentList-detail">
                  {{ recommendData[0].iteminfo.author_name }} . 8小时前
                </p>
                <p class="contentList-title">
                  {{ recommendData[0].iteminfo.title }}
                  <!-- 🏆 技术专题第八期 | 聊聊缓存的妙用和问题 -->
                </p>
                <p class="contentList-describe">
                  {{ recommendData[0].iteminfo.brief }}
                  来和掘金酱一起聊一聊缓存的妙用和问题！
                </p>
              </div>
              <img
                v-if="recommendData.length"
                class="imglogo"
                :src="recommendData[0].iteminfo.avatar"
                alt=""
              />
            </div>

            <ul class="content-item">
              <li
                class="content-outer"
                v-for="item in recommendListData"
                :key="item.iteminfo.article_id"
              >
                <div
                  class="content-item-container"
                  @mouseenter="isDown = true"
                  @mouseleave="isDown = false"
                  v-if="item"
                >
                  <div class="detail">
                    <a href="javascript:;" v-if="item">{{
                      item.iteminfo.author_user_info.user_name
                    }}</a>
                    .<a>1月前</a>.
                    <a href="javascript:;">前端</a>/
                    <a href="javascript:;">后端</a>
                    <a href="javascript:;">Andriod</a>/
                    <a href="javascript:;">程序员</a>
                  </div>
                  <p class="title" v-if="item">
                    {{ item.iteminfo.articleinfo.title }}
                  </p>
                  <div class="assist-container">
                    <div class="assist">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik00LjIzNCA2LjY5M3Y3LjI0M0gyLjg4MWMtLjQ4NiAwLS44ODEtLjQ5Mi0uODgxLTEuMDk1VjcuODc1YzAtLjYzLjQxMi0xLjE4Mi44OC0xLjE4MmgxLjM1NHptMy42ODgtMy43QzguMDEgMi40MDQgOC40OSAxLjk5IDkuMDE4IDJjLjc1NC4wMTUgMS4yMDQuNjYzIDEuMzYuOTgzLjI4NC41ODUuMjkyIDEuNTQ5LjA5NyAyLjE2Ny0uMTc3LjU2LS41ODYgMS4yOTYtLjU4NiAxLjI5NmgzLjA2NmMuMzI0IDAgLjYyNS4xNjQuODI2LjQ0OS4yMDQuMjkuMjcuNjY4LjE3OCAxLjAxMWwtMS4zODcgNS4xODNjLS4xMjYuNDk5LS41NDQuODQ3LTEuMDE2Ljg0N0g1LjUzVjYuNjkzYzEuMzg1LS4zMDkgMi4yMzYtMi42MzIgMi4zOTItMy43eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                        alt=""
                      />
                      <span>200</span>
                    </div>
                    <div class="comment">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPjc1MzFEREU0LTZCMzgtNDI4Ny04QTJBLUY2ODVGMDgzNUFGQzwvdGl0bGU+PGRlZnM+PHJlY3QgaWQ9ImEiIHg9IjU5IiB5PSI1NCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjI1IiByeD0iMSIvPjxtYXNrIGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iNTQiIGhlaWdodD0iMjUiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OCAtNTYpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik03MiA2MXY4LjAzOGg0LjQ0NEw4MS4xMTEgNzJ2LTIuOTYySDg0VjYxeiIvPjx1c2Ugc3Ryb2tlPSIjRURFRUVGIiBtYXNrPSJ1cmwoI2IpIiBzdHJva2Utd2lkdGg9IjIiIHhsaW5rOmhyZWY9IiNhIi8+PC9nPjwvc3ZnPg=="
                        alt=""
                      />
                      <span>279</span>
                    </div>
                    <div class="forward" v-show="isDown">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+QjFBMjZEODAtQ0ZCRC00REIyLThCQTAtODc0MEVBMTE2RTExPC90aXRsZT48ZyBzdHJva2U9IiNBQUIwQkEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTEwLjUyNCAzLjQxM3Y4LjIzNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMy4wMjcgNy41MDhjLjgxMyAwIDEuNjc4LS4wMSAxLjY3OC0uMDEuNDQ5IDAgLjgxMi4zNzYuODEyLjgyNmwtLjAwNSA2LjM2YS44MTkuODE5IDAgMCAxLS44MTEuODI2SDYuMzFhLjgyMi44MjIgMCAwIDEtLjgxMS0uODI2bC4wMDUtNi4zNmMwLS40NTYuMzYtLjgyNS44MTItLjgyNWwxLjY4OS4wMDZNOC4zNzMgNS4xMTFsMi4xNDMtMi4wOSAyLjE0MyAyLjA3Ii8+PC9nPjwvc3ZnPg=="
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <img
                  v-if="item"
                  class="imgpho"
                  :src="item.iteminfo.author_user_info.avatar_large"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        <!-- 右侧nav -->
        <div class="navBar">
          <div class="login">
            <p class="title">掘金 - juejin.cn</p>
            <p class="help">一个帮助开发者成长的社区</p>
            <div class="phone">
              <el-input placeholder="请输入手机号码" class="input-with-select">
                <el-select placeholder="+86" slot="prepend" :value="{}">
                  <el-option label="中国" value="1"></el-option>
                  <el-option label="美国" value="2"></el-option>
                  <el-option label="法国" value="3"></el-option>
                </el-select>
              </el-input>
            </div>
            <div class="verify">
              <el-input placeholder="验证码">
                <el-button slot="append">获取验证码</el-button>
              </el-input>
            </div>
            <el-button type="primary" class="login-now">立即登录</el-button>

            <p class="agreement">立即登录即表示</p>
            <p class="agree">
              同意 <a href="javascript:;">用户协议 、 隐私政策</a>
            </p>
          </div>
          <div class="advert1">
            <img
              src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae70d414c22a4a668b8da47e2296c10a~tplv-k3u1fbpfcp-watermark.image"
              alt=""
            />
          </div>
          <div class="advert2">
            <img
              src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57411f7465cf47288ce88386b73ef120~tplv-k3u1fbpfcp-watermark.image"
              alt=""
            />
          </div>
          <div class="qr-code">
            <img
              src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/app-install.6226a3b.png"
              alt=""
            />
            <div class="download">
              <p class="code-bottom">下载掘金客户端</p>
              <p>一个帮助开发者成长的社区</p>
            </div>
          </div>
          <div class="author-list">
            <p class="list-header">🎖️作者榜</p>
            <ul class="list">
              <li>
                <img
                  class="author-img"
                  src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/f7d2c0fd0a42bb342fb8dc8a9d573224~300x300.image"
                  alt=""
                />
                <div class="list-content">
                  <p>
                    思思同学
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIzIDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzZFQ0VGRiIgZD0iTTMgMWgxN2EyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDRoMnY3SDN6TTggNmgybDIgNWgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQgNmgtMmwtMiA1aDJ6TTMgOWg1djJIM3pNMTUgM2g1djJoLTV6TTE4IDVoMnYyaC0yek0xNSA5VjdoMnYyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNSA4VjZoNXYyek0xNSA5aDV2MmgtNXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                      alt=""
                    />
                  </p>
                  <p>前端CV工程师 @ 西厂</p>
                </div>
              </li>
              <li>
                <img
                  class="author-img"
                  src="https://user-gold-cdn.xitu.io/2020/7/8/1732ee33bc6d7dc6?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
                  alt=""
                />
                <div class="list-content">
                  <p>
                    思思同学
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIzIDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzZFQ0VGRiIgZD0iTTMgMWgxN2EyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDRoMnY3SDN6TTggNmgybDIgNWgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQgNmgtMmwtMiA1aDJ6TTMgOWg1djJIM3pNMTUgM2g1djJoLTV6TTE4IDVoMnYyaC0yek0xNSA5VjdoMnYyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNSA4VjZoNXYyek0xNSA5aDV2MmgtNXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                      alt=""
                    />
                  </p>
                  <p>前端CV工程师 @ 西厂</p>
                </div>
              </li>
              <li>
                <img
                  class="author-img"
                  src="https://user-gold-cdn.xitu.io/2020/3/19/170f1d84faa260af?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
                  alt=""
                />
                <div class="list-content">
                  <p>
                    思思同学
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIzIDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzZFQ0VGRiIgZD0iTTMgMWgxN2EyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDRoMnY3SDN6TTggNmgybDIgNWgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQgNmgtMmwtMiA1aDJ6TTMgOWg1djJIM3pNMTUgM2g1djJoLTV6TTE4IDVoMnYyaC0yek0xNSA5VjdoMnYyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNSA4VjZoNXYyek0xNSA5aDV2MmgtNXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                      alt=""
                    />
                  </p>
                  <p>前端CV工程师 @ 西厂</p>
                </div>
              </li>
            </ul>
            <p class="complete">完整榜单 ></p>
          </div>
          <div class="guide">
            <div class="guide-item">
              <img
                class="guide-img"
                src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-tutu.d58819c.png"
                alt=""
              />
              <P class="guide-community">掘金社区漫游指南</P>
            </div>
            <div class="guide-item">
              <img
                class="guide-img"
                src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png"
                alt=""
              />
              <p class="guide-community">下载掘金浏览器插件</p>
            </div>
            <div class="guide-item">
              <img
                class="guide-img"
                src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-miner.b78347c.png"
                alt=""
              />
              <p class="guide-community">前往掘金翻译计划</p>
            </div>
          </div>
          <div class="link">
            <p class="license">
              <a href="javascript:;">关于</a>.<a href="javascript:;">营业执照</a
              >.<a href="javascript:;">友情链接</a>
            </p>
            <p class="use">
              <a href="javascript:;">用户协议</a>.<a href="javascript:;"
                >隐私政策</a
              >.<a href="javascript:;">使用指南</a>
            </p>
            <p><a href="javascript:;">京ICP备18012699号-3</a></p>
            <p><a href="javascript:;">京公网安备11010802026719号</a></p>
            <p>版权所有：北京北比信息技术有限公司</p>
            <p>公司地址：北京市海淀区信息路甲28号13层B座13B-5</p>
            <p>公司座机：010-83434395</p>
            <p><a href="javascript:;">©2021 掘金</a></p>
            <div class="weixin">
              <img
                src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/weibo.0cd39f5.png"
                alt=""
              />
              <img
                src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/wechat.ce329e6.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "HomeContent",
  data() {
    return {
      recommendListData: [],
      recommendData: [],
      isDown: false, //下载的显示和隐藏
      isShowNavtag: false,
      activeIndex: -1, //切换类名
    };
  },
  methods: {
    // 选中切换activ类名
    chooseActive(index) {
      this.activeIndex = index;
    },
  },
  computed: {
    ...mapState({
      navtag: (state) => state.navtag.navtag,
    }),
  },
  async mounted() {
    //请求数据并处理

    const recommend = await axios({
      baseURL: `/api/recommendListData`,
    });
    this.recommendData = recommend.data.data.data.filter(
      (item) => item.item_type === 14
    );
    // this.recommendListData = recommend.data.data.data.slice(1, 13);
    this.recommendListData = recommend.data.data.data.filter(
      (item) => item.item_type === 2
    );
    // console.log(this.recommendData, this.recommendListData);

    //显示隐藏navtag
    this.$bus.$on("showNavtag", (tag) => {
      if (tag === "show") {
        this.isShowNavtag = true;
      } else {
        this.isShowNavtag = false;
      }
    });
  },
};
</script>

<style lang="less" scoped>
//版心部分
.home {
  width: 100%;
  margin-top: 110px;
  background-color: #f4f5f5;
  a:hover {
    text-decoration: none;
  }
}
.home-content {
  width: 960px;
  margin: 0 auto;
}
.home-outer {
  width: 960px;
  margin: 0 auto;
  // margin-top: 100px;
  padding-top: 10px;
  display: flex;
}
.home-container {
  width: 700px;
  background-color: #fff;
  // padding: 0 20px;
}
.home-recommend {
  display: flex;
  height: 46px;
  padding-left: 15px;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
  li {
    padding: 0 12px;
    border-right: 1px solid #eaeaea;
    font-size: 14px;
    &.active a {
      color: #007fff;
    }
    a {
      text-decoration: none;
    }
    &:hover a {
      color: #007fff;
    }
  }
  li:nth-of-type(3) {
    border: none;
  }
}
.content {
  cursor: pointer;
}
.recommend-content .contentList {
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f4f4f4;
  cursor: pointer;
}
.contentList-detail {
  color: #bab2c2;
}
.contentList-title {
  height: 20px;
  color: #2e3135;
  font-size: 17px;
  font-weight: bold;
  padding: 6px 0 12px;
}
.contentList-describe {
  color: #bab2c2;
  font-size: 14px;
}
.recommend-content .contentList .imglogo {
  height: 60px;
  width: 60px;
}
.content-item {
  border-bottom: 1px solid #f4f4f4;
}
.content-outer {
  display: flex;
  padding: 18px 24px;
  justify-content: space-between;
  border-bottom: 1px solid #f4f4f4;
  cursor: pointer;
  .imgpho {
    width: 60px;
    height: 60px;
  }
}
.content-item .detail {
  color: #bab2c2;
  a {
    text-decoration: none;
    color: #bab2c2;
    padding: 0 8px;
  }
  a:nth-of-type(1) {
    padding-left: 0;
  }
}
.content-item .title {
  height: 20px;
  color: #2e3135;
  font-size: 17px;
  font-weight: bold;
  margin: 6px 0 12px;
  text-decoration: none;
  cursor: pointer;
}
.assist-container {
  display: flex;
}
.assist-container .assist {
  border: 1px solid #f4f4f4;
  height: 24px;
  padding: 0 10px;
  color: #b2bac2;
  font-size: 13px;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.assist-container .comment {
  border: 1px solid #f4f4f4;
  height: 24px;
  padding: 0 10px;
  color: #b2bac2;
  font-size: 13px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border-left: none;
}
.assist-container .forward {
  height: 24px;
  border: 1px solid #f4f4f4;
  padding: 0 10px;
  border-left: none;
}
.navBar {
  width: 240px;
  margin-left: 20px;
}
.navBar .login {
  padding: 16px;
  margin-bottom: 15px;
  background-color: #fff;
}
.navBar .login .title {
  height: 18px;
  font-size: 14px;
  font-weight: bold;
  color: #2e3135;
}
.navBar .login .help {
  font-size: 14px;
  margin: 8px 0;
}
.el-input {
  border: none;
  outline: none;
}
.phone .el-select {
  width: 75px;
}
.verify {
  margin: 8px 0;
}
.verify .el-button {
  width: 100px;
  color: #007fff;
}
.agreement {
  margin-top: 20px;
  font-size: 14px;
  color: #b2bac2;
}
.agree {
  font-size: 14px;
  margin: 5px 0;
  color: #b2bac2;
  a {
    color: #007fff;
  }
}
.login-now {
  width: 100%;
}
.advert1 {
  margin-bottom: 15px;
  width: 240px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
.advert2 {
  margin-bottom: 15px;
  width: 240px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}

.qr-code {
  margin-bottom: 15px;
  box-sizing: border-box;
  height: 82px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  background-color: #fff;
  img {
    width: 50px;
    height: 50px;
  }
  .code-bottom {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 5px;
  }
}

.author-list {
  margin-bottom: 15px;
  // border-bottom: 1px solid #f4f4f4;
  background-color: #fff;
  .list-header {
    padding: 12px 16px;
    font-size: 14px;
  }
  .list {
    li {
      padding: 12px 16px;
      display: flex;
      cursor: pointer;
      .author-img {
        width: 46px;
        height: 46px;
      }
    }
  }
}
.list-content {
  margin: 0 10px;
}
.author-list .complete {
  height: 42px;
  line-height: 42px;
  text-align: center;
  font-size: 14px;
  color: #007fff;
  border-top: 1px solid #f4f4f4;
}
.guide {
  background-color: #fff;
  padding-left: 10px;
}
.guide .guide-item {
  display: flex;
  height: 60px;
  align-items: center;
  .guide-img {
    width: 36px;
    height: 36px;
  }
  .guide-community {
    padding: 0 10px;
    font-size: 14px;
  }
}
.link {
  margin-top: 20px;
  color: #b2bac2;
  p {
    margin: 5px 0;
    a {
      color: #b2bac2;
      text-decoration: none;
    }
  }

  .license {
    a {
      padding: 0 10px;
      color: #b2bac2;
      text-decoration: none;
    }
    a:nth-of-type(1) {
      padding-left: 0;
    }
  }
  .use {
    a {
      padding: 0 10px;
      color: #b2bac2;
      text-decoration: none;
    }
    a:nth-of-type(1) {
      padding-left: 0;
    }
  }
}
.weixin {
  img {
    margin-right: 20px;
    width: 26px;
    height: 26px;
  }
}

// nav部分
.nav {
  .nav-list {
    display: flex;
    height: auto;
    flex-wrap: wrap;

    .nav-item {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        font-size: 13px;
        padding: 5px 10px;
        margin-right: 8px;
        margin-bottom: 6px;
        background-color: #fff;
        border-radius: 3px;
      }
    }
    li:hover a {
      color: #007fff;
    }
    li.active a {
      background-color: #007fff;
      color: #fff;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05),
        0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    li.last {
      position: relative;
      color: pink;
      a {
        padding-right: 20px;
      }
    }

    li.last ::after {
      position: absolute;
      right: 14px;
      bottom: 30%;
      content: "";
      height: 5px;
      width: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #8a9aa9;
    }
  }
}
</style>
