const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{
        from: 'node_modules/astroux-static/favicon.ico',
        toType: "dir",
        ignore: [ "index.html", ".DS_Store" ]
      }]),
      // copy everything in astroux-static
      // new CopyWebpackPlugin([{
      //   from: 'node_modules/astroux-static/',
      //   toType: "dir",
      //   ignore: [ "index.html", "package.json", "readme.md", ".DS_Store" ]
      // }])
    ]
  },
  chainWebpack: config => {
    config.module
      .rule('images')
        .test(/\.(jpe?g|png|gif|ico)$/i)
  }
}