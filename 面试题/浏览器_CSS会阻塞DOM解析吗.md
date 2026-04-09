tags: [面试题, 前端/浏览器]

# 题目
CSS 会阻塞 DOM 解析吗？为什么？

# 你的回答
不会，因为浏览器渲染页面是 DOM 和 CSSOM 一起生成 Render Tree，DOM 和 CSSOM 可以并行。

# 面试点评
基础方向是对的，但还不够完整。CSS 一般不会像普通 script 那样直接阻塞 DOM 解析，但它可能阻塞后续某些 JS 执行，而 JS 又可能阻塞 DOM 解析，所以 CSS 在某些场景下会产生间接影响。

# 回答要点
- CSS 不会像普通 script 一样直接阻塞 DOM 解析
- 浏览器可以一边解析 HTML 构建 DOM，一边下载和解析 CSS
- CSS 会阻塞渲染
- CSS 可能阻塞某些 JS 执行
- JS 又可能阻塞 DOM 解析，所以 CSS 可能间接影响解析进度

# 参考答案
CSS 一般不会直接阻塞 DOM 解析。浏览器可以一边解析 HTML 构建 DOM，一边下载和解析 CSS。
但是浏览器在执行某些 JavaScript 之前，通常需要确保相关 CSS 已经加载完成，因为 JavaScript 可能会读取元素样式。也就是说，CSS 虽然不直接阻塞 DOM 解析，但可能会阻塞 JS 执行，而 JS 又可能阻塞 DOM 解析，这样就形成了间接影响。
所以更准确地说，CSS 不直接阻塞 DOM 解析，但可能间接影响 DOM 解析的进度。

# 追问
- 为什么 CSS 可能会阻塞 JS 执行？
- 普通 script、defer、async 在阻塞关系上有什么不同？
