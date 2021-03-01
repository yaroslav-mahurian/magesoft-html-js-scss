const path = require('path');
/* const HtmlWebpackPlugin = require("html-webpack-plugin"); */

module.exports = {
    // entry: './src/js/main.js',
    entry: {
        /* index: './src/js/main.js', */
        main: [/* '@babel/polyfill', */ './src/js/main'],
        index: [/* '@babel/polyfill', */ './src/js/index'],
        allNews: [/* '@babel/polyfill', */ './src/js/allNews'],
        allProjects: [/* '@babel/polyfill', */ './src/js/allProjects'],
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]',
    },
    /* devServer: {
        contentBase: './dist',
        writeToDisk: true,
    }, */
    plugins: [
        /* new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }), */
    ],
    /* module: {
        rules: [
            {
                test: /\.m?js$/,
                include: path.resolve(__dirname, './dist'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    }, */
};