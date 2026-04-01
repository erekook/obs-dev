/** 
 * subject 解构赋值练习
 * author  longjietan
 * */ 



// es6 允许这样给变量赋值
//  let [a, b, c] = [1, 2, 3]
//  console.log(a, b, c) // 1 2 3

 // 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。

//  let [foo, [[bar], baz]] = [1, [[2], 3]]
//  console.log(foo, bar, baz) // 1 2 3

//  let [ , , third] = ["foo", "bar", "baz"]
//  console.log(third); // baz


//  let [x, , y] = [1, 2, 3]
//  console.log(x, y) // 1 3

//  let [head, ...tail] = [1, 2, 3, 4]
//  console.log(head, tail); // 1 [2, 3, 4]

//  let [x, y, ...z] = ['a']
//  console.log(x, y, z); // a undefined []
 
// 解构不成功，变量的值就变成了undefined
// let [foo] = []
// console.log(foo)
// let [bar, foo] = [1]
// console.log(bar);
// console.log(foo);


// 不完全解构
// let [x, y] = [1, 2, 3];
// console.log(x, y); // 1 2

// let [a, [b], d] = [1, [2, 3], 4];
// console.log(a, b, d);


// yield是ES6的新关键字，使生成器函数执行暂停，yield关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的return关键字。
// yield关键字实际返回一个IteratorResult（迭代器）对象，它有两个属性，value和done，分别代表返回值和是否完成。
// yield无法单独工作，需要配合generator(生成器)的其他函数，如next，懒汉式操作，展现强大的主动控制特性。
// function* fibs() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//       yield a;
//       [a, b] = [b, a + b];
//     }
// }

// console.log(fibs()); // 是个迭代器
// let arr = fibs()
// console.log(arr.next());

// 默认值

// let [foo = true] = [];
// foo // true

// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'


let str = `wxc64eba09b049aa2c
wxb90c18ab41175c05
wxc789c6aa4dc832bc
wxd9471d06cf93fa4b
wx91c3816b09598ba3
wxbed7fe198c85e8c4
wxa6fae1de0f30592c
wx99a792e1f4edb2c2
wx7920768bef250e76
wxecaf936bbce6c82e`

let arr = str.split('\n')
let result = ""
for (let i = 0; i < arr.length; i++) {
    if (i == arr.length -1) {
        result += "\"" +arr[i] + "\"";
    } else {
        result += "\"" +arr[i] + "\",\n";
    }
}
console.log(result)


// some change here



 
 