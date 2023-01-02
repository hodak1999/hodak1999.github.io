import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {FontCaptionSizeGenerator, FontSizeGenerator} from './FontSizeGenerator';

export default function ResearchBackground() {
    const container = {
        position: 'absolute',
        top:'0',
        left:'0',
        display:'flex',
        height:'100vh',
        width:'100vw',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const textContainer = {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        marginBottom:'5vh',
        marginLeft:'5vw',
        marginRight:'5vw',
    };

    const textStyle = {
        color: '#25274F',
        fontWeight:500,
        fontSize: FontSizeGenerator(),
        marginBottom: '1vh',
        marginLeft:10,
    };

    const myNameStyle = {
        fontWeight:1000,
        textDecoration: "underline",
    };

    const textCaptionStyle = {
        color: '#25274F',
        fontWeight: 1000,
        fontSize: FontCaptionSizeGenerator(),
        textDecoration: "underline",
    };

    const {display} = useScrollDisplay();
    return (
        <div style={display[2].boxStyle}>
            <div style={container}>
                <div style={textContainer}>
                    <div style={textCaptionStyle }>
                        Awards
                    </div>
                    <div style={textStyle}>
                        The 25th Meeting on Image Recognition and Understanding(MIRU2022) MIRU学生奨励賞 (2022.7)
                    </div>
                    <div style={textCaptionStyle }>
                        Conferences
                    </div>
                    <div style={textStyle}>
                        <span style={myNameStyle}>Hodaka Kawachi</span>, Tomoya Nakamura, Yasushi Makihara, and Yasushi Yagi, “Snapshot super-resolution time-of-flight imaging by PSF engineering and untrained deep neural-network prior,” 5th International Workshop on Image Sensors and Imaging Systems (IWISS2022), 5, (Hamamatsu, poster, 2022.12.12). not-reviewed
                    </div>
                </div>
            </div>
        </div>
    );
}

