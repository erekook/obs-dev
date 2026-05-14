# 题目
如何让一个元素在页面里水平垂直居中？请你讲几种常见方案，并说说你会怎么选。

# 回答要点
- 常见居中方案不止一种，要根据场景选。
- Flex：
  - `display: flex`
  - `justify-content: center`
  - `align-items: center`
  - 最常用
- Grid：
  - `display: grid`
  - `place-items: center`
  - 写法简洁
- 绝对定位 + transform：
  - `top: 50%`
  - `left: 50%`
  - `transform: translate(-50%, -50%)`
  - 适合弹窗、浮层
- 特殊场景：
  - 单行文本可用 `line-height`
  - 已知宽高可用负 margin 等传统方式
- 选择原则：
  - 普通布局优先 Flex / Grid
  - 脱离文档流元素常用 absolute + transform
  - 兼容性和元素宽高是否已知也要考虑
- 面试里可补充：
  - 没有“唯一正确解”，关键是理解适用场景

# 追问
- 为什么 `margin: 0 auto` 不能解决垂直居中？
- `transform` 方案为什么适合未知宽高元素？
- Flex 和 Grid 都能居中时，通常怎么取舍？
- 多行文本居中和块级元素居中有何不同？

# 参考答案
让一个元素水平垂直居中，是前端非常经典的基础题。面试里通常不要求只背一种写法，更看重你能不能按场景选择合适方案。

最常见的方案是 Flex。父元素设置 `display: flex`，再配合 `justify-content: center` 和 `align-items: center`，就能让子元素在主轴和交叉轴上都居中。这个方案语义清晰，写法简单，也是现代开发里最常用的。

Grid 也很适合。父元素设置 `display: grid`，然后 `place-items: center`，就能快速实现双向居中。它比 Flex 更短，但在只做一维布局时，很多团队还是更习惯用 Flex。

如果元素是弹窗、提示层这类脱离文档流的内容，常见方案是绝对定位加 transform：先把元素放到 `top: 50%`、`left: 50%`，再通过 `transform: translate(-50%, -50%)` 拉回自身一半宽高。这个方法很适合元素宽高未知的场景。

此外还有一些更特殊或传统的方法。比如单行文本可以利用 `line-height` 和容器高度一致来垂直居中；已知宽高的元素也能通过绝对定位加负 margin 实现，不过这类方案现在更多是了解即可。

实际开发里，如果是普通页面布局，我通常优先选 Flex；如果是弹窗、悬浮层，更常用 absolute + transform；如果本身就是 Grid 场景，直接用 Grid 居中也很自然。

面试里如果总结，可以说：居中没有唯一方案，Flex 和 Grid 适合现代布局，absolute + transform 适合浮层类场景，关键是理解每种方案的适用条件。