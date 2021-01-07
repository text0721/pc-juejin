<template>
  <div class="Topic">
    <!-- 最左 -->
    <div class="Topic-left">
      <nav class="navigation">
        <ul class="nav-list">
          <li
            @click="active(index)"
            :class="{ active: index === currentIndex }"
            class="nav-item"
            v-for="(item, index) in this.getData.TopicLeft"
            :key="index"
          >
            <a title="推荐" @click="goLink">{{ item.Title }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- <Topic_left /> -->
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
              v-for="(item, index) in this.getData.TopicMain"
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
    <div
      class="Topic-right"
      v-for="(item, index) in this.getData.TopicRight"
      :key="index"
    >
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
      <a class="play-link" id="scroll">
        <img :src="item.imgUrl" alt="" />
        <span>如何玩转屁股</span>
      </a>
      <!-- 悬浮，后面开起来 -->
      <div class="play-link-show" id="scrolls">
        <a class="play-link">
          <img :src="item.imgUrl" alt="" />
          <span>如何玩转屁股</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "../../styles/topic.css";
import { getData } from "../../api/Topic";

export default {
  name: "Topic",
  data() {
    return {
      axios,
      getData: "",

      task: "", //评论内容
      imgUrl: "", //评论图片地址
      save: "", //分类
      currentIndex: 0,
    };
  },

  methods: {
    addTask() {
      console.log(this.task);

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
      const scrollTop = window.pageYOffset; // div 到头部的距离

      if (scrollTop > 500) {
        // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
        document.getElementById("scroll").style.display = "none";
        document.getElementById("scrolls").style.display = "block";
      } else {
        document.getElementById("scroll").style.display = "flex";
        document.getElementById("scrolls").style.display = "none";
      }
    },
  },
  async mounted() {
    this.getData = await getData();
    console.log(this.getData);
    // 监听滚轮
    window.addEventListener("scroll", this.scrollEvent, false);
  },
  watch: {},
};
</script>

<style>
active {
  color: white !important;
}
#scrolls {
  display: none;
}
</style>
