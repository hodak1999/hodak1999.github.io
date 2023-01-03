import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {FontSizeGenerator,FontCaptionSizeGenerator} from '../../styles/FontSizeGenerator';
import ConnectionCircles
    from '../../Japanese/AcademicBackground/ConnectionCircles';

export default function AcademicBackground() {
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
    const textCaptionStyle = {
        color: '#25274F',
        fontWeight: 1000,
        textDecoration: "underline",
        fontSize: FontCaptionSizeGenerator(),
    };

    const {display} = useScrollDisplay();
    return (
        <div style={display[1].boxStyle}>
            <div style={container}>
                <div style={textContainer}>
                    <div style={textCaptionStyle }>
                        Education
                    </div>
                    <div style={textStyle}>
                        2011-4 : Enrollment in Kyotanabe Municipal Osumi Junior High School, Kyoto Prefecture<br/>
                        2013-9 : Transfer to International School Eindhoven (Netherlands)<br/>
                        2015-4 : Enrollment in Sagano High School<br/>
                        2018-3 : Graduation from Kyoto Prefectural Sagano High School<br/>
                        2018-4 : Enrollment in Department of Information and Computer sciences, School of Engineering Science, Osaka University<br/>
                        2022-3 : Graduation from Department of Information and Computer sciences, School of Engineering Science, Osaka University<br/>
                        2022-4 : Enrollment in Graduate School of Information Science and Technology, Osaka University
                    </div>
                </div>
            </div>
            <ConnectionCircles></ConnectionCircles>
        </div>
    );
}

