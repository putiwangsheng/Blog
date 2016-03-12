var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')

var config = require('./webpack.config')
var app = new (require('express'))()
var port = 8080

var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        debug: true,
        hot:true,
        devtool: 'eval-source-map'
    })
)

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/src/blog.html')
})

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
    }
})
