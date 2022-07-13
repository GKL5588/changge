module.exports = {
  
  publicPath: './',  
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  chainWebpack: () => {},
  configureWebpack: () => {},

  productionSourceMap: true,
  
  css: {
   
   extract: true,
   
   sourceMap: false,
   // css预设器配置项
   loaderOptions: {},
   // 启用 CSS modules for all css / pre-processor files.
   modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  
  pwa: {},

 
  // 第三方插件配置
  pluginOptions: {
   // ...
  },

       devServer: {
             proxy: {
              '/api': {
                target: 'http://iwenwiki.com:3000',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
      


}
              }
            }
          }
}
