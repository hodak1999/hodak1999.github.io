import React from 'react';
import Image from 'next/image';
import abstractPath from './abstract.png';
import {usePage} from "@/provider/PageProvider";
import Fade from "@/components/util/Fade";
import {LANGUAGES, PAGE_STATE} from "@/Schema";
import styles from "./AboutMeJP.module.css";
import DisableScroll from "@/components/util/DisableScroll";
import {useLanguage} from "@/provider/LanguageProvider";

const AboutMeJP: React.FC = () => {
    const {pageNum} = usePage();
    const {language} = useLanguage();

    return (
        <Fade show={(pageNum === PAGE_STATE.ABOUT_ME) && (language === LANGUAGES.JP)}>
            <DisableScroll disable={true}/>
            <div className={styles.container}>
                <Image src={abstractPath} alt={"Logo"} className={styles.figContainer} layout="intrinsic"/>
                <div className={styles.textContainer}>
                    <div className={styles.textCaption}>
                        名前
                    </div>
                    <div className={styles.text}>
                        河内穂高 (かわち ほだか)
                    </div>
                    <div className={styles.textCaption}>
                        所属
                    </div>
                    <div className={styles.text}>
                        大阪大学 大学院 情報科学研究科<br/>
                        コンピュータサイエンス専攻 博士後期課程<br/>
                        産業科学研究所 中島研究室(旧八木研究室)
                    </div>
                    <div className={styles.textCaption}>
                        研究テーマ
                    </div>
                    <div className={styles.text}>
                        コンピュータビジョン<br/>
                        コンピュテーショナルフォトグラフィ
                    </div>
                    <div className={styles.textCaption}>
                        Github
                    </div>
                    <div className={styles.textGithub}>
                        <a href="https://github.com/hodak1999" target="_blank" rel="noopener noreferrer">
                            hodak1999
                        </a>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default AboutMeJP;