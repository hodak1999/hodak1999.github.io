import React from 'react';
import Image from 'next/image';
import abstractPath from './abstract.png';
import {usePage} from "@/provider/PageProvider";
import Fade from "@/components/util/Fade";
import {LANGUAGES, PAGE_STATE} from "@/Schema";
import styles from "./AboutMeJP.module.css";
import DisableScroll from "@/components/util/DisableScroll";
import {useLanguage} from "@/provider/LanguageProvider";

const AboutMeEN: React.FC = () => {
    const {pageNum} = usePage();
    const {language} = useLanguage();
    return (
        <Fade show={(pageNum === PAGE_STATE.ABOUT_ME) && (language === LANGUAGES.EN)}>
            <DisableScroll disable={true}/>
            <div className={styles.container}>
                <Image src={abstractPath} alt={"Logo"} className={styles.figContainer} layout="intrinsic"/>
                <div className={styles.textContainer}>
                    <div className={styles.textCaption}>
                        Name
                    </div>
                    <div className={styles.text}>
                        Hodaka Kawachi
                    </div>
                    <div className={styles.textCaption}>
                        Affiliation
                    </div>
                    <div className={styles.text}>
                        PhD Student of Graduate School of Information Science and Technology, The University of Osaka<br/>
                        Nakashima lab (Yagi lab), SANKEN, Osaka University, Japan
                    </div>
                    <div className={styles.textCaption}>
                        Research fields
                    </div>
                    <div className={styles.text}>
                        Computer vision<br/>
                        Computational photography
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

export default AboutMeEN;