tags: [面试题, 前端/JavaScript]

# 题目
`prototype`、`__proto__`、`constructor` 分别是什么？

# 你的回答
prototype 是函数的一个属性，指向该函数的原型对象。__proto__ 是对象的隐式原型，指向创建该对象的构造函数的 prototype，constructor 是原型对象的属性，指回对应的构造函数。

# 面试点评
这版回答已经比较标准，三者关系也说清楚了。再补一句“prototype 用于给实例共享属性和方法，__proto__ 体现对象和原型的链路关系”，会更稳。

# 回答要点
- prototype 是函数上的属性
- prototype 指向函数的原型对象
- __proto__ 是对象的隐式原型
- __proto__ 通常指向构造函数的 prototype
- constructor 是原型对象上的属性，指回构造函数
- 实例对象.__proto__ === 构造函数.prototype

# 参考答案
`prototype` 是函数上的一个属性，指向该函数的原型对象。`__proto__` 是对象的隐式原型，通常指向创建该对象的构造函数的 `prototype`。`constructor` 一般是原型对象上的属性，指回对应的构造函数。它们三者之间通常形成这样的关系：实例对象的 `__proto__ === 构造函数.prototype`，而 `构造函数.prototype.constructor === 构造函数`。

# 追问
- prototype 和 __proto__ 的区别是什么？
- constructor 被改写时会有什么影响？
