import React, {createContext, useState, useContext} from "react";

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);


export default function LanguageProvider({children}) {
    const [isJapanese, setIsJapanese] = useState(true);

    return (
        <LanguageContext.Provider value={{isJapanese, setIsJapanese}}>
            {children}
        </LanguageContext.Provider>
    );
}