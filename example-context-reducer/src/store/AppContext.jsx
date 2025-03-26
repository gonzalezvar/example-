import { createContext, useContext, useReducer, useState } from "react";
import {initialState, appReducer} from "../reducer/appReducer.js"
//crear contexto
export const AppContext = createContext(null)


//crear provider

export const ContextProvider = ({ children }) => {
    const [store, dispatch] = useReducer(appReducer, initialState)


    return (
        <AppContext.Provider value={{store,dispatch}}>
            {children}
        </AppContext.Provider>
    )

}

export const useAppContext = () => useContext(AppContext)