module.exports = {
	publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://gmall-prod.atguigu.cn',
                changeOrigin: true,
                secure: false,
                ws: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}