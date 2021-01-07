import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  headers: {},
});

instance.interceptors.request.use(
  (config) => {
    return config;
  }
  // 初始化promise.resolve()返回默认成功的promise，只会触发成功的回调
  // ()=>{}
);
// 设置响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 响应成功
    if (response.data.code === 200) {
      return response.data.data;
    }
    return Promise.reject(response.data.message);
  },

  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default instance;
