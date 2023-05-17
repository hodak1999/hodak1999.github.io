import {useWindowDimensions} from '../Providers/WindowSizeProvider';

export function FontSizeGenerator() {
    const {width} = useWindowDimensions();
    if (width < 500) {
        return '10px';
    } else if (width < 900) {
        return '13px';
    } else {
        return '15px';
    }
}

export function FontCaptionSizeGenerator() {
    const {width} = useWindowDimensions();
    if (width < 500) {
        return '15px';
    } else if (width < 900) {
        return '20px';
    } else {
        return '22px';
    }
}