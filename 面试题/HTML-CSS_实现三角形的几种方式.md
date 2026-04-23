# 题目
请你讲一下前端里如何用 CSS 实现一个三角形。常见做法有哪些，各自适合什么场景？

# 回答要点
- 最经典方案：利用 border。
- border 三角形原理：
  - 元素宽高设为 0
  - 四条边框相交形成四个三角区域
  - 通过设置某一边颜色、其他边透明得到三角形
- 其他实现方式：
  - `clip-path`
  - `transform: rotate`
  - SVG
  - 伪元素配合边框/背景
- 场景选择：
  - 小箭头、提示气泡尾巴常用 border 方案
  - 复杂图形、可控性更强时用 SVG / clip-path
- 面试里可补充：
  - border 方案简单高效，但不容易做圆角和复杂边
  - SVG 在精细控制和缩放上更自然

# 追问
- 为什么 `width: 0; height: 0;` 配合 border 能形成三角形？
- 如果想做带边框的三角形，怎么实现？
- `clip-path` 相比 border 方案有什么优缺点？
- 三角形箭头在 tooltip 组件里通常如何封装？

# 参考答案
CSS 实现三角形，最经典也是最常见的方法是利用 `border`。

原理是这样的：当一个元素的 `width` 和 `height` 都设为 0 时，它本身不再有可见内容区域，剩下显示出来的只有四条边框。四条边框在视觉上会形成四个三角形。如果只保留其中一条边的颜色，把其他三条边设为透明，就能得到一个方向的三角形。

比如向上的三角形可以这样写：

```css
.triangle {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid red;
}
```

这种方式特别适合做下拉框小箭头、tooltip 的小尾巴、聊天气泡角标这类简单装饰。

除了 border，还有其他实现方式。比如 `clip-path: polygon(...)` 可以直接裁剪出三角形；`transform` 配合旋转和溢出隐藏也能间接实现；如果图形更复杂或者要求更高，SVG 通常会更灵活。

不同方案的取舍主要看需求。如果只是一个简单小箭头，border 方案最轻量；如果需要更复杂的控制，比如圆角、渐变、描边、动画，SVG 或 `clip-path` 往往更合适。

面试里如果总结，可以说：CSS 三角形最常见是 border 技巧，原理是利用零宽高元素的边框相交形成三角区域；简单装饰用 border，复杂图形更适合 SVG 或 `clip-path`。