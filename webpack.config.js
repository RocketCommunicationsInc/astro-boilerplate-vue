// var path = require('path')
// var webpack = require('webpack')
// var openInEditor = require('launch-editor-middleware')

// module.exports = {
//   entry: './src/main.js',
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     publicPath: '/dist/',
//     filename: 'build.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           'vue-style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               // enable CSS Modules
//               modules: true,
//               // customize generated class names
//               localIdentName: '[local]_[hash:base64:8]'
//             }
//           }
//         ],
//       },      {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//         options: {
//           loaders: {
//           }
//           // other vue-loader options go here
//         }
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(png|jpg|gif|svg)$/,
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]?[hash]'
//         }
//       },
//       { 
//         test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, 
//         loader: 'file-loader' } 
//     ]
//   },
//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js'
//     },
//     extensions: ['*', '.js', '.vue', '.json']
//   },
//   devServer: {
//     historyApiFallback: true,
//     noInfo: true,
//     overlay: true,
//     before (app) {
//       app.use('/__open-in-editor', openInEditor('code')) // Opens in VSCode
//     }
//   },
//   performance: {
//     hints: false
//   },
//   devtool: '#eval-source-map'
// }

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }
