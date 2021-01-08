const Koa = require("koa");
const KoaRouter = require("koa-router");

const app = new Koa();

const router = new KoaRouter();
const axios = require("axios");
// import axios from "axios "
// app.use((ctx) => {
//   ctx.set(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   // console.log("type", ctx.request.type);
//   // console.log(ctx.request.body);
//   ctx.body = `Request Body: ${JSON.stringify(appdata)}`;
// });
app.use(router.routes()).use(router.allowedMethods());

//用于返回首页catelist数据
// let indexCateListData = require("./datas/indexCateList.json");
// router.get("/getindexCateList", function(ctx, next) {
//   ctx.body = {
//     code: 200,
//     data: indexCateListData,
//   };
// });

//用于返回首页book数据
let bookData = require("./datas/bookData.json");
router.get("/getDataList", function(ctx, next) {
  ctx.body = {
    code: 200,
    data: bookData,
  };
});

// router.get("/getAppData", async function(ctx, next) {
//   await axios({
//     url: "https://api.juejin.cn/user_api/v1/user/get?aid=2608&not_self=0",
//     method: "POST",
//     // params: {
//     //   aid: 2608,
//     //   not_self: 0,
//     // },
//   }).then((val) => {
//     console.log(val);
//     ctx.body = JSON.parse(JSON.stringify((val)));
//     console.log(val);
//   });
// console.log(appdata);

// ctx.body = JSON.parse(JSON.stringify(appdata));
// ctx.body = JSON.stringify(appdata);
// console.log(ctx.body);
// console.log(appdata);
// });

let bookDetailDatalist = require("./datas/bookDetail.json");
// let bookDetailData = decodeURIComponent(bookDetailDatalist);
// let bookd = JSON.parse(bookDetailData);
// let bookDetailData = JSON.stringify(bookDetailDatalist);
// let bookDetailDataadfas = JSON.parse(bookDetailData);
router.get("/getBookDetailList", async function(ctx, next) {
  // console.log(ctx.query.id);
  let { id } = ctx.query;
  // console.log(id);
  // const bookDetail = await axios({
  //   method: "POST",
  //   url: `https://api.juejin.cn/booklet_api/v1/booklet/get`,
  //   data: {
  //     booklet_id: id,
  //   },
  // });
  // console.log(ctx);
  // ctx.request.body = JSON.parse(JSON.stringify(bookDetail));
  // console.log(ctx);
  // let bookDetail =
  // bookDetailDatalist.find((detail) => {
  //   return detail.data.booklet.booklet_id === id;
  // });

  // console.log(bookDetailDatalist, "1");
  // console.log(id, "id");

  // console.log(bookDetailData);
  let bookDetail = bookDetailDatalist.find((detail, index) => {
    if (index === 1) {
      // console.log(detail);
    }
    //   // bookDetail内部的id是数字类型,通过url传递过来的bookDetail是字符串类型
    return detail.data.booklet.booklet_id === id;
  });

  // console.log(bookDetail);
  ctx.body = bookDetail;
});

/*
    2.将服务器应用实例app运行在某个端口上,并监听该端口
*/
app.listen(3008, function(error) {
  if (error) {
    console.log("服务器运行失败!!!");
  } else {
    console.log("服务器成功运行,运行于http:localhost:3008");
  }
});
