const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/style.scss",
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { minimize: true } },
          "sass-loader"
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "docs")
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new MiniCssExtractPlugin({
      filename: "style.[hash].css"
    }),
    new CopyWebpackPlugin([
      { from: "src/images/*", to: "./images/", flatten: true },
      { from: "src/CNAME", to: "./CNAME", toType: "file" }
    ])
  ]
};
