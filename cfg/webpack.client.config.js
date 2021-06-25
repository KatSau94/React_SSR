const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, '../src/client/index.tsx'),
      ],
      output: {
        filename: 'client.js',
        path: path.resolve(__dirname, '../dist/client'),
        publicPath: '/static/'
      },
    plugins: [

    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    optimization: {
        minimize: false,
     } 
    
    
};