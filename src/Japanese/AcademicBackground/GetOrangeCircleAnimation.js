import {useSpring} from '@react-spring/web';

const CENTER_CIRCLE = {
    cr: 15,
};

export default function useOrangeCircleAnimation(cx, cy, sizeRatio, displayState, height) {
    return useSpring({
        to: {
            left: displayState === 1 ? `${cx + sizeRatio * CENTER_CIRCLE.cr /
                2}px` : `${cx + sizeRatio * CENTER_CIRCLE.cr / 2-30}px`,
            top: displayState === 1 ? `${cy - sizeRatio * CENTER_CIRCLE.cr /
                2}px` : `${height}px`,
            width: `${sizeRatio * CENTER_CIRCLE.cr}px`,
            height: `${sizeRatio * CENTER_CIRCLE.cr}px`,
            opacity: [1,2].includes(displayState) ? 1 : 0,
        },
        config: {
            duration: 1000,
        },
    });
}