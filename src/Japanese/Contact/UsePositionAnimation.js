import {useSpring} from "@react-spring/web";
import {DisplayState} from '../../Providers/DisplayState';

export function usePositionAnimation({cr, r, d, angle, color}, cx, cy, sizeRatio, displayState){
    return useSpring({
    to: {
        left: displayState === DisplayState.Contact ? `${cx + sizeRatio * r * Math.cos(angle) - sizeRatio * cr / 2}px` : `${cx + 5 * sizeRatio * r * Math.cos(angle) - sizeRatio * cr / 2}px`,
        top: displayState === DisplayState.Contact ? `${cy - sizeRatio * r * Math.sin(angle) - sizeRatio * cr / 2}px` : `${cy - 5 * sizeRatio * r * Math.sin(angle) - sizeRatio * cr / 2}px`,
        width: `${sizeRatio * cr}px`,
        height: `${sizeRatio * cr}px`,
        opacity: displayState === DisplayState.Contact ? 1 : 0
    },
    config: {
        duration: 1000,
    }})
}


export function useCircleBoundingAnimation({r, d, angle}, sizeRatio) {
    return useSpring({
        to: [{
            transform: `translate(${sizeRatio * d * Math.cos(angle)}px,${-sizeRatio * d * Math.sin(angle)}px)`,
        }, {
            transform: `translate(${-sizeRatio * d * Math.cos(angle)}px,${sizeRatio * d * Math.sin(angle)}px)`,
        },],
        loop: true,
        config: {
            duration: undefined,
            mass: 5,
            tension: 10,
            friction: 0,
            precision: 0.01
        },
        delay: d * r,
    })
}