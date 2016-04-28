// JS代码由此开始运行，创建了 globalScope = {}
// 紧接着JS引擎对整个代码内容进行检查，搜索出全局变量，并将他们的声明设置为globalScope的属性
// 既 globalScope = {
//     yohobuy: yohobuy,
//     PRINTSPACE: PRINTSPACE,
//     sayYoho: sayYoho
// }

// globalScope.PRINTSPACE = require('./printspace');
var PRINTSPACE = require('./printspace');

// globalScope.yohobuy = "YOHO!buy";
var yohobuy = "YOHO!buy";

// globalScope.sayYoho = function() {......}
function sayYoho() {
    // 函数开始执行，创建了scope = {}
    // 设置scope chain, 既 scope.parentScope = globalScope
    // 提升开始: scope.yoho = undefined;

    var yoho = "yoho!"; // scope.yoho = "yoho" ， 此时scope = {yoho: "yoho"}

    console.log(yoho);  // 打印的是scope.yoho

    console.log(yohobuy); //打印的是scope.parentScope.yohobuy, 既scope.globalScope.yohobuy
}


PRINTSPACE();

sayYoho();
// 函数调用完成，在函数调用过程中创建的scope对象此时没有被任何人引用，那么这个scope对象被自动回收

PRINTSPACE();

console.log(yoho); // 打印的是globalScope.yoho, 而globalScope上并没有定义yoho属性




/*
 * 1. 可以认为JS代码运行时总有个全局作用域对象存在
 *
 * 2. 函数sayYoho的作用域对象在函数sayYoho被调用时被创建
 *
 * 3. 函数执行完后sayYoho的作用域对象上的任何属性都没有被引用, 所以对象被回收
 *
 * 4. 作用域链是动态的、树形结构的 （不断的有scope对象被加到作用域链的某个分支上）
 *
 * 5. 所谓变量的生命周期，可以理解为scope对象的存活周期
 *
 */


