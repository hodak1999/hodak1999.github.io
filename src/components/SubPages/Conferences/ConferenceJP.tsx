import React, {JSX, useRef} from 'react';
import {usePage} from '@/provider/PageProvider';
import styles from './ConferenceJP.module.css';
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


const ConferenceJP: React.FC = () => {
    const {pageNum, nextPage, prevPage} = usePage(); // ★ next/prev を使う
    const {language} = useLanguage();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const touchStartYRef = useRef<number | null>(null);

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
      const el = containerRef.current;
      if (!el) return;

      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      // まだ内部スクロールできるなら、普通にスクロールさせるだけ
      if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) {
        return;
      }

      // これ以上スクロールできない状態でホイール → ページ遷移
      e.preventDefault();

      if (e.deltaY > 0 && atBottom) {
        nextPage();
      } else if (e.deltaY < 0 && atTop) {
        prevPage();
      }
    };

    // ★ ここからタッチ版

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      const touch = e.changedTouches[0];
      touchStartYRef.current = touch.clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
      const el = containerRef.current;
      if (!el || touchStartYRef.current === null) return;

      const touch = e.changedTouches[0];
      const endY = touch.clientY;
      const deltaY = touchStartYRef.current - endY; // 上スワイプ: 正, 下スワイプ: 負
      touchStartYRef.current = null;

      // 誤タッチ防止のしきい値（px）
      if (Math.abs(deltaY) < 30) {
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      // まだ内部スクロールできるなら、ページ遷移させない
      if ((deltaY > 0 && !atBottom) || (deltaY < 0 && !atTop)) {
        return;
      }

      // 端まで来てさらにスワイプしたときだけページ切り替え
      e.preventDefault();

      if (deltaY > 0 && atBottom) {
        // 上にスワイプ（次のページ）
        nextPage();
      } else if (deltaY < 0 && atTop) {
        // 下にスワイプ（前のページ）
        prevPage();
      }
    };

    return (
        <Fade show={(pageNum === PAGE_STATE.CONFERENCES) && (language==LANGUAGES.JP)}>
            <div
                className={styles.viewWindow}
            >
                <div
                    ref={containerRef}
                    className={styles.scrollWindow}
                    onWheel={handleWheel}   // ★ここで制御
                    onTouchStart={handleTouchStart} // ★ここで制御
                    onTouchEnd={handleTouchEnd}     // ★ここで制御
                >
                    <div className={styles.textContainer}>
                        <div className={styles.textCaptionStyle}>国内発表</div>
                        <HighlightNamesWithNumbering
                            achievements={[
                                `河内穂高, Jose Reinaldo Cunha Santos A V Silva Neto, 八木康史, 長原一, 中村友哉, "拡散モデルが実現する非符号化型単一露光 depth from defocus," 画像の認識・理解シンポジウム (MIRU2025), 京都, No. OS2B-01, Jul. 2025. [第28回画像の認識・理解シンポジウム(MIRU2025) MIRU学生奨励賞 (H. Kawachi)]`,
                                `河内穂高, 中村友哉, 八木康史, SaiKiran Kumar Tedla, Trevor Dalton Canham, Michael S. Brown, "符号化環境照明を用いた民生用カメラ撮影に対する情報埋め込みの実現," 画像の認識・理解シンポジウム (MIRU2025), 京都, No. OS1C-03, Jul. 2025. [第28回画像の認識・理解シンポジウム(MIRU2025) MIRU学生奨励賞 (H. Kawachi)]`,
                                `藤原慈, 河内穂高, 八木康史, 中村友哉, "深層学習における出力制約モジュールの提案と画像処理への応用," 画像の認識・理解シンポジウム (MIRU2025), 京都, No. IS2-009, Jul. 2025.`,
                                `Jose Reinaldo Cunha Santos A V Silva Neto, Hodaka Kawachi, Yasushi Yagi, and Tomoya Nakamura, "From Extreme Close-Ups to Distant Scenes: Snapshot Omni-focal Lensless Camera," 画像の認識・理解シンポジウム (MIRU2025), 京都, No. IS2-006, Jul. 2025.`,
                                `河内穂高, 中村友哉, 長原一, 八木康史, “符号化開口と拡散モデルを用いた単一ボケ画像からの深度再構成,” 第27回 画像の認識・理解シンポジウム (MIRU2024), 熊本, No. OS3-A-03, Aug. 2024. [第27回画像の認識・理解シンポジウム(MIRU2024) MIRU学生奨励賞 (H. Kawachi)]`,
                                `河内穂高, 中村友哉, 岩田和也, 槇原靖, 八木康史, “回折格子を用いたスナップショット空間超解像ToFイメージングデバイス,” 第26回 画像の認識・理解シンポジウム (MIRU2023), IS1-1, (浜松, ポスター, 2023.7). 査読無し`,
                                `河内穂高, 中村友哉, 槇原靖, 八木康史, "点像分布関数設計と深度マップ正則化に基づくスナップショット空間超解像ToFセンシング," 第25回画像の認識・理解シンポジウム (MIRU2022), OL4A-1, (姫路, 口頭, 2022.7.27). 評価有り [第25回画像の認識・理解シンポジウム(MIRU2022) MIRU学生奨励賞]`,
                                `河内穂高, 中村友哉, 槇原靖, 八木康史, "点像分布関数設計と深度マップ正則化に基づくスナップショット空間超解像ToFセンシング," コンピュータビジョンとイメージメディア研究会, (名古屋, ポスター, 2022.5.12). 査読無し`,
                            ]}
                        />

                        <div className={styles.textCaptionStyle}>国際会議</div>
                        <HighlightNamesWithNumbering
                            achievements={[
                                `José Reinaldo Cunha Santos A. V. Silva Neto, Hodaka Kawachi, Yasushi Yagi, and Tomoya Nakamura*, "Enforcing Consistency in Lensless Imaging Through Self-Supervision Training," International Display Workshops, LN-C000115, Hiroshima, Japan, Dec. 2025. reviewed`,
                                `Hodaka Kawachi, Tomoya Nakamura, José Reinaldo Cunha Santos A. V. Silva Neto, Yasushi Makihara, and Yasushi Yagi, "Revolutionizing Photography: Demonstration of Lensless Imaging by Replacing the Lenses with a Thin Radial Coded Mask in Consumer-Grade Cameras," 2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP2024) [Show & Tell Demos], DEMO-2A.1, (Seoul, demo, 2024.4). not-reviewed`,
                                `Hodaka Kawachi, Tomoya Nakamura, Kazuya Iwata, Yasushi Makihara, and Yasushi Yagi, “Depth Regularization and Diffraction Grating-Based Super-Resolution in Indirect Time-of-Flight Imaging,” The 13th Japan-Korea Workshop on Digital Holography and Information Photonics. (DHIP2023), (Beppu, poster, 2022.12.12). not-reviewed`,
                                `Hodaka Kawachi, Tomoya Nakamura, Kazuya Iwata, Yasushi Makihara, and Yasushi Yagi, “Snapshot super-resolution depth measurement using depth regularization and a diffraction grating,” OSK-OPTICA-OSJ Joint Symposia on Optics 2023, (Jeju, Korea, oral, 2023.8.30). not-reviewed`,
                                `Hodaka Kawachi, Tomoya Nakamura, Yasushi Makihara, and Yasushi Yagi, “Snapshot super-resolution time-of-flight imaging by PSF engineering and untrained deep neural-network prior,” 5th International Workshop on Image Sensors and Imaging Systems (IWISS2022), 5, (Hamamatsu, poster, 2022.12.12). not-reviewed`,
                            ]}
                        />
                    </div>
                </div>

            </div>

        </Fade>
    );
};

export default ConferenceJP;