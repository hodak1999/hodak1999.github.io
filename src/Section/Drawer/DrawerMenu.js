import React, {useState} from "react";
import {animated, useSprings} from '@react-spring/web'
import {Drawer} from '@mui/material';
import {useDrawer} from "../../Providers/DrawerProvider";
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {FontFocusedSizeGenerator, FontSizeGenerator} from './FontSizeGenerator';

const TEXT_STYLE = {
    zIndex: 1000,
    textAlign: "left",
    width: "60%",
    display: "flex",
    fontFamily: ["Times New Roman", "serif"],
    color: "white",
    backgroundColor: "black",
    marginTop: "5vh",
    marginLeft: "5vw",
    cursor: "pointer",
};

export default function DrawerMenu() {
    const {skipPage} = useScrollDisplay();
    const {isDrawerOpen, setIsDrawerOpen, toggleDrawer} = useDrawer();
    const [states, setStates] = useState([...Array(4)].map(()=>false));
    const animations = useSprings(4, [...Array(4)].map((d, index) => ({
            to: {
                fontSize: states[index] ? FontFocusedSizeGenerator() : FontSizeGenerator(),
                color: states[index] ? "yellow" : "white",
            }
    })))
    const onClickMenu = ({index}) => (e) => {
        setStates(states.map((flag,i) => (index === i ? false : flag)))
        toggleDrawer()(e);
        skipPage({dist: index})();
    }
    const onMouseEnter = ({index}) => () => {
        setStates(states.map((flag,i) => (index === i ? true : flag)))
    }
    const onMouseLeave = ({index}) => () => {
        setStates(states.map((flag,i) => (index === i ? false : flag)))
    }
    return (
        <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => {
                setIsDrawerOpen(false)
            }}
            style={{backgroundColor:"rgba(255,255,255,0.3)"}}
        >
            <div style={{
                height: '100%',
                width: "40vw",
                display: "flex",
                backgroundColor: 'black',
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                opacity:1,
            }}>
                {["About", "Education", "Publications", "Contact"].map((title, index) => {
                    return <animated.div onMouseEnter={onMouseEnter({index: index})}
                                         onMouseLeave={onMouseLeave({index: index})}
                                         style={{...TEXT_STYLE, ...animations[index]}}
                                         key={index}
                                         onClick={onClickMenu({index: index})}>{title}</animated.div>
                })}
            </div>
        </Drawer>
    )
}

