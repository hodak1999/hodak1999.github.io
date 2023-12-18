import {useSpring} from '@react-spring/web';
import {DisplayState} from '../../Providers/DisplayState';

const CENTER_CIRCLE = {
    cr: 15,
};

export default function useSunCircleAnimation(
    cx, cy, sizeRatio, displayState, width, height) {
    const researchList = [DisplayState.Awards,DisplayState.Conferences,DisplayState.Journals]
    return useSpring({
        to: {
            left: researchList.includes(displayState) ? `${cx}px` : `${cx-width/20}px`,
            top: researchList.includes(displayState) ? `${height-cy}px` : `${5*height/4}px`,
            width: `${sizeRatio * CENTER_CIRCLE.cr}px`,
            height: `${sizeRatio * CENTER_CIRCLE.cr}px`,
            opacity: [...researchList, DisplayState.Contact].includes(displayState) ? 1 : 0,
        },
        config: {
            duration: 2000,
        },
    });
}