const Webpack = require('webpack');

module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: __dirname,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
};
