const Koa = require( "koa" );
const KoaRouter = require( "koa-router" );



const app = new Koa();

const router = new KoaRouter();
const axios = require("axios");

app.use( router.routes() ).use( router.allowedMethods() );

//用于返回首页catelist数据
// let indexCateListData = require( "./datas/indexCateList.json" );
// router.get( "/api/getindexCateList", function ( ctx, next ) {
//用于返回首页book数据
let bookData = require("./datas/bookData.json");
router.get("/getDataList", function(ctx, next) {
  ctx.body = {
    code: 200,
    data: bookData,
  };
} );

// 请求掘金页面数据
let recommendListData = require( "./datas/recommendListData.json" );
router.get( "/recommendListData", function ( ctx, next ) {
  ctx.body = {
    code: 200,
    data: recommendListData,
  };
} );

// 手机号数据
let phoneCode = require( "./datas/phone.json" );
router.get( "/phoneCode", function ( ctx, next ) {
  ctx.body = {
    code: 200,
    data: phoneCode,
  };
} );

let navtagData = require( "./datas/navtag.json" );
router.get( "/navtag", function ( ctx, next ) {
  let { id } = ctx.query;

  let navtagDataList = navtagData.find( ( item ) => {
    return item.cate_id === id
  } )
  // console.log( navtagDataList );
  ctx.body = navtagDataList.data
} );


let bookDetailDatalist = require("./datas/bookDetail.json");

router.get("/getBookDetailList", async function(ctx, next) {
  // console.log(ctx.query.id);
  let { id } = ctx.query;

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
app.listen( "3008", function ( error ) {
  if ( error ) {
    console.log( "服务器运行失败!!!" );
  } else {
    console.log( "服务器成功运行,运行于http:localhost:3008" );
  }
} );
