import React, {createContext, useState, useContext} from "react";
import {useFadeInOut} from "./useFadeInOut";

const screens = 4

const ScrollDisplayContext = createContext();
export const useScrollDisplay = () => useContext(ScrollDisplayContext);

export default function DisplayProvider({children}) {
    const [displayState, setDisplayState] = useState(0);
    const [prevDisplayState, setPrevDisplayState] = useState(-1);
    const display = [...Array(screens).keys()].map((d) => {
        const {toggleDisplay, boxStyle, handleClose, handleOpen} = useFadeInOut(1, d === 0);
        return {toggleDisplay: toggleDisplay, boxStyle: boxStyle, handleClose: handleClose, handleOpen: handleOpen}
    });
    const [prevTime, setPrevTime] = useState(0);
    const [prevY, setPrevY] = useState(-1);

    const scrollAction = (e) => {
        if (Date.now() - prevTime > 1000) {
            if (20 < e.deltaY) {
                if (displayState < screens-1){
                    display[displayState].toggleDisplay();
                    display[displayState+1].toggleDisplay();
                    setPrevDisplayState(displayState);
                    setDisplayState(displayState+1);
                }else{
                    setPrevDisplayState(displayState);
                }
                setPrevTime(Date.now())
                console.log(display[0].boxStyle)
            } else if (-20 > e.deltaY) {
                if (displayState > 0){
                    display[displayState].toggleDisplay();
                    display[displayState-1].toggleDisplay();
                    setPrevDisplayState(displayState);
                    setDisplayState(displayState-1);
                }else{
                    setPrevDisplayState(displayState);
                }
                setPrevTime(Date.now())
            }
        }
    };

    const skipPage = ({dist}) => () => {
        setPrevDisplayState(displayState);
        setDisplayState(dist);
        display.map((d, index) => {
            index === dist ? d.handleOpen() : d.handleClose();
        });
        setPrevTime(Date.now());
    }

    const touchStart = (e) => {
        const touchObject = e.changedTouches[0];
        const y = touchObject.pageY
        setPrevY(y);
    };

    const touchEnd = (e) => {
        const touchObject = e.changedTouches[0];
        const deltaY = prevY - touchObject.pageY;
        scrollAction({deltaY: deltaY});
    };


    return (
        <ScrollDisplayContext.Provider
            value={{
                // skipPage,
                displayState,
                prevDisplayState,
                display,
                scrollAction,
                touchStart,
                skipPage,
                touchEnd
            }}>
            {children}
        </ScrollDisplayContext.Provider>
    );
}