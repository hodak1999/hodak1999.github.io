import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {FontSizeGenerator,FontCaptionSizeGenerator} from '../../styles/FontSizeGenerator';
import MountainAnimation from './MountainAnimation';

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
                        受賞
                    </div>
                    <div style={textStyle}>
                        第25回画像の認識・理解シンポジウム(MIRU2022) MIRU学生奨励賞 (2022.7)
                    </div>
                    <div style={textCaptionStyle }>
                        国内発表
                    </div>
                    <div style={textStyle}>
                        1. <span style={myNameStyle}>河内穂高</span>, 中村友哉, 槇原靖, 八木康史, "点像分布関数設計と深度マップ正則化に基づくスナップショット空間超解像ToFセンシング," 第25回画像の認識・理解シンポジウム (MIRU2022), OL4A-1, (姫路, 口頭, 2022.7.27). 査読有り [第25回画像の認識・理解シンポジウム(MIRU2022) MIRU学生奨励賞]<br/>
                        2. <span style={myNameStyle}>河内穂高</span>, 中村友哉, 槇原靖, 八木康史, "点像分布関数設計と深度マップ正則化に基づくスナップショット空間超解像ToFセンシング," コンピュータビジョンとイメージメディア研究会, (名古屋, ポスター, 2022.5.12). 査読無し
                    </div>
                    <div style={textCaptionStyle }>
                        国際会議
                    </div>
                    <div style={textStyle}>
                        <span style={myNameStyle}>Hodaka Kawachi</span>, Tomoya Nakamura, Yasushi Makihara, and Yasushi Yagi, “Snapshot super-resolution time-of-flight imaging by PSF engineering and untrained deep neural-network prior,” 5th International Workshop on Image Sensors and Imaging Systems (IWISS2022), 5, (Hamamatsu, poster, 2022.12.12). not-reviewed
                    </div>
                </div>
            </div>
            <MountainAnimation></MountainAnimation>
        </div>
    );
}

