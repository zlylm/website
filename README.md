# 2019-8-16

1.安装clean-webpack-plugin,在webpack打包编译时，自动删除旧的dist文件夹。

2.安装html-webpack-plugin,生成html文件。

3.安装mini-css-extract-plugin,将css从js中抽离出来。

4.安装bootstrap,需要注意的是，bootstrap中会引入一些字体文件，所以要配置.eot等字体文件的loader。

5.使用file-loader处理bootstrap中相关的字体文件和其它文件。

6.配置optimization中的splitChunks属性，使代码分离，不打包到一个文件中。

# 2019-8-17

1.安装jquery,并且配置webpack内置插件ProvidePlugin,让jquery可以在全局使用。

2.配置devServer,启动服务,不用每次都打包之后，查看页面效果,在devServer中的hot属性，可实现页面热刷新(也就是修改代码后，自动刷新整个页面)。

3.配置webpack内置插件HotModuleReplacementPlugin,使用页面热替换(也就是局部刷新)。

待解决问题：
使用ProvidePlugin配置了jquery后，jquery库不会被分离，而是和入口文件打包在一起。
devServer启动后，页面有警告，应该是字体文件的问题。

# 2019-8-18

1.制作一个简单的header

2.安装sass-resources-loader,实现全局的sass变量。

3.查找html模板相关插件，实现html代码公用(还未实现)。

