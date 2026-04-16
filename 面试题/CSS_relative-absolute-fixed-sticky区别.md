tags: [面试题, 前端/CSS]

# 题目
`relative`、`absolute`、`fixed`、`sticky` 分别有什么特点？

# 你的回答
absolute 是相对于最近的已定位的祖先元素进行定位；relative 是相对定位，fixed 是相对于浏览器视口定位；sticky 不知道。

# 面试点评
前 3 个回答有基础，sticky 需要补上。这题属于定位体系题，适合用“是否脱离文档流 + 参考系 + 典型场景”来回答。

# 回答要点
- relative 不脱离文档流，相对自身原位置偏移
- absolute 脱离文档流，相对最近已定位祖先定位
- fixed 脱离文档流，通常相对视口定位
- sticky 可以理解为 relative 和 fixed 的结合
- sticky 滚动到阈值前像 relative，达到阈值后像 fixed

# 参考答案
`relative` 是相对定位，相对于元素原本的位置偏移，不脱离文档流。
`absolute` 是绝对定位，脱离文档流，相对于最近的已定位祖先元素定位。
`fixed` 是固定定位，脱离文档流，通常相对于浏览器视口定位，滚动时位置一般不变。
`sticky` 是粘性定位，可以理解为 `relative` 和 `fixed` 的结合，元素在达到指定滚动阈值前表现为普通定位，达到阈值后会固定在指定位置，常用于吸顶效果。

# 追问
- sticky 生效需要满足哪些条件？
- relative 为什么不脱离文档流？
