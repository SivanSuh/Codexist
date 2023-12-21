const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
    assetModuleFilename: "images/[hash][ext][query]",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/,
        type: "asset/resource",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "books/", // hedef çıktı yolu
            },
          },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./public/index.html"),
      filename: "index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/books"), // Kopyalanacak kaynak dizini
          to: path.resolve(__dirname, "dist/books"), // Hedef dizin
        },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
