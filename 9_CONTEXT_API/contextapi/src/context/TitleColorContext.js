import {createContext, useReducer} from 'react';

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    switch(action.type){
        case "BLUE":
            return {...state, color: "blue"}
        case "GREEN":
            return {...state, color: "breen"}
        default:
            return state;
    }
};

export const TitleColorContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleColorReducer, {color : 'red'});

    console.log("Title color context: ", state)
    return <TitleColorContext.Provider value={{...state, dispatch}}>{children}</TitleColorContext.Provider>
};