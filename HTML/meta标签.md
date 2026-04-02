# meta 标签面试笔记

## 1. 常见 meta 标签有哪些

### 问题

常见的 meta 标签有哪些？

### 回答

常见有：

- `charset`
- `viewport`
- `description`
- `keywords`
- `robots`
- `http-equiv`

---

## 2. charset 有什么作用

### 问题

为什么一般写 `<meta charset="UTF-8">`？

### 回答

用于声明文档字符编码，避免中文乱码。现在前端页面通常统一使用 UTF-8。

---

## 3. viewport 有什么作用

### 问题

`viewport` 是干什么的？

### 回答

它主要用于移动端适配，告诉浏览器页面视口宽度如何处理。

常见写法：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 4. description 和 keywords 的作用

### 问题

`description` 和 `keywords` 有什么区别？

### 回答

- `description` 用于描述页面内容，影响搜索结果摘要和点击率
- `keywords` 以前用于关键词声明，但现在主流搜索引擎基本不再依赖

---

## 5. robots 有什么用

### 问题

`meta robots` 有什么作用？

### 回答

用于控制页面能否被索引、链接能否被跟踪。

示例：

```html
<meta name="robots" content="index,follow">
```

## 6. 速记版

- `charset` 防乱码
- `viewport` 做移动端适配
- `description` 影响摘要和点击率
- `keywords` 价值很低
- `robots` 控制索引行为
