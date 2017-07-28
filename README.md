## 搭建简易web服务器

### 现状
* JAVA服务器搭建麻烦,调试效率低
* 代码文件打包在一个文件,下载缓慢
* 线上js不能自动添加hash, 发布缓存不能及时更新

### 目标
* node服务器, 快捷安装, 一键启动
* 跨设备访问, 保存自动刷新
* 静态资源生成hash, 合理利用缓存
* 公共库资源文件合并,减少HTTP请求

### 准备
* 运行环境node 6.x.x(自带npm 3.x.x)
* webpack, gulp知识 

### webpack

### Glup
---
*     gulp.task("a", function() {
        gulp.src("....
    与
     
      gulp.task("b", function() {
        return gulp.src("....

    的区别, gulp中task都是异步执行,有return的情况下,可以保证task在依赖的task执行成功后再运行
    
      gulp.task('c', ['a', 'b'], ()=>{
        // a may not done
        // b done
      })