import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {
    FontSizeGenerator,
    FontCaptionSizeGenerator,
} from '../../styles/FontSizeGenerator';

import Atmark from '../../Logos/Atmark';

export default function Contact() {
    const container = {
        position: 'absolute',
        top: '0',
        right: '0',
        display: 'flex',
        height: '100vh',
        width: '60vw',
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
                        Address
                    </div>
                    <div style={textStyle}>
                        #F-588, Department of Intelligent Media, SANKEN, Osaka
                        University
                        8-1 Mihogaoka, Ibaraki, Osaka, 567-0047, Japan
                    </div>
                    <div style={textCaptionStyle}>
                        Telephone
                    </div>
                    <div style={textStyle}>
                        +81-6-6879-8422
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
