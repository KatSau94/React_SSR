const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const IS_PROD = NODE_ENV === 'production';

module.exports = {
    mode: "development",
    entry: [
        path.resolve(__dirname, '../src/client/index.tsx'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
      ],
      output: {
        filename: 'client.js',
        path: path.resolve(__dirname, '../dist/client'),
        publicPath: '/static/'
      },
    
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        }
        
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    optimization: {
        minimize: false,
     }, 
     plugins: [
        new HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
      ]
    
};