## 搭建简易web服务器

### 现状
* JAVA服务器搭建麻烦,调试效率低
* 代码文件打包在一个文件,下载缓慢
* 线上js不能自动添加hash, 发布缓存不能及时更新

### 目标
* node服务器, 方便安装, 快速启动
* 跨设备访问, 保存自动刷新
* 静态资源生成hash, 合理利用缓存
* 公共库资源文件合并,减少HTTP请求
* html模板,重复使用,修改方便

### 准备
* 运行环境node 6.x.x(自带npm 3.x.x)
* webpack, gulp知识 

### webpack
#### hash 与 chunkhash 的区别
> hash是compilation对象计算所得，而不是具体的项目文件计算所得; chunkhash是根据具体模块文件的内容计算所得的hash值，所以某个文件的改动只会影响它本身的hash指纹，不会影响其他文件; contenthash 的使用方式; [链接地址](http://www.cnblogs.com/ihardcoder/p/5623411.html '参考文章')

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
