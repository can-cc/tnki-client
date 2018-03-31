module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
      '/image': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
};
