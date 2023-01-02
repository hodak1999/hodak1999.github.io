import React from "react";
import LanguageButton from './Language/LanguageButton';
import DrawerButton from './Drawer/DrawerButton';

export default function SectionsPage() {
    return (
        <div style={{
            zIndex: 1000,
            position: "absolute",
            top: "5vh",
            right: "5vw",
            display:"flex",
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
        }}>
            <LanguageButton></LanguageButton>
            <DrawerButton></DrawerButton>
        </div>
    )
}
