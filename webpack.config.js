const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//打包时自动删除旧的dist文件夹

module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:'js/[name].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:'/\.js$/',
                exclude:/node_modules/,
                loader:'babel-loader',
                options:{
                    presets: ['@babel/preset-env']
                }
                
            },
            {
                test:'/\.scss$/',
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            // filename:'',//可配置输出到哪个文件夹下面
        })
    ],
    resolve:{
        alias:{
            '@':path.join(__dirname,'src')
        }
    },
}