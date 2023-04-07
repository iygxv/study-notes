class MyWebpackPlugin {
  apply(compiler) {
    // console.log( compiler.hooks)
    compiler.hooks.beforeRun.tap('MyWebpackPlugin', () => {
      console.log('在Webpack开始运行之前触发，可以在此事件中进行一些准备工作。');
    });
    compiler.hooks.beforeCompile.tap('MyWebpackPlugin', () => {
      console.log('在Webpack开始编译之前触发，可以在此事件中进行一些准备工作');
    });
    // 在webpack构建完成后输出一条消息
    compiler.hooks.done.tap('MyWebpackPlugin', () => {
      console.log('My webpack plugin is done!');
    });
  }
}

module.exports = MyWebpackPlugin;