# 题目
请手写一个数组扁平化函数，实现类似 `Array.prototype.flat` 的效果。顺便说一下有哪些实现思路，以及各自的优缺点。

# 回答要点
- 数组扁平化的目标：把嵌套数组展开成一维或指定层数的数组。
- 常见实现思路：
  - 递归
  - 使用栈
  - `reduce` 递归拼接
  - `toString/split`（了解，不推荐）
- 基础实现要点：
  - 遍历数组
  - 遇到数组则继续展开
  - 遇到普通值则放入结果
- 可扩展点：
  - 支持指定展开层级 depth
  - 支持 `Infinity`
- 面试里可补充：
  - 原生 `flat` 不会把对象等非数组类型展开
  - 字符串数字混合时，`toString` 方案会有类型丢失问题

# 追问
- 如果嵌套层级很深，递归实现可能有什么问题？
- 如何用栈来实现扁平化？
- `flat(Infinity)` 的语义应该怎么处理？
- 为什么 `toString` 方案不可靠？

# 参考答案
数组扁平化，就是把多层嵌套数组展开成更平的结构。最常见的手写方式是递归。

一个基础版可以这样写：

```js
function flat(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flat(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
```

这个实现思路很直观，遍历数组，遇到普通值就直接放进结果里，遇到数组就递归展开后再合并进去。

如果题目要求支持指定层级，可以再加一个 `depth` 参数：

```js
function flat(arr, depth = 1) {
  if (depth === 0) return arr.slice();

  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flat(item, depth === Infinity ? Infinity : depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
}
```

除了递归，也可以用栈实现。栈的好处是避免深层递归可能带来的调用栈溢出问题，不过写法会稍微绕一点。

有些人还会提到 `arr.toString().split(',')` 这类方式，但它不可靠。因为这样会把元素都转成字符串，类型信息丢失，而且对象、空位、特殊值都处理不好，所以更多只是面试里顺带提一句“知道但不推荐”。

如果面试里总结，可以说：最常见、最清晰的实现是递归；如果考虑超深层嵌套，可以用栈优化；如果要支持指定层级，要额外处理 `depth` 和 `Infinity`。这样回答通常就比较完整了。