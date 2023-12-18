import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {
    FontCaptionSizeGenerator,
    FontSizeGenerator,
} from '../../styles/FontSizeGenerator';
import Atmark from '../../Logos/Atmark';
import Fade from '../../MainAnimation/Fade';
import {DisplayState} from '../../Providers/DisplayState';

export default function Contact() {
    const container = {
        position: 'absolute',
        top: '0',
        right: '0vw',
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

    const {display,displayState} = useScrollDisplay();
    return (
        // <div style={display[3].boxStyle}>
        <Fade show={displayState === DisplayState.Contact}>
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
        </Fade>
    );
}

