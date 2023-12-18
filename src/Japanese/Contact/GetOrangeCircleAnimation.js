import {useSpring} from '@react-spring/web';
import {DisplayState} from '../../Providers/DisplayState';

const CENTER_CIRCLE = {
    cr: 15,
};

export default function useOrangeCircleAnimation(cx, cy, sizeRatio, displayState, height) {
    return useSpring({
        to: {
            left: displayState === DisplayState.Contact ? `${cx + sizeRatio * CENTER_CIRCLE.cr /
                2}px` : `${cx + sizeRatio * CENTER_CIRCLE.cr / 2-30}px`,
            top: displayState === DisplayState.Contact ? `${cy - sizeRatio * CENTER_CIRCLE.cr /
                2}px` : `${height}px`,
            width: `${sizeRatio * CENTER_CIRCLE.cr}px`,
            height: `${sizeRatio * CENTER_CIRCLE.cr}px`,
            opacity: displayState === DisplayState.Contact ? 1 : 0,
        },
        config: {
            duration: 500,
        },
    });
}