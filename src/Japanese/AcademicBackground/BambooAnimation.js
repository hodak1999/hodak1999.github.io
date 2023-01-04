import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {animated, easings, useSpring} from '@react-spring/web';
import {useWindowDimensions} from '../../Providers/WindowSizeProvider';
import Bamboo from '../../Logos/Bamboo';

export default function BambooAnimation() {
    const {width, height} = useWindowDimensions();
    const {displayState} = useScrollDisplay();
    const SizeRatio = width > 1.5 * height ? 2 : 1;
    const x = width / 10;
    const y = width > 1.5 * height ? height / 5 : height/8;
    const mountain = useSpring({
        to: {
            left: `${x}px`,
            top: displayState === 1
                ? `${height - y - SizeRatio * 143}px`
                : `${height + y + SizeRatio * 143}px`,
            width: `${SizeRatio * 150}px`,
            height: `${SizeRatio * 170}px`,
            opacity: displayState === 1 ? 1 : 0,
        },
        config: {
            duration: 5000,
            easing:easings.easeOutCirc
        },
    });
    const ground = useSpring({
        to: {
            left: 0,
            top: displayState === 1 ? `${height - y}px` : `${height + y}px`,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#aaa',
        },
        config: {
            duration: 1000,
        },
    });

    return (
        <div>
            <animated.div style={{
                position: 'absolute',
                zIndex: 1005,
                overflow: 'visible', ...mountain,
            }}>
                <Bamboo></Bamboo>
            </animated.div>
            <animated.div style={{
                position: 'absolute',
                zIndex: 1005,
                overflow: 'visible', ...ground,
            }}>
                <div></div>
            </animated.div>
        </div>
    );
}
