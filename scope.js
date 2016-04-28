var printSpace = require('./printspace');

var showmore = true;
var yoho = "yoho!我在全局作用域";



function awfulSayYoho() {
    console.log("*****一般情况*****");
    console.log(yoho);
}

function normalSayYoho() {
    console.log("*****局部变量*****");

    var yoho = "yoho!我在函数作用域";
    console.log(yoho);
}


function advanceSayYoho() {
    console.log("*****自动提升*****");
    // var yoho; 自动提升声明
    console.log(yoho);

    if (showmore) {
        // yoho = "yoho!我在函数sayYoho的作用域"; 执行语句不提升，留在原地
        var yoho = "yoho!我在函数作用域";

        function sayYohoAgain() {
            console.log(yoho);
        }

        sayYohoAgain();
    }
}

printSpace();

awfulSayYoho();

printSpace();

normalSayYoho();

printSpace();

advanceSayYoho();

printSpace();


/**
 *  结论：
 *
 *  1. JavaScript基于词法作用域
 *
 *  2. JavaScript使用函数作用域，既作用域通过函数隔开
 *
 *  3. 变量的声明被自动提升
 *
 *  4. 对于变量的操作并不提升
 *
 */
