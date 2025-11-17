import React from "react";
import { useDrawer } from "@/provider/DrawerProvider";
import DrawerLines from "./DrawerLines";
import styles from "./DrawerButton.module.css";

export default function DrawerButton() {
    const { toggleDrawer } = useDrawer();

    return (
        <div
            className={styles.drawerButton}
            onClick={(e) => toggleDrawer(e)} // 関数として渡す
        >
            <DrawerLines size='clamp(5, 5vw, 35)' />
        </div>
    );
}