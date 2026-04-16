tags: [面试题, 前端/JavaScript, 前端/浏览器]

# 题目
请你解释一下 JavaScript 的事件循环（Event Loop）机制。什么是宏任务和微任务？它们的执行顺序是怎样的？请结合一个简单例子说明。

# 回答要点
- JavaScript 主线程是单线程，异步任务不会立刻执行，而是进入相应任务队列等待。
- Event Loop 的核心是：
  - 先执行当前调用栈中的同步代码
  - 调用栈清空后，优先清空微任务队列
  - 再取一个宏任务执行
  - 然后再次检查并清空微任务，如此循环
- 常见宏任务：
  - `setTimeout`
  - `setInterval`
  - I/O
  - UI 渲染相关任务
- 常见微任务：
  - `Promise.then/catch/finally`
  - `queueMicrotask`
  - `MutationObserver`
- 顺序特点：
  - 同步代码 > 微任务 > 下一个宏任务
  - 每个宏任务执行结束后，都会先处理完当前产生的所有微任务
- 面试里要能说清：
  - `setTimeout(fn, 0)` 也不会立刻执行
  - `Promise.then` 往往比 `setTimeout` 更早执行

# 追问
- 浏览器和 Node.js 的事件循环有什么差异？
- 为什么大量微任务可能导致页面“饿死”或渲染延后？
- `async/await` 在事件循环里本质上是如何工作的？
- `requestAnimationFrame` 和 `setTimeout` 的区别是什么？

# 参考答案
JavaScript 是单线程执行的，同一时刻只能做一件事。为了支持异步操作，比如定时器、网络请求、DOM 事件，JavaScript 运行时会把这些异步任务交给宿主环境处理，等时机到了再把回调放进任务队列，等待主线程空闲后执行。

事件循环可以理解为一套“调度机制”。执行过程通常是这样的：先执行当前调用栈中的同步代码；当同步代码执行完、调用栈清空后，先检查微任务队列，把里面的任务依次执行完；微任务清空后，再从宏任务队列中取出一个宏任务执行。这个过程会不断重复。

宏任务常见的有 `setTimeout`、`setInterval`、I/O、用户交互回调等。微任务常见的有 `Promise.then/catch/finally`、`queueMicrotask`、`MutationObserver`。

看一个例子：

```js
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
```

执行顺序是：`A`、`D`、`C`、`B`。

原因是：`A` 和 `D` 是同步代码，先执行；`Promise.then` 属于微任务，所以在同步代码结束后立即执行；`setTimeout` 属于宏任务，要等本轮微任务清空后，下一轮事件循环再执行。

所以总结就是，同步代码先执行，微任务优先级高于宏任务，并且每一轮宏任务结束后，都会先把微任务全部清空。这是面试中最核心的结论。