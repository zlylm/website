const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//打包时自动删除旧的dist文件夹
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//将css从js文件抽离出来单独打包

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
                test:/\.css$/,
                exclude:/node_modules/,
                use:[{
                    loader:MiniCssExtractPlugin.loader, 
                },'css-loader']
            },
            {
                test:/\.scss$/,
                use:[{
                    loader:MiniCssExtractPlugin.loader,
                    
                },'css-loader','sass-loader']
            },
            {
                test:/.(eot|svg|ttf|woff|woff2)/,
                loader:'url-loader'
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            // filename:'',//可配置输出到哪个文件夹下面
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].css',
            chunkFilename:'css/[id].[hash].css'
        })
    ],
    resolve:{
        alias:{
            '@':path.join(__dirname,'src')
        }
    },
}