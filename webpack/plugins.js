"use strict"

var path = require("path")
const root = path.resolve(__dirname, "..")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(root, "src/templates/index.html"),
    baseUrl:
      process.env.NODE_ENV == "development" ? "/" : "/test-task-skylove/",
    publicPath:
      process.env.NODE_ENV == "development" ? "/" : "/test-task-skylove/",
  }),
  new MiniCssExtractPlugin(),
  new CleanWebpackPlugin(),
]
