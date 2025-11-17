import React from "react";
import {usePage} from "@/provider/PageProvider";
import styles from "./SectionTitle.module.css";
import {PAGE_STATE} from "@/Schema";

const SectionTitle: React.FC = () => {
    const {pageNum} = usePage()
    return (
            <div style={{
                zIndex: 1000,
            }}>
                <div className={styles.sectionTitle}>0{pageNum}.</div>
                <div className={styles.sectionTitle}>{PAGE_STATE[pageNum]}</div>
            </div>
    )
}

export default SectionTitle;