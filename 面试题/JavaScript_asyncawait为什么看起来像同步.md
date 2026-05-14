# 题目
为什么 `async / await` 明明处理的是异步逻辑，却看起来像同步代码？它底层大致是怎么工作的？

# 回答要点
- `async / await` 是基于 Promise 的语法糖。
- 看起来像同步的原因：
  - 代码书写方式按顺序展开
  - 把 Promise 链式调用包装成更直观的流程控制形式
- `async`：
  - 函数总是返回一个 Promise
- `await`：
  - 等待一个 Promise 结果
  - 当前函数在这里“暂停”，但不会阻塞整个线程
- 底层理解：
  - 遇到 `await` 时，把后续逻辑放入 Promise 完成后的微任务链中继续执行
- 面试里可补充：
  - “像同步”是代码风格，不是线程模型改变
  - JS 仍然是单线程事件循环驱动

# 追问
- 为什么说 `await` 不会阻塞整个 JS 主线程？
- `async` 函数里 return 普通值会发生什么？
- 多个 `await` 串行执行时为什么可能慢？
- `await` 后面的表达式如果不是 Promise，会怎样处理？

# 参考答案
`async / await` 之所以看起来像同步代码，是因为它把原本需要 `.then()` 一层层串起来的 Promise 写法，改写成了更接近“按顺序往下读”的形式。

比如以前你可能会这样写：

```js
fetchData()
  .then(res => process(res))
  .then(data => save(data));
```

而用了 `async / await` 后，可以写成：

```js
async function run() {
  const res = await fetchData();
  const data = await process(res);
  return save(data);
}
```

这种写法非常像同步代码：先拿结果，再处理，再保存。但这只是“写法像同步”，并不代表 JavaScript 真的变成了同步阻塞执行。

底层上，`async / await` 仍然建立在 Promise 和事件循环之上。`async` 函数一定会返回一个 Promise；而 `await` 的作用，可以理解为：当前这个 async 函数在这里先暂停，把后面的代码挂到 Promise 完成后的后续流程里，等结果回来了再继续执行。

这里暂停的是“当前 async 函数的后续逻辑”，不是整个 JavaScript 主线程。浏览器或运行时在这个等待期间，仍然可以继续处理别的任务，比如 UI 渲染、事件响应、其他异步回调等。

所以它的本质不是把异步变成同步，而是把异步控制流写得更像同步顺序代码，让开发者更容易理解。

面试里如果总结，可以说：`async / await` 看起来像同步，是因为它把 Promise 链包装成了顺序写法；但底层仍然依赖 Promise 和事件循环，`await` 暂停的是当前函数流程，不会阻塞整个线程。