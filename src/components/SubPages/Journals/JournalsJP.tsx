import React, {JSX} from 'react';
import {usePage} from '@/provider/PageProvider';
import styles from './JournalsJP.module.css';
import {LANGUAGES, PAGE_STATE} from "@/Schema";
import Fade from "@/components/util/Fade";
import {useLanguage} from "@/provider/LanguageProvider";

interface HighlightNamesWithNumberingProps {
    achievements: string[];
}

const HighlightNamesWithNumbering: React.FC<HighlightNamesWithNumberingProps> = ({achievements}) => {
    const names = ["河内穂高", "Hodaka Kawachi"];

    // テキストを名前で分割し、名前を含むセグメントにスタイルを適用
    const splitText = (text: string, name: string): (string | JSX.Element)[] => {
        return text.split(name).reduce<(string | JSX.Element)[]>((acc, part, index, array) => {
            if (index < array.length - 1) {
                acc.push(part, <span key={`${name}-${index}`} className={styles.myNameStyle}>{name}</span>);
            } else {
                acc.push(part);
            }
            return acc;
        }, []);
    };

    // 成果物のリストをレンダリング
    return (
        <div>
            {achievements.map((achievement, index) => {
                let modifiedText: (string | JSX.Element)[] = [achievement];
                names.forEach((name) => {
                    modifiedText = modifiedText.reduce<(string | JSX.Element)[]>((acc, part) => {
                        if (typeof part === "string") {
                            return [...acc, ...splitText(part, name)];
                        } else {
                            return [...acc, part];
                        }
                    }, []);
                });

                return (
                    <div key={index} className={styles.textStyle}>
                        {index + 1}. {modifiedText}
                    </div>
                );
            })}
        </div>
    );
};

const JournalsJP: React.FC = () => {
    const {pageNum} = usePage();
    const {language} = useLanguage();
    return (
        <Fade show={(pageNum === PAGE_STATE.JOURNALS) && (language===LANGUAGES.JP)}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.textContainer}>
                        <div className={styles.textCaptionStyle}>
                            学術論文
                        </div>
                        <HighlightNamesWithNumbering
                            achievements={[
                                `José Reinaldo Cunha Santos A. V. Silva Neto, Hodaka Kawachi, Yasushi Yagi, and Tomoya Nakamura*, "Toward all-in-focus lensless imaging with full-aperture radial masks," Optics Express, Vol. 33, No. 23, pp. 48112-48129 (2025).`,
                                `José Reinaldo Cunha Santos A. V. Silva Neto, Hodaka Kawachi, Yasushi Yagi, and Tomoya Nakamura*, "Self-supervised neural reconstructions for lensless imaging," Optical Review, Vol. 32, No. 4, pp. 664-668 (2025).`,
                                'Hodaka Kawachi, Tomoya Nakamura,　Kazuya Iwata, Yasushi Makihara, and Yasushi Yagi, “Snapshot super-resolution indirect time-of-flight camera using a grating-based subpixel encoder and depth-regularizing compressive reconstruction," Optics Continuum, Vol. 2, No. 6, pp. 1368-1383 (2023). '
                            ]}/>
                        <div className={styles.textCaptionStyle}>
                            プレプリント
                        </div>
                        <HighlightNamesWithNumbering
                            achievements={[
                                `Hodaka Kawachi, Tomoya Nakamura, Hiroaki Santo, SaiKiran K. Tedla, Trevor D. Canham, Yasushi Yagi, and Michael S. Brown, "Towards Imperceptible Watermarking Via Environment Illumination for Consumer Cameras," arXiv:2510.17114 (2025).`,
                                `Hodaka Kawachi, José Reinaldo Cunha Santos A. V. Silva Neto, Yasushi Yagi, Hajime Nagahara, and Tomoya Nakamura, "Single-Image Depth from Defocus with Coded Aperture and Diffusion Posterior Sampling," arXiv:2509.17427 (2025).`,
                            ]}/>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default JournalsJP;