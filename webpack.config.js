const path = require('path');

module.exports = {
  entry: './jsx/mainATest.jsx',     
  output: {                     
    path: path.resolve(__dirname, 'js'),   
    filename: 'main.js'       
  },
  mode:"development",
  module: {
    rules: [
      { test: /\.jsx?$/, 
        exclude: /node_modules/,
        use:{
            loader: "babel-loader" ,
            options:{
                presets:['@babel/preset-env','@babel/preset-react'], 
                plugins:[
                  '@babel/plugin-proposal-class-properties']
            }
        } 
       }
    ]
  }
};

