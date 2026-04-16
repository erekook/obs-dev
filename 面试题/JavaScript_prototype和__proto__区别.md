tags: [面试题, 前端/JavaScript]

# 题目
`prototype` 和 `__proto__` 的区别是什么？

# 你的回答
prototype 是函数的一个属性，指向函数的原型对象，__proto__ 是对象的隐式原型，它指向创建该对象的构造函数的原型对象，对象.__proto__ === 构造函数.prototype。

# 面试点评
回答方向正确，已经覆盖了大部分核心点。注意不要写成 `__prototype`。再补一句“一个主要用于共享方法，一个主要体现链路关系”会更完整。

# 回答要点
- prototype 是函数的属性
- __proto__ 是对象的隐式原型
- prototype 指向原型对象
- __proto__ 指向构造函数的 prototype
- 实例对象.__proto__ === 构造函数.prototype

# 参考答案
`prototype` 和 `__proto__` 的区别在于它们属于不同对象。`prototype` 是函数的一个属性，指向该函数的原型对象，主要用于给实例共享属性和方法。`__proto__` 是对象的隐式原型，指向创建该对象的构造函数的 `prototype`。它们的关系通常是：实例对象的 `__proto__ === 构造函数.prototype`。

# 追问
- 为什么普通对象没有 prototype 属性？
- class 本质上和 prototype 有什么关系？
