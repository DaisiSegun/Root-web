const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Specify the API path you want to proxy
    createProxyMiddleware({
      target: 'https://coral-app-xawf4.ondigitalocean.app/', // The URL of your external API
      changeOrigin: true,
    })
  );
};
