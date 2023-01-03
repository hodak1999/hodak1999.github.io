import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {FontSizeGenerator,FontCaptionSizeGenerator} from '../../styles/FontSizeGenerator';
import Atmark from '../../Logos/Atmark';

export default function Contact() {
    const container = {
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const textContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        marginBottom: '5vh',
        marginLeft: '5vw',
        marginRight: '5vw',
    };

    const textStyle = {
        color: '#25274F',
        fontWeight: 500,
        fontSize: FontSizeGenerator(),
        marginBottom: '1vh',
        marginLeft: 10,
    };
    const textCaptionStyle = {
        color: '#25274F',
        fontWeight: 1000,
        textDecoration: 'underline',
        fontSize: FontCaptionSizeGenerator(),
    };
    const email = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#25274F',
        fontWeight: 500,
        fontSize: FontSizeGenerator(),
        marginLeft: 10,
    };

    const {display} = useScrollDisplay();
    return (
        <div style={display[3].boxStyle}>
            <div style={container}>
                <div style={textContainer}>
                    <div style={textCaptionStyle}>
                        住所
                    </div>
                    <div style={textStyle}>
                        大阪府茨木市美穂ヶ丘8-1 大阪大学 産業科学研究所 F-588
                    </div>
                    <div style={textCaptionStyle}>
                        電話番号
                    </div>
                    <div style={textStyle}>
                        06-6879-8422
                    </div>
                    <div style={textCaptionStyle}>
                        E-mail
                    </div>
                    <div style={email}>
                        <div>kawachi</div>
                        <Atmark size={FontSizeGenerator()}></Atmark>
                        <div>am.sanken.osaka-u.ac.jp</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

