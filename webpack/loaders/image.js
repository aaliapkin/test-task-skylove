"use strict"

// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  test: /\.(jpg|png)$/,
  loader: "file-loader", // or url-loader
}
