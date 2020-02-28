import webpack from "webpack";
import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import FixStyleOnlyEntriesPlugin from "webpack-fix-style-only-entries";
import TerserPlugin from "terser-webpack-plugin";

const publicPath = "/js/";
const publicPathDev = "http://localhost:3000/js";

module.exports = (env, argv) => ({
  entry: ["./src/index.tsx"],
  mode: argv.mode,
  devtool: argv.mode === "development" ? "inline-source-map" : false,
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx", ".json"],
    alias:
      argv.mode === "development"
        ? {
            "react-dom": "@hot-loader/react-dom"
          }
        : undefined
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].css" })
  ],
  optimization: {
    minimize: argv.mode === "production",
    minimizer: [new TerserPlugin({ sourceMap: argv.mode === "development" })]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../resources/static/js/"),
    publicPath
  },
  devServer: {
    contentBase: path.join(__dirname, "../resources/static/"),
    port: 3000,
    publicPath: publicPathDev,
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              disable: true // webpack@2.x and newer
            }
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              { targets: { browsers: ["last 2 versions"] } }
            ],
            [
              "@babel/preset-react",
              { targets: { browsers: ["last 2 versions"] } }
            ],
            "@babel/preset-typescript"
          ],
          plugins: [
            "react-hot-loader/babel",
            "@babel/plugin-proposal-class-properties",
            "emotion"
          ]
        }
      }
    ]
  },
  watchOptions: {
    ignored: /node_modules/
  }
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // }
});
