var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ["./src/js/app.jsx", "./src/css/main.scss"],
    output: {
        path: path.resolve(__dirname, '/public/js/'),
        filename: 'app.min.js',
        publicPath: '/js/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?|\.js$/,
                exclude: /(node_modules|bower_components|neal-react)/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ]
};
