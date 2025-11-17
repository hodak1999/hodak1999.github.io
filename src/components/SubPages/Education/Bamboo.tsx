import React, {JSX} from 'react';
import {PAGE_STATE} from "@/Schema";
import { usePage } from '@/provider/PageProvider';
import { animated, easings, useSpring} from '@react-spring/web';
import BambooSVG from "@/components/SubPages/Education/BambooSVG";

export default function BambooAnimation(): JSX.Element {
    const { pageNum } = usePage();

    const bambooAnimation = useSpring({
        to: {
            transform: pageNum === PAGE_STATE.EDUCATION
                ? 'translateY(30vh)' // 上に移動して表示
                : 'translateY(300vh)', // 下に移動して非表示
            opacity: pageNum === PAGE_STATE.EDUCATION ? 1 : 0, // フェード効果
        },
        config: {
            duration: 3000, // アニメーションの長さ
            easing: easings.easeOutCirc, // アニメーションのイージング
        },
    });

    const groundAnimation = useSpring({
        to: {
            transform: pageNum === PAGE_STATE.EDUCATION
                ? 'translateY(80vh)' // 上に移動して表示
                : 'translateY(100vh)', // 下に移動して非表示
        },
        config: {
            duration: 1000,
        },
    });

    const AnimatedDiv = animated('div');

    return (

        <div>
            {/*/!* Mountain Animation *!/*/}
            <AnimatedDiv
                style={{
                    position: 'absolute',
                    zIndex: 1005,
                    overflow: 'hidden',
                    width: '30vw',
                    height: '50vh',
                    left: '10vw',
                    ...bambooAnimation,
                }}
            >
                <BambooSVG />
            </AnimatedDiv>

            <AnimatedDiv
                style={{
                    position: 'absolute',
                    zIndex: 1005,
                    overflow: 'hidden',
                    width: '100vw',
                    height: '100vh',
                    left: '0px',
                    backgroundColor: '#aaa',
                    ...groundAnimation,
                }}
            >
                <div />
            </AnimatedDiv>
        </div>
    );
}