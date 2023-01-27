const path = require('path');
const libPath = process.cwd();
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const packageInfo = require(path.resolve(process.cwd(), 'package.json'));
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const name = packageInfo.name.replace('@kxxxl-front-end/', '');
module.exports = {
  entry: path.join(libPath, './src/index.js'),
  output: {
    path: path.resolve(libPath, 'dist'),
    filename: name + '.min.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        loader: [
          // MiniCssExtractPlugin.loader,
          'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
};



