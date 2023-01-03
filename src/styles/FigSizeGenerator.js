import {useWindowDimensions} from '../Providers/WindowSizeProvider';

export function FigSizeGenerator() {
    const {width} = useWindowDimensions();
    if (width < 500) {
        return '60vw';
    } else if (width < 900) {
        return '50vw';
    } else {
        return '50vw';
    }
}