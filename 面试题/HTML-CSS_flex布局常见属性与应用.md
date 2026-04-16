tags: [面试题, 前端/CSS]

# 题目
请你讲一下 Flex 布局。常见的容器属性和项目属性有哪些？在实际开发中你最常用它解决什么问题？

# 回答要点
- Flex 是一维布局模型，适合处理行或列方向上的排列问题。
- 需要先给父元素设置 `display: flex`。
- 容器常见属性：
  - `flex-direction`
  - `justify-content`
  - `align-items`
  - `align-content`
  - `flex-wrap`
  - `gap`
- 项目常见属性：
  - `flex-grow`
  - `flex-shrink`
  - `flex-basis`
  - `flex`
  - `align-self`
  - `order`
- `flex: 1` 本质上常表示项目可分配剩余空间，但要结合具体简写规则理解。
- 常见应用：
  - 水平垂直居中
  - 左右布局
  - 等宽分栏
  - 列表自适应分配空间
  - 按钮组、导航栏、卡片排列
- 注意点：
  - 主轴和交叉轴要区分清楚
  - `justify-content` 管主轴，`align-items` 管交叉轴
  - 多行布局时 `align-content` 才会生效

# 追问
- `flex: 1` 和 `flex: auto`、`flex: none` 的区别是什么？
- 为什么子元素有时候会被压缩得比预期更小？
- `min-width: 0` 在 Flex 布局里为什么经常有用？
- Flex 和 Grid 分别更适合什么场景？

# 参考答案
Flex 是一种一维布局方案，主要用于处理元素在一条主轴上的排列和空间分配问题。只要给父元素设置 `display: flex`，它的直接子元素就会变成 flex item，参与 Flex 布局。

Flex 最重要的概念是主轴和交叉轴。主轴方向由 `flex-direction` 决定，默认是水平方向的 `row`。理解了主轴和交叉轴，很多属性就清楚了，比如 `justify-content` 控制主轴对齐方式，`align-items` 控制交叉轴对齐方式。

常见的容器属性包括：`flex-direction` 控制排列方向，`justify-content` 控制主轴分布，`align-items` 控制交叉轴对齐，`flex-wrap` 控制是否换行，`align-content` 控制多行内容在交叉轴上的分布，`gap` 用于设置间距。

项目属性里比较常用的是 `flex-grow`、`flex-shrink`、`flex-basis` 和它们的简写 `flex`。比如 `flex: 1` 常见于左右布局或等分布局，表示当前项目可以增长去占据剩余空间。`order` 可以调整项目顺序，`align-self` 可以单独覆盖某一个项目的对齐方式。

实际开发中，Flex 最常见的用途包括：水平垂直居中、左侧固定右侧自适应、导航栏分布、按钮组排列、卡片区块横向排布等。它最大的优点是写法直观、适合处理一维排列问题。

如果要补充一个常见坑，就是有些 Flex 子元素默认会参与压缩，所以内容可能被挤压，这时候经常需要配合 `min-width: 0` 或调整 `flex-shrink`。面试时能提到这些细节，会显得你不是只会背概念，而是真的用过。