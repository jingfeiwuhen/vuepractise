# VUE学习笔记
## VUE语法

```vue
#初级例子
# el 用来挂载要管理的元素 div对应el {{}}用来赋值
const app = new Vue({
        el: '#app', //用于挂载要管理的元素
        data: {
            message: 'hello world!',
            name:'sunc'
        }
    })
<div id="app"><h1>{{message}}</h1><h2>{{name}}</h2></div>

```
### 插值操作
```vue
mustache 只能用html标签的content里面 不能用在attribute里面
# 循环
<div v-for="item for moives">{{item}}</div>
# v-on:click
<div v-on:click="counter++">{{item}}</div>
#v-once 没有值 只改变一次 之后model改变都不会再变
# v-html 会将html格式代码直接显示出来 而不是一个字符串
data:{
    url:'<a href="http://www.baidu.com">百度一下</a>'
}
<h2 v-html="url"></h2>
# v-text 直接显示文本 基本不用 用mustache语法代替
# v-pre 数据原封不动的显示出来 不能被model解析
# v-cloak 斗篷 未解析前会有这个标签 解析后这个标签会消失 
# 在某些情况下 浏览器会显示未编译的mustache标签 配合style 可以不让其值显示
<style>
    [v-cloak] {
        display:none;
    }
```
### 事件监听

```js
# v-on 语法糖 @
# v-on 无参数函数
<button @click="func">按钮</button>
# v-on 有参函数
<button @click="func(123,变量名)">按钮</button>
# 有参函数 没有传值 默认浏览器event对象
<button @click="func">按钮</button>
# 有参函数 多参数时候 $event传的浏览器event对象
<button @click="func(123,$event)">按钮</button>
# @click.stop 阻止冒泡
# @click.prevent 调用event.preventDefault 阻止默认事件 比如from的提交按钮
# @keyup.enter 监听enter按键 监听某个键盘的键帽 
# @keyup.once 只监听一次
```

### 条件判断

```html
# v-if
<h2 v-if="score>90">优秀</h2>
# v-else
# v-else-if
#vue 会生成虚拟dom 会复用html元素 如果不想被复用 可以添加一个key 这用在vif 判断的时候html就不会被复用了
<input id="idName" key="username">
```

### 遍历循环

```js
# v-for="(index,item) in data" 遍历下标
# 遍历对象
# 遍历键值
v-for="(val,key) in 对象"
# 遍历值
v-for="key in 对象"
# key 属性 提高遍历性能
<li v-for="key in 对象" :key="key"></li>
# 可以响应的操作
push
pop
shift //删除数组第一个元素 
unshift //添加数组第一个元素
这些数组操作都是响应式的
arr[index] = dutam  //这种没有响应的

```

### v-model标签

```vue
# input text
<input type="text" v-model="message">
<input type="text" :value="message" @input="message = $event.target.value">
# input radio 
 <input type="radio" id="male" value="男"  v-model="sex">
 <input type="radio" id="female" value="女"  v-model="sex">
# select
<select v-model="myselect">
    <option value="apple">苹果</option>
    <option value="banana">香蕉</option>
    <option value="orange">橘子</option>
</select>
<select v-model="myselect" multiple>
    <option value="apple">苹果</option>
    <option value="banana">香蕉</option>
    <option value="orange">橘子</option>
</select>
# 修饰符
# v-model.lazy 失焦 回车 才会改变
# v-model 默认string 如果要显示number v-model.number
# v-model.trim 去空格
```



### VUE标签

```vue
#v-show 为false  加了一个行内样式 display:none

```

### 动态绑定属性
```vue
# v-bind
<img v-bind:src="message">
# 语法糖 v-bind ->:
<img :src="message">
# 为ture时候显示  多个class 会自己合一起
<h2 class="titel" :class="{class1: true,class2:false}"></h2>
# 还可以调用 model methods里面的函数
<h2 class="titel" :class="getclasses()"></h2>
# 数组语法
<h2 class="titel" :class="[class1,class2]"></h2>
# 动态绑定style
<h2 :style="{fontSize:'50px'}"></h2>
<h2 :style="[baseStyle,overridingStyles]"></h2>
```
### 计算属性

```js
# computed 于methods区别  computed只会调用一次有缓存,调用时候不需要().后者会使用一次调一次
# setter 和 getter
computed:{
	//简写
	fullName:function(){
		return this.firstName +' ' this.lastName;
	}
	//原本语法
	fullName1:{
		set:function(newVal){
			let names = newVal.split(' ');
			this.firstName = names[0];
			this.lastName = names[1];
		},
		get:function(){
			return this.firstName +' '+ this.lastName;
		}
	}
}
# 计算属性缓存

```

## VUE生命周期

## 补充ES6

```js
# es6 对象增强写法
const name = 'name';
const obj = {
    //基础写法
    name:name;
    //增强写法
    name,
	//基础写法
	run:function(){
		console.log('hello');
	},
    //增强写法
    fun(){
        console.log('hello');
    }
}
# forin 遍历idx	forof 遍历对象
# 箭头函数
let list2 = list.filter(x=>x<100).map(x=>x*2).reduce(x => x * 2)



```









