import {useSpring} from '@react-spring/web';

const CENTER_CIRCLE = {
    cr: 15,
};

export default function useSunCircleAnimation(
    cx, cy, sizeRatio, displayState, width, height) {
    return useSpring({
        to: {
            left: displayState === 2 ? `${cx}px` : `${cx-width/20}px`,
            top: displayState === 2 ? `${height-cy}px` : `${5*height/4}px`,
            width: `${sizeRatio * CENTER_CIRCLE.cr}px`,
            height: `${sizeRatio * CENTER_CIRCLE.cr}px`,
            opacity: [1, 2].includes(displayState) ? 1 : 0,
        },
        config: {
            duration: 2000,
        },
    });
}