<template>
  <div class="Topic">
    <!-- 最左 -->
    <div class="Topic-left">
      <nav class="navigation">
        <ul class="nav-list">
          <li class="nav-item active"><a title="推荐">推荐</a></li>
          <li class="nav-item"><a title="热门">热门</a></li>
          <li class="nav-item"><a title="关注">关注</a></li>
          <li class="nav-item"><a title="上班摸鱼">上班摸鱼</a></li>
          <li class="nav-item"><a title="内部招聘">内推招聘</a></li>
          <li class="nav-item"><a title="一图胜千言">一图胜千言</a></li>
          <li class="nav-item"><a title="今天学到了">今天学到了</a></li>
          <li class="nav-item"><a title="树洞一下">树洞一下</a></li>
          <li class="nav-item"><a title="每日算法题">每日算法题</a></li>
        </ul>
      </nav>
    </div>
    <!-- 中间 -->
    <div class="Topic-main">
      <div class="wrapper">
        <!-- 对话框编辑器 -->
        <div class="editor-dialog">
          <!-- 对话框 -->
          <div class="editor-body">
            <div class="content">
              <el-input
                type="textarea"
                placeholder="来呀大爷，过来玩耍呀~"
                :autosize="{ minRows: 2 }"
                resize="none"
                v-model="textarea"
              >
              </el-input>
              <span>1000</span>
              <!-- <input type="text" /> -->
            </div>
          </div>
          <!-- 发布按钮等等 -->
          <div class="botton">
            <div class="toolbar">
              <!-- 工具栏 -->
              <div class="tool">
                <span class="iconfont icon-biaoqing"> 表情</span>
                <span class="iconfont icon-tupian"> 图片</span>
                <span class="iconfont icon-web-icon-"> 链接</span>
                <span class="iconfont icon-jinghao"> 话题</span>
              </div>
              <!-- 提交 -->
              <div class="submit">
                <div class="tip">Ctrl or ⌘ + Enter</div>
                <button>发布</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 内容容器 -->
      <div class="gossip-view">
        <!-- 内容包装器 -->
        <div class="gossip-wrap">
          <!-- 内容的ul -->
          <ul class="gossip-list">
            <!-- 内容的li -->
            <li class="goosip-item">
              <div class="goosip">
                <div class="goosip-header-row">
                  <div class="account-group">
                    <div class="user-popover-box">
                      <a href="#"
                        ><img src="../../static/images/x1.jpg" alt=""
                      /></a>
                    </div>
                    <div class="goosip-header-content">
                      <div class="user-popover-box">
                        <a href="#">酥饼i</a>
                      </div>
                      <div class="meta-box">
                        <span>前端@大屁股</span>
                        <span>·</span>
                        <span class="time">1秒前</span>
                      </div>
                    </div>
                  </div>
                  <div class="header-action">
                    <button><span>关注</span></button>
                  </div>
                </div>
                <div class="goosip-content-row">
                  <div class="content-box">
                    <span>哈哈哈！大屁股！</span>
                  </div>
                </div>
                <div class="goosip-image-row">
                  <div class="image-box">
                    <div class="image">
                      <img src="../../static/images/Zoro1.jpeg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="goosip-topic-row">
                  <a href="#" title="来分享下你上班看到的好东西吧~">上班摸鱼</a>
                </div>
                <div class="goosip-action-row">
                  <div class="action-box">
                    <div class="like-action action">
                      <div class="action-title-box">
                        <span class="iconfont icon-dianzan"></span>
                        <span class="action-title">1</span>
                      </div>
                    </div>
                    <div class="comment-action action">
                      <span class="iconfont icon-pinglun"></span>
                      <span class="action-title">评论</span>
                    </div>
                    <div class="share-action action">
                      <span class="iconfont icon-fenxiang"></span>
                      <span class="action-title">&nbsp;分享</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="goosip-item">
              <div class="goosip">
                <div class="goosip-header-row">
                  <div class="account-group">
                    <div class="user-popover-box">
                      <a href="#"
                        ><img src="../../static/images/x1.jpg" alt=""
                      /></a>
                    </div>
                    <div class="goosip-header-content">
                      <div class="user-popover-box">
                        <a href="#">酥饼i</a>
                      </div>
                      <div class="meta-box">
                        <span>前端@大屁股</span>
                        <span>·</span>
                        <span class="time">1秒前</span>
                      </div>
                    </div>
                  </div>
                  <div class="header-action">
                    <button><span>关注</span></button>
                  </div>
                </div>
                <div class="goosip-content-row">
                  <div class="content-box">
                    <span>哈哈哈！大屁股！</span>
                  </div>
                </div>
                <div class="goosip-image-row">
                  <div class="image-box">
                    <div class="image">
                      <img src="../../static/images/Zoro1.jpeg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="goosip-topic-row">
                  <a href="#" title="来分享下你上班看到的好东西吧~">上班摸鱼</a>
                </div>
                <div class="goosip-action-row">
                  <div class="action-box">
                    <div class="like-action action">
                      <div class="action-title-box">
                        <span class="iconfont icon-dianzan"></span>
                        <span class="action-title">1</span>
                      </div>
                    </div>
                    <div class="comment-action action">
                      <span class="iconfont icon-pinglun"></span>
                      <span class="action-title">评论</span>
                    </div>
                    <div class="share-action action">
                      <span class="iconfont icon-fenxiang"></span>
                      <span class="action-title">&nbsp;分享</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="goosip-item">
              <div class="goosip">
                <div class="goosip-header-row">
                  <div class="account-group">
                    <div class="user-popover-box">
                      <a href="#"
                        ><img src="../../static/images/x1.jpg" alt=""
                      /></a>
                    </div>
                    <div class="goosip-header-content">
                      <div class="user-popover-box">
                        <a href="#">酥饼i</a>
                      </div>
                      <div class="meta-box">
                        <span>前端@大屁股</span>
                        <span>·</span>
                        <span class="time">1秒前</span>
                      </div>
                    </div>
                  </div>
                  <div class="header-action">
                    <button><span>关注</span></button>
                  </div>
                </div>
                <div class="goosip-content-row">
                  <div class="content-box">
                    <span>哈哈哈！大屁股！</span>
                  </div>
                </div>
                <div class="goosip-image-row">
                  <div class="image-box">
                    <div class="image">
                      <img src="../../static/images/Zoro1.jpeg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="goosip-topic-row">
                  <a href="#" title="来分享下你上班看到的好东西吧~">上班摸鱼</a>
                </div>
                <div class="goosip-action-row">
                  <div class="action-box">
                    <div class="like-action action">
                      <div class="action-title-box">
                        <span class="iconfont icon-dianzan"></span>
                        <span class="action-title">1</span>
                      </div>
                    </div>
                    <div class="comment-action action">
                      <span class="iconfont icon-pinglun"></span>
                      <span class="action-title">评论</span>
                    </div>
                    <div class="share-action action">
                      <span class="iconfont icon-fenxiang"></span>
                      <span class="action-title">&nbsp;分享</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 最右 -->
    <div class="Topic-right">
      <!-- 个人 -->
      <div class="user-name">
        <div class="name">
          <a href="#">
            <img src="../../static/images/x3.jpg" alt="" />
          </a>
          <div class="user-info">
            <a href="#">酥饼ii</a>
          </div>
        </div>
        <ul class="user-list">
          <a href="#" class="user-item">
            <div class="title">沸点</div>
            <div class="count">199</div>
          </a>
          <a href="#" class="user-item">
            <div class="title">关注</div>
            <div class="count">1</div>
          </a>
          <a href="#" class="user-item active">
            <div class="title">关注者</div>
            <div class="count">10.5k</div>
          </a>
        </ul>
      </div>
      <!-- 精选 -->
      <div class="good-topic">
        <header>精选沸点</header>
        <ul class="gossip-list">
          <li class="gossip-item">
            <a
              href="#"
              title="阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴"
            >
              <div class="content-box">
                <div class="content">
                  "
                  阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
                  阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
                  "
                </div>
                <div class="item" style="margin-top: 4px">
                  <span>6 赞 ·</span>
                  <span> 44 评论</span>
                </div>
              </div>
            </a>
          </li>
          <li class="gossip-item">
            <a
              href="#"
              title="阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴"
            >
              <div class="content-box">
                <div class="content">
                  "
                  阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
                  阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
                  "
                </div>
                <div class="item" style="margin-top: 4px">
                  <span>6 赞 ·</span>
                  <span> 44 评论</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!-- 玩转link -->
      <a class="play-link">
        <img src="../../static/images/x20.jpg" alt="" />
        <span>如何玩转屁股</span>
      </a>
      <!-- 悬浮，后面开起来 -->
      <!-- <div class="play-link-show">
        <a class="play-link">
          <img src="../../static/images/x20.jpg" alt="" />
          <span>如何玩转屁股</span>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Topic",
  data() {
    return {
      textarea: "",
    };
  },
};
</script>

