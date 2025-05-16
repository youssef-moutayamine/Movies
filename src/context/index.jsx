import { createContext, useContext, useState } from "react";

const MyContext = createContext()


const MyProvider = ({ children }) => {

    const name = "mehdi"


    const sayHi = () => {
        alert("hi")
    }
    const data = {name,sayHi}

    return (
        <>
            <MyContext.Provider value={data}>
                {children}
            </MyContext.Provider>
        </>
    )
}

const useAppContext = () => useContext(MyContext)


export{ MyProvider ,  useAppContext}