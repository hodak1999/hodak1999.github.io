import React from 'react';
import LanguageButton from './Language/LanguageButton';
import DrawerButton from './Drawer/DrawerButton';
import SectionTitle from './Section/SectionTitle';

export default function SectionsPage() {
    return (
        <div style={{
            zIndex: 1000,
            position: 'absolute',
            top: '5vh',
            left: "50%",
            transform: "translate(-50%,0)",
            display: 'flex',
            width: '90vw',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <SectionTitle></SectionTitle>
            <div style={{
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <LanguageButton></LanguageButton>
                <DrawerButton></DrawerButton>
            </div>
        </div>
    );
}
