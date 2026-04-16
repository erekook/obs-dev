tags: [面试题, 前端/JavaScript]

# 题目
`instanceof` 的原理是什么？

# 你的回答
原理是看构造函数的 prototype 是否在实例对象的原型链上。

# 面试点评
这句已经抓住核心了。再补一句“沿原型链不断向上查找，直到 null 为止”会更完整。

# 回答要点
- 判断构造函数的 prototype 是否出现在对象原型链上
- 会沿对象原型链不断向上查找
- 找到返回 true
- 找不到直到 null 返回 false

# 参考答案
`instanceof` 的原理是判断构造函数的 `prototype` 是否出现在实例对象的原型链上。执行时会沿着对象的原型链不断向上查找，如果某一层等于这个构造函数的 `prototype`，就返回 `true`；如果一直找到 `null` 都没有找到，就返回 `false`。

# 追问
- 你能手写一个 instanceof 吗？
- 为什么字面量对象 `{} instanceof Object` 是 true？
