const webpack = require("webpack");
const path = require("path");
const plugins = require("./plugins");

module.exports = env => {
  const isProd = env && env.production;
  return {
    entry: {
      app: "./src"
    },
    output: {
      path: path.join(__dirname, "../build"),
      filename: "[name].[hash].js",
      publicPath: "/"
    },
    resolve: {
      alias: {}
    },
    module: {
      rules: [
        {
          test: /\.jsx?/i,
          loader: "babel-loader"
          exclude: /node_modules/
        }
      ]
    },
    plugins: plugins(isProd),
    devtool: "source-map",
    devServer: {
      contentBase: path.join(__dirname, "src"),
      compress: true,
      historyApiFallback: true
    }
  };
};
