const path = require('path');

module.exports = {
  // entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/public',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
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
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      api:        path.resolve(__dirname, './src/api'),
      // assets:     path.resolve(__dirname, './src/assets'),
      // components: path.resolve(__dirname, './src/components'),
      // constants:  path.resolve(__dirname, './src/constants'),
      router: path.resolve(__dirname, './src/router'),
      themes:     path.resolve(__dirname, './src/themes'),
      pages: path.resolve(__dirname, './src/pages'),
      store: path.resolve(__dirname, './src/store'),
      utils: path.resolve(__dirname, './src/utils'),
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
