import React, {useState} from "react";
import {animated, useSprings} from "@react-spring/web";
import {Drawer} from "@mui/material";
import {PAGE_STATE} from "@/Schema";
import {useDrawer} from "@/provider/DrawerProvider";
import {usePage} from "@/provider/PageProvider";
import {adjustClampFontSize,} from "@/provider/FontSizeProvider";
import styles from "./DrawerMenu.module.css";

const DrawerMenu: React.FC = () => {
    const menuItems = Object.keys(PAGE_STATE).filter(key => isNaN(Number(key)));

    const [states, setStates] = useState(menuItems.map(() => false));
    const {isDrawerOpen, setIsDrawerOpen, toggleDrawer} = useDrawer();
    const {skipPage} = usePage();

    const animations = useSprings(
        menuItems.length,
        menuItems.map((_, index) => ({
            to: {
                fontSize: adjustClampFontSize('clamp(15px, 2.5vw, 25px)', 5, states[index]),
                color: states[index] ? "yellow" : "white",
            },
        }))
    );

    const onClickMenu = (params: { index: number }) => (e: React.MouseEvent) => {
        setStates(states.map((flag, i) => (params.index === i ? false : flag)));
        toggleDrawer(e);
        skipPage(params.index);
    };

    const onMouseEnter = (params: { index: number }) => () => {
        console.log("onMouseEnter", params.index, states.map((flag, i) => (params.index === i ? true : flag)));
        setStates(states.map((flag, i) => (params.index === i)));
    };

    const onMouseLeave = (params: { index: number }) => () => {
        console.log("onMouseLeave", params.index,states.map((flag, i) => (params.index === i ? false : flag)));
        setStates(states.map((flag, i) => (params.index === i ? false : flag)));
    };

    const AnimatedDiv = animated("div");

    return (
        <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => {
                setIsDrawerOpen(false)
            }}
            style={{backgroundColor: "rgba(255,255,255,0.3)"}}
        >
            <div className={styles.drawerContainer}>
                {menuItems.map((title, index) => {
                    return <AnimatedDiv
                        className={styles.text}
                        onMouseEnter={onMouseEnter({index: index})}
                        onMouseLeave={onMouseLeave({index: index})}
                        style={animations[index]}
                        key={index}
                        onClick={onClickMenu({index: index})}
                    >{title}</AnimatedDiv>
                })}
            </div>
        </Drawer>
    )
}

export default DrawerMenu;