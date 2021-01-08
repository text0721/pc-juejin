import request from "../utils/request";

export let getData = function() {
  {
    return request({
      url: "/getData",
      method: "get",
    });
  }
};
export let putData = function() {
  {
    return request({
      url: "/getData",
      method: "put",
    });
  }
};
// let topicData = require("./datas/data.json");
// router.get("/getData", function(ctx, next) {
//   ctx.body = {
//     code: 200,
//     data: topicData,
//   };
// });
