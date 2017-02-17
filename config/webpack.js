const webpack = require("webpack");
const path = require("path");
const plugins = require("./plugins");
const vendors = require("./vendors");

module.exports = env => {
  const isProd = env && env.production;
  return {
    entry: {
      app: "./src",
      vendor: vendors
    },
    output: {
      path: path.join(__dirname, "../build"),
      filename: "[name].[hash].js",
      publicPath: "/"
    },
    resolve: {
      alias: {
        react: "preact"
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?/i,
          loader: "babel-loader",
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
