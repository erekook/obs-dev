# Web Worker 面试笔记

## 1. 什么是 Web Worker

### 问题

什么是 Web Worker？

### 回答

Web Worker 是浏览器提供的多线程能力，可以把一些耗时任务放到独立线程里执行，避免阻塞主线程。

---

## 2. Web Worker 解决了什么问题

### 问题

为什么要用 Web Worker？

### 回答

因为 JavaScript 主线程是单线程的，复杂计算会阻塞页面渲染和交互。Web Worker 可以把大计算量任务转移出去。

---

## 3. Worker 和主线程怎么通信

### 问题

Web Worker 和主线程怎么通信？

### 回答

通过 `postMessage` 和 `onmessage`。

---

## 4. Web Worker 有什么限制

### 问题

Web Worker 有哪些限制？

### 回答

- 不能直接操作 DOM
- 不能直接访问主线程变量
- 通信需要消息传递
- 适合计算，不适合页面结构操作

## 5. 速记版

- Web Worker 用于把耗时任务放到子线程
- 优点是避免阻塞 UI
- 通过 `postMessage` 通信
- 不能直接操作 DOM
