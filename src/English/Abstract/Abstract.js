import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import abstractPath from '../../Logos/abstract.png';
import {FigSizeGenerator} from '../../styles/FigSizeGenerator';
import {FontSizeGenerator} from '../../styles/FontSizeGenerator';
import Fade from '../../MainAnimation/Fade';

export default function Abstract() {
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

    const figContainer = {
        marginTop:'5vh',
        marginBottom:'2vh',
        width: FigSizeGenerator(),
    };

    const textStyle = {
        color: '#25274F',
        fontWeight:500,
        fontSize: FontSizeGenerator(),
        marginBottom: '1vh',
        marginLeft:10,
    };
    const textCaptionStyle = {
        color: '#25274F',
        fontWeight: 1000,
        textDecoration: "underline",
        fontSize: FontSizeGenerator(),
    };

    const {displayState} = useScrollDisplay();
    return (
        <Fade show={displayState === 0}>
            <div style={container}>
                <img src={abstractPath} alt={"Logo"} style={figContainer}/>
                <div style={textContainer}>
                    <div style={textCaptionStyle }>
                        Name
                    </div>
                    <div style={textStyle}>
                        Hodaka Kawachi
                    </div>
                    <div style={textCaptionStyle }>
                        Affiliation
                    </div>
                    <div style={textStyle}>
                        Master 1st of Graduate School of Information Science and Technology, Osaka University<br/>
                        Yagi lab, SANKEN, Osaka University, Japan
                    </div>
                    <div style={textCaptionStyle }>
                        Research fields
                    </div>
                    <div style={textStyle}>
                        Computer vision<br/>
                        Computational photography
                    </div>
                    <div style={textCaptionStyle }>
                        Github
                    </div>
                    <div style={{...textStyle,fontFamily: 'Times New Roman'}}>
                        <a href={"https://github.com/hodak1999"}>
                            hodak1999
                        </a>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

