import React from 'react';
import {usePage} from '@/provider/PageProvider';
import {LANGUAGES, PAGE_STATE} from "@/Schema";
import styles from './EducationJP.module.css';
import Fade from "@/components/util/Fade";
import DisableScroll from "@/components/util/DisableScroll";
import {useLanguage} from "@/provider/LanguageProvider";

const EducationEN: React.FC = ()=>{
    const {pageNum} = usePage();
    const {language} = useLanguage();
    return (
        <Fade show={(pageNum === PAGE_STATE.EDUCATION) && (language == LANGUAGES.EN) }>
            <DisableScroll disable={true}/>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.textCaptionStyle}>
                        Education
                    </div>
                    <div className={styles.textStyle}>
                        2011-4 : Enrollment in Kyotanabe Municipal Osumi Junior High School, Kyoto Prefecture<br/>
                        2013-9 : Transfer to International School Eindhoven (Netherlands)<br/>
                        2015-4 : Enrollment in Sagano High School<br/>
                        2018-3 : Graduation from Kyoto Prefectural Sagano High School<br/>
                        2018-4 : Enrollment in Department of Information and Computer sciences, School of Engineering Science, Osaka University<br/>
                        2022-3 : Graduation from Department of Information and Computer sciences, School of Engineering Science, Osaka University<br/>
                        2022-4 : Enrollment in Graduate School of Information Science and Technology, Osaka University
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default EducationEN;