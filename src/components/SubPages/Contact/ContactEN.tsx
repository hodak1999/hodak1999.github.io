import React from "react";
import {usePage} from "@/provider/PageProvider";
import Atmark from "./Atmark";
import styles from "./ContactJP.module.css";
import {LANGUAGES, PAGE_STATE} from "@/Schema";
import Fade from "@/components/util/Fade";
import {useLanguage} from "@/provider/LanguageProvider";

const ContactEN: React.FC = () => {
    const {pageNum} = usePage();
    const {language} = useLanguage();
    return (
        <Fade show={(pageNum === PAGE_STATE.CONTACT) && (language == LANGUAGES.EN)}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.textCaptionStyle}>Address</div>
                    <div className={styles.textStyle}>
                        #F-588, Department of Intelligent Media, SANKEN, The University of Osaka, 8-1 Mihogaoka, Ibaraki, Osaka, 567-0047, Japan
                    </div>
                    <div className={styles.textCaptionStyle}>Phone Number</div>
                    <div className={styles.textStyle}>06-6879-8422</div>
                    <div className={styles.textCaptionStyle}>E-mail</div>
                    <div className={styles.email}>
                        <div>kawachi</div>
                        <Atmark size="clamp(15px, 2.5vw, 25px)"/>
                        <div>im.sanken.osaka-u.ac.jp</div>
                    </div>
                </div>
            </div>

        </Fade>
    );
};

export default ContactEN;