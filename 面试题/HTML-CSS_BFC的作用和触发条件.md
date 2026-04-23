# 题目
请你讲一下 BFC（Block Formatting Context）是什么。它有哪些触发条件，常见作用有哪些？

# 回答要点
- BFC 是块级格式化上下文，可理解为独立的布局环境。
- 常见触发条件：
  - 根元素 `html`
  - `float` 不为 `none`
  - `position: absolute/fixed`
  - `overflow` 不为 `visible`
  - `display: inline-block`、`flow-root`、`table-cell`、`flex`、`grid` 等
- 常见特性/作用：
  - 内部布局相对独立
  - 能包含浮动元素，解决父元素高度塌陷
  - 可避免元素与浮动区域重叠
  - 可在一定场景下阻止 margin 合并影响扩散
- 面试里可补充：
  - BFC 不是万能布局方案，但经常能解决经典 CSS 问题
  - `overflow: hidden` 虽然常用，但可能带来裁剪副作用

# 追问
- BFC 为什么能清除浮动影响？
- `display: flow-root` 和 `overflow: hidden` 创建 BFC 有什么区别？
- BFC 和普通文档流的关系怎么理解？
- 哪些 margin 合并场景可以借助 BFC 规避？

# 参考答案
BFC，全称 Block Formatting Context，可以理解成页面里的一个独立块级布局环境。处在同一个 BFC 里的元素，会按照一套相对独立的规则进行布局，它内部的布局通常不会轻易影响到外部，外部的某些布局影响也不会直接渗透进来。

面试里常问的第一类内容是触发条件。常见触发 BFC 的方式包括：根元素 `html`、元素设置 `float`、设置 `position: absolute` 或 `fixed`、设置 `overflow` 为 `hidden/auto/scroll` 等非 `visible` 值，以及 `display: inline-block`、`flow-root`、`flex`、`grid` 等。

第二类是它的实际作用。最经典的用途之一，就是解决浮动导致的父元素高度塌陷。因为创建了 BFC 的元素在计算高度时，会把内部浮动元素考虑进去，所以父元素能被撑开。

另一个常见用途是让元素避开浮动区域，避免文字或块级元素和浮动内容发生不希望的重叠。此外，BFC 还经常用来处理 margin 合并带来的布局问题，尤其是在某些父子或兄弟块之间，希望边距影响不要继续扩散时。

很多人实际开发里会用 `overflow: hidden` 来触发 BFC，因为写起来简单，但它也可能把超出的内容裁掉，所以现在更推荐语义更清晰的 `display: flow-root`，专门表示“我要创建一个独立布局上下文”。

面试里如果总结，可以说：BFC 是独立的块级布局上下文，常见用来包裹浮动、隔离布局影响、处理浮动和边距问题；触发方式和实际用途都属于经典 CSS 高频题。