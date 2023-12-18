import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {FontSizeGenerator,FontCaptionSizeGenerator} from '../../styles/FontSizeGenerator';
import Fade from '../../MainAnimation/Fade';
import {DisplayState} from '../../Providers/DisplayState';

export default function Conferences() {
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
        fontWeight:400,
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

    const HighlightNamesWithNumbering = ({ achievements}) => {
        const names = ["河内穂高", "Hodaka Kawachi"];

        // テキストを名前で分割し、名前を含むセグメントにスタイルを適用
        const splitText = (text, name) => {
            return text.split(name).reduce((acc, part, index, array) => {
                if (index < array.length - 1) {
                    acc = [...acc, part, <span key={name + index} style={myNameStyle}>{name}</span>];
                } else {
                    acc = [...acc, part];
                }
                return acc;
            }, []);
        };

        // 成果物のリストをレンダリング
        return (
            <div>
                {achievements.map((achievement, index) => {
                    let modifiedText = [achievement];
                    names.forEach(name => {
                        modifiedText = modifiedText.reduce((acc, part) => {
                            return typeof part === "string" ? [...acc, ...splitText(part, name)] : [...acc, part];
                        }, []);
                    });

                    return (
                        <div key={index} style={textStyle}>
                            {index + 1}. {modifiedText}
                        </div>
                    );
                })}
            </div>
        );
    };

    const {displayState} = useScrollDisplay();
    return (
        // <div style={display[2].boxStyle}>
        <Fade show={displayState === DisplayState.Conferences}>
            <div style={container}>
                <div style={textContainer}>
                    <div style={textCaptionStyle }>
                        国内発表
                    </div>
                    <HighlightNamesWithNumbering achievements={
                        [
                            `河内穂高, 中村友哉, 槇原靖, 八木康史, "点像分布関数設計と深度マップ正則化に基づくスナップショット空間超解像ToFセンシング," 第25回画像の認識・理解シンポジウム (MIRU2022), OL4A-1, (姫路, 口頭, 2022.7.27). 評価有り [第25回画像の認識・理解シンポジウム(MIRU2022) MIRU学生奨励賞]`,
                            `河内穂高, 中村友哉, 槇原靖, 八木康史, "点像分布関数設計と深度マップ正則化に基づくスナップショット空間超解像ToFセンシング," コンピュータビジョンとイメージメディア研究会, (名古屋, ポスター, 2022.5.12). 査読無し`,
                        ]
                        }
                    />

                    <div style={textCaptionStyle }>
                        国際会議
                    </div>
                    <HighlightNamesWithNumbering achievements={[
                        `Hodaka Kawachi, Tomoya Nakamura, Kazuya Iwata, Yasushi Makihara, and Yasushi Yagi, “Depth Regularization and Diffraction Grating-Based Super-Resolution in Indirect Time-of-Flight Imaging,” The 13th Japan-Korea Workshop on Digital Holography and Information Photonics. (DHIP2023), (Beppu, poster, 2022.12.12). not-reviewed`,
                        `Hodaka Kawachi, Tomoya Nakamura, Kazuya Iwata, Yasushi Makihara, and Yasushi Yagi, “Snapshot super-resolution depth measurement using depth regularization and a diffraction grating,” OSK-OPTICA-OSJ Joint Symposia on Optics 2023, (Jeju, Korea, oral, 2023.8.30). not-reviewed`,
                        `Hodaka Kawachi, Tomoya Nakamura, Yasushi Makihara, and Yasushi Yagi, “Snapshot super-resolution time-of-flight imaging by PSF engineering and untrained deep neural-network prior,” 5th International Workshop on Image Sensors and Imaging Systems (IWISS2022), 5, (Hamamatsu, poster, 2022.12.12). not-reviewed`,
                    ]}
                    />
                </div>
            </div>
        </Fade>
    );
}

