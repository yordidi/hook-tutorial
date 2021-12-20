*2021.12.16*

[Hooks API Reference](https://zh-hans.reactjs.org/docs/hooks-reference.html)

### useState
**useState和setState的区别**
1. Capture Values独立状态
* 每一次渲染都有它自己的 Props 和 State
* 每一次渲染都有它自己的事件处理函数
* 当点击更新状态的时候，函数组件都会重新被调用，那么每次渲染都是独立的，取到的值不会受后面操作的影响

[How to Style Your React App – 5 Ways to Write CSS in 2021](https://www.freecodecamp.org/news/how-to-style-react-apps-with-css/)

访问 http://localhost:3001/useState 观察打印结果，`useState`每次数据更新都是独立的，`setState`则不是。
**需要注意的点**
`useReducer`处理多个

**Functional updates**
如果使用先前的state计算新state，则可以Functional updates
**但是什么情况下会用Functional updates呢？？**
[Why React useState with functional update form is needed?](https://stackoverflow.com/questions/57828368/why-react-usestate-with-functional-update-form-is-needed)
当需要在一个函数组件调用栈里执行setCount时，就需要用到函数式更新了。
**惰性初始 state**
```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});

```
**跳过 state 更新**
[Object.is 比较算法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#description)主要兼容处理`===`不能处理的情况，处理了NaN比较的情况`Object.is(NaN, 0/0);Object.is(NaN, Number.NaN)`和+0、-0的比较`Object.is(+0, -0)`。对了，是浅比较

### useEffect
[[译]使用React Hooks请求数据](https://zhuanlan.zhihu.com/p/61511310)
* 在**每轮渲染完成后执行**
* 与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect **不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。**
* 你可以把 effect 看作从 React 的**纯函数式世界通往命令式世界**的逃生通道
* 虽然 useEffect 会在浏览器绘制后延迟执行，但会**保证在任何新的渲染前执行。在开始新的更新前，React 总会先清除上一轮渲染的 effect。**

    * [解释: 为什么每次更新的时候都要运行 Effect](https://zh-hans.reactjs.org/docs/hooks-effect.html#explanation-why-effects-run-on-each-update)
        * 减少忘记正确处理`componentDidUpdate`带来的bug
        * 可以通过传入依赖数组，减少useEffect执行次数，优化性能。

* **使关注点分离**。Hook 允许我们按照代码的用途分离他们， 而不是像生命周期函数那样
* 用来处理**副作用**

> 副作用在提交阶段调用，因为在渲染阶段有可能执行多次，造成bug。提交阶段是指`componentDidUpdate``componentDidMount``useEffect`。

**性能优化：[我可以在更新时跳过 effect 吗？](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies)之effect 的条件执行**

* 请确保数组中包含了**所有外部作用域中会发生变化且在 effect 中使用的变量**
* 如果想执行**只运行一次的 effect（仅在组件挂载和卸载时执行）**，可以传递一个空数组（[]）作为第二个参数
* 通常你会想要**在 effect 内部 去声明它所需要的函数**，这样就能容易的看出那个 effect 依赖了组件作用域中的哪些值
* 我们推荐启用 `eslint-plugin-react-hooks` 中的 `exhaustive-deps` 规则。此规则会在添加错误依赖时发出警告并给出修复建议。
* 如果出于某些原因你 无法 把一个函数移动到 effect 内部，你可以 **把函数加入 effect 的依赖但 把它的定义包裹 进 `useCallback Hook`**。这就确保了它不随渲染而改变，除非 它自身 的依赖发生了改变

**如果我的 effect 的依赖频繁变化，我该怎么办？**
* 例如setCount，**用函数式更新**，可以不依赖当前state
* useReducer ???
* 或者像`useRef`一样编程this上的一个属性，这样可以不依赖任何变量

**useLayoutEffect**
**useCallback**
**useMemo**
**uesReducer**

### useCallback

