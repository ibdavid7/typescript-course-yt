import React, { useState } from 'react'

type CounterProps = {
    setCounter: React.Dispatch<React.SetStateAction<number>>,
    children: React.ReactNode
}

const CounterControlled = ({ setCounter, children }: CounterProps) => {


    return (
        <div>
            <h2>
                {children}
            </h2>
            <div>
                <button onClick={() => setCounter((prev: number) => prev + 1)}>Increment</button>
                <button onClick={() => setCounter((prev: number) => prev - 1)}>Decrement</button>
            </div>
        </div>
    )
}

export default CounterControlled