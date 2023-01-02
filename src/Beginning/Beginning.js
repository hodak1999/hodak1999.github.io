import React from 'react';
import {animated, useTrail} from '@react-spring/web';
import {useEffect, useState} from 'react';
import {useBeginning} from '../Providers/BiginningProvider';
import {FontSizeGenerator} from './FontSizeGenerator';

const text = 'hodak1999';

export default function Beginning({setColor}) {
    const {endBeginning} = useBeginning();
    const [active, setActiveSearch] = useState(false);
    const trail = useTrail(text.length, {
        opacity: active ? 1 : 0,
        y: active ? 0 : -100,
        config:{
            tension: 210,
            friction: 20
        },
        from: {opacity: 0, y: -100},
    });
    useEffect(() => {
        setInterval(() => {
            setActiveSearch(true);
        }, 5);
        return () => {};
    }, []);
    useEffect(() => {
        setInterval(() => {
            endBeginning();
            setColor({backgroundColor: '#FBFBF5'});
        }, 2000);
        return () => {};
    }, []);
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
        }}>
            <div className="letters" style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
            }}>
                {text.split('').map((letter, i) => {
                    const {y, opacity} = trail[i];
                    return (
                        <animated.span
                            key={i}
                            style={{
                                opacity,
                                transform: y.to(by => `translateY(${by}px)`),
                                fontFamily: 'Times New Roman',
                                fontSize: FontSizeGenerator(),
                            }}
                        >
                            {letter}
                        </animated.span>
                    );
                })}
            </div>
        </div>
    );
}