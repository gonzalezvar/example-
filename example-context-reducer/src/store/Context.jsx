import { createContext } from "react"


export const MyContext = createContext(null)


export const ContextProvider = ({children}) => {
    const contextValues = {
        count: 0,
        inputValue: "",
        email:"",
        password:"",
        list: ["valor 1"]
    }

    return(
        <MyContext.Provider value={contextValues}>
            {children}
        </MyContext.Provider>
    )
}