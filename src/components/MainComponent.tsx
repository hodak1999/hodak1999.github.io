import React from "react";
import SectionPage from "./Section/SectionPage";
import AboutMeJP from "@/components/SubPages/AboutMe/AboutMeJP";
import {usePage} from "@/provider/PageProvider";
import styles from "./MainComponent.module.css";
import EducationJP from "@/components/SubPages/Education/EducationJP";
import BambooAnimation from "@/components/SubPages/Education/Bamboo";
import DisableScroll from "@/components/util/DisableScroll";
import AwardJP from "@/components/SubPages/Awards/AwardJP";
import DrawerMenu from "@/components/Section/Drawer/DrawerMenu";
import ConferenceJP from "@/components/SubPages/Conferences/ConferenceJP";
import JournalsJP from "@/components/SubPages/Journals/JournalsJP";
import ContactJP from "@/components/SubPages/Contact/ContactJP";

import {PAGE_STATE} from "@/Schema";
import ConnectionCircles from "@/components/SubPages/Contact/CirclesAnimation";
import AboutMeEN from "@/components/SubPages/AboutMe/AboutMeEN";
import EducationEN from "@/components/SubPages/Education/EducationEN";
import AwardEN from "@/components/SubPages/Awards/AwardEN";
import ConferenceEN from "@/components/SubPages/Conferences/ConferenceEN";
import JournalsEN from "@/components/SubPages/Journals/JournalsEN";
import ContactEN from "@/components/SubPages/Contact/ContactEN";

const MainComponent: React.FC = () => {
    const {scrollAction, touchStart, touchEnd, pageNum} = usePage();

    const enableGlobalScroll =
        pageNum !== PAGE_STATE.CONFERENCES; // ★ Conference のときだけ無効

    return (
        <div
            onWheel={enableGlobalScroll ? scrollAction : undefined}
            onTouchStart={enableGlobalScroll ? touchStart : undefined}
            onTouchEnd={enableGlobalScroll ? touchEnd : undefined}
            className={styles.main}
        >
            <DisableScroll disable={true}/>
            <SectionPage/>
            <AboutMeJP/>
            <EducationJP/>
            <AwardJP/>
            <ConferenceJP/>
            <JournalsJP/>
            <ContactJP/>
            <AboutMeEN/>
            <EducationEN/>
            <AwardEN/>
            <ConferenceEN/>
            <JournalsEN/>
            <ContactEN/>
            <ConnectionCircles/>
            <BambooAnimation/>
            <DrawerMenu/>
        </div>
    );
};

export default MainComponent;