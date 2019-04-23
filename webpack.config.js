const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    bindwasd: './chrome/src/contents/bindwasd.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env',
            '@babel/react',
          ],
          plugins: [
            ['@babel/plugin-proposal-class-properties'],
            ['import', { libraryName: 'antd', style: 'css' }],
          ],
        },
      },
      {
        test: /\.css/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'chrome/dist/'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './chrome/src/manifest.json' },
    ]),
  ],
};
