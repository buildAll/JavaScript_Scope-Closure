var printSpace = require('./printspace');

// 值传递
console.log("*****值传递*****");

var num = 10; // num 持有了数字10
var a = num;  //   a 持有了数字10
var b = num;  //   b 持有了数字10

console.log("------初始-----");
console.log(num);
console.log(a);
console.log(b);

num = 8; // num 持有的数字变为了8

console.log("------num值改变后-----");
console.log(num);
console.log(a);
console.log(b);

printSpace();

// 对象的引用
console.log("*****对象的引用*****");


var yoho = {     // yoho 引用了对象 {value: “潮流”}
    value: "潮流"
}


var kris = yoho; // kris 引用了对象 {value: “潮流”}
var me = yoho;   // me 引用了对象 {value: “潮流”}



console.log("------初始----");
console.log(yoho.value);
console.log(kris.value);
console.log(me.value);

me.value = "还是潮流"; // "被me 引用的对象".value 发生了

console.log("------me.value改变后-----");
console.log(yoho.value);
console.log(kris.value);
console.log(me.value);


/**
 * 结论：
 *
 * 1. 原始数据类型采用值传递的方式持有值
 *
 * 2. 对象(引用数据类型)只能被引用
 *
 */


