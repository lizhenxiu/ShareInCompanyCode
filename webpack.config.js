const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = path.join(__dirname, 'dist');

const COMMON_HTML_WEBPACK_PLUGIN_CONFIG = (name, chunks, tmpl) => ({
    /* 
     * [see more](https://github.com/jantimon/html-webpack-plugin#configuration)
     */
    title: 'Here is title',
    filename: `${name}.html`,
    template: tmpl,
    /*
     * a icon path
     */
    // favicon: '',
    minify: false,
    hash: true,
    // chunks: ['vendor', 'app'],
    chunks,
    excludeChunks: [],
});

module.exports = function(env = '', argv) {
    const __DEV__ = env === 'development';
    const plugins = [
        new HtmlWebpackPlugin(
            COMMON_HTML_WEBPACK_PLUGIN_CONFIG('app', ['vendor', 'app'], './templates/tpl.html'),
        ),
        new HtmlWebpackPlugin(
            COMMON_HTML_WEBPACK_PLUGIN_CONFIG('realworld', ['vendor', 'realworld'], './templates/realworld.html'),
        ),
        new CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity,
        }),
        new ExtractTextPlugin('margaret.css'),
    ];

    return {
        entry: {
            vendor: ['vue'],
            app: './src/demos/main.js',
            realworld: './src/realworld/main.js',
        },
        output: {
            path: path.resolve(DIST_DIR),
            filename: '[name].js',
            chunkFilename: '[id].bundle.js',
            // [see more](https://webpack.github.io/docs/configuration.html#output-publicpath)
            // publicPath: '',
        },
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.esm.js',
            },
        },
        plugins,
        module: {
            rules: [
                {
                    test: /\.vue/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.js[x]?/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    // use sass-loader for *.sass files
                    test: /\.sass/i,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: `css-loader?modules&localIdentName=${
                                    __DEV__
                                        ? '[path][name]__[local]--[hash:base64:5]'
                                        : '[hash:base64]'
                                }`,
                            },
                            'postcss-loader',
                            `sass-loader`,
                        ],
                        // publicPath: 'css/'
                    }),
                    exclude: /node_modules/,
                },
            ],
        },
    };
};
