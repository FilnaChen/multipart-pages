var path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: ['babel-polyfill','./src/index.js']
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: 'css-loader'
                    },
                })
            },
            {
                test: /\.(jpg|jpeg|png|gif)/,
                use: {
                    loader: 'style-loader'
                }
            }
        ]
    }
};