module.exports = {
    entry: './src/recorder/client/index.js',
    output: {
        path: 'public/',
        filename: 'bundle.js'
    },
    externals: {},
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map'
};