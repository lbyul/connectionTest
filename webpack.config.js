const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');

module.exports = {
    mode: 'development',

    entry: {
        main: path.resolve('./src/app.js')
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },

    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: [
            //         path.resolve('./myLoader.js')
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // 여기 추가합니다.
                test: /\.(png|jpg|gif|svg|webp)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                    maxSize: 20 * 1024 // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
                }},
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `
                Commit version : ${childProcess.execSync('git rev-parse --short HEAD')}
                Committer : ${childProcess.execSync('git config user.name')}
                Commit Date : ${new Date().toLocaleString()}
            `
        })
    ]
}