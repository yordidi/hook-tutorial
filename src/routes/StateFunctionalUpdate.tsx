import React, { useState } from 'react'

export default function StateFunctionalUpdate() {
    return (
        <>
            <section>
                <h2>为什么使用函数式更新？</h2>
            </section>
            
            <section>
                <Counter1  initialCount={0} />
            </section>
         
            <section>
                <Counter2 initialCount={0} />
            </section>
            <p>原理：对于第一个，函数式更新应该是按次序更新的，普通更新拿到的值是旧值。对于第二个，也是Capture Value，拿到的值旧值</p>
            <p>所以，当需要在一个函数组件调用栈里执行setCount时，就需要用到函数式更新了。</p>
        </>
    )
}

function Counter1({initialCount}: any) {
    const [count, setCount] = useState(initialCount as any);
    return (
      <>   
        <h4>1. 在一个闭包函数连续调用两次setCount</h4>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => {
          setCount((prevCount: number) => prevCount + 1); 
          setCount((prevCount: number) => prevCount + 1)}
        }>Functional Update（2 by step）</button>
        <button onClick={() => {
          setCount(count + 1); 
          setCount(count + 1)}
        }>Normal Update（only 1 by step）</button>
      </>
    );
  }

  function Counter2({initialCount}:any) {
    const [counter, setCounter] = useState(initialCount);
  
    return (
      <>
        <h4>2. 连续点击触发闭包函数，当有异步任务(setTimeout)有误差</h4>
        <p>counter {counter} </p>
        <button onClick={() => setCounter(initialCount)}>Reset</button>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          sync add（2 by twice click）
        </button>
        <button
          onClick={() => {
            setTimeout(() => setCounter(counter + 1), 1000);
          }}
        >
          async Add（only 1 by twice click）
        </button>
        <button
          onClick={() => {
            setTimeout(() => setCounter((prevCount: number) => prevCount + 1), 1000);
          }}
        >
          async Add use functional update （2 by twice click）
        </button>
      </>
    );
  };