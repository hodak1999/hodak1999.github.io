import React from 'react';
import {usePage} from '@/provider/PageProvider';
import {LANGUAGES, PAGE_STATE} from "@/Schema";
import styles from './EducationJP.module.css';
import Fade from "@/components/util/Fade";
import DisableScroll from "@/components/util/DisableScroll";
import {useLanguage} from "@/provider/LanguageProvider";

const EducationJP: React.FC = ()=>{
    const {pageNum} = usePage();
    const {language} = useLanguage();
    return (
        <Fade show={(pageNum === PAGE_STATE.EDUCATION) && (language == LANGUAGES.JP)}>
            <DisableScroll disable={true}/>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.textCaptionStyle}>
                        学歴
                    </div>
                    <div className={styles.textStyle}>
                        2011-4 : 京都府京田辺市立大住中学校 入学<br/>
                        2013-9 : International School Eindhoven (オランダ) 転校<br/>
                        2015-4 : 京都府立嵯峨野高校 入学<br/>
                        2018-3 : 京都府立嵯峨野高校 卒業<br/>
                        2018-4 : 大阪大学基礎工学部情報科学科 入学<br/>
                        2022-3 : 大阪大学基礎工学部情報科学科 卒業<br/>
                        2022-4 : 大阪大学 大学院 情報科学研究科 コンピューターサイエンス専攻
                        博士前期課程 入学
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default EducationJP;