import React, {useState} from 'react'

const Counter = () => {
    const [count,SetCount] = useState(0);
    return (
        <div className="container">
            <div className="title">
                <h1>Counter Project</h1>
            </div>
            <h2>{count}</h2>
            <button className="increase" onClick={() => SetCount(count + 1)}>Increase</button>
            <button className="decrease" onClick={() => SetCount(count - 1)}>Decrease</button>
           <button className="reset" onClick={() => SetCount(0)}>Reset</button>
        </div>
    )
}

export default Counter
