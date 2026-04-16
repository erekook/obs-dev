tags: [面试题, 前端/CSS]

# 题目
`position: absolute` 和 `position: fixed` 的区别是什么？

# 你的回答
absolute 是绝对定位，基于最近的 relative 的元素，fixed 是固定定位，基于文档。

# 面试点评
核心方向对，但 fixed“基于文档”这个说法不准确。absolute 也不是只相对于 relative，而是相对于最近的已定位祖先元素。

# 回答要点
- absolute 和 fixed 都脱离文档流
- absolute 相对于最近的已定位祖先元素定位
- 如果没有已定位祖先，absolute 相对于初始包含块
- fixed 通常相对于浏览器视口定位
- 页面滚动时 fixed 一般不会随普通文档流滚动

# 参考答案
`absolute` 和 `fixed` 都会脱离文档流。
`absolute` 是相对于最近的已定位祖先元素进行定位，如果没有这样的祖先，就相对于初始包含块定位。
`fixed` 通常是相对于浏览器视口定位，页面滚动时元素位置一般不会变化。
所以两者主要区别是参考系不同：`absolute` 更依赖父级定位上下文，`fixed` 更偏向固定在屏幕某个位置。

# 追问
- 什么叫“已定位祖先元素”？
- fixed 在什么特殊情况下可能不再相对于视口？
