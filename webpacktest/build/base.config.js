const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
//可以联合 npm run 打包 不过要把 {"build": "webpack"} 卸载 package.json 的 script 里
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
        // ,
        //涉及到url 都会自动拼接prefix
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                //从右向左读取
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //当加载的图片,小于limit时,将会图片编译成base64字符串形式
                            //当加载的图片,大于limit时,需要使用file-loader模块进行加载
                            limit: 8192,
                            //配置打包后的图片格式
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            }
        ]
    },
    //指定vuejs
    resolve: {
        extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归本帅所有'),
        // new htmlWebpackPlugin()
        new htmlWebpackPlugin({template:'index.html'}),
    ]
}