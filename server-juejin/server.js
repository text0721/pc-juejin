const Koa = require("koa");
const KoaRouter = require("koa-router");

const app = new Koa();

const router = new KoaRouter();

app.use(router.routes()).use(router.allowedMethods());

//用于返回active活动数据
let ActiveItem = require("./datas/activeItem.json");
router.get("/getactiveitem", function(ctx, next) {
  ctx.body = {
    code: 200,
    data: ActiveItem,
  };
});
//用于返回active活动导航数据
let ActiveNav = require("./datas/activeNav.json");
router.get("/getactivenav", function(ctx, next) {
  ctx.body = {
    code: 200,
    data: ActiveNav,
  };
});

/*
    2.将服务器应用实例app运行在某个端口上,并监听该端口
*/
app.listen("3008", function(error) {
  if (error) {
    console.log("服务器运行失败!!!");
  } else {
    console.log("服务器成功运行,运行于http:localhost:3008");
  }
});
