import React, { Component, useState } from 'react'

export default function TutorialUseState() {
    return (
        <>
            <section>
                <h3>useState是Capture Values（捕获值）</h3>
               
            </section>
            <TutorialUseStateComHook />
            <div style={{height: '20px'}}></div>
            <TutorialUseStateComClass />
            <p>结论：立即打印没差别，都是旧值。setTimeout打印，useState依旧是旧值，setState是最新（最终）值</p>
            <p>原理：setState是维护在一个对象上的，而useState就是一个干净的值。函数执行后重新创建state，又一个干净的值</p>
        </>
    )
}

function TutorialUseStateComHook() {
    let [count, setCount] = useState(0)
    function handleClickDealWithHook() {
        setCount(count + 1)
        console.log('立即打印useState count', count)
        setTimeout(() => {
            console.log('1 second later, useState count is', count)   // 0
        }, 1000);
    }
    return (
        
        <section>
            <h4>1. useState，严格符合Capture Values（捕获值）。在handleClick函数里setCount(0 -> 1)，立即打印count是0，setTimeout打印count也是0。没有所谓的数据驱动更新。</h4>
            <span>useState count: {count}</span>
            <span className="button" onClick={handleClickDealWithHook}>add</span>
        </section>
        
    )
}
class TutorialUseStateComClass extends Component {
    state = {
      count: 0
    };
    handleClick = () => {
            this.setState({
                count: this.state.count + 1
            })
            console.log('立即打印this.state.count', this.state.count);
            setTimeout(() => {
                console.log('1 second later, this.state.count is', this.state.count)   //1
            }, 1000)
    }

    render() {
        return (
            <section>
                <h4>2. setState。在handleClick函数里setCount(0 -> 1)，立即打印count是0，setTimeout打印count是1</h4>
                <span>state.count: {this.state.count}</span>
                <span className="button" onClick={this.handleClick}>add</span>
            </section>
        )
    }
}

