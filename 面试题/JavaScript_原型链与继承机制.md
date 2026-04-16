tags: [面试题, 前端/JavaScript, 前端/总览]

# 题目
请你讲一下 JavaScript 的原型链。对象、构造函数、原型对象之间是什么关系？常见的继承方式有哪些？

# 说明
这是一篇原型链与继承机制的总览题，适合做专题总复习。
如果要针对单个知识点强化，优先看这些拆分笔记：
- JavaScript_什么是原型链.md
- JavaScript_prototype-__proto__-constructor区别.md
- JavaScript_prototype和__proto__区别.md
- JavaScript_new做了什么.md
- JavaScript_对象属性如何沿原型链查找.md
- JavaScript_instanceof原理.md
- JavaScript_Object.create做了什么.md
- JavaScript_为什么说JS是基于原型而不是基于类.md

# 回答要点
- JavaScript 基于原型实现对象之间的属性继承与共享。
- 每个对象内部都有一个隐式原型，通常可理解为 `[[Prototype]]`，很多环境里可通过 `__proto__` 访问。
- 函数有 `prototype` 属性，用于在作为构造函数时给实例提供共享成员。
- `new` 的大致过程：
  - 创建一个新对象
  - 把新对象的隐式原型指向构造函数的 `prototype`
  - 执行构造函数并绑定 `this`
  - 返回该对象（或显式返回的对象）
- 原型链查找规则：
  - 先找对象自身
  - 找不到再沿着原型链向上查找
  - 直到 `null`
- 常见继承方式：
  - 原型链继承
  - 构造函数继承
  - 组合继承
  - 寄生组合继承
  - ES6 `class extends`
- `class` 本质上仍是基于原型的语法糖。

# 追问
- `prototype` 和 `__proto__` 有什么区别？
- 为什么不推荐只用原型链继承来继承引用类型属性？
- `new` 关键字如果手写，你会怎么实现？
- ES6 `class` 和传统构造函数继承的底层联系是什么？

# 参考答案
JavaScript 不是传统的基于类的继承语言，它更底层的机制是原型。所谓原型链，就是对象在查找属性和方法时，如果自身没有，就会沿着原型引用一层层向上查找，直到找到或者最终到达 `null`。

这里有三个容易混淆的角色。第一是“对象实例”，它可以通过隐式原型链接到另一个对象。第二是“构造函数”，它本身是一个函数。第三是“原型对象”，也就是构造函数上的 `prototype` 属性，实例通常会通过它来共享方法。

比如：

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log('Hi');
};

const p = new Person('Tom');
```

这里 `p` 是实例对象，`Person` 是构造函数，`Person.prototype` 是原型对象。`p` 自身没有 `sayHi`，但它的原型会指向 `Person.prototype`，所以仍然可以调用这个方法。

`new` 的过程可以概括为四步：先创建一个空对象；再把这个对象的隐式原型指向构造函数的 `prototype`；然后以这个新对象作为 `this` 执行构造函数；最后返回这个对象。

说到继承，早期常见方式有原型链继承、构造函数继承、组合继承、寄生组合继承等。现在开发里更常见的是 `class extends`，但它本质上仍然没有脱离原型链，只是语法更清晰。

面试里一个关键结论是：`prototype` 是函数显式拥有的属性，主要给实例共享方法用；而 `__proto__` 更像对象内部的原型链接入口。理解这一点，原型链相关问题基本就能说通。