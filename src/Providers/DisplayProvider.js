import React, {createContext, useState, useContext} from "react";
// import {useFadeInOutList} from './useFadeInOut';

const screens = 4

const ScrollDisplayContext = createContext(undefined);
export const useScrollDisplay = () => useContext(ScrollDisplayContext);

export default function DisplayProvider({children}) {
    const [displayState, setDisplayState] = useState(0);
    const [prevDisplayState, setPrevDisplayState] = useState(-1);
    const [prevTime, setPrevTime] = useState(0);
    const [prevY, setPrevY] = useState(-1);

    const scrollAction = (e) => {
        if (Date.now() - prevTime > 500) {
            setPrevTime(Date.now())
            if (20 < e.deltaY) {
                if (displayState < screens-1){
                    setPrevDisplayState(displayState);
                    setDisplayState(displayState+1);
                }else{
                    setPrevDisplayState(displayState);
                }
                // console.log(display)
            } else if (-20 > e.deltaY) {
                if (displayState > 0){
                    setPrevDisplayState(displayState);
                    setDisplayState(displayState-1);
                }else{
                    setPrevDisplayState(displayState);
                }
            }
        }
    };

    const skipPage = ({dist}) => () => {
        setPrevDisplayState(displayState);
        setDisplayState(dist);
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
                // display,
                scrollAction,
                touchStart,
                skipPage,
                touchEnd
            }}>
            {children}
        </ScrollDisplayContext.Provider>
    );
}