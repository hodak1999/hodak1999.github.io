import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {FontSizeGenerator,FontCaptionSizeGenerator} from '../../styles/FontSizeGenerator';
import Fade from '../../MainAnimation/Fade';


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

    const {displayState} = useScrollDisplay();
    return (
        <Fade show={displayState === 2}>
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
                    <div style={textCaptionStyle }>
                        Journal papers
                    </div>
                    <div style={textStyle}>
                        <span style={myNameStyle}>Hodaka Kawachi</span>, Tomoya Nakamura,　Kazuya Iwata, Yasushi Makihara, and Yasushi Yagi, “Snapshot super-resolution indirect time-of-flight camera using a grating-based subpixel encoder and depth-regularizing compressive reconstruction," Optics Continuum, Vol. 2, No. 6, pp. 1368-1383 (2023). [<a href={"https://doi.org/10.1364/OPTCON.487545"}>link</a>] <a href={"/TopDownload.pdf"} target="_blank" rel="noopener noreferrer">Became one of Top downloads in May.</a><br/>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

