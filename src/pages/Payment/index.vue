<template>
  <div class="Container">
    <div class="payment">
      <div class="book-list">
        <a class="item">
          <div class="poster">
            <img
              v-if="bookDetailData.booklet.base_info"
              :src="bookDetailData.booklet.base_info.cover_img"
              alt=""
            />
          </div>
          <div class="info">
            <div class="title" v-if="bookDetailData.booklet.base_info">
              {{ bookDetailData.booklet.base_info.title }}
            </div>
            <div class="desc" v-if="bookDetailData.booklet.base_info">
              {{ bookDetailData.booklet.base_info.summary }}
            </div>
            <div class="author">
              <div class="author-info">
                <a href="#" class="user-img">
                  <img
                    class="user-avatar"
                    src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/e62ad4bea75d27e49ccae4349b801f49~300x300.image"
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
            </div>
          </div>
        </a>
      </div>
      <!-- 结算 -->
      <el-card>
        <div class="pay-info">
          <div class="info-title">商品结算</div>
          <div class="choose-discount">请选择优惠方式</div>
          <div class="discount-code">
            <div class="left">优惠码</div>
            <div class="right">
              <el-button type="text" @click="open">输入优惠码</el-button>
              <!-- <el-button type="text" @click="open"
                ><img
                  src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/uncheck.a0b4dab.svg"
                  alt=""
              /></el-button> -->
            </div>
          </div>
          <div class="discount-code">
            <div class="left">不使用任何优惠</div>
            <img
              src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/checked.921227d.svg"
              alt=""
            />
          </div>
          <div class="sale-info">
            <div class="sub-price">
              商品金额：¥{{ bookDetailData.booklet.base_info.price / 100 }}
            </div>
            <div class="sub-discount">商品优惠：-¥0.00</div>
            <div class="buy-warp">
              <div class="must-pay">
                应付总额：<span
                  >¥{{ bookDetailData.booklet.base_info.price / 100 }}</span
                >
              </div>
              <div class="pay-btn" @click="toPay">确认支付</div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      bookDetailData: {},
    };
  },
  methods: {
    open() {
      this.$prompt("请输入优惠码", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[0-9]{6}$/,
        inputErrorMessage: "优惠码不存在",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    //支付
    toPay() {
      this.$router.push({
        name: "Topay",
        query: {},
      });
    },
  },
  mounted() {
    if (this.$route.params.bookDetailData) {
      let { bookDetailData } = this.$route.params;
      this.bookDetailData = bookDetailData;
    }
    console.log(this.$route.params.bookDetailData);
  },
};
</script>

<style lang="less" scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
}
.payment {
  margin: 0 auto;
  max-width: 750px;
}

.book-list {
  width: 100%;
  box-shadow: 0 1px 3px 0 rgba(4, 5, 13, 0.23);
  margin-bottom: 20px;
  a {
    border-radius: 2px;
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
  img {
    width: 100%;
    height: 100%;
  }
}
.info {
  flex-grow: 1;
  font-size: 14px;
  color: #2e3135;
  padding-left: 22px;
  .title {
    font-size: 15px;
    font-weight: 700;
    color: inherit;
    margin: 0 0 15px 0;
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
}

.pay-info {
  background: #fff;
  padding: 10px 30px;
  font-size: 14px;
}
.info-title {
  padding-bottom: 20px;
  font-size: 26px;
}
.choose-discount {
  padding-bottom: 20px;
  color: #8a9aa9;
  font-size: 14px;
  border-bottom: 1px solid #e7eaec;
}
.discount-code {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #e7eaec;
  .right {
    display: flex;
    align-items: center;
    color: #007fff;

    img {
      margin-left: 15px;
      vertical-align: center;
    }
  }
}
.sale-info {
  text-align: right;
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
}
.sale-info {
  .sub-price {
    margin: 30px 0 10px 0;
  }
  .sub-discount {
    margin-bottom: 20px;
  }
  .buy-warp {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .pay-btn {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      padding: 10px 30px;
      cursor: pointer;
      background: #007fff;
      border-radius: 3px;
      margin-left: 20px;
    }
  }
}
</style>
