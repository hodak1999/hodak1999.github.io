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

const AwardJP: React.FC = () => {
    const {pageNum} = usePage();
    const {language} = useLanguage();

    return (
        <Fade show={(pageNum === PAGE_STATE.AWARDS) && (language === LANGUAGES.JP)}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.textCaptionStyle}>受賞等</div>
                    <Achievement
                        achievements={[
                            '日本学術振興会 DC1 採用 (2024~)',
                            '第28回画像の認識・理解シンポジウム(MIRU2025) MIRU学生奨励賞 (2025.7) x 2',
                            'コニカミノルタ光みらい奨励金 (2024.12)',
                            '第27回画像の認識・理解シンポジウム(MIRU2024) MIRU学生奨励賞 (2024.8)',
                            '大阪大学 情報科学研究科賞 (2023.3)',
                            'The 13th Japan-Korea Workshop on Digital Holography and Information Photonics (DHIP2023) Student Presentation Award (2023.12.20)',
                            '第25回画像の認識・理解シンポジウム(MIRU2022) MIRU学生奨励賞 (2022.7)',
                        ]}
                    />
                </div>
            </div>
        </Fade>
    );
};

export default AwardJP;