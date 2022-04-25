import { createContext, useState } from "react";

export const EmpContext = createContext();

export const EmpContextProvider =({children}) =>
{
    const [count,setCount] =useState(0);

    

    return <EmpContext.Provider >
        {children}</EmpContext.Provider>
     
} 