<style>
.Topic {
  width: 960px;
  margin: 0 auto;
  display: flex;
}
/* 左边 */
.Topic-left {
  margin-right: 15px;
  width: 100px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  height: 100%;
}
.Topic-left .navigation {
  border-radius: 0.2rem;
  /* background-color: yellow; */
  background-color: #fff;
  position: fixed;
  /* top: 70px; */
  width: 104px;
  transition: all 0.2s linear;
}
.Topic-left .navigation .nav-list {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 12px;
  color: #888;
}
.Topic-left .navigation .nav-list .nav-item {
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 31px;
  line-height: 31px;
  text-align: center;
  font-size: 12px;
  padding: 0 10px;
  margin: 4px 0;
  border-radius: 0.25rem;
  /* transition: background-color 0.2s, color 0.2s; */
}
.nav-list .active {
  background-color: #007fff;
  color: #fff;
}
a {
  height: 100%;
  width: 100%;
  text-decoration: none;
}
.nav-list :hover {
  color: #007fff;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.05);
}
/* 中间区域 */

.Topic-main .wrapper {
  padding: 15px;
  background: #fff;
}
.Topic-main .el-textarea__inner {
  border: none;
  width: 400px;
  height: 100%;
  margin: 5px;
  background: #f4f5f5;
}
.Topic-main .content {
  background: #f4f5f5;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
  text-align: right;
}
.Topic-main .content span {
  color: #888;
  font-size: 10px;
  padding: 10px;
}
.editor-dialog .botton {
  margin: 10px 0;
}
.editor-dialog .botton .iconfont {
  color: #007fff;
  font-size: 6px;
  margin: 0 5px;
  /* float: left; */
}
.editor-dialog .botton .toolbar {
  display: flex;
  justify-content: space-between;
}
.editor-dialog .botton .toolbar .submit {
  font-size: 6px;
  display: flex;
  height: 30px;
  line-height: 30px;
}
.editor-dialog .botton .toolbar .submit button {
  background-color: #007fff;
  color: #fff;
  border-radius: 2px;
  border: none;
  margin: 0 5px;
  padding: 7px 15px;
  outline: none;
  /* transition: background-color 0.3s, color 0.3s; */
  cursor: pointer;
}
/* 内容 */
.gossip-list {
  margin: 0;
  padding: 0;
  background: #f4f5f5;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  /* padding-inline-start: 40px; */
}
.gossip-list .goosip-item {
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  list-style: none;
  display: list-item;
  text-align: -webkit-match-parent;
  background-color: #fff;
}
.gossip-list .goosip-item .goosip {
  border-radius: 0.2rem;
}
.gossip-list .goosip .goosip-header-row {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 2rem 0 20px;
}
.gossip-list .goosip .goosip-header-row .header-action {
  /* display: flex; */
}
.gossip-list .goosip .goosip-header-row .header-action button {
  margin: 0 0 0 auto;
  padding: 0;
  width: 55px;
  height: 26px;
  font-size: 13px;
  border: 1px solid #37c700;
  background: none;
  color: #6cbd45;
}
.gossip-list .goosip .goosip-header-row .account-group {
  align-items: center;
  display: flex;
  width: 200px;
}
.gossip-list .goosip .goosip-header-row .user-popover-box {
  display: inline;
}
.gossip-list .goosip .goosip-header-row .user-popover-box a {
  font-size: 0;
}
.gossip-list .goosip .goosip-header-row .user-popover-box a img {
  flex: 0 0 auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.gossip-list .goosip .goosip-header-row .goosip-header-content {
  display: inline;
  margin-left: 10px;
}
.gossip-list
  .goosip
  .goosip-header-row
  .goosip-header-content
  .user-popover-box
  a {
  font-size: 18px;
  font-weight: 600;
  color: #2e3135;
}
.gossip-list .goosip .goosip-header-row .meta-box {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #8a9aa9;
  cursor: default;
  margin: 0.3rem 0 0;
}

.gossip-list .goosip .goosip-content-row {
  margin-top: 5px;
  margin-bottom: 5px;
  position: relative;
  margin: 1rem 4rem 0 6.45rem;
}
.gossip-list .goosip .goosip-content-row .content-box {
  font-size: 15px;
  color: #17181a;
  overflow: hidden;
}
.gossip-list .goosip .goosip-image-row {
  margin-top: 0.333rem;
  margin-left: 100px;
}
.gossip-list .goosip .goosip-image-row .image-box {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
}
.gossip-list .goosip .goosip-image-row .image-box .image {
  position: relative;
}
.gossip-list .goosip .goosip-image-row .image-box .image img {
  width: 200px;
  flex: 0 1 auto;
  margin-top: 4px;
  cursor: zoom-in;
  max-height: 250px;
  -o-object-fit: cover;
  object-fit: cover;
}
.gossip-list .goosip-action-row .action-box {
  display: flex;
  position: relative;
  margin-top: 1.333rem;
  height: 34px;
  border-top: 1px solid #ebebeb;
}
.gossip-list .goosip-action-row .action-box .action {
  flex: 1 1 33.333%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.gossip-list .goosip-action-row .action-title {
  margin-left: 0.3em;
  font-size: 13px;
  font-weight: 500;
  color: #8a93a0;
}
.goosip-topic-row {
  margin-top: 0.666rem;
  position: relative;
  margin: 1rem 350px 0 6.45rem;
  width: 55px;
}
.goosip-topic-row a {
  font-size: 13px;
  display: inline-block;
  line-height: 22px;
  padding: 0 12px;
  border: 1px solid #007fff;
  border-radius: 14px;
  -webkit-user-select: none;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  /* color: #909090; */
  color: #007fff;
}
/* 最右 */
.Topic-right {
  width: 248px;
  flex: 1;
  max-width: 248px;
  margin-left: 10px;
}
/* 玩转 */
.Topic-right .play-link {
  height: 50px;
  width: 228px;
  display: flex;
  align-items: center;
  padding: 10px;
  background: #fff;
  color: #2e3135;
  font-size: 15px;
  border-radius: 4px;
  margin-bottom: 5px;
  text-decoration: none;
}
.Topic-right .play-link img {
  width: 45px;
  height: 45px;
  margin-right: 10px;
}
/* 个人 */
.Topic-right .user-name {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.2rem;
  margin-bottom: 8px;
  font-size: 13px;
}
.Topic-right .user-name .name {
  display: flex;
  padding: 16px;
  height: 65px;
  max-height: 92px;
  border-bottom: 1px solid rgba(92, 96, 102, 0.1);
}
.Topic-right .user-name .name a img {
  flex: 0 0 auto;
  margin-right: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
}
.Topic-right .user-name .name .user-info {
  position: relative;
  margin: 1rem 0;
  right: 100px;
}
.Topic-right .user-name .name .user-info a {
  display: flex;
  width: 40px;
  color: #17181a;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2;
}
.Topic-right .user-name .user-list {
  display: flex;
  margin: 0;
  list-style: none;
  text-align: center;
  padding: 16.5px 0;
}
.Topic-right .user-name .user-list a {
  border-right: 1px solid rgba(92, 96, 102, 0.1);
}
.Topic-right .user-name .user-list a .title {
  font-size: 13px;
  color: #8a9aa9;
  margin-bottom: 2px;
}
.Topic-right .user-name .user-list a .count {
  font-size: 14px;
  font-weight: 600;
  color: hotpink;
}
.Topic-right .user-name .user-list .active {
  border: none;
}
/* 精选 */
.Topic-right .good-topic {
  background-color: #fff;
  margin-bottom: 10px;
}
.Topic-right .good-topic header {
  color: #2e3135;
  font-weight: 600;
  font-size: 14px;
  padding: 13px 16px;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
}
.Topic-right .good-topic .gossip-list {
  padding: 0 16px;
  margin: 0;
  background: #fff;
}
.Topic-right .good-topic .gossip-item {
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  padding: 12px 0;
  list-style: none;
}
.Topic-right .good-topic .gossip-item a {
  display: flex;
  justify-content: space-between;
  text-decoration: none;
}
.Topic-right .good-topic .gossip-item .content-box {
  display: flex;
  align-content: space-between;
  flex-direction: column;
}
.Topic-right .good-topic .gossip-item .content {
  color: #2e3135;
  font-size: 13px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
  max-height: 50px;
}
.Topic-right .good-topic .gossip-item .item {
  color: #76797e;
  font-size: 13px;
}
.Topic-right .play-link-show {
  opacity: 1;
  z-index: 5;
  /* pointer-events: all; */
  position: fixed;
      top: 50px;

}
</style>
