module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3008",
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
