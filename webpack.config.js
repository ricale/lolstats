const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/public',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      actions:    path.resolve(__dirname, './src/actions'),
      api:        path.resolve(__dirname, './src/api'),
      assets:     path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      constants:  path.resolve(__dirname, './src/constants'),
      lib:        path.resolve(__dirname, './src/lib'),
      reducers:   path.resolve(__dirname, './src/reducers'),
      themes:     path.resolve(__dirname, './src/themes'),
    },
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9090,
    host: '0.0.0.0',
    publicPath: '/',
  },
};
