import React from 'react';
import {useLanguage} from "@/provider/LanguageProvider";
import styles from './LanguageButton.module.css';
import {LANGUAGES} from "@/Schema";

const LanguageButton: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const onPressJP = () => {
        if (language !== LANGUAGES.JP) {
            setLanguage(LANGUAGES.JP);
        }
    };

    const onPressEn = () => {
        if (language !== LANGUAGES.EN) {
            setLanguage(LANGUAGES.EN);
        }
    };

    return (
        <div className={styles.container}>
            <div
                className={`${styles.languageButton} ${
                    language === LANGUAGES.JP ? styles.active : ""
                }`}
                onClick={onPressJP}
            >
                JP
            </div>
            <div className={styles.border}>|</div>
            <div
                className={`${styles.languageButton} ${
                    language === LANGUAGES.EN ? styles.active : ""
                }`}
                onClick={onPressEn}
            >
                En
            </div>
        </div>
    );
}

export default LanguageButton;