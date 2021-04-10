"use strict"

var path = require("path")

var rules = [
  require("./webpack/loaders/glsl"),
  require("./webpack/loaders/css"),
  require("./webpack/loaders/svg"),
  // This piece of shit conflicts with vue-loader
  // Fucking hate webpack
  // require("./webpack/loaders/html"),
  require("./webpack/loaders/babel"),
  require("./webpack/loaders/image"),
  require("./webpack/loaders/vue"),
]

var plugins = require("./webpack/plugins")

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".vue"],
    modules: ["node_modules", "src"],
    alias: {
      js: path.resolve(__dirname, "src/js"),
      css: path.resolve(__dirname, "src/css"),
      components: path.resolve(__dirname, "src/components"),
      templates: path.resolve(__dirname, "src/templates"),
      assets: path.resolve(__dirname, "assets"),
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  plugins: plugins,
}
