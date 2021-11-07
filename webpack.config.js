const path = require("path"); // this is a Node.js path module that is
const Dotenv = require('dotenv-webpack');

const webpack = require("webpack"); // import webpack

const config = {
  // config object for webpack to read

  entry: "./src/index.js", // where webpack looks first to start bundling

  output: {
    //where bundled code is going to be placed after bundling
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // resolve extensions
  resolve: { extensions: [".mjs", ".js", ".jsx", ".css", ".scss"] },

  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new Dotenv()] // this is to use .env in frontend 
};

module.exports = config;
