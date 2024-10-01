const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const basicConfig = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebPackPlugin({
    template: path.resolve(__dirname, '../templates/index.html'),
  })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          }
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@hooks': path.resolve(__dirname, '../src/hooks'),
    }
  },
  devServer: {
    port: 9000,
  }
};

module.exports = basicConfig;