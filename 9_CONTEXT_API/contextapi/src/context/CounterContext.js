//1 - criar context
import {createContext, useState} from 'react'

export const CounterContext = createContext();

//2- cria provider
export const CouterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(10);

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    );
}