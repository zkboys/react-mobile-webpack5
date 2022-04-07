const { createProxyMiddleware } = require('http-proxy-middleware');
const proxies = require('./setupProxyConfig.json');

module.exports = function(app) {
    proxies.forEach(item => {
        const { baseUrl, target } = item;
        app.use(createProxyMiddleware(baseUrl, {
            target,
            // pathRewrite: { '^/api': '' },
            changeOrigin: true,
            secure: false, // 是否验证证书
            ws: true, // 启用websocket
        }));
    });

    // 门户代理
    app.use(
        createProxyMiddleware('/portal', {
            target: 'http://172.16.143.44:32328', // 测试门户后端
            pathRewrite: {
                '^/portal': '',
            },
            changeOrigin: true,
            secure: false, // 是否验证证书
            ws: true, // 启用websocket
        }),
    );
};
