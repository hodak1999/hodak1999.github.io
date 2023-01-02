import React from 'react';
import {useWindowDimensions} from '../../Providers/WindowSizeProvider';

export function FontSizeGenerator() {
    const {width} = useWindowDimensions();
    if (width < 900) {
        return '30px';
    } else {
        return '25px';
    }
}

export function FontFocusedSizeGenerator() {
    const {width} = useWindowDimensions();
    if (width < 900) {
        return '35px';
    } else {
        return '30px';
    }
}
