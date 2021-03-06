const  { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
    let target = ''

    if (req.url.startsWith('/api')) {
        target = 'https://lab.magiconch.com'
    }


    createProxyMiddleware({
        target,
        changeOrigin: true,
        // pathRewrite: {
        //     '^/api/': '/'
        // }
    })(req, res)
}