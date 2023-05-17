import React from 'react';
import {useScrollDisplay} from '../../Providers/DisplayProvider';
import {animated} from '@react-spring/web';
import {useWindowDimensions} from '../../Providers/WindowSizeProvider';
import {
    useCircleBoundingAnimation,
    usePositionAnimation,
} from './UsePositionAnimation';
import useOrangeCircleAnimation from './GetOrangeCircleAnimation';

const CIRCLES = [
    {
        cr: 15,
        r: 100,
        d: 4,
        angle: Math.PI * 20 / 180,
        color: '#19416c',
    },
    {
        cr: 100,
        r: 200,
        d: 6,
        angle: Math.PI * 70 / 180,
        color: '#ffaa00',
    },
    {
        cr: 15,
        r: 150,
        d: 2,
        angle: Math.PI * 100 / 180,
        color: '#19416c',
    },
    {
        cr: 110,
        r: 200,
        d: 4,
        angle: Math.PI * 135 / 180,
        color: '#19416c',
    },
    {
        cr: 50,
        r: 70,
        d: 7,
        angle: Math.PI * 170 / 180,
        color: '#ffaa00',
    },
    {
        cr: 90,
        r: 200,
        d: 2,
        angle: Math.PI * 180 / 180,
        color: '#ffaa00',
    },
    {
        cr: 25,
        r: 280,
        d: 9,
        angle: Math.PI * 210 / 180,
        color: '#19416c',
    },
    {
        cr: 25,
        r: 120,
        d: 5,
        angle: Math.PI * 240 / 180,
        color: '#ffaa00',
    },
    {
        cr: 70,
        r: 180,
        d: 7,
        angle: Math.PI * 275 / 180,
        color: '#386680',
    },
    {
        cr: 70,
        r: 225,
        d: 3,
        angle: Math.PI * 315 / 180,
        color: '#ffaa00',
    },
    {
        cr: 20,
        r: 230,
        d: 3,
        angle: Math.PI * 350 / 180,
        color: '#ffaa00',
    },
];

export default function ConnectionCircles() {
    const {width, height} = useWindowDimensions();
    const {displayState} = useScrollDisplay();
    const sizeRatio = width > 1.5 * height ? 1 : 0.5;
    const cx = width / 3 - 20;
    const cy = height / 2 + 90;
    const useCirclesAnimation = (d) => {
        return {
            positionAnimation: usePositionAnimation(d, cx, cy, sizeRatio,
                displayState),
            boundingAnimation: useCircleBoundingAnimation(d, sizeRatio),
            color: d.color,
        };
    };
    const animations = CIRCLES.map(useCirclesAnimation);
    const centerCircle = useOrangeCircleAnimation(cx, cy, sizeRatio,
        displayState, height);

    return (
        <div>
            {animations.map(
                ({positionAnimation, boundingAnimation, color}, index) =>
                    <animated.div
                        style={{
                            position: 'absolute',
                            overflow: 'visible', ...positionAnimation, ...boundingAnimation,
                        }}
                        key={index}>
                        <svg viewBox="0 0 100 100" width="100%" height="100%"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" fill={color} r="45"/>
                        </svg>
                    </animated.div>)
            }
            <animated.div style={{
                position: 'absolute',
                overflow: 'visible', ...centerCircle,
            }}>
                <svg viewBox="0 0 100 100" width="100%" height="100%"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" fill='#ff7000' r="45"/>
                </svg>
            </animated.div>
        </div>
    );
}
