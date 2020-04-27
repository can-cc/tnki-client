module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8360/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/image': {
        target: 'http://localhost:8360',
        changeOrigin: true
      }
    }
  }
};
