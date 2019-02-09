const webpack = require('webpack');
var PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'app.js'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new PrettierPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx$/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }
};