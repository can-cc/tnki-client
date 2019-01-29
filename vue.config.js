module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3500',
        changeOrigin: true
      },
      '/image': {
        target: 'http://localhost:3500',
        changeOrigin: true
      }
    }
  }
};
