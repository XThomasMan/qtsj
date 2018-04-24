const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;

let entry = {
  vendors: ['./src/utils/get_client_width.min.js'],
  bundle: './src/main.js'
};

if(process.env.NODE_ENV === 'mock'){
  entry.vendors.push('./src/mock.js')
}

module.exports = {
  entry: entry,
  output: {
    path: __dirname + '/dist',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.woff/,
        use: [
          {
            loader: 'url-loader',
            options: {
              publicPath: '/',
              limit: 8192
            }
          }
        ]
      }, {
        test: /\.(gif|png|jpe?g|ttf|eot|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/',
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(less|css)$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules|dist/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: __dirname + '/index.html'
    })
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
};


if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production';
  module.exports.plugins.push(new UglifyJsPlugin());
  module.exports.plugins.push(new ImageMinPlugin({
    pngquant: {
      quality: '75-100'
    }
  }));
} else {
  module.exports.mode = 'development';
  module.exports.devtool = '#source-map';
  module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
}