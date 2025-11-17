import React from 'react';
import {usePage} from '@/provider/PageProvider';
import styles from './AwardJP.module.css';
import {LANGUAGES, PAGE_STATE} from "@/Schema";
import Fade from "@/components/util/Fade";
import {useLanguage} from "@/provider/LanguageProvider";

interface AchievementProps {
    achievements: string[];
}

const Achievement: React.FC<AchievementProps> = ({achievements}) => {
    return (
        <div className={styles.textStyle}>
            {achievements.map((achievement, index) => (
                <div key={index}>
                    {index + 1}. {achievement}
                    <br/>
                </div>
            ))}
        </div>
    );
};

const AwardEN: React.FC = () => {
    const {pageNum} = usePage();
    const {language} = useLanguage();

    return (
        <Fade show={(pageNum === PAGE_STATE.AWARDS) && (language === LANGUAGES.EN)}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.textCaptionStyle}>受賞等</div>
                    <Achievement
                        achievements={[
                            'Award of the Graduate School of Information Science and Technology of Osaka University (2023.3)',
                            'The 13th Japan-Korea Workshop on Digital Holography and Information Photonics (DHIP2023) Student Presentation Award (2023.12.20)',
                            'JSPS DC1 (2024~)',
                            'The 28th Meeting on Image Recognition and Understanding(MIRU2025) MIRU Student Award (2025.7)',
                            'The 27th Meeting on Image Recognition and Understanding(MIRU2024) MIRU Student Award (2024.8)',
                            'The 25th Meeting on Image Recognition and Understanding(MIRU2022) MIRU Student Award (2022.7)',
                        ]}
                    />
                </div>
            </div>
        </Fade>
    );
};

export default AwardEN;