# 拖拽 API 面试笔记

## 1. HTML5 拖拽 API 是什么

### 问题

什么是 HTML5 拖拽 API？

### 回答

HTML5 提供了一套原生拖拽能力，可以实现元素拖动、拖放上传等场景。

---

## 2. 常见事件有哪些

### 问题

拖拽相关的常见事件有哪些？

### 回答

- `dragstart`
- `drag`
- `dragenter`
- `dragover`
- `dragleave`
- `drop`
- `dragend`

---

## 3. 为什么 drop 经常不生效

### 问题

为什么有时候 `drop` 事件不触发？

### 回答

因为拖拽目标通常需要在 `dragover` 事件中调用 `event.preventDefault()`，否则默认不允许放下。

## 4. 速记版

- 拖拽核心事件有 `dragstart`、`dragover`、`drop`
- `drop` 生效前通常要先 `preventDefault`
- 常见场景是拖拽排序、拖拽上传
