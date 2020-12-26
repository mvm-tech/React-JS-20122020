const path = require("path");
const webpack = require('webpack');

module.exports = {
   entry: {
       app: './index.jsx',
   },
   context: path.resolve(__dirname, "static_src"),
   output: {
       path: path.resolve(__dirname, "static", "build"),
       filename: 'app.js',
       publicPath: '/static/build/'
   },


   module: {
    rules: [
        {
            test: /\.jsx?$/,
            include: path.resolve(__dirname, 'static_src'),
            exclude: path.resolve(__dirname, 'node_modules'),
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env', '@babel/react'],

            }
          
        },
    

    ],
},

};


  