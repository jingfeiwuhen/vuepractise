const {add, mult} = require('./js/mathUtils');
console.log(add(11, 22));
console.log(mult(111, 222));

//加载css文件
require('./css/normal.css');
//加载less文件
require('./css/special.less');

//使用vue开发
import Vue from 'vue';
import App from './vue/App.vue'

new Vue({
    el: '#app',
    template:'<App/>',
    components:{
        App
    }
})
