import React from 'react';
import {useWindowDimensions} from '../../Providers/WindowSizeProvider';

export function ButtonSizeGenerator() {
    const {width} = useWindowDimensions();
    if (width < 900) {
        return '15';
    } else {
        return '25';
    }
}

