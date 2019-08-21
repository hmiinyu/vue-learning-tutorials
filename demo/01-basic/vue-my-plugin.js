(() => {
  const MyPlugin = {};

  MyPlugin.install = (Vue, options) => {
    // 定义全局方法
    Vue.myGlobalMethod = () => {
      console.log('Vue函数对象的方法myGlobalMethod()');
    };
    // 定义全局指令
    Vue.directive('my-directive', (el, binding) => {
      el.textContent = binding.value.toUpperCase();
    });
    // 定义实例方法
    Vue.prototype.$myMethod = () => {
      console.log('Vue实例对象的方法$myMethod()');
    };
  };

  window.MyPlugin = MyPlugin;
})();
