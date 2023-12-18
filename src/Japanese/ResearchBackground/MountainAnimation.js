import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {animated, useSpring} from '@react-spring/web';
import {useWindowDimensions} from '../../Providers/WindowSizeProvider';
import Mountain from '../../Logos/Mountain';
import useSunCircleAnimation from './GetSunCircleAnimation';
import {DisplayState} from '../../Providers/DisplayState';

// const CENTER_CIRCLE = {
//     cr: 15,
//     color: '#ff7000',
// };

export default function MountainAnimation() {
    const {width, height} = useWindowDimensions();
    const {displayState} = useScrollDisplay();
    const mSizeRatio = width > 1.5 * height ? 1 : 0.5;
    const mx = width / 10;
    const my = width < 1.5 * height ? height / 8 : 0;
    const cSizeRatio = width > 1.5 * height ? 2 : 1;
    const cx = mx + mSizeRatio * 200 - 10;
    const cy = 143 * mSizeRatio + my;
    const researchList = [DisplayState.Awards,DisplayState.Conferences,DisplayState.Journals]
    const mountain = useSpring({
        to: {
            left: `${mx}px`,
            top: researchList.includes(displayState)
                ? `${height - my - mSizeRatio * 143}px`
                : `${height + my + mSizeRatio * 143}px`,
            width: `${mSizeRatio * 200}px`,
            height: `${mSizeRatio * 143}px`,
            opacity: researchList.includes(displayState) ? 1 : 0,
        },
        config: {
            duration: 1000,
        },
    });
    const ground = useSpring({
        to: {
            left: 0,
            top: researchList.includes(displayState) ? `${height - my}px` : `${height + my}px`,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#aaa',
        },
        config: {
            duration: 1000,
        },
    });
    const centerCircle = useSunCircleAnimation(cx, cy, cSizeRatio, displayState,
        width, height);

    return (
        <div>
            <animated.div style={{
                position: 'absolute',
                zIndex: 1005,
                overflow: 'visible', ...mountain,
            }}>
                <Mountain></Mountain>
            </animated.div>
            <animated.div style={{
                position: 'absolute',
                zIndex: 1005,
                overflow: 'visible', ...ground,
            }}>
                <div></div>
            </animated.div>
            <animated.div style={{
                position: 'absolute', zIndex: 1004,
                overflow: 'visible', ...centerCircle,
            }}>
                <svg viewBox="0 0 100 100" width="100%" height="100%"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" fill="#ff7000" r="45"/>
                </svg>
            </animated.div>
        </div>
    );
}
