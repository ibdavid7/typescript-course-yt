import React, { ReactElement, useMemo } from 'react'

type FibFunction = (n: number) => number;

const fib: FibFunction = (n): number => {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

type FibNumberProps = {
    fibNumber: number
}

const FibNumber = ({ fibNumber }: FibNumberProps): ReactElement => {

    const fibResultMemoized = useMemo<number>(() => fib(fibNumber), [fibNumber]);
    const fibResult = fib(fibNumber);


    return (
        <div>
            <h1>Fibonacci Number</h1>
            <h2>{fibResultMemoized}</h2>
            <h2>{fibResult}</h2>
        </div>
    )
}

export default FibNumber