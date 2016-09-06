// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        assetsRoot: path.resolve(__dirname, 'dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: false
    },
    dev: {
        port: 8080,
        proxyTable: {}
    }
}
