import React, {createContext, useState, useContext} from "react";

const BeginningContext = createContext();
export const useBeginning = () => useContext(BeginningContext);


export default function BeginningProvider({children}) {
    const [isBeginning, setIsBeginning] = useState(true);
    const endBeginning = () => {
        setIsBeginning(false)
    }
    return (
        <BeginningContext.Provider value={{isBeginning,endBeginning}}>
            {children}
        </BeginningContext.Provider>
    );
}