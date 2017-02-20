var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: 'eval-source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3335',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ]
  },
  output:{
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3335/',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  devServer: {
    inline: true,
    hot: true,
    port: 3335,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, 'src'),
        loader: 'react-hot-loader/webpack'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { modules: false }], 'react', 'stage-0']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.NamedModulesPlugin()
  ]
};
