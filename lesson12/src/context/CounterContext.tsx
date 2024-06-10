import { ChangeEvent, ReactElement, createContext, useReducer } from "react";


const initState = { count: 0, text: '' }

type StateType = {
    count: number,
    text: string
}

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, text: action.payload ?? '' }
        default:
            throw new Error()
    }
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string,
}


const useCounterContext = (initState: StateType) => {
    const [state, dispath] = useReducer(reducer, initState);

    const increment = () => dispath({ type: REDUCER_ACTION_TYPE.INCREMENT })
    const decrement = () => dispath({ type: REDUCER_ACTION_TYPE.DECREMENT })
    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => dispath({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value })

    return { state, increment, decrement, handleTextInput }
}

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: UseCounterContextType = {
    state: initState,
    increment: () => { },
    decrement: () => { },
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => { }
}

export const CounterContext = createContext<UseCounterContextType>(initContextState);

export const CounterContextProvider = ({ children }: { children: React.ReactNode }): ReactElement => {
    return (
        <CounterContext.Provider value={useCounterContext(initState)}>
            {children}
        </CounterContext.Provider>
    )
}