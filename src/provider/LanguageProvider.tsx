"use client"; // Ensures the file is treated as a client component

import React, {createContext, useState, ReactNode, useContext} from "react";
import {LANGUAGES} from "@/Schema";


// Contextの型定義
interface LanguageContextType {
    language: LANGUAGES;
    setLanguage: (language: LANGUAGES) => void;
}

// Contextの作成
export const LanguageContext = createContext<LanguageContextType>({
    language: LANGUAGES.JP,
    setLanguage: () => {}, // 空の関数
});

export const useLanguage = () => useContext(LanguageContext);

// Providerコンポーネント
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [language, setLanguage] = useState(LANGUAGES.JP);

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};