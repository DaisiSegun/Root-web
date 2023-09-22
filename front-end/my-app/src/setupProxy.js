// setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Specify the endpoint you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:4000', // URL of the target server you want to proxy to
      changeOrigin: true, // This ensures the host header is modified to match the target server's host
    })
  );
};
