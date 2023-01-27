const path = require('path');
const libPath = process.cwd();
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const packageInfo = require(path.resolve(process.cwd(), 'package.json'));
const name = packageInfo.name.replace('@kxxxl-front-end/', '');
module.exports = {
  entry: path.join(libPath, './src/index.js'),
  output: {
    path: path.resolve(libPath, 'dist'),
    filename: name + '.umd.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
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
    new CleanWebpackPlugin()
  ]
};



