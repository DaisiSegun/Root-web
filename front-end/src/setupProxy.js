const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Proxy requests to /api to the first API
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.rootgroup.org"', // Replace with your first API URL
      changeOrigin: true,
    })
  );

  // Proxy requests to /api2 to the second API
  app.use(
    '/api2',
    createProxyMiddleware({
      target: 'https://api.rootgroup.org', // Replace with your second API URL
      changeOrigin: true,
    })
  );
};
// "proxy": "https://api.rootgroup.org/",
// "proxy": "http://localhost:4000",