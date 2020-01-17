var webpack = require("webpack");

module.exports = {
  entry: {
    app: __dirname + "/javascript/src/react-native-bootstrap-slider.jsx"
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    library: "ReactNativeBootstrapSlider",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  }
}
