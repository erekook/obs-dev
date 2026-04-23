# 题目
为什么 Promise 可以一直链式调用 `.then()`？每次 `.then()` 到底返回了什么？

# 回答要点
- `.then()` 的返回值不是原来的 Promise，而是一个新的 Promise。
- 正因为每次都返回新 Promise，所以可以继续链式调用。
- `.then()` 回调返回值对新 Promise 的影响：
  - 返回普通值，新 Promise 会变为 fulfilled，值为该返回值
  - 返回 Promise，新 Promise 的状态会跟随它
  - 抛出错误，新 Promise 会变为 rejected
- 链式调用的意义：
  - 把异步步骤串起来
  - 错误传播更自然
  - 避免回调地狱
- 面试里可补充：
  - `.catch()` 本质上也是一种特殊的 `.then()`
  - Promise 规范里有“状态穿透/值穿透”等行为

# 追问
- 为什么 `.then()` 不能直接返回原 Promise？
- 如果 `.then()` 里没有显式 return，会发生什么？
- Promise 返回 Promise 时，为什么要“等待它展开”？
- `.catch()` 为什么能捕获前面链路里的异常？

# 参考答案
Promise 之所以能一直链式调用 `.then()`，关键在于：每次调用 `.then()`，返回的都不是原来的那个 Promise，而是一个全新的 Promise。

这点非常重要。因为如果 `.then()` 只是返回原 Promise，那么后续链路就没法根据当前回调的结果去继续演化，链式调用也就失去了意义。

每次 `.then()` 执行时，都会创建一个新的 Promise，这个新 Promise 的状态由当前回调函数的执行结果决定。

有几种常见情况。

第一，如果回调里返回的是一个普通值，比如数字、字符串、对象，那么新的 Promise 会变成 fulfilled，并且这个返回值会作为后续 `.then()` 的输入。

第二，如果回调返回的是另一个 Promise，那么新的 Promise 不会立刻确定，而是会“跟随”这个返回的 Promise，等它最终 resolve 或 reject。

第三，如果回调里抛出了错误，那么新的 Promise 会直接变成 rejected，因此后面的 `.catch()` 或失败回调就能接住这个错误。

也正因为每一段 `.then()` 都能根据返回值生成一个新的 Promise，Promise 才能把多个异步步骤自然串起来，形成一条链，而不是一层层嵌套回调。

比如：

```js
Promise.resolve(1)
  .then(res => res + 1)
  .then(res => Promise.resolve(res + 1))
  .then(res => {
    console.log(res); // 3
  });
```

这里每一步 `.then()` 都在把上一步的结果“变成下一步的 Promise 输入”，这就是链式调用成立的根本。

面试里如果总结，可以说：`.then()` 之所以能链式调用，是因为它每次都会返回一个新的 Promise，而这个新 Promise 的状态和结果，由当前回调函数的返回值或异常决定。