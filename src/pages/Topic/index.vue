<template>
  <div>
    <div class="fixed">
      <Header />
    </div>

    <div class="Topic">
      <!-- 最左 -->
      <div class="Topic-left">
        <nav class="navigation">
          <ul class="nav-list">
            <li
              @click="active(index)"
              :class="{ active: index === currentIndex }"
              class="nav-item"
              v-for="(item, index) in this.TopicLeft"
              :key="index"
            >
              <a title="推荐" @click="goLink">{{ item.Title }}</a>
            </li>
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
                  v-model="task"
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
                  <button @click="addTask">发布</button>
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
              <li
                class="goosip-item"
                v-for="(item, index) in TopicMain"
                :key="index"
              >
                <div class="goosip">
                  <div class="goosip-header-row">
                    <div class="account-group">
                      <div class="user-popover-box">
                        <a href="#"><img :src="item.userImgUrl" alt="" /></a>
                      </div>
                      <div class="goosip-header-content">
                        <div class="user-popover-box">
                          <a href="#">{{ item.userName }}</a>
                        </div>
                        <div class="meta-box">
                          <span>{{ item.userLabel }}</span>
                          <span>·</span>
                          <span class="time">{{ item.howTime }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="header-action">
                      <button><span>关注</span></button>
                    </div>
                  </div>
                  <div class="goosip-content-row">
                    <div class="content-box">
                      <span>{{ item.userContent }}</span>
                    </div>
                  </div>
                  <div class="goosip-image-row">
                    <div class="image-box">
                      <div class="image">
                        <img :src="item.imgUrl" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="goosip-topic-row">
                    <a href="#" title="来分享下你上班看到的好东西吧~">{{
                      item.topicLabel
                    }}</a>
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
      <div class="Topic-right" v-for="(item, index) in TopicRight" :key="index">
        <!-- 个人 -->
        <div class="user-name">
          <div class="name">
            <a href="#">
              <img :src="item.userImgUrl" alt="" />
            </a>
            <div class="user-info">
              <a href="#">{{ item.userName }}</a>
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
              <a href="#" :title="item.topicTitle">
                <div class="content-box">
                  <div class="content">
                    "
                    {{ item.topicContent }}
                    "
                  </div>
                  <div class="item" style="margin-top: 4px">
                    <span>{{ item.topicGood }} 赞 ·</span>
                    <span> {{ item.topicDiscuss }} 评论</span>
                  </div>
                </div>
              </a>
            </li>
            <li class="gossip-item">
              <a href="#" :title="item.topicTitle">
                <div class="content-box">
                  <div class="content">
                    "
                    {{ item.topicContent }}
                    "
                  </div>
                  <div class="item" style="margin-top: 4px">
                    <span>{{ item.topicGood }} 赞 ·</span>
                    <span> {{ item.topicDiscuss }} 评论</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <!-- 玩转link -->
        <a class="play-link" id="scroll" href="#">
          <img :src="item.imgUrl" alt="" />
          <span>如何玩转屁股</span>
        </a>
        <!-- 悬浮-->
        <div class="play-link-show" id="scrolls">
          <a class="play-link" href="#">
            <img :src="item.imgUrl" alt="" />
            <span>如何玩转屁股</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header";
import axios from "axios";
import "../../styles/topic.css";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Topic",
  data() {
    return {
      axios,
      task: "", //评论内容
      imgUrl: "", //评论图片地址
      save: "", //分类
      currentIndex: 0,
    };
  },
  computed: {
    ...mapState({
      TopicMain: (state) => state.topic.TopicMain,
    }),
    ...mapGetters(["TopicLeft", "TopicRight"]),
  },

  methods: {
    ...mapActions(["getTopicData"]),
    ...mapMutations(["SETTOPICMAIN"]),
    addTask() {
      // 发布信息
      // 这边可以加个消息提示
      if (!this.task) return;
      //1- 收集数据
      let data = {
        userImgUrl: "/images/x1.jpg",
        userName: "酥饼ii",
        userLabel: "前端@大屁股",
        howTime: "1秒前",
        userContent: this.task,
        topicLabel: "摸鱼领域",
        imgUrl: " /images/1Zoor.jpeg",
      };

      //发送添加数据
      this.SETTOPICMAIN(data);

      this.task = "";
    },
    goLink() {
      this.dd;
    },
    getProduct() {
      console.log(222);
    },
    active(index) {
      this.currentIndex = index;
    },

    scrollEvent() {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 500) {
        document.getElementById("scroll").style.display = "none";
        document.getElementById("scrolls").style.display = "block";
      } else {
        document.getElementById("scroll").style.display = "flex";
        document.getElementById("scrolls").style.display = "none";
      }
    },
  },
  async mounted() {
    this.getTopicData();
    window.addEventListener("scroll", this.scrollEvent, false);
  },
  watch: {},
  components: {
    Header,
  },
};
</script>

<style>
.fixed {
  position: fixed;
  z-index: 99;
  width: 100%;
}

active {
  color: white !important;
}
#scrolls {
  display: none;
}
</style>
