# data-* 自定义属性面试笔记

## 1. 什么是 data-* 属性

### 问题

什么是 `data-*` 自定义属性？

### 回答

它是 HTML5 提供的一种在元素上存储自定义数据的方式。

例如：

```html
<div data-id="1001" data-role="admin"></div>
```

---

## 2. 怎么读取 data-* 属性

### 问题

JavaScript 怎么读取 `data-*` 属性？

### 回答

可以通过 `dataset` 读取：

```js
el.dataset.id
el.dataset.role
```

---

## 3. 适合什么场景

### 问题

`data-*` 属性适合什么场景？

### 回答

适合在 DOM 上保存轻量级、自定义、和视图相关的数据，比如：

- 元素标识
- 埋点字段
- 组件状态标记

## 4. 速记版

- `data-*` 用于存自定义数据
- JS 通过 `dataset` 读取
- 适合轻量级 DOM 数据传递
