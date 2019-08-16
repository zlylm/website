# 2019-8-16

1.安装clean-webpack-plugin,在webpack打包编译时，自动删除旧的dist文件夹。

2.安装html-webpack-plugin,生成html文件。

3.安装mini-css-extract-plugin,将css从js中抽离出来。

4.安装bootstrap,需要注意的是，bootstrap中会引入一些字体文件，所以要配置.eot等字体文件的loader。

5.使用file-loader处理bootstrap中相关的字体文件和其它文件。

6.配置optimization中的splitChunks属性，使代码分离，不打包到一个文件中。