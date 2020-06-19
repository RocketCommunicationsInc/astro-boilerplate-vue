const CopyWebpackPlugin = require('copy-webpack-plugin')
var openInEditor = require('launch-editor-middleware')

module.exports = {
  configureWebpack: {
    plugins: [
      // new CopyWebpackPlugin([{
      //   from: 'node_modules/astroux-static/favicon.ico',
      //   toType: "dir",
      //   ignore: [ "index.html", ".DS_Store" ]
      // }]),
      // copy everything in astroux-static
      new CopyWebpackPlugin([{
        from: 'node_modules/astroux-static/',
        toType: "dir",
        ignore: [ "index.html", "package.json", "readme.md", ".DS_Store" ]
      }])
    ]
  // },
  // chainWebpack: config => {
  //   config.module
  //     .rule('favicon')
  //     .test(/\.ico$/)
  //     .use('url-loader')
  //       .loader('url-loader')
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    before (app) {
      app.use('/__open-in-editor', openInEditor('code')) // Opens in VSCode
    }
  }
}
