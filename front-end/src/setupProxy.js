const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Specify the API path you want to proxy
    createProxyMiddleware({
      target: 'https://api.rootgroup.org', // The URL of your external API
      changeOrigin: true,
    })
  );
};
// "proxy": "https://api.rootgroup.org/",
// "proxy": "http://localhost:4000",