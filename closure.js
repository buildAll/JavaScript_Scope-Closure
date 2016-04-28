// 此处有globalScope 对象； .... 不再赘述
var printSpace = require('./printspace');

function outerFunc() {
    // 函数被调用时，产生了新的outerScope对象, 既outerScope = {}
    //
    // 设置scope chain，既 outerScope.parentScope = globalScope;
    //
    // 提升开始： outerScope.counter = undefined;

    // outerScope.counter = 0;
    var counter = 0;

    return function() {
        // 函数被调用的话，产生新的insideScope = {}
        //
        // 设置scope chain，既 insideScope.parentScope = outerScope;
        //
        // 此时完整的scope chain 可以想成这样的 insideScope.parentScope.parentScope
        // 既 insideScope.outerScope.globalScope
        //
        // 函数内部没有 var 定义的变量，所以insideScope没有变化

        console.log(counter); // 此处需要打印的是 insideScope.outerScope.counter。既outerScope对象被引用了！！
        counter += 1;
    }
}

var insideFunc = outerFunc(); // 因为outerFunc的调用，内部函数被return出来
                              // return 出来的内部函数被insideFunc引用
                              // 由于insideFunc 引用的函数内部引用了 outerScope上的属性counter,
                              // 所以outerScope对象不会被回收，从效果上来讲就是局部变量counter一直存活了

/*
 * 不妨假想成下面的代码
 *
 * var anotherInsideFunc = function() {
 *     console.log(counter);
 *     counter += 1;
 * }
 *
 * 其中的counter变量来自outerFunc被调用时所创建的作用域对象
 *
 */

printSpace();

insideFunc();
insideFunc();
insideFunc();
insideFunc();
insideFunc();
insideFunc();

printSpace();

var anotherInsideFunc = outerFunc(); // outerFunc又被调用一次，产生了新的scope chain

anotherInsideFunc();
anotherInsideFunc();
anotherInsideFunc();
anotherInsideFunc();

printSpace();


/*
 * 1. 我们常说的闭包实际就是函数运行时产生的scope对象被引用，导致scope对象无法被回收的一种现象
 *
 */
