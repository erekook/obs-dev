tags: [面试题, 前端/CSS]

# 题目
`display: none` 和 `visibility: hidden` 有什么区别？

# 你的回答
`display: none` 会让元素消失在 DOM 中，`visibility: hidden` 还在 DOM 中，只是隐藏了。

# 面试点评
差一点。`display: none` 不会让元素从 DOM 中消失，元素仍然存在于 DOM 树里，只是不参与布局和渲染。

# 回答要点
- 两者都能隐藏元素
- display none 不参与布局和渲染，不占空间
- visibility hidden 仍占据布局空间，只是不可见
- display none 不会让元素从 DOM 树删除

# 参考答案
`display: none` 和 `visibility: hidden` 都可以隐藏元素，但区别在于是否保留布局空间。
`display: none` 会让元素不参与布局和渲染，不占据页面空间，但元素仍然存在于 DOM 中。
`visibility: hidden` 会让元素不可见，但仍然保留原来的布局空间。
所以一个是“隐藏并移出布局”，一个是“隐藏但保留占位”。

# 追问
- 这两种方式对性能和布局的影响有什么不同？
- 它们和 opacity: 0 有什么区别？
