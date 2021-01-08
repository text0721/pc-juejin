import axios from "axios";

export const reqBookList = (data) => {
  return axios({
    method: "POST",
    url: "https://api.juejin.cn/booklet_api/v1/booklet/listbycategory",
    data: { category_id: "0", cursor: "0", limit: 20 },
  });
};


