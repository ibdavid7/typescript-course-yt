import React, { useReducer } from 'react'

type ChildrenType = {
    children: (value: number) => React.ReactNode
}

const initState = { count: 0, text: '' }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, text: action.payload ?? ''}
        default:
            throw new Error()
    }
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string,
}

const CounterWithChildren = ({ children }: ChildrenType) => {

    const [state, dispath] = useReducer(reducer, initState);

    const increment = () => dispath({ type: REDUCER_ACTION_TYPE.INCREMENT })
    const decrement = () => dispath({ type: REDUCER_ACTION_TYPE.DECREMENT })
    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => dispath({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value })


    return (
        <div>
            <h1>{children(state.count)}</h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>

            <input type='text' onChange={handleTextInput} />
            <h2>{state.text}</h2>

        </div>
    )
}

export default CounterWithChildren