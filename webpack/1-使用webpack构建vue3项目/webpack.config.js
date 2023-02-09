const path = require('path');
// vue-loader 库同时提供用于处理 SFC 代码转译的 Loader 组件，
// 与用于处理上下文兼容性的 Plugin 组件，两者需要同时配置才能正常运行。
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = {
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },
  mode: process.env.NODE_ENV,
  devtool: false,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    hot: true,
    open: true,
  },
  module: {
    rules:[
      {
        test: /\.vue$/, // 以.vue文件结尾
        use: ['vue-loader']
      },
      {
        test: /\.(less)$/, // 以.css | .less文件结尾
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        // use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      templateContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Webpack App</title>
        </head>
        <body>
          <div id="app">
          </div>
        </body>
      </html>
          `
    })
  ]
}