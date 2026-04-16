# 题目
请手写一个 `Promise.all`，并说明它的执行特点、返回规则以及什么时候会失败。

# 回答要点
- `Promise.all` 接收一个可迭代对象，通常是 Promise 数组。
- 返回一个新的 Promise。
- 成功规则：
  - 所有任务都成功时，整体才成功
  - 返回结果顺序与传入顺序一致，而不是完成顺序
- 失败规则：
  - 只要有一个 Promise 失败，整体立即 reject
- 实现关键点：
  - 需要统计完成数量
  - 结果数组按索引保存
  - 普通值也要通过 `Promise.resolve` 处理
  - 空数组应直接 resolve 为 `[]`
- 面试里可补充：
  - `Promise.all` 是并发等待，不是串行执行
  - “立即 reject” 不代表其他异步任务真的被取消

# 追问
- `Promise.all` 和 `Promise.allSettled` 的区别是什么？
- 为什么结果数组要按传入顺序，而不是按完成顺序？
- 如果其中一个 Promise reject，其他请求会被中止吗？
- 如何实现带并发限制的 Promise 执行器？

# 参考答案
`Promise.all` 的核心语义是：把多个异步任务合并成一个 Promise，只有当所有任务都成功时，最终结果才成功；只要有一个失败，整体就失败。

手写一个简化版大致可以这样：

```js
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const arr = Array.from(promises);
    const result = [];
    let count = 0;

    if (arr.length === 0) {
      resolve([]);
      return;
    }

    arr.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          result[index] = value;
          count++;
          if (count === arr.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
}
```

这个实现里有几个关键点。

第一，要用 `Promise.resolve` 包一下每一项，因为传入的不一定全是 Promise，也可能是普通值。普通值在这里也应该被当作成功结果处理。

第二，结果数组必须按照传入顺序保存，而不是按照完成顺序。因为 `Promise.all` 的规范要求最终结果和输入顺序一一对应。

第三，要用一个计数器统计已经成功完成的任务数量，只有全部完成后才能 `resolve`。

第四，只要其中任何一个任务 `reject`，整体就直接 `reject`。但要注意，这只是返回的 Promise 失败了，不代表其他已经发出的异步任务真的会被取消。

所以总结一下，`Promise.all` 的特点是：并发等待、全部成功才成功、一个失败就整体失败、结果顺序与输入顺序一致。面试里如果你能把这些语义和实现细节都说清楚，基本就够了。