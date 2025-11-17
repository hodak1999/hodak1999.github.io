import React from 'react';
import LanguageButton from './Language/LanguageButton';
import DrawerButton from './Drawer/DrawerButton';
import SectionTitle from './Section/SectionTitle';
import styles from './SectionPage.module.css';

const SectionPage : React.FC = () => {
    return (
        <div className={styles.sectionPage}>
            <SectionTitle></SectionTitle>
            <div className={styles.sectionRight}>
                <LanguageButton></LanguageButton>
                <DrawerButton></DrawerButton>
            </div>
        </div>
    );
}

export default SectionPage;