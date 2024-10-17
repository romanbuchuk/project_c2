const { merge } = require('webpack-merge');
const basicConfig = require('./webpack.config');

const config = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: `[name]_[local]--[hash:base64:5]`,
                                namedExport: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        port: 9000,
        open: true,
    },
};

module.exports = merge(basicConfig, config);
