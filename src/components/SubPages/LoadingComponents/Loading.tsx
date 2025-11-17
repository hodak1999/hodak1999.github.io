import React, {useEffect, useState, useCallback} from 'react';
import {animated, useTrail} from '@react-spring/web';
import {useLoading} from "@/provider/LoadingProvider";
import styles from './Loading.module.css';

const text = 'hodak1999';

interface LoadingProps {
    setColor: (color: { backgroundColor: string }) => void;
}

export default function Loading({setColor}: LoadingProps) {
    const {endLoading} = useLoading();
    const [active, setActiveSearch] = useState(false);

    const trail = useTrail(text.length, {
        opacity: active ? 1 : 0,
        y: active ? 0 : -100,
        config: {tension: 210, friction: 20},
        from: {opacity: 0, y: -100},
    });

    // `setColor` を安定化
    const stableSetColor = useCallback(setColor, [setColor]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveSearch(true);
        }, 5);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            endLoading();
            stableSetColor({backgroundColor: '#FBFBF5'});
        }, 2000);
        return () => clearTimeout(timer);
    }, [endLoading, stableSetColor]);

    const AnimatedSpan = animated("span");

    return (
        <div className={styles.container}>
            <div className={styles.letters}>
                {text.split('').map((letter, i) => {
                    const {y, opacity} = trail[i];
                    return (
                        <AnimatedSpan
                            key={i}
                            style={{
                                opacity,
                                transform: y.to(by => `translateY(${by}px)`),
                                fontFamily: 'Times New Roman',
                                fontSize: 'clamp(50px, 20vw, 150px)',
                            }}
                        >
                            {letter}
                        </AnimatedSpan>
                    );
                })}
            </div>
        </div>
    );
}