const path = require('path')

module.exports = {
  mode:'development',
  entry:'./src/index.js',
  output:{
    filename:'bundle.js'
  },
  devServer:{
    //静态文件根目录
    contentBase:path.join(__dirname,"www"),
    compress:false,//不压缩
    port:8080,//端口号
    publicPath:'/xuni/'//虚拟打包路径，bundle.js文件没有真正的生成
  }
}