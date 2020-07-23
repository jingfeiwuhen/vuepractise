const path = require('path');
//可以联合 npm run 打包 不过要把 {"build": "webpack"} 卸载 package.json 的 script 里
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}