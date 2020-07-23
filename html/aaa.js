var aaa='xiaoming'
var age = 18
var flag = true
function sum(num1,num2) {
    return num1 + num2;
}
if (flag) {
    console.log(sum(12, 23));
}

//方式1
export {
    sum,flag
}
//方式2
export let name = 'aaa'
export function dddd() {}
export class Person{
    run(){
        console.log('执行方法');
    }
}
export  default '默认'

import {flag,sum} from "./aaa.js"
import * as aaa from "./aaa.js"