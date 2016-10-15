
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname+'/dist',
    library:'library-name',
    libraryTarget:'umd',
    filename: 'library-name.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
