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
