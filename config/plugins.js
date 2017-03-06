const { join } = require("path");
const webpack = require("webpack");
const SWPrecache = require("sw-precache-webpack-plugin");
const Dashboard = require("webpack-dashboard/plugin");
const Clean = require("clean-webpack-plugin");
const Copy = require("copy-webpack-plugin");
const Html = require("html-webpack-plugin");

const uglify = require("./uglify");
const babel = require("./babel");

const root = join(__dirname, "..");

module.exports = isProd => {
  const plugins = [
    new Clean(["build"], { root }),
    new Copy([{ context: "src/static/", from: "**/*.*" }]),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: module => {
        return module.context &&
          module.context.indexOf("node_modules") !== -1
      }
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        isProd ? "production" : "development"
      )
    }),
    new Html({ template: "src/index.html" }),
    new webpack.LoaderOptionsPlugin({
      options: { babel }
    })
  ];

  if (isProd) {
    babel.presets.push("babili");

    plugins.push(
      new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
      new webpack.optimize.UglifyJsPlugin(uglify),
      new SWPrecache({
        filename: "service-worker.js",
        dontCacheBustUrlsMatching: /./,
        navigateFallback: "index.html",
        staticFileGlobsIgnorePatterns: [/\.map$/]
      })
    );
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new Dashboard()
    );
  }

  return plugins;
};
