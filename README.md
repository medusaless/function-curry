# function-curry
学习ramda源码，仿照写了一个curry的简单版本

注：
1.在写这个代码的时候，遇到一个switch的以前没有注意的小问题。

switch判断对变量的判断是严格判断，相当于 ===：if如果用 == 则会进行自动的类型转换。

例如：
var a = 5;
switch(a){
   case '5':  // 无法进入case语句
}

if(a == '5'){
  // 进入了if语句
}

2.function有一个length属性，记录了函数的形参个数，第一次在实际编码中使用。
