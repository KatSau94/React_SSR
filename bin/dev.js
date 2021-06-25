const webpack = require('webpack'); // подключение WebPack
const webpackConfig = require('../webpack.config'); // подключение конфигурации
const nodemon = require('nodemon'); // подключение nodemon
const path = require('path'); // подключению модуля path

const compiler = webpack(webpackConfig);

compiler.run((err) => { 
    if (err) {
       console.log('Failed ', err);
    };

    compiler.watch({}, (err) => {
        if (err) {
          console.log('Failed ', err);
        }
    });
    
    nodemon({
       script: path.resolve(__dirname, '../dist/server/server.js'),
       watch: [path.resolve(__dirname, '../dist/server'), path.resolve(__dirname, '../dist/client')]
    })
 }); 
 

