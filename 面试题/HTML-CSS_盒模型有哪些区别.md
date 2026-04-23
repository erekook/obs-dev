# 题目
请你讲一下 CSS 盒模型。标准盒模型和 IE 盒模型有什么区别？

# 回答要点
- CSS 盒模型由这些部分组成：
  - content
  - padding
  - border
  - margin
- 标准盒模型：
  - `width` / `height` 只表示 content 区域大小
  - 实际占位宽高 = content + padding + border
- IE 盒模型（现代通过 `box-sizing: border-box` 模拟）：
  - `width` / `height` 包含 content + padding + border
- 关键属性：
  - `box-sizing: content-box`
  - `box-sizing: border-box`
- 实际开发：
  - 很多项目会全局设置 `box-sizing: border-box`
  - 这样尺寸计算更直观，布局更稳定
- 面试里可补充：
  - margin 不属于元素本体盒子，但影响元素外部间距
  - 盒模型是布局基础高频题

# 追问
- 为什么 `border-box` 在工程实践里更常用？
- `width: 100%` 时两种盒模型表现有什么差异？
- margin 为什么不算进盒模型主体？
- 行内元素和块级元素在盒模型表现上有哪些注意点？

# 参考答案
CSS 盒模型可以理解为浏览器如何看待一个元素的尺寸和占位空间。一个盒子通常由四部分组成：内容区 `content`、内边距 `padding`、边框 `border` 和外边距 `margin`。

标准盒模型的规则是，`width` 和 `height` 只表示内容区大小，也就是 `content` 的尺寸。如果你给元素加了 `padding` 和 `border`，元素最终实际占据的宽高还要再把这些加上去。

比如一个元素设置：

```css
width: 200px;
padding: 20px;
border: 10px solid;
```

如果它是标准盒模型，那么实际占位宽度就是：200 + 20*2 + 10*2 = 260px。

而所谓 IE 盒模型，在现代 CSS 里通常对应 `box-sizing: border-box`。它的含义是：`width` 和 `height` 已经把 `content`、`padding`、`border` 都算进去了。也就是说，同样设置 `width: 200px`，它最终整体宽度仍然是 200px，内容区会自动缩小来给 padding 和 border 留空间。

在现代项目里，很多团队更喜欢统一使用 `box-sizing: border-box`，因为它在做布局时更直观。你写一个宽度，最终看到的整体宽度通常就是那个值，不容易因为 padding 和 border 额外把布局撑爆。

需要注意的是，`margin` 虽然经常和盒模型一起说，但它其实属于盒子外部的间距，不算在元素本体尺寸里。

面试里如果总结，可以说：标准盒模型里 `width/height` 只算内容区，`border-box` 里 `width/height` 包含 padding 和 border；现代开发通常更倾向 `border-box`，因为尺寸计算更稳定直观。