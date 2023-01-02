import {useWindowDimensions} from '../../Providers/WindowSizeProvider';

export function FontSizeGenerator() {
    const {width} = useWindowDimensions();
    if (width < 900) {
        return '15px';
    } else {
        return '25px';
    }
}

export function FontCaptionSizeGenerator() {
    const {width} = useWindowDimensions();
    if (width < 900) {
        return '20px';
    } else {
        return '30px';
    }
}