import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {
    FontCaptionSizeGenerator,
    FontSizeGenerator,
} from '../../styles/FontSizeGenerator';
import Fade from '../../MainAnimation/Fade';
import {DisplayState} from '../../Providers/DisplayState';

export default function Awards() {
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
        fontWeight: 400,
        fontSize: FontSizeGenerator(),
        marginBottom: '1vh',
        marginLeft: 10,
    };

    const textCaptionStyle = {
        color: '#25274F',
        fontWeight: 1000,
        fontSize: FontCaptionSizeGenerator(),
        textDecoration: 'underline',
    };

    const Achievement = ({achievements}) =>
        <div style={textStyle}>
            {achievements.map((achievement, index) => (
                <div key={index}>
                    {index + 1}. {achievement}<br/>
                </div>
            ))}
        </div>;

    const {displayState} = useScrollDisplay();
    return (
        // <div style={display[2].boxStyle}>
        <Fade show={displayState === DisplayState.Awards}>
            <div style={container}>
                <div style={textContainer}>
                    <div style={textCaptionStyle}>
                        受賞
                    </div>

                    <Achievement achievements={[
                        '大阪大学 情報科学研究科賞 (2022.3)',
                        'The 13th Japan-Korea Workshop on Digital Holography and Information Photonics (DHIP2023) Student Presentation Award (2023.12.20)',
                        '日本学術振興会 DC1 採用内定 (2024~)',
                        '第25回画像の認識・理解シンポジウム(MIRU2022) MIRU学生奨励賞 (2022.7)',
                    ]}
                    />

                </div>
            </div>
        </Fade>
    );
}

