const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // clears dist on every build
    },
    mode: 'development',
    devServer: {
        static: './dist',
        open: true, // automatically open browser
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            title: 'Restaurant Page',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
