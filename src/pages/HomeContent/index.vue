<template>
  <div class="home">
    <div class="home-outer">
      <div class="home-container">
        <ul class="home-recommend">
          <li><a href="">热门</a></li>
          <li><a href="">最新</a></li>
          <li><a href="">热榜</a></li>
        </ul>
        <div class="recommend-content">
          <div class="contentList">
            <div class="content">
              <p>掘金酱 . 8小时前</p>
              <p>🏆 技术专题第八期 | 聊聊缓存的妙用和问题</p>
              <p>来和掘金酱一起聊一聊缓存的妙用和问题！</p>
            </div>
            <img
              src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29b4170d37eb458285aedf1729e9c921~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp"
              alt=""
            />
          </div>
          <el-card class="box-card">
            <ul>
              <li>
                <div class="detail">
                  <a href="">掘金酱</a>
                  <span>.1月前.</span>
                  <a href="">前端 /</a>
                  <a href="">后端 /</a>
                  <a href="">Andriod /</a>
                  <a href="">程序员</a>
                </div>
                <a href="" class="title">🏆 掘金年度征文 | 技术人的2020</a>
                <div class="assist-container">
                  <div class="assist">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik00LjIzNCA2LjY5M3Y3LjI0M0gyLjg4MWMtLjQ4NiAwLS44ODEtLjQ5Mi0uODgxLTEuMDk1VjcuODc1YzAtLjYzLjQxMi0xLjE4Mi44OC0xLjE4MmgxLjM1NHptMy42ODgtMy43QzguMDEgMi40MDQgOC40OSAxLjk5IDkuMDE4IDJjLjc1NC4wMTUgMS4yMDQuNjYzIDEuMzYuOTgzLjI4NC41ODUuMjkyIDEuNTQ5LjA5NyAyLjE2Ny0uMTc3LjU2LS41ODYgMS4yOTYtLjU4NiAxLjI5NmgzLjA2NmMuMzI0IDAgLjYyNS4xNjQuODI2LjQ0OS4yMDQuMjkuMjcuNjY4LjE3OCAxLjAxMWwtMS4zODcgNS4xODNjLS4xMjYuNDk5LS41NDQuODQ3LTEuMDE2Ljg0N0g1LjUzVjYuNjkzYzEuMzg1LS4zMDkgMi4yMzYtMi42MzIgMi4zOTItMy43eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                      alt=""
                    />
                    <span>200</span>
                  </div>
                  <div>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPjc1MzFEREU0LTZCMzgtNDI4Ny04QTJBLUY2ODVGMDgzNUFGQzwvdGl0bGU+PGRlZnM+PHJlY3QgaWQ9ImEiIHg9IjU5IiB5PSI1NCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjI1IiByeD0iMSIvPjxtYXNrIGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iNTQiIGhlaWdodD0iMjUiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OCAtNTYpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik03MiA2MXY4LjAzOGg0LjQ0NEw4MS4xMTEgNzJ2LTIuOTYySDg0VjYxeiIvPjx1c2Ugc3Ryb2tlPSIjRURFRUVGIiBtYXNrPSJ1cmwoI2IpIiBzdHJva2Utd2lkdGg9IjIiIHhsaW5rOmhyZWY9IiNhIi8+PC9nPjwvc3ZnPg=="
                      alt=""
                    />
                    <span>279</span>
                  </div>
                  <div class="forward">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+QjFBMjZEODAtQ0ZCRC00REIyLThCQTAtODc0MEVBMTE2RTExPC90aXRsZT48ZyBzdHJva2U9IiNBQUIwQkEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTEwLjUyNCAzLjQxM3Y4LjIzNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMy4wMjcgNy41MDhjLjgxMyAwIDEuNjc4LS4wMSAxLjY3OC0uMDEuNDQ5IDAgLjgxMi4zNzYuODEyLjgyNmwtLjAwNSA2LjM2YS44MTkuODE5IDAgMCAxLS44MTEuODI2SDYuMzFhLjgyMi44MjIgMCAwIDEtLjgxMS0uODI2bC4wMDUtNi4zNmMwLS40NTYuMzYtLjgyNS44MTItLjgyNWwxLjY4OS4wMDZNOC4zNzMgNS4xMTFsMi4xNDMtMi4wOSAyLjE0MyAyLjA3Ii8+PC9nPjwvc3ZnPg=="
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </el-card>
        </div>
      </div>
      <div class="navBar">
        <div class="login">
          <p>掘金 - juejin.cn</p>
          <p>一个帮助开发者成长的社区</p>
          <div class="phone">
            <el-input placeholder="请输入手机号码" class="input-with-select">
              <el-select slot="prepend" placeholder="+86">
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
          <el-button type="primary">立即登录</el-button>
          <p>立即登录即表示</p>
          <p>同意 <a href="">用户协议 、 隐私政策</a></p>
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
          <p>下载掘金客户端</p>
          <p>一个帮助开发者成长的社区</p>
        </div>
        <div class="author-list">
          <p>🎖️作者榜</p>
          <ul class="list">
            <li>
              <a href="">
                <img
                  src="https://user-gold-cdn.xitu.io/2020/3/19/170f1d84faa260af?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
                  alt=""
                />
                <p>
                  思思同学
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIzIDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzZFQ0VGRiIgZD0iTTMgMWgxN2EyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDRoMnY3SDN6TTggNmgybDIgNWgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQgNmgtMmwtMiA1aDJ6TTMgOWg1djJIM3pNMTUgM2g1djJoLTV6TTE4IDVoMnYyaC0yek0xNSA5VjdoMnYyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNSA4VjZoNXYyek0xNSA5aDV2MmgtNXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    alt=""
                  />
                </p>
                <p>前端CV工程师 @ 西厂</p></a
              >
            </li>
            <li>
              <a href="">
                <img
                  src="https://user-gold-cdn.xitu.io/2020/3/19/170f1d84faa260af?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
                  alt=""
                />
                <p>
                  思思同学
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIzIDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzZFQ0VGRiIgZD0iTTMgMWgxN2EyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDRoMnY3SDN6TTggNmgybDIgNWgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQgNmgtMmwtMiA1aDJ6TTMgOWg1djJIM3pNMTUgM2g1djJoLTV6TTE4IDVoMnYyaC0yek0xNSA5VjdoMnYyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNSA4VjZoNXYyek0xNSA5aDV2MmgtNXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    alt=""
                  />
                </p>
                <p>前端CV工程师 @ 西厂</p></a
              >
            </li>
            <li>
              <a href="">
                <img
                  src="https://user-gold-cdn.xitu.io/2020/3/19/170f1d84faa260af?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
                  alt=""
                />
                <p>
                  思思同学
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIzIDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzZFQ0VGRiIgZD0iTTMgMWgxN2EyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDRoMnY3SDN6TTggNmgybDIgNWgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQgNmgtMmwtMiA1aDJ6TTMgOWg1djJIM3pNMTUgM2g1djJoLTV6TTE4IDVoMnYyaC0yek0xNSA5VjdoMnYyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNSA4VjZoNXYyek0xNSA5aDV2MmgtNXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    alt=""
                  />
                </p>
                <p>前端CV工程师 @ 西厂</p></a
              >
            </li>
          </ul>
          <p>完整榜单 ></p>
        </div>
        <div class="guide">
          <div class="guide-item">
            <img
              src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-tutu.d58819c.png"
              alt=""
            />
            <P>掘金社区漫游指南</P>
          </div>
          <div class="guide-item">
            <img
              src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png"
              alt=""
            />
            <p>下载掘金浏览器插件</p>
          </div>
          <div class="guide-item">
            <img
              src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-miner.b78347c.png"
              alt=""
            />
            <p>前往掘金翻译计划</p>
          </div>
        </div>
        <div class="link">
          <p>
            <a href="">关于 .</a> <a href="">营业执照 .</a
            ><a href="">友情链接</a>
          </p>
          <p>
            <a href="">用户协议 .</a><a href="">隐私政策 .</a>
            <a href="">使用指南 .</a>
          </p>
          <p><a href="">京ICP备18012699号-3</a></p>
          <p><a href="">京公网安备11010802026719号</a></p>
          <p>版权所有：北京北比信息技术有限公司</p>
          <p>公司地址：北京市海淀区信息路甲28号13层B座13B-5</p>
          <p>公司座机：010-83434395</p>
          <p><a href="">©2021 掘金</a></p>
          <div>
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
</template>

<script>
export default {
  name: "HomeContent",
};
</script>

<style lang="less" scoped>
.home {
  background-color: #f4f5f5;
}
.home-outer {
  width: 960px;
  margin: 0 auto;
  padding-top: 15px;
  //   display: flex;
}
.home-container {
  width: 700px;
  background-color: #fff;
  padding: 0 20px;
}
.home-recommend {
  display: flex;
  height: 46px;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
  li {
    padding: 0 12px;
    border-right: 1px solid #eaeaea;
    font-size: 14px;
  }
  li:nth-of-type(3) {
    border: none;
  }
}

// .navBar {
//   width: 240px;
// }
</style>
