import React from 'react';
import {useLanguage} from '../../Providers/LanguageProvider';
import {FontSizeGenerator} from './FontSizeGenerator';

export default function LanguageButton() {
    const {isJapanese, setIsJapanese} = useLanguage();
    const BorderStyle = {
        fontSize: FontSizeGenerator(),
        fontWeight: '100',
        margin: 5,
        fontFamily: ['Times New Roman', 'serif'],
    };
    const JPStyle = {
        fontSize: FontSizeGenerator(),
        fontWeight: isJapanese ? '1000' : '100',
        cursor: isJapanese ? undefined : 'pointer',
        textDecoration: isJapanese ? 'underline' : undefined,
        fontFamily: ['Times New Roman', 'serif'],
    };
    const EnStyle = {
        fontSize: FontSizeGenerator(),
        fontWeight: !isJapanese ? '1000' : '100',
        cursor: !isJapanese ? undefined : 'pointer',
        textDecoration: !isJapanese ? 'underline' : undefined,
        fontFamily: ['Times New Roman', 'serif'],
    };
    const onPressJP = () => {
        if (!isJapanese) {
            setIsJapanese(true);
        }
    };
    const onPressEn = () => {
        if (isJapanese) {
            setIsJapanese(false);
        }
    };
    return (
        <div style={{
            zIndex: 1003,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }}>
            <div style={JPStyle} onClick={onPressJP}>JP</div>
            <div style={BorderStyle}>|</div>
            <div style={EnStyle} onClick={onPressEn}>En</div>
        </div>
    );
}
