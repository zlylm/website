const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//打包时自动删除旧的dist文件夹
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//将css从js文件抽离出来单独打包

module.exports = {
    mode: 'production',
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:'js/[name].js',
        chunkFilename:'js/[name].js',
        path:path.resolve(__dirname,'dist')
    },
    resolve:{
        alias:{
            '@':path.join(__dirname,'src')
        }
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress: true,
        port: 3000,
        hot: true
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
                    options:{
                        publicPath:'../'
                    }
                    
                },'css-loader','sass-loader']
            },
            {
                test:/.(eot|svg|ttf|woff|woff2)/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            outputPath:'font/'
                        }
                    }
                ]
                
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
            chunkFilename:'css/[hash].css'
        }),
        new webpack.ProvidePlugin({
            $:'jquery',//当在某个文件中遇到$字符时，自动给你引入jquery模块
            jQuery:'jquery',
        }),
        //热替换，实现局部刷新
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization:{
        splitChunks: {
            chunks: "all"
        }
    }
}