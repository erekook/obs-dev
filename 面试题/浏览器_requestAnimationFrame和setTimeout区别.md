# 题目
请你讲一下 `requestAnimationFrame` 和 `setTimeout` 的区别。为什么做动画时通常更推荐 `requestAnimationFrame`？

# 回答要点
- 两者都能延后执行代码，但调度依据不同。
- `setTimeout`：
  - 按设定时间延后执行
  - 不与浏览器绘制节奏自动对齐
  - 时间不保证绝对精确
- `requestAnimationFrame`：
  - 由浏览器在下一次重绘前调用
  - 更贴合屏幕刷新节奏
  - 页面隐藏时通常会自动降频或暂停
- 为什么动画更适合 `requestAnimationFrame`：
  - 更平滑
  - 减少掉帧和无效计算
  - 更节能
- 面试里可补充：
  - `setTimeout(fn, 16)` 并不等于稳定 60fps
  - 高频视觉更新和普通延时任务应区别对待

# 追问
- 为什么 `requestAnimationFrame` 更容易和浏览器渲染同步？
- 页面切到后台时，两者行为有什么区别？
- 如果是非视觉任务，为什么不一定要用 `requestAnimationFrame`？
- `requestAnimationFrame` 回调里的时间戳参数有什么用？

# 参考答案
`requestAnimationFrame` 和 `setTimeout` 都可以让代码延后执行，但它们的设计目标不一样。

`setTimeout` 更像一个通用定时器。你告诉浏览器“过多少毫秒后执行一下”，浏览器会在合适时机把这个回调放进任务队列。不过它并不会自动和屏幕刷新节奏对齐，而且设定的时间也不是绝对精确的，只是“最少等这么久”。

`requestAnimationFrame` 则是专门为视觉更新设计的。它会在浏览器下一次重绘之前调用你的回调，也就是说它天然和页面渲染节奏更同步。

这也是为什么动画通常更推荐 `requestAnimationFrame`。因为动画本质上是“不断更新页面，然后配合浏览器一帧一帧地画出来”。如果你用 `setTimeout`，可能出现回调执行时机和浏览器绘制节奏对不上，导致动画不够平滑、掉帧或者做了无效计算。

而 `requestAnimationFrame` 更容易做到“在该画的时候再更新”，浏览器也能更好地做优化。比如页面切到后台时，它通常会自动降频甚至暂停，避免继续白白消耗资源；而 `setTimeout` 则更偏一般性定时任务，不是专门为渲染优化设计的。

所以如果你的任务是做位移、滚动跟随、逐帧动画、进度更新这类视觉变化，通常优先考虑 `requestAnimationFrame`；如果只是普通延时逻辑、轮询、超时控制，那 `setTimeout` 仍然更合适。

面试里可以总结成一句话：`setTimeout` 是通用定时工具，`requestAnimationFrame` 是和浏览器重绘节奏同步的动画调度工具，所以动画场景下后者通常更平滑、更省资源。