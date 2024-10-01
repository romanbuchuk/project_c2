const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const basicConfig = require("./webpack.config");

const config = {
    mode: "production",
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]',
                                // namedExport: true, case 1;
                                namedExport: false,
                            },
                        }
                    },],
            },
        ],
    },
};

module.exports = merge(basicConfig, config);