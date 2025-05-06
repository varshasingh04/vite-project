import { createContext } from "react";

export const appContext = createContext()

export const appContextProvider = (props) => {

    const value ={

    }
    


    return (
        <appContext.Provider value={value}>
            {props.children}
        </appContext.Provider>
    )
}