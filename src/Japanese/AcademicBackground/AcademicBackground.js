import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {
    FontCaptionSizeGenerator,
    FontSizeGenerator,
} from '../../styles/FontSizeGenerator';
import Fade from '../../MainAnimation/Fade';

export default function AcademicBackground() {
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

    const {display, displayState} = useScrollDisplay();
    return (
        // <div style={display[1].boxStyle}>
        <Fade show={displayState === 1}>
            <div style={container}>
                <div style={textContainer}>
                    <div style={textCaptionStyle}>
                        学歴
                    </div>
                    <div style={textStyle}>
                        2011-4 : 京都府京田辺市立大住中学校 入学<br/>
                        2013-9 : International School Eindhoven (オランダ) 転校<br/>
                        2015-4 : 京都府立嵯峨野高校 入学<br/>
                        2018-3 : 京都府立嵯峨野高校 卒業<br/>
                        2018-4 : 大阪大学基礎工学部情報科学科 入学<br/>
                        2022-3 : 大阪大学基礎工学部情報科学科 卒業<br/>
                        2022-4 : 大阪大学 大学院 情報科学研究科 コンピューターサイエンス専攻
                        博士前期課程 入学
                    </div>
                </div>
            </div>
        </Fade>
    );
}

