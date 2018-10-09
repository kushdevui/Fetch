const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/components/index.js",
    output: {
        path : path.join(__dirname , "public"),
        filename : "bundle.js"
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                 use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: "style-loader" // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader" // translates CSS into CommonJS
                  },
                  {
                    loader: "sass-loader" // compiles Sass to CSS
                  }
                ]
              }
    ]
    }
}