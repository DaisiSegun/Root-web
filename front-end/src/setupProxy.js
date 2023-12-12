const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Proxy requests to /api to the first API
  app.use(
    (req, res, next) => {
      if (req.path.startsWith('/api')) {
        createProxyMiddleware({
          target: 'http://localhost:4000', // Replace with your first API URL
          changeOrigin: true,
        })(req, res, next);
      } else {
        next();
      }
    }
  );

  // Proxy requests to /api2 to the second API
  app.use(
    '/api2',
    createProxyMiddleware({
      target: 'http://localhost:4000', // Replace with your second API URL
      changeOrigin: true,
    })
  );
};

// "proxy": "https://api.rootgroup.org/",
// "proxy": "http://localhost:4000",