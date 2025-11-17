"use client"; // Ensures the file is treated as a client component

import React, { createContext, useState, useContext, ReactNode, MouseEvent, KeyboardEvent } from "react";

// DrawerContextの型定義
interface DrawerContextType {
    isDrawerOpen: boolean;
    setIsDrawerOpen: (isOpen: boolean) => void;
    toggleDrawer: (event: MouseEvent | KeyboardEvent) => void;
}

// デフォルト値を設定
const DrawerContext = createContext<DrawerContextType>({
    isDrawerOpen: false,
    setIsDrawerOpen: () => {},
    toggleDrawer: () => {},
});

// DrawerContextを使用するためのカスタムフック
export const useDrawer = () => useContext(DrawerContext);

// DrawerProviderの型定義
interface DrawerProviderProps {
    children: ReactNode;
}

// DrawerProviderコンポーネント
export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (event: MouseEvent | KeyboardEvent) => {
        // キーボードイベントでタブやシフトキーが押された場合は何もしない
        console.log(event);
        if (event.type === "keydown" && (event as KeyboardEvent).key === "Tab" || (event as KeyboardEvent).key === "Shift") {
            return;
        }
        console.log('HIOHOF');
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen, toggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
};

