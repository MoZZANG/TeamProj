const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://192.168.0.15:8080",
      pathRewrite: {
        "^/api": "",
      },
      changeOrigin: true,
    })
  );
};
