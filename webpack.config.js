module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'app.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    devServer: {
      contentBase: './dist'
    }
  };