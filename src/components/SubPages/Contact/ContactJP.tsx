import React from "react";
import {usePage} from "@/provider/PageProvider";
import Atmark from "./Atmark";
import styles from "./ContactJP.module.css";
import {LANGUAGES, PAGE_STATE} from "@/Schema";
import Fade from "@/components/util/Fade";
import {useLanguage} from "@/provider/LanguageProvider";

const ContactJP: React.FC = () => {
    const {pageNum} = usePage();
    const {language} = useLanguage();
    return (
        <Fade show={(pageNum === PAGE_STATE.CONTACT) && (language == LANGUAGES.JP)}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.textCaptionStyle}>住所</div>
                    <div className={styles.textStyle}>
                        大阪府茨木市美穂ヶ丘8-1 大阪大学 産業科学研究所 F-588
                    </div>
                    <div className={styles.textCaptionStyle}>電話番号</div>
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

export default ContactJP;