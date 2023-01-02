import {useWindowDimensions} from '../../Providers/WindowSizeProvider';

export function FigSizeGenerator() {
    const {width} = useWindowDimensions();
    if (width < 900) {
        return '80vw';
    } else {
        return '50vw';
    }
}