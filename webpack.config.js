const path = require('path')
const webpack = require('webpack')

const TARGET = process.env.npm_lifecycle_event

var config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'vue-tagsinput.js',
        libraryTarget: 'commonjs'
    },
    module: {
        loaders: [
            {test: /\.js$/, include: path.resolve(__dirname, 'src/'), loader: 'babel'},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.vue$/, loader: 'vue'},
        ]
    },
    plugins: [],
    babel: {
        presets: ['es2015', 'stage-2'],
        plugins: []
    },
    vue: {
        loaders: {
            scss: 'style!css'
        }
    },
    devtool: '#cheap-source-map'
}

// for production build
if (TARGET === 'build') {
    config.externals = {
        vue: 'commonjs vue'
    },
    // config.babel.plugins.push('transform-runtime')
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    )
} else if (TARGET === 'dev' || TARGET === 'build:example') {
    config = Object.assign(config, {
        entry: './src/example.js',
        output: {
            path: path.resolve(__dirname, 'example'),
            filename: 'example.js'
        }
    })
}

module.exports = config