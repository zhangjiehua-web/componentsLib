module.exports = {
  configureWebpack: config => {
    config.devtool = 'none';
  },
  chainWebpack: config => {
    config.module.rule('compile').test(/\.js$/).use('babel-loader').loader('babel-loader')
      .options({
        presets: ['@babel/preset-env']
      })
  }
};