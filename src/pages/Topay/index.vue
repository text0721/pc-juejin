<template>
  <div>
    <div class="payContainer">
      <div class="order">
        <div class="order-expire">
          订单提交成功，请尽快完成付款！订单号：SP2021010611521939272330374949
          <br />请您尽快完成支付，否则订单会被自动取消
        </div>
        <div class="order-money">
          <div class="money">
            应付金额元
            <span>19.90</span> 元
          </div>
          <div>小册支付:玩转CSS的艺术之美</div>
        </div>
      </div>
      <div class="pay">
        <div class="title">请选择支付方式</div>
        <ul class="list">
          <li :class="payKind ? 'active' : ''" @click="handle">
            <span class="iconfont icon-zhifubao1"></span>
            <span>支付宝<br />支持花呗支付</span>
          </li>
          <li :class="payKind ? '' : 'active'" @click="handle">
            <span class="iconfont icon-zhifupingtai-weixin"></span>
            <span>微信支付</span>
          </li>
        </ul>
        <div class="qr-code">
          <div class="qr-content" v-if="payKind">
            <div class="code">
              <img
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=500830626,886101518&fm=11&gp=0.jpg"
                alt=""
              />
            </div>
            <div class="pay-kind">
              <ul class="pay-list">
                <li class="header">
                  <span>支付方式</span> <span>限额信息</span>
                </li>
                <li><span>余额/余额</span> <span>无限额</span></li>
                <li><span>花呗</span> <span>以您的限额为准</span></li>
                <li>
                  <span>支付宝绑定的银行卡</span>
                  <span
                    >以银行限额为准 <br /><a href="#">储蓄卡限额信息</a>
                    <br /><a href="#">信用卡限额信息</a></span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="qr-content" v-else>
            <div class="code">
              <img
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=500830626,886101518&fm=11&gp=0.jpg"
                alt=""
              />
            </div>
            <div class="pay-kind">
              <ul class="pay-list">
                <li class="header">
                  <span>支付方式</span> <span>限额信息</span>
                </li>
                <li><span>微信零钱</span> <span>无限额</span></li>
                <li>
                  <span>微信绑定的银行卡</span>
                  <span
                    >以银行限额为准 <br /><a href="#">银行卡限额信息</a></span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topay",
  data() {
    return {
      payKind: true,
    };
  },
  methods: {
    handle() {
      this.payKind = !this.payKind;
    },
  },
};
</script>

<style lang="less" scoped>
.payContainer {
  width: 1000px;
  padding-top: 70px;
  margin: 0 auto;
}
.order {
  display: flex;
  justify-content: space-between;
  .order-expire {
    line-height: 30px;
    font-size: 14px;
  }
  .order-money {
    font-size: 14px;
    div {
    }
    .money {
      margin-bottom: 5px;
    }
    span {
      font-size: 30px;
      font-weight: 500;
    }
  }
}
.pay {
  box-sizing: border-box;
  height: 600px;
  margin: 20px 0 0;
  padding: 28px 40px 40px;
  background-color: #fff;
  .list {
    display: flex;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #e8e8e8;
      width: 140px;
      height: 48px;
      margin-right: 15px;
      border-radius: 4px;
      .iconfont {
        font-size: 23px;
        margin-right: 6px;
        &.icon-zhifubao1 {
          color: rgb(64, 170, 212);
        }
        &.icon-zhifupingtai-weixin {
          color: rgb(23, 138, 23);
        }
      }
    }
    li.active {
      border: 1px solid #f85959;
      position: relative;
      &::before {
        content: "√";
        position: absolute;
        right: 5px;
        bottom: 5px;
        color: rgb(243, 240, 240);
      }
      &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0px;
        height: 0px;
        border-width: 12px;
        border-color: transparent transparent #f85959 transparent;
        border-style: solid;
        transform: translateY(12px) translateX(12px) rotateZ(135deg);
      }
    }
  }
}
.pay .title {
  padding-bottom: 12px;
  font-size: 24px;
}

.qr-code {
  height: 300px;
  .code {
    width: 200px;
    height: 200px;
    background: #f85959;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.qr-content {
  margin-top: 70px;
  display: flex;
  justify-content: center;
}

.pay-kind {
  .pay-list {
    width: 300px;
    margin-left: 48px;
    li {
      display: flex;
      // align-items: center;
      line-height: 20px;
      padding: 8px 20px;
      color: #1c1e3b;
      font-size: 13px;
      span {
        width: 50%;
      }
      a {
      color: skyblue;
    }
    }
  }
  .header {
    background-color: #f5f6f7;
  }
}
</style>
