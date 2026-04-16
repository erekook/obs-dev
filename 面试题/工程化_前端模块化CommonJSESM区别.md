# 题目
请你讲一下前端常见的模块化方案。CommonJS、ES Module 分别有什么特点？它们的核心区别是什么？

# 回答要点
- 模块化的目标：解决命名冲突、依赖管理、代码复用和维护问题。
- CommonJS 特点：
  - 通过 `require` 导入，`module.exports` / `exports` 导出
  - 通常是运行时加载
  - 更常见于 Node.js 生态
  - 值拷贝表现更接近导出结果快照
- ES Module（ESM）特点：
  - `import` / `export`
  - 静态结构，编译阶段可分析
  - 支持 Tree Shaking
  - 导出是动态绑定
- 核心区别：
  - 静态 vs 动态
  - 编译时分析 vs 运行时加载
  - 值拷贝感知 vs 引用绑定
  - 同步加载 vs 更适合异步/现代浏览器原生支持
- 面试里还可提：
  - 浏览器原生支持 ESM
  - 工程化工具会处理不同模块规范的兼容
  - 现代前端项目普遍以 ESM 为主

# 追问
- 为什么说 ESM 更利于 Tree Shaking？
- `import()` 和普通 `import` 有什么区别？
- CommonJS 和 ESM 混用时常见问题有哪些？
- 为什么浏览器更适合 ESM，而 Node 早期更偏 CommonJS？

# 参考答案
前端模块化的核心目的是把代码拆成独立文件，每个文件负责明确的功能，并通过导入导出建立依赖关系，从而避免全局变量污染，也方便维护和复用。

早期常见的模块化方案里，CommonJS 和 ES Module 最有代表性。

CommonJS 主要出现在 Node.js 生态中。它使用 `require` 来导入模块，用 `module.exports` 或 `exports` 来导出内容。它的一个典型特点是更偏运行时加载，也就是代码执行到 `require` 时才去加载对应模块。

ES Module 是 JavaScript 官方标准模块方案，使用 `import` 和 `export`。它的最大特点是静态化，也就是模块依赖关系在编译阶段就可以确定，因此更有利于构建工具做静态分析，比如 Tree Shaking。

两者最核心的区别，可以从几个维度理解。第一，CommonJS 更偏运行时加载，ESM 更偏编译时静态分析。第二，CommonJS 导出的感觉更像一个结果值，而 ESM 是一种绑定关系，也就是说导出的变量变化后，导入方感知到的是更新后的值。第三，CommonJS 在 Node 这类服务端环境里使用很自然，而 ESM 更适合现代浏览器和现代工程化体系。

现在的前端项目大多以 ESM 为主，因为现代浏览器已经支持原生模块，构建工具也更偏向围绕 ESM 生态做优化，比如代码分割、按需加载、Tree Shaking 等。

如果面试时总结一句话，可以说：CommonJS 更像早期以 Node 为核心的运行时模块系统，ES Module 是现代 JavaScript 官方标准，更适合浏览器和工程化优化。