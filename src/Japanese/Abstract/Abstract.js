import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {FontSizeGenerator} from '../../styles/FontSizeGenerator';
import abstractPath from '../../Logos/abstract.png';
import {FigSizeGenerator} from '../../styles/FigSizeGenerator';
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

    const {display,displayState} = useScrollDisplay();
    return (
        // <div style={display[0].boxStyle}>
        <Fade show={displayState === 0}>
            <div style={container}>
                <img src={abstractPath} alt={"Logo"} style={figContainer}/>
                <div style={textContainer}>
                    <div style={textCaptionStyle }>
                        名前
                    </div>
                    <div style={textStyle}>
                        河内穂高 (かわち ほだか)
                    </div>
                    <div style={textCaptionStyle }>
                        所属
                    </div>
                    <div style={textStyle}>
                        大阪大学 大学院 情報科学研究科<br/>
                        コンピュータサイエンス専攻 博士前期課程<br/>
                        産業科学研究所 八木研究室
                    </div>
                    <div style={textCaptionStyle }>
                        研究テーマ
                    </div>
                    <div style={textStyle}>
                        コンピュータビジョン<br/>
                        コンピュテーショナルフォトグラフィ
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

