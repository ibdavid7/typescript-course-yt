import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <h1>Count is {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>


        </div>
    )
}

export default Counter