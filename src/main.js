// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
//不要忘记引入css样式文件
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

//使用vue插件
// 通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成：
Vue.use(ElementUI);

Vue.config.productionTip = false
var aaa = Vue.component('aaa', {
        template: '<div>aaa</div>'
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { Ap: App }, //意为引入组件 变量App from./App 为他起名为Ap，下面组件的使用就是这个Ap名字
    template: '<Ap/>' //意为替换页面挂在元素为变量Ap 实为引入的组件<div id="xdd"></div> 使页面结构中html里app这个div重新渲染为组件内容<div id="xdd"></div>

    // components: { sss: aaa },
    // template: '<sss/>'

})