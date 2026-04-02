# WebSocket 面试笔记

## 1. 什么是 WebSocket

### 问题

什么是 WebSocket？

### 回答

WebSocket 是一种在客户端和服务端之间建立持久连接的协议，建立后可以双向通信。

---

## 2. WebSocket 和 HTTP 的区别

### 问题

WebSocket 和 HTTP 有什么区别？

### 回答

- HTTP 通常是请求响应模式
- WebSocket 建立连接后可以双向实时通信
- WebSocket 更适合高实时场景

---

## 3. WebSocket 适合什么场景

### 问题

哪些场景适合 WebSocket？

### 回答

- 聊天室
- 实时通知
- 在线协作
- 实时行情
- 游戏

---

## 4. WebSocket 建立连接的过程

### 问题

WebSocket 是怎么建立的？

### 回答

通常先通过 HTTP/HTTPS 发起握手，握手成功后升级为 WebSocket 连接，之后双方就可以持续双向通信。

## 5. 速记版

- WebSocket 是持久化双向通信协议
- 比轮询更适合实时场景
- 常见场景是聊天、协作、通知
