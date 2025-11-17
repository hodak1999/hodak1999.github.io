"use client"; // Ensures the file is treated as a client component

import React, {createContext, useState, ReactNode, useContext} from "react";

// Contextの作成
export const LoadingContext = createContext({
    isLoading: true,
    endLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

// Providerコンポーネント
export const LoadingProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const endLoading = () => setIsLoading(false);

    return (
        <LoadingContext.Provider value={{isLoading, endLoading}}>
            {children}
        </LoadingContext.Provider>
    );
};