# History API 面试笔记

## 1. History API 是什么

### 问题

什么是 History API？

### 回答

History API 是浏览器提供的历史记录操作能力，前端路由常用它实现 URL 变化但页面不整页刷新。

---

## 2. 常见方法有哪些

### 问题

History API 常见方法有哪些？

### 回答

- `pushState`
- `replaceState`
- `back`
- `forward`
- `go`

---

## 3. pushState 和 replaceState 的区别

### 问题

`pushState` 和 `replaceState` 的区别是什么？

### 回答

- `pushState` 会新增一条历史记录
- `replaceState` 会替换当前历史记录

---

## 4. popstate 什么时候触发

### 问题

`popstate` 事件什么时候触发？

### 回答

通常在浏览器前进后退导致历史记录切换时触发，不是调用 `pushState` 时自动触发。

## 5. 速记版

- History API 常用于前端路由
- `pushState` 新增记录
- `replaceState` 替换记录
- 前进后退会触发 `popstate`
