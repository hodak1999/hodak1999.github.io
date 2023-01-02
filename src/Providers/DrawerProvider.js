import React, {createContext, useState, useContext} from "react";

const DrawerContext = createContext();
export const useDrawer = () => useContext(DrawerContext);


export default function DrawerProvider({children}) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <DrawerContext.Provider value={{isDrawerOpen,setIsDrawerOpen,toggleDrawer}}>
            {children}
        </DrawerContext.Provider>
    );
}