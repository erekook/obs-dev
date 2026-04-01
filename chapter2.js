// JavaScript 变量是松散型的
/**
*	基本类型值： 简单的数据段
*	引用类型值： 可能由多个值构成的对象
*
*/


// 基本类型的复制，会创建num1的副本，赋值给num2，所以num1的5 和 num2的5是独立的

let num1 = 5;
let num2 = num1;


// 引用类型的复制 obj1 和 obj2 指向同一个对象

let obj1 = new Object();
let obj2 = obj1;
obj1.name = "Erek";
console.log(obj2.name); // ”Erek“



// 基本类型参数传递 把count的值给局部变量num而已，count并不会改变 
function addTem(num){
	num += 10;
	return num;
}

let count = 20;
let result = addTem(count);
console.log("count:%d", count); // 20 no change
console.log("result:%d", result); // 30


// person 和obj 指向的是同一个对象

function setName(obj){
	obj.name = "linus";
}
let person = new Object();
setName(person);
console.log(person.name);


// obj 和person1 指向同一个对象，然后obj又指向另外一个新对象，此时person和obj不是同一个对象了
function setName1(obj){
	obj.name = "linus";
	obj = new Object();
	obj.name = "Lili";
}
let person1 = new Object();
setName1(person1);
console.log(person1.name);

// result = variable instanceof constructor

console.log(person instanceof Object);
console.log(person instanceof Array);



/**********************************************
*
*  执行环境和作用域
*
***********************************************
执行环境 --- 都有一个与之关联的变量对象(variable object)----环境中所有定义的变量和函数都保存其中

全局执行环境 --- 最外围的一个执行环境  ---- windows 对象

每个函数都有自己的执行环境

当代码在一个执行环境中执行时，会创建变量对象的一个作用域链(scope chain)
                                           --- 保证对执行环境有权访问所有的变量和函数的有序访问
作用域链的前端 --- 当前执行代码的所在执行环境的变量对象 --- 活动对象(activation object)
*/





// Array 类型

// length = 20的数组
var colors =  new Array(20);
console.log(colors);

var name = [1,2,];
console.log(name);

var opt = [,,,,,];
console.log(opt);

console.log(Array.isArray(opt));

var color = ["blue","green","red"];
console.log(color.toString());
console.log(color.valueOf());
console.log(color.join("|"));

// Array 可以看成栈  LIFO(后进先出)

color.push("yellow"); // 在栈尾增加一项
console.log(color);
console.log(color.length);
var last = color.pop(); // 取出最后一项
console.log(last);
// 队列方法

var first = color.shift(); // 取出第一项
console.log(first);

color.unshift("orange"); // 在数组前端放入

var arr = [1,10,5,18,20];
console.log(arr.reverse()); // reverse() 反转数组


console.log(arr.sort());  // sort() 排序，默认调用每一项的toString()方法然后比较，大的放后面

function compare(value1,value2){
	if (value1 < value2) {
		return -1;
	} else if(value1 > value2){
		return 1;
	}else{
		return 0;
	}
}

console.log(arr.sort(compare)); // sort() 可以传入函数参数，自定义排序方式

/**

array.concat()
无参数 返回原数组副本
参数为一个或多个数组，会依次加入到数组后面


array.slice(start,end)
一个参数，返回该参数指定位置到数组末尾的所有项
两个参数，返回起始位置到结束位置（不包括结束项）

array.splice(start,num,...)

start: 起始位置
num: 删除的项数
...:加入的数组项


indexOf(item, index); 
从头开始查找
item： 查找的项
index: 查找的起始位置 默认是0

lastIndexOf(item.index);
从末尾开始查找
item： 查找的项
index: 查找的起始位置 默认是0

如果没有找到就返回-1
找到就返回所在项的索引

*/

/*************************************************************
*
*	迭代方法
*	every(): 对数组中的每一项运行给给定函数，如果函数对每一项都返回true，则返回true
		return: boolean
*	some(): 对数组中的每一项运行给给定函数, 如果函数对某一项返回true，则返回true
		return: boolean
*	filter() :对数组中的每一项运行给定函数,返回该函数会返回 true 的项组成的数组
		return: Array
*	forEach() :对数组中的每一项运行给定函数。这个方法没有返回值。
		void
*	map() :对数组中的每一项运行给定函数,返回每次函数调用的结果组成的数组。
		return: Array
*
**************************************************************/

let numbers = [1,2,3,4,5,4,3,2,1];
console.log("原数组:", numbers);
// 要数组中都大于2 才返回true
var everyResult = numbers.every(function(item,index,array){
	return item > 2;
});

console.log("everyResult if > 2",everyResult); // false

// 只要数组中有一个大于2 的就返回true
var someResult = numbers.some(function(item,index,array){
	return item > 2;
});

console.log("someResult if > 2",someResult);


// 数组中大于2的 形成新的数组
var filterResult = numbers.filter(function(item,index,array){
	return item > 2;
});
console.log("filterResult if > 2", filterResult);


// 数组每一项都乘3 返回新的数组
var mapResult = numbers.map(function(item,index,array){
	return item * 3;
});
console.log("mapResult item * 3",mapResult);


numbers.forEach(function(item,index,array){
	// do something
	console.log(item,index,array);
});


/*************************************************************
*
*	归并方法
*	迭代所有项，构建返回一个值
*	reduce(): 从数组第一项开始
*	reduceRight(): 从数组最后一项开始
*	传给上述方法的函数接受4个参数：
*	前一个值，当前值，项的索引，数组对象
*	这个函数返回的值都会作为第一个参数传给下一项
*
**************************************************************/

var values = [1,2,3,4,5];
var sum = values.reduce(function(pre,cur,index,array){
	return pre + cur;
});
console.log("values sum",sum);