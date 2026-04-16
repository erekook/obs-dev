# 题目
请你讲一下 Babel 在前端工程化里主要做了什么。它和 TypeScript、Webpack 分别是什么关系？

# 回答要点
- Babel 是 JavaScript 编译工具，主要负责代码转换。
- 核心作用：
  - 语法降级，把新语法转成旧环境可运行的语法
  - 按需注入 polyfill 方案（结合配置）
  - 支持 JSX、部分实验性语法编译
- Babel 的基本处理流程：
  - 解析源码生成 AST
  - 遍历和转换 AST
  - 生成新的代码
- 常见概念：
  - `preset`
  - `plugin`
  - `@babel/preset-env`
- 和 TypeScript 的关系：
  - Babel 可以去掉 TS 语法并转 JS
  - 但 Babel 不负责完整类型检查
  - TS 编译器既能做类型检查，也能做代码编译
- 和 Webpack 的关系：
  - Webpack 负责模块打包与构建流程
  - Babel 常作为其中一步代码转换工具接入，比如通过 `babel-loader`
- 面试里要能区分“转译”“打包”“类型检查”这几个概念。

# 追问
- Babel 和 polyfill 的关系是什么？为什么语法转换不能完全替代 polyfill？
- Babel 插件为什么基于 AST 工作？
- `preset-env` 是如何根据目标环境决定转换策略的？
- 既然 TypeScript 能编译代码，为什么很多项目仍然配 Babel？

# 参考答案
Babel 本质上是一个 JavaScript 编译器，它最核心的任务是做“代码转换”。前端开发里，我们经常写 ES6+、JSX、TypeScript 这类现代语法，但浏览器或运行环境未必都支持，所以 Babel 会把这些代码转换成目标环境更容易运行的形式。

Babel 的工作流程通常可以概括为三步。第一步是把源码解析成 AST，也就是抽象语法树；第二步是在 AST 上做遍历和转换；第三步再把转换后的 AST 重新生成 JavaScript 代码。这也是为什么 Babel 的插件能力很强，因为很多语法层面的处理都可以通过 AST 变换实现。

Babel 最常见的用途是语法降级。比如把箭头函数、class、解构赋值等新语法转换成旧浏览器能运行的形式。除此之外，它也常用于编译 JSX，以及在一定程度上处理 TypeScript 语法。

但要注意，Babel 做的是“语法转换”，不是完整的类型检查，也不是完整的运行时 API 兼容。比如 `Promise`、`Map` 这类新 API，如果旧环境本身没有，只做语法转换是不够的，还需要 polyfill。

它和 TypeScript、Webpack 经常一起出现，但职责不同。TypeScript 更偏“类型系统 + 编译”，Webpack 更偏“模块打包和构建流程管理”，而 Babel 更偏“代码语法转换”。在实际项目里，Webpack 可能通过 `babel-loader` 调用 Babel，把 Babel 作为整个打包流程中的一个环节。

所以一句话总结：Babel 解决的是“代码怎么从现代写法变成目标环境能运行的写法”，Webpack 解决的是“项目资源怎么组织和打包”，TypeScript 解决的是“代码怎么获得类型约束和更强的开发体验”